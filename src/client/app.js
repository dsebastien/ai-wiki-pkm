// Theme mode toggle + search (Lunr-backed).

(function () {
  const root = document.documentElement;

  // ---- mode ----
  const btn = document.getElementById('mode-toggle');
  btn?.addEventListener('click', () => {
    const next = root.dataset.mode === 'dark' ? 'light' : 'dark';
    root.dataset.mode = next;
    localStorage.setItem('mode', next);
    window.wikiAnalytics?.themeToggled(next);
  });

  // ---- search ----
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const openBtn = document.getElementById('search-open');

  let idx = null;
  let lookup = null;
  let active = 0;

  const loadIndex = async () => {
    if (idx) return;
    const r = await fetch('/search-index.json');
    const data = await r.json();
    idx = lunr.Index.load(data.index);
    lookup = data.lookup;
  };

  const openModal = async () => {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    input.value = '';
    results.innerHTML = '<li class="empty">Start typing to search.</li>';
    setTimeout(() => input.focus(), 30);
    try { await loadIndex(); } catch {
      results.innerHTML = '<li class="empty">Search unavailable.</li>';
    }
  };
  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  openBtn?.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
  modal?.addEventListener('click', (e) => {
    if (e.target.dataset.close !== undefined) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      openModal();
      return;
    }
    if (modal.hidden) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); moveActive(1); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); moveActive(-1); return; }
    if (e.key === 'Enter') {
      const a = results.querySelector('li.active a');
      if (a) {
        trackResultSelection(a);
        window.location.href = a.href;
      }
    }
  });

  const trackResultSelection = (a) => {
    const li = a.closest('li');
    const items = [...results.querySelectorAll('li:not(.empty)')];
    const rank = items.indexOf(li);
    const slug = (a.getAttribute('href') || '').replace(/^\//, '').replace(/\.html$/, '');
    window.wikiAnalytics?.searchSelected(slug, rank >= 0 ? rank : 0);
  };

  results?.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) trackResultSelection(a);
  });

  const moveActive = (delta) => {
    const items = [...results.querySelectorAll('li')];
    if (!items.length) return;
    items[active]?.classList.remove('active');
    active = (active + delta + items.length) % items.length;
    items[active].classList.add('active');
    items[active].scrollIntoView({ block: 'nearest' });
  };

  let timer = null;
  let analyticsTimer = null;
  let lastTrackedQuery = '';
  input?.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(runSearch, 80);
    clearTimeout(analyticsTimer);
    analyticsTimer = setTimeout(() => {
      const q = input.value.trim();
      if (q.length < 3 || q === lastTrackedQuery) return;
      lastTrackedQuery = q;
      const count = results.querySelectorAll('li:not(.empty)').length;
      window.wikiAnalytics?.searchPerformed(q.length, count);
    }, 800);
  });

  const runSearch = () => {
    const q = input.value.trim();
    if (!q) {
      results.innerHTML = '<li class="empty">Start typing to search.</li>';
      return;
    }
    if (!idx) return;
    let hits = [];
    try {
      const tokens = q.split(/\s+/).filter(Boolean);
      const expanded = tokens.map((t) => `${t}^2 ${t}* ${t}~1`).join(' ');
      hits = idx.search(expanded);
    } catch { hits = []; }
    if (!hits.length) {
      results.innerHTML = '<li class="empty">No results.</li>';
      return;
    }
    active = 0;
    results.innerHTML = hits.slice(0, 20).map((h, i) => {
      const m = lookup[h.ref];
      return `<li class="${i === 0 ? 'active' : ''}">
        <a href="/${h.ref}.html">
          <div class="res__title">${escapeHtml(m.title)}</div>
          <div class="res__kind">${m.kind}</div>
        </a>
      </li>`;
    }).join('');
  };

  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c]);
})();

// Mid-article CTAs: relocate hidden card templates between content H2s.
(function () {
  const host = document.querySelector('.article__body .mid-article-ctas');
  if (!host) return;
  const cards = [...host.querySelectorAll('.mid-article-cta')];
  if (!cards.length) return;

  const content = document.querySelector('.article__body');
  if (!content) return;
  const headings = [...content.querySelectorAll(':scope > h2')];
  if (headings.length < 3) { host.remove(); return; }

  const slots = [];
  const first = headings.length >= 5 ? 3 : 2;
  slots.push(first);
  if (headings.length >= 8) {
    const second = Math.min(first + 5, headings.length - 2);
    if (second > first + 2) slots.push(second);
  }
  if (headings.length >= 13) {
    const last = slots[slots.length - 1];
    const third = Math.min(last + 5, headings.length - 2);
    if (third > last + 2) slots.push(third);
  }

  const placed = Math.min(slots.length, cards.length);
  for (let i = 0; i < placed; i++) {
    const card = cards[i];
    card.removeAttribute('hidden');
    headings[slots[i]].parentNode.insertBefore(card, headings[slots[i]]);
  }
  for (let i = placed; i < cards.length; i++) cards[i].remove();
  host.remove();
})();
