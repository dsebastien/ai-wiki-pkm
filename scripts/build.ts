#!/usr/bin/env bun
// Static site generator. Vault-agnostic.
//
// Discovery model: start from `entryNote`, follow [[wikilinks]] to discover the
// corpus, apply optional frontmatter `filter`, build only what's reachable and
// passes the filter. Maximum determinism — the entry note + filter define the
// site exactly.
import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { basename, dirname, isAbsolute, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import matter from 'gray-matter';
import { Marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import lunr from 'lunr';

// ---------- config ----------

const ROOT = process.cwd();
const CFG_PATH = join(ROOT, 'site.config.json');
if (!existsSync(CFG_PATH)) {
  console.error('missing site.config.json');
  process.exit(1);
}
const CFG = JSON.parse(readFileSync(CFG_PATH, 'utf8'));

const SRC_DIR = join(ROOT, 'src');
const TPL_DIR = join(SRC_DIR, 'templates');
const STYLES_DIR = join(SRC_DIR, 'styles');
const THEMES_DIR = join(STYLES_DIR, 'themes');
const CLIENT_DIR = join(SRC_DIR, 'client');
const OUT = join(ROOT, 'public');
const STATIC_DIR = join(ROOT, 'static');

const BUILT_AT = new Date().toISOString();
const SITE_URL = process.env.SITE_URL || CFG.siteUrl || '';

// Entry note + content dir.
if (!CFG.entryNote) {
  console.error(
    'missing site.config.json -> entryNote (path to the markdown root, relative to repo root or absolute)',
  );
  process.exit(1);
}
const ENTRY_NOTE = isAbsolute(CFG.entryNote)
  ? CFG.entryNote
  : resolve(ROOT, CFG.entryNote);
if (!existsSync(ENTRY_NOTE)) {
  console.error(`entryNote not found: ${ENTRY_NOTE}`);
  process.exit(1);
}
const CONTENT_DIR = CFG.contentDir
  ? isAbsolute(CFG.contentDir)
    ? CFG.contentDir
    : resolve(ROOT, CFG.contentDir)
  : dirname(ENTRY_NOTE);

const FILTER: Record<string, unknown> = CFG.filter || {};
const TITLE_PREFIX: string = CFG.titlePrefix || '';
const THEME = (CFG.theme as string) || 'knowii';
const DEFAULT_MODE = (CFG.defaultMode as string) === 'light' ? 'light' : 'dark';
const THEME_TOGGLE = CFG.themeToggle !== false;

// ---------- helpers ----------

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const escapeHtml = (s: string) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const stripPrefix = (s: string) =>
  TITLE_PREFIX && s.startsWith(TITLE_PREFIX) ? s.slice(TITLE_PREFIX.length) : s;

const readTpl = (name: string) => readFileSync(join(TPL_DIR, name), 'utf8');

const render = (tpl: string, vars: Record<string, unknown>) =>
  tpl.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, k) =>
    vars[k] === undefined ? '' : String(vars[k]),
  );

const readingTime = (text: string) =>
  Math.max(1, Math.round((text.match(/\b\w+\b/g) || []).length / 220));

const passesFilter = (fm: Record<string, unknown>) => {
  for (const [key, expected] of Object.entries(FILTER)) {
    if (fm[key] !== expected) return false;
  }
  return true;
};

// ---------- pre-build: activate theme ----------

const themeFile = join(THEMES_DIR, `${THEME}.css`);
if (!existsSync(themeFile)) {
  console.error(`unknown theme: ${THEME} (themes: ${readdirSync(THEMES_DIR).join(', ')})`);
  process.exit(1);
}
const themeRaw = readFileSync(themeFile, 'utf8');
const fontImports: string[] = [];
const themeStripped = themeRaw.replace(
  /@import\s+url\(\s*['"]([^'"]+)['"]\s*\)\s*;/g,
  (_, url) => {
    fontImports.push(url);
    return '';
  },
);
writeFileSync(join(STYLES_DIR, 'active-theme.css'), themeStripped);
const fontLinksHtml = fontImports
  .map((u) => `<link rel="stylesheet" href="${u}" />`)
  .join('\n  ');
console.log(`theme: ${THEME}${fontImports.length ? ` (${fontImports.length} font url(s))` : ''}`);

// ---------- favicon discovery (before page rendering) ----------

const faviconCandidates: { file: string; mime: string; path: string }[] = [
  { file: 'favicon.svg', mime: 'image/svg+xml', path: join(SRC_DIR, 'assets', 'favicon.svg') },
  { file: 'favicon.png', mime: 'image/png',     path: join(SRC_DIR, 'assets', 'favicon.png') },
  { file: 'favicon.ico', mime: 'image/x-icon',  path: join(SRC_DIR, 'assets', 'favicon.ico') },
];
const faviconLinksHtml = faviconCandidates
  .filter((c) => existsSync(c.path))
  .map((c) => `<link rel="icon" type="${c.mime}" href="/${c.file}" />`)
  .join('\n  ');

// ---------- corpus discovery ----------

console.log(`entry: ${ENTRY_NOTE}`);
console.log(`content dir: ${CONTENT_DIR}`);
console.log(`filter: ${Object.keys(FILTER).length ? JSON.stringify(FILTER) : '(none)'}`);

// Map every markdown file in CONTENT_DIR by basename (without .md) and full name.
type FileRef = { path: string; baseName: string };
const allMd = new Map<string, FileRef>();
const walkContent = (dir: string) => {
  for (const entry of readdirSync(dir)) {
    const fp = join(dir, entry);
    const st = statSync(fp);
    if (st.isDirectory()) {
      walkContent(fp);
    } else if (entry.endsWith('.md')) {
      const baseName = entry.replace(/\.md$/, '');
      const ref = { path: fp, baseName };
      allMd.set(baseName, ref);
      // Also index without the title prefix, so [[Foo]] resolves to "AI Wiki - X - Foo".
      const stripped = stripPrefix(baseName);
      if (stripped !== baseName) allMd.set(stripped, ref);
    }
  }
};
walkContent(CONTENT_DIR);

type Doc = {
  filePath: string;
  baseName: string;
  displayTitle: string;
  slug: string;
  fm: Record<string, any>;
  content: string;
  isSource: boolean;
};

const docs = new Map<string, Doc>(); // by slug
const baseNameToDoc = new Map<string, Doc>(); // by basename + alias

const loadDoc = (ref: FileRef): Doc | null => {
  const raw = readFileSync(ref.path, 'utf8');
  const { data: fm, content } = matter(raw);
  if (!passesFilter(fm)) return null;
  const displayTitle = stripPrefix(ref.baseName);
  const slug = slugify(displayTitle);
  const isSource = fm.wiki_role === 'source_summary' || fm.source === true;
  return {
    filePath: ref.path,
    baseName: ref.baseName,
    displayTitle,
    slug,
    fm,
    content,
    isSource,
  };
};

// Seed the queue with the entry note.
const entryBase = basename(ENTRY_NOTE).replace(/\.md$/, '');
const entryRef = allMd.get(entryBase) || { path: ENTRY_NOTE, baseName: entryBase };
const entryDoc = loadDoc(entryRef);
if (!entryDoc) {
  console.error(
    `entry note does not pass filter: ${ENTRY_NOTE}\n` +
      `Either relax the filter or update the entry note's frontmatter.`,
  );
  process.exit(1);
}

// BFS over wikilinks.
const linkRe = /\[\[([^\]\n]+?)\]\]/g;

// Mask fenced code blocks (```), inline code spans (`...`), and indented code
// blocks so wikilinks inside them are never followed for discovery, counted in
// the graph, or rendered as links. The marked extension below handles the
// inline-rendering side of the same concern via the proper tokenizer.
const stripCodeRegions = (md: string): string =>
  md
    .replace(/^([ \t]*)(```|~~~)[^\n]*\n[\s\S]*?\n\1\2[ \t]*$/gm, '')
    .replace(/(^|[^`])(`+)(?!`)[\s\S]+?\2(?!`)/g, '$1')
    .replace(/^(?: {4}|\t).*$/gm, '');

const queue: Doc[] = [entryDoc];
docs.set(entryDoc.slug, entryDoc);
baseNameToDoc.set(entryDoc.baseName, entryDoc);
baseNameToDoc.set(entryDoc.displayTitle, entryDoc);

while (queue.length) {
  const d = queue.shift()!;
  for (const m of stripCodeRegions(d.content).matchAll(linkRe)) {
    const target = m[1].split('|')[0].trim();
    if (baseNameToDoc.has(target)) continue;
    const ref = allMd.get(target);
    if (!ref) continue; // dangling — will render as missing
    const next = loadDoc(ref);
    if (!next) continue; // filtered out
    if (docs.has(next.slug)) continue; // already included via alias
    docs.set(next.slug, next);
    baseNameToDoc.set(next.baseName, next);
    baseNameToDoc.set(next.displayTitle, next);
    queue.push(next);
  }
}

console.log(`discovered ${docs.size} docs`);

// ---------- markdown transforms ----------

const stripDataview = (md: string) =>
  md
    .replace(/<!--\s*QueryToSerialize:[\s\S]*?-->/g, '')
    .replace(/<!--\s*SerializedQuery:[\s\S]*?-->/g, '')
    .replace(/<!--\s*SerializedQuery END\s*-->/g, '');

const renderWikilink = (body: string, currentSlug: string): string => {
  const [target, alias] = body.split('|').map((s) => s.trim());
  const display = alias || stripPrefix(target);
  const found = baseNameToDoc.get(target);
  if (!found) {
    return `<a class="wikilink wikilink--missing" title="not yet published">${escapeHtml(display)}</a>`;
  }
  if (found.slug === currentSlug) {
    return `<span class="wikilink wikilink--self">${escapeHtml(display)}</span>`;
  }
  return `<a class="wikilink" href="/${found.slug}.html">${escapeHtml(display)}</a>`;
};

// Marked inline extension. Because marked tokenizes code spans (`…`) and
// fenced/indented code blocks before custom inline tokenizers run on their
// contents, wikilinks inside code are left as literal text. This replaces the
// old regex pre-pass that mangled `[[…]]` inside code samples.
const wikilinkExt = (currentSlug: string) => ({
  name: 'wikilink',
  level: 'inline' as const,
  start(src: string) {
    const i = src.indexOf('[[');
    return i < 0 ? undefined : i;
  },
  tokenizer(src: string) {
    const m = /^\[\[([^\]\n]+?)\]\]/.exec(src);
    if (!m) return undefined;
    return { type: 'wikilink', raw: m[0], body: m[1] };
  },
  renderer(token: { body: string }) {
    return renderWikilink(token.body, currentSlug);
  },
});

const stripFirstH1 = (md: string) => md.replace(/^\s*#\s+.+\n+/, '');

const makeMarked = (currentSlug: string) => {
  const m = new Marked({ gfm: true, breaks: false });
  m.use(gfmHeadingId());
  m.use({ extensions: [wikilinkExt(currentSlug) as any] });
  return m;
};

const extractToc = (html: string) => {
  const toc: { level: number; id: string; text: string }[] = [];
  const re = /<h([23])\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g;
  let m;
  while ((m = re.exec(html))) {
    toc.push({
      level: Number(m[1]),
      id: m[2],
      text: m[3].replace(/<[^>]+>/g, '').trim(),
    });
  }
  return toc;
};

// ---------- adjacency ----------

const outgoing = new Map<string, Set<string>>();
for (const d of docs.values()) {
  const targets = new Set<string>();
  for (const m of stripCodeRegions(d.content).matchAll(linkRe)) {
    const target = m[1].split('|')[0].trim();
    const found = baseNameToDoc.get(target);
    if (found && found.slug !== d.slug) targets.add(found.slug);
  }
  outgoing.set(d.slug, targets);
}
const incoming = new Map<string, Set<string>>();
for (const [from, tos] of outgoing) {
  for (const to of tos) {
    if (!incoming.has(to)) incoming.set(to, new Set());
    incoming.get(to)!.add(from);
  }
}

// ---------- CTAs ----------

type Product = {
  title: string;
  kicker?: string;
  blurb?: string;
  href: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
  // Build-time only: used to rank against the current page's topic. Not
  // emitted into the HTML.
  tags?: string[];
  baseScore?: number;
};

const ctaHeroHtml = (() => {
  const c = CFG.ctaHero;
  if (!c) return '';
  const second = c.secondary
    ? `<a class="btn btn--ghost" href="${escapeHtml(c.secondary.href)}">${escapeHtml(c.secondary.label)}</a>`
    : '';
  return `<a class="btn btn--primary" href="${escapeHtml(c.href)}">${escapeHtml(c.label)} →</a>${second}`;
})();

/**
 * Resolve the homepage / article CTAs.
 *
 * Priority:
 *   1. CFG.ctaProducts (explicit array)   — manual override
 *   2. CFG.ctaTags + CFG.ctaSource         — fetch a public products catalog
 *      (default: https://store.dsebastien.net/products-light.json) and pick
 *      the top N matching products. Always-fresh, no hardcoded prices.
 *   3. []                                  — no CTA section
 */
type LightProduct = {
  id: string;
  name: string;
  shortDescription: string | null;
  tags: string[];
  mainCategory: string | null;
  priceTier: string | null;
  href: string;
  badge: 'flagship' | 'bestseller' | 'featured' | null;
  featured: boolean;
  bestseller: boolean;
  bestValue: boolean;
  priority: number;
};

const SMALL_WORDS = new Set(['and', 'or', 'of', 'to', 'the', 'a', 'an', 'for', 'in']);
const titleCase = (s: string) =>
  s
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map((w, i) =>
      i > 0 && SMALL_WORDS.has(w.toLowerCase())
        ? w.toLowerCase()
        : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(),
    )
    .join(' ');

const TIER_LABEL: Record<string, string> = {
  free: 'Free',
  subscription: 'Membership',
  premium: 'Premium',
  standard: '',
  budget: '',
  enterprise: 'Enterprise',
};

const baseRank = (p: LightProduct): number =>
  (p.bestValue ? 500 : 0) +
  (p.bestseller ? 250 : 0) +
  (p.featured ? 100 : 0) +
  p.priority;

const toCta = (p: LightProduct): Product => {
  const tier = p.priceTier ? TIER_LABEL[p.priceTier] || '' : '';
  const cat = titleCase(p.mainCategory || '');
  const kicker = [tier, cat].filter(Boolean).join(' · ');
  return {
    title: p.name,
    kicker,
    blurb: p.shortDescription || '',
    href: p.href,
    tags: p.tags,
    baseScore: baseRank(p),
    ...(p.badge ? { badge: titleCase(p.badge) } : {}),
  };
};

const loadCtasFromEndpoint = async (): Promise<Product[]> => {
  const tags: string[] = CFG.ctaTags || [];
  if (!tags.length) return [];
  const url = CFG.ctaSource || 'https://store.dsebastien.net/products-light.json';
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(10_000) });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const payload = (await r.json()) as { products: LightProduct[] };
    const wanted = new Set(tags);
    // Keep the full site-relevant pool — per-page logic picks from it.
    const ranked = payload.products
      .map((p) => ({ p, match: p.tags.filter((t) => wanted.has(t)).length }))
      .filter(({ match }) => match > 0)
      .sort((a, b) => b.p.priority + baseRank(b.p) - (a.p.priority + baseRank(a.p)))
      .map(({ p }) => toCta(p));
    console.log(`CTAs: ${ranked.length} pulled from ${url} (filter: ${tags.join(', ')})`);
    return ranked;
  } catch (e) {
    console.warn(`CTAs: failed to fetch ${url} (${(e as Error).message}); skipping CTA section`);
    return [];
  }
};

const allProducts: Product[] =
  Array.isArray(CFG.ctaProducts) && CFG.ctaProducts.length
    ? CFG.ctaProducts
    : await loadCtasFromEndpoint();

const HOME_MAX: number = CFG.ctaMax || 4;
const products: Product[] = allProducts.slice(0, HOME_MAX);

// ---------- per-page CTA targeting ----------
//
// Wiki note frontmatter tags are mostly meta (`type/ai_wiki`, `zone/meta`)
// and rarely overlap with product tags. The real topical signal lives in
// the slug + title. We tokenize all three, expand with a small alias map,
// and score each product by how many of its tags match the resulting set.
// Products with no per-page hit fall back to the global ranking, so an
// article always shows N cards.

const TAG_ALIASES: Record<string, string[]> = {
  atomic: ['note-taking'],
  'atomic-notes': ['note-taking'],
  evergreen: ['note-taking'],
  'evergreen-notes': ['note-taking'],
  notes: ['note-taking'],
  'note-taking': ['note-taking'],
  zettelkasten: ['zettelkasten'],
  'zettelkasten-method': ['zettelkasten'],
  obsidian: ['obsidian'],
  pkm: ['pkm', 'personal-knowledge-management', 'knowledge-management'],
  'personal-knowledge-management': ['pkm', 'personal-knowledge-management', 'knowledge-management'],
  'knowledge-management': ['knowledge-management', 'pkm'],
  'second-brain': ['second-brain'],
  'building-a-second-brain': ['second-brain'],
  'tools-for-thought': ['pkm', 'second-brain'],
  productivity: ['productivity'],
  journaling: ['journaling'],
  journal: ['journaling'],
  review: ['journaling', 'periodic-reviews'],
  reviews: ['journaling', 'periodic-reviews'],
  'periodic-reviews': ['journaling', 'periodic-reviews'],
  learning: ['learning'],
  learn: ['learning'],
  ai: ['ai'],
  'knowledge-work': ['knowledge-work'],
  'knowledge-worker': ['knowledge-work'],
  organization: ['personal-organization'],
  'personal-organization': ['personal-organization'],
  goals: ['goals', 'smart-goals'],
  'time-management': ['time-management'],
  systems: ['systems'],
  routines: ['routines'],
  values: ['values'],
  clarity: ['clarity'],
  markdown: ['markdown'],
  writing: ['writing', 'content-creation'],
  content: ['content-creation'],
  'content-creation': ['content-creation'],
  entrepreneur: ['entrepreneurship'],
  entrepreneurship: ['entrepreneurship'],
  community: ['community'],
  wellbeing: ['mental-health', 'wellbeing'],
  mental: ['mental-health'],
  templates: ['templates'],
  para: ['para-method'],
  'para-method': ['para-method'],
};

const PHRASES = [
  'atomic notes',
  'evergreen notes',
  'second brain',
  'tools for thought',
  'knowledge management',
  'personal knowledge management',
  'time management',
  'mental health',
  'content creation',
  'note taking',
  'note-taking',
  'periodic reviews',
];

const pageProductTags = (doc: Doc): Set<string> => {
  const tokens = new Set<string>();
  const add = (raw: string) => {
    const t = raw.toLowerCase().replace(/[^a-z0-9-]/g, '');
    if (t) tokens.add(t);
  };
  add(doc.slug);
  doc.slug.split('-').forEach(add);
  doc.displayTitle.split(/\s+/).forEach(add);
  const fmTags: unknown = doc.fm?.tags;
  if (Array.isArray(fmTags)) {
    fmTags.forEach((t) => {
      if (typeof t === 'string') {
        // Frontmatter tags can be nested (`type/ai_wiki`); take each segment.
        t.split('/').forEach(add);
      }
    });
  }
  const titleNorm = doc.displayTitle.toLowerCase();
  PHRASES.forEach((p) => {
    if (titleNorm.includes(p)) tokens.add(p.replace(/\s+/g, '-'));
  });

  const ppt = new Set<string>();
  for (const tok of tokens) {
    const aliases = TAG_ALIASES[tok];
    if (aliases) aliases.forEach((a) => ppt.add(a));
  }
  return ppt;
};

const wantedSet = new Set<string>(CFG.ctaTags || []);

const selectForPage = (doc: Doc, n: number): Product[] => {
  if (!allProducts.length) return [];
  const ppt = pageProductTags(doc);
  const scored = allProducts.map((p) => {
    const tags = p.tags || [];
    const perPage = ppt.size ? tags.filter((t) => ppt.has(t)).length : 0;
    const global = tags.filter((t) => wantedSet.has(t)).length;
    let score: number;
    if (perPage > 0) {
      // A per-page hit dominates: any topical match beats any non-match.
      // Then density (match share of total tags) is the primary tiebreaker
      // — a niche product where 1/2 of its tags match beats a flagship
      // where 1/6 match. baseScore is heavily compressed here so commercial
      // priority can't outvote topical specificity.
      const density = perPage / Math.max(tags.length, 1);
      score =
        perPage * 10_000 +
        Math.round(density * 2000) +
        global * 30 +
        Math.round((p.baseScore || 0) * 0.2);
    } else {
      // No topical hit: fall back to global tag relevance + base ranking.
      score = global * 100 + (p.baseScore || 0);
    }
    return { p, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, n).map(({ p }) => p);
};

// Enrich CTA products with Open Graph metadata (image + description) fetched
// from each product's landing page. Cached on disk so repeat builds are free
// and an offline build still produces cards (just without images).
const OG_CACHE_PATH = join(ROOT, '.cache', 'og.json');
type OgEntry = { image?: string; description?: string; title?: string; fetchedAt: string };
const ogCache: Record<string, OgEntry> = (() => {
  try {
    return JSON.parse(readFileSync(OG_CACHE_PATH, 'utf8'));
  } catch {
    return {};
  }
})();
const OG_TTL_MS = 7 * 24 * 60 * 60 * 1000;

const extractMeta = (html: string, key: string): string | undefined => {
  const re = new RegExp(
    `<meta[^>]+(?:property|name)=["']${key}["'][^>]*content=["']([^"']+)["']`,
    'i',
  );
  const m = html.match(re);
  if (m) return m[1];
  const re2 = new RegExp(
    `<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${key}["']`,
    'i',
  );
  const m2 = html.match(re2);
  return m2?.[1];
};

const fetchOg = async (href: string): Promise<OgEntry | undefined> => {
  const cached = ogCache[href];
  if (cached && Date.now() - new Date(cached.fetchedAt).getTime() < OG_TTL_MS) return cached;
  try {
    const r = await fetch(href, {
      signal: AbortSignal.timeout(8000),
      headers: { 'user-agent': 'Mozilla/5.0 (ai-wiki-template og-fetch)' },
      redirect: 'follow',
    });
    if (!r.ok) return cached;
    const html = await r.text();
    const entry: OgEntry = {
      image: extractMeta(html, 'og:image'),
      description: extractMeta(html, 'og:description') || extractMeta(html, 'description'),
      title: extractMeta(html, 'og:title'),
      fetchedAt: new Date().toISOString(),
    };
    ogCache[href] = entry;
    return entry;
  } catch {
    return cached;
  }
};

if (allProducts.length) {
  // Enrich the whole pool, not just the homepage slice — per-page selection
  // can surface any product, and they all need images.
  const ogs = await Promise.all(allProducts.map((p) => fetchOg(p.href)));
  allProducts.forEach((p, i) => {
    const og = ogs[i];
    if (!og) return;
    if (og.image && !p.image) p.image = og.image;
    if (!p.imageAlt) p.imageAlt = og.title || p.title;
    // OG description is only a fallback — the catalog shortDescription is
    // already a punchy hand-written line we'd rather keep.
    if (!p.blurb && og.description) {
      p.blurb = og.description.length > 140 ? og.description.slice(0, 137).trimEnd() + '…' : og.description;
    }
  });
  try {
    mkdirSync(join(ROOT, '.cache'), { recursive: true });
    writeFileSync(OG_CACHE_PATH, JSON.stringify(ogCache, null, 2));
  } catch {
    // Best-effort cache write; ignore failures.
  }
}

const renderCtaCard = (
  p: Product,
  opts: { compact?: boolean; position: 'end' | 'mid' | 'home'; slot?: number } = {
    position: 'home',
  },
): string => {
  const cls = ['cta-card'];
  if (opts.compact) cls.push('cta-card--compact');
  if (p.image) cls.push('cta-card--media');
  const slotAttr = opts.slot != null ? ` data-cta-slot="${opts.slot}"` : '';
  const media = p.image
    ? `<div class="cta-card__media"><img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.imageAlt || p.title)}" loading="lazy" decoding="async" /></div>`
    : '';
  return `<a class="${cls.join(' ')}" href="${escapeHtml(p.href)}" rel="noopener" data-cta-position="${opts.position}"${slotAttr}>
        ${media}
        <div class="cta-card__body">
          ${p.badge ? `<span class="cta-card__badge">${escapeHtml(p.badge)}</span>` : ''}
          <span class="cta-card__kicker">${escapeHtml(p.kicker || '')}</span>
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.blurb || '')}</p>
          <span class="cta-card__more">Learn more →</span>
        </div>
      </a>`;
};

const ctaProductsHtml = products.length
  ? `
<section class="container-wiki section section--cta">
  <header class="section__header">
    <h2>Go deeper</h2>
    <p class="muted">Products and resources for the people behind this wiki.</p>
  </header>
  <div class="cta-cards">
    ${products.map((p) => renderCtaCard(p, { position: 'home' })).join('')}
  </div>
</section>`
  : '';

const renderEndStripHtml = (forPage: Product[]): string =>
  forPage.length
    ? `
<aside class="article-cta">
  <h2>Enjoying the wiki?</h2>
  <div class="article-cta__grid">
    ${forPage.map((p) => renderCtaCard(p, { compact: true, position: 'end' })).join('')}
  </div>
</aside>`
    : '';

const renderMidArticleHtml = (forPage: Product[]): string =>
  forPage.length
    ? `<div class="mid-article-ctas" hidden>${forPage
        .map(
          (p, i) => `
  <aside class="mid-article-cta" data-cta-slot="${i}" hidden>
    ${renderCtaCard(p, { compact: true, position: 'mid', slot: i })}
  </aside>`,
        )
        .join('')}</div>`
    : '';

// ---------- shell ----------

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
mkdirSync(join(OUT, 'css'), { recursive: true });
mkdirSync(join(OUT, 'js'), { recursive: true });

const baseTpl = readTpl('base.html');
const articleTpl = readTpl('article.html');
const indexTpl = readTpl('index.html');
const browseTpl = readTpl('browse.html');
const graphTpl = readTpl('graph.html');

const modeToggleHtml = THEME_TOGGLE
  ? `<button id="mode-toggle" class="icon-btn" aria-label="Toggle light/dark">
       <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
       <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>
     </button>`
  : '';

const ANALYTICS = CFG.analytics as
  | { domain?: string; scriptSrc?: string; apiUrl?: string }
  | undefined;

const analyticsHtml =
  ANALYTICS && ANALYTICS.domain && ANALYTICS.scriptSrc
    ? `<script defer data-domain="${escapeHtml(ANALYTICS.domain)}"${
        ANALYTICS.apiUrl ? ` data-api="${escapeHtml(ANALYTICS.apiUrl)}"` : ''
      } src="${escapeHtml(ANALYTICS.scriptSrc)}"></script>`
    : '';

const footerAuthor = CFG.author
  ? `<p>Curated by <a href="${escapeHtml(CFG.authorUrl || '#')}">${escapeHtml(CFG.author)}</a>.</p>
     <p class="muted">© ${new Date().getFullYear()} ${
       CFG.brandName ? `· <a href="${escapeHtml(CFG.brandUrl || '#')}">${escapeHtml(CFG.brandName)}</a>` : ''
     }</p>`
  : `<p class="muted">© ${new Date().getFullYear()}</p>`;

const renderShell = (opts: {
  title: string;
  description: string;
  canonical: string;
  body: string;
  body_class: string;
}) =>
  render(baseTpl, {
    title: opts.title,
    description: opts.description,
    canonical: opts.canonical,
    body: opts.body,
    body_class: opts.body_class,
    site_title: CFG.siteTitle,
    default_mode: DEFAULT_MODE,
    mode_toggle_html: modeToggleHtml,
    footer_author_html: footerAuthor,
    font_links_html: fontLinksHtml,
    favicon_links_html: faviconLinksHtml,
    analytics_html: analyticsHtml,
    built_at: BUILT_AT,
  });

// ---------- articles ----------

const searchEntries: { id: string; title: string; body: string; kind: string }[] = [];

const renderArticle = (d: Doc) => {
  const md = stripFirstH1(stripDataview(d.content));
  const html = makeMarked(d.slug).parse(md) as string;
  const toc = extractToc(html);

  const backlinks = [...(incoming.get(d.slug) || [])]
    .map((s) => docs.get(s))
    .filter(Boolean)
    .sort((a, b) => a!.displayTitle.localeCompare(b!.displayTitle));

  const tocHtml = toc.length
    ? `<nav class="toc" aria-label="On this page"><div class="toc__label">On this page</div><ul>${toc
        .map(
          (t) =>
            `<li class="toc__l${t.level}"><a href="#${t.id}">${escapeHtml(t.text)}</a></li>`,
        )
        .join('')}</ul></nav>`
    : '';

  const backlinksHtml = backlinks.length
    ? `<aside class="backlinks"><h2>Referenced by</h2><ul>${backlinks
        .map(
          (b) =>
            `<li><a href="/${b!.slug}.html">${escapeHtml(b!.displayTitle)}</a></li>`,
        )
        .join('')}</ul></aside>`
    : '';

  const meta = `<span class="meta__rt">${readingTime(d.content)} min read</span>`;

  // Per-page CTAs: rank products against this article's topic. Up to 3 are
  // used; mid-article takes all 3, the end strip takes the top 2.
  const pageProducts = selectForPage(d, 3);

  const body = render(articleTpl, {
    title: escapeHtml(d.displayTitle),
    meta_html: meta,
    toc_html: tocHtml,
    content_html: html,
    backlinks_html: backlinksHtml,
    article_cta_html: renderEndStripHtml(pageProducts.slice(0, 2)),
    mid_article_ctas_html: renderMidArticleHtml(pageProducts),
  });

  const description =
    d.content
      .replace(/[#*`\[\]]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 180) + '…';

  writeFileSync(
    join(OUT, `${d.slug}.html`),
    renderShell({
      title: `${escapeHtml(d.displayTitle)} — ${CFG.siteTitle}`,
      description: escapeHtml(description),
      canonical: `${SITE_URL}/${d.slug}.html`,
      body,
      body_class: 'page page--article',
    }),
  );

  const plain = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*`>]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  searchEntries.push({
    id: d.slug,
    title: d.displayTitle,
    body: plain.slice(0, 4000),
    kind: d.isSource ? 'source' : 'article',
  });
};

// Render all docs EXCEPT the entry note (it becomes the homepage).
for (const d of docs.values()) {
  if (d.slug === entryDoc.slug) continue;
  renderArticle(d);
}

// ---------- home / browse ----------

const everyDoc = [...docs.values()];
const articles = everyDoc.filter((d) => !d.isSource && d.slug !== entryDoc.slug)
  .sort((a, b) => a.displayTitle.localeCompare(b.displayTitle));
const sources = everyDoc.filter((d) => d.isSource)
  .sort((a, b) => a.displayTitle.localeCompare(b.displayTitle));

const featured = (CFG.featured || [])
  .map((s: string) => docs.get(s))
  .filter(Boolean) as Doc[];

const featuredHtml = featured.length
  ? `
<section class="container-wiki section">
  <header class="section__header">
    <h2>Featured</h2>
    <p class="muted">Good entry points if you're new here.</p>
  </header>
  <div class="cards">
    ${featured
      .map(
        (d) => `
      <a class="card" href="/${d.slug}.html">
        <h3>${escapeHtml(d.displayTitle)}</h3>
        <p>${escapeHtml(
          d.content
            .replace(/^---[\s\S]+?---/, '')
            .replace(/^\s*#\s+.+\n+/, '')
            .replace(/[#*`>\[\]]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 160),
        )}…</p>
      </a>`,
      )
      .join('')}
  </div>
</section>`
  : '';

writeFileSync(
  join(OUT, 'index.html'),
  renderShell({
    title: `${CFG.siteTitle} — ${(CFG.siteTagline || '').split('—')[0].trim()}`,
    description: escapeHtml(CFG.siteTagline || ''),
    canonical: SITE_URL || '/',
    body: render(indexTpl, {
      eyebrow: escapeHtml(CFG.heroEyebrow || 'Living reference'),
      headline: escapeHtml(CFG.heroHeadline || CFG.siteTitle),
      tagline: escapeHtml(CFG.siteTagline || ''),
      article_count: articles.length,
      source_count: sources.length,
      cta_hero_html: ctaHeroHtml,
      featured_html: featuredHtml,
      cta_products_html: ctaProductsHtml,
    }),
    body_class: 'page page--home',
  }),
);

const groups = new Map<string, Doc[]>();
for (const a of articles) {
  const letter = a.displayTitle[0].toUpperCase();
  const key = /[A-Z]/.test(letter) ? letter : '#';
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key)!.push(a);
}
const groupKeys = [...groups.keys()].sort();

const browseHtml = `
<section class="browse">
  <div class="browse__jump">
    ${groupKeys.map((k) => `<a href="#letter-${k}">${k}</a>`).join('')}
    ${sources.length ? `<a href="#sources" class="browse__jump--accent">Sources</a>` : ''}
  </div>
  ${groupKeys
    .map(
      (k) => `
    <section class="browse__group" id="letter-${k}">
      <h2 class="browse__letter">${k}</h2>
      <ul class="browse__list">
        ${groups
          .get(k)!
          .map(
            (a) =>
              `<li><a href="/${a.slug}.html">${escapeHtml(a.displayTitle)}</a></li>`,
          )
          .join('')}
      </ul>
    </section>`,
    )
    .join('')}
  ${
    sources.length
      ? `
  <section class="browse__group" id="sources">
    <h2 class="browse__letter">Sources</h2>
    <ul class="browse__list">
      ${sources
        .map(
          (s) =>
            `<li><a href="/${s.slug}.html">${escapeHtml(s.displayTitle)}</a></li>`,
        )
        .join('')}
    </ul>
  </section>`
      : ''
  }
</section>`;

writeFileSync(
  join(OUT, 'browse.html'),
  renderShell({
    title: `Browse all articles — ${CFG.siteTitle}`,
    description: `Browse all ${articles.length} articles and ${sources.length} source summaries.`,
    canonical: `${SITE_URL}/browse.html`,
    body: render(browseTpl, {
      browse_html: browseHtml,
      article_count: articles.length,
      source_count: sources.length,
    }),
    body_class: 'page page--browse',
  }),
);

// ---------- graph.json + graph page ----------

const visibleSlugs = new Set(everyDoc.filter((d) => d.slug !== entryDoc.slug).map((d) => d.slug));
const slugMeta = new Map(
  everyDoc.map((d) => [
    d.slug,
    { title: d.displayTitle, kind: d.isSource ? 'source' : 'article' },
  ]),
);

const edges: { s: string; t: string }[] = [];
for (const [from, tos] of outgoing) {
  if (!visibleSlugs.has(from)) continue;
  for (const to of tos) {
    if (!visibleSlugs.has(to)) continue;
    edges.push({ s: from, t: to });
  }
}

const degree = new Map<string, number>();
for (const e of edges) {
  degree.set(e.s, (degree.get(e.s) || 0) + 1);
  degree.set(e.t, (degree.get(e.t) || 0) + 1);
}

const nodes = [...visibleSlugs].map((slug) => ({
  id: slug,
  t: slugMeta.get(slug)!.title,
  k: slugMeta.get(slug)!.kind,
  d: degree.get(slug) || 0,
}));

writeFileSync(join(OUT, 'graph.json'), JSON.stringify({ nodes, edges }));

writeFileSync(
  join(OUT, 'graph.html'),
  renderShell({
    title: `Graph — ${CFG.siteTitle}`,
    description: `Interactive knowledge graph of ${nodes.length} concepts and ${edges.length} links.`,
    canonical: `${SITE_URL}/graph.html`,
    body: render(graphTpl, {
      node_count: nodes.length,
      edge_count: edges.length,
    }),
    body_class: 'page page--graph',
  }),
);

// ---------- search index ----------

console.log('building search index...');
const idx = lunr(function () {
  this.ref('id');
  this.field('title', { boost: 10 });
  this.field('body');
  for (const e of searchEntries) this.add(e);
});

const lookup: Record<string, { title: string; kind: string }> = {};
for (const e of searchEntries) lookup[e.id] = { title: e.title, kind: e.kind };

writeFileSync(join(OUT, 'search-index.json'), JSON.stringify({ index: idx, lookup }));

// ---------- client JS + favicon + static ----------

cpSync(CLIENT_DIR, join(OUT, 'js'), { recursive: true });

for (const c of faviconCandidates) {
  if (existsSync(c.path)) copyFileSync(c.path, join(OUT, c.file));
}

if (existsSync(STATIC_DIR)) cpSync(STATIC_DIR, OUT, { recursive: true });

// ---------- compile Tailwind ----------

console.log('compiling tailwind...');
const tw = spawnSync(
  'bunx',
  [
    '@tailwindcss/cli',
    '-i',
    join(STYLES_DIR, 'main.css'),
    '-o',
    join(OUT, 'css', 'style.css'),
    '--minify',
  ],
  { stdio: 'inherit' },
);
if (tw.status !== 0) {
  console.error('tailwind build failed');
  process.exit(tw.status || 1);
}

// ---------- sitemap, robots, cname ----------

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}/</loc></url>
  <url><loc>${SITE_URL}/browse.html</loc></url>
  <url><loc>${SITE_URL}/graph.html</loc></url>
${[...visibleSlugs]
  .map((s) => `  <url><loc>${SITE_URL}/${s}.html</loc></url>`)
  .join('\n')}
</urlset>`;
writeFileSync(join(OUT, 'sitemap.xml'), sitemap);
writeFileSync(
  join(OUT, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);
if (CFG.cname) writeFileSync(join(OUT, 'CNAME'), `${CFG.cname}\n`);

console.log(
  `✓ built ${docs.size} pages · ${nodes.length} nodes · ${edges.length} edges · theme=${THEME} → ${OUT}`,
);
