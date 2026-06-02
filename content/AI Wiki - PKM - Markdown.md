---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - vault notes
  - web research
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T10:11
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Markdown

Markdown is the lingua franca of modern PKM. A lightweight markup language created by John Gruber and Aaron Swartz in 2004, it has become the default format for storing, writing, and sharing knowledge across tools, platforms, and decades.

## What Markdown Is

Markdown is a plain-text formatting syntax that converts to HTML and other formats. You write `**bold**` instead of clicking a toolbar button. You write `# Heading` instead of selecting from a dropdown. The syntax is designed to be readable even without rendering: a Markdown file looks nearly the same in a text editor as it does in a browser. Files use the `.md` extension. The name is a deliberate pun on "markup."

Markdown was born from the frustration of writing HTML by hand for blog posts. Gruber wanted a format that was as easy to write as email, as structured as HTML, and as readable as plain English. Twenty years later, Markdown is used far beyond blogging: note-taking, documentation, wikis, books, presentations, and software development.

## Why Markdown Matters for PKM

**Human-readable.** You can open a Markdown file in any text editor and understand it immediately. No proprietary viewer required. No binary decoding. Your future self (or your heirs) can read your notes without installing anything.

**Tool-agnostic.** Markdown works in Obsidian, VS Code, Typora, Logseq, Zettlr, iA Writer, Notion (export), and hundreds of other tools. Switching tools means copying files, not running export scripts.

**Future-proof.** Plain text has survived every technology transition since the 1960s. A Markdown file written today will be readable in 50 years. A Notion database might not survive 5.

**Version-controllable.** Markdown diffs cleanly in Git. Every change is visible, trackable, and reversible. You get full history of your intellectual evolution for free.

**AI-native.** LLMs work directly with text. Markdown is natively understood by every major language model. No parsing, no extraction, no conversion. Your vault is already in the format AI operates on.

## Flavors

Markdown was never formally standardized by Gruber. As it gained adoption, incompatible flavors proliferated:

- **CommonMark** (2012) — A formal, unambiguous specification. The closest thing to a Markdown standard.
- **GitHub Flavored Markdown (GFM)** — CommonMark plus tables, task lists, strikethrough, and autolinks. The most widely used flavor.
- **Obsidian Flavored Markdown** — GFM plus wikilinks (`[[Note]]`), callouts, embeds (`![[image.png]]`), and block references. These additions enable PKM workflows but reduce portability to non-Obsidian tools.

The flavor problem is real: proprietary extensions that feel essential in one tool become migration obstacles later. The advice is to rely on CommonMark/GFM for the body of your notes and accept that tool-specific features (wikilinks, callouts) may need conversion when you move.

## The File Over App Connection

Steph Ango (CEO of Obsidian) articulated the "file over app" philosophy: apps are temporary, but files can last forever. Markdown is the format that makes this philosophy concrete. If your notes are Markdown files on your filesystem, the app is a replaceable lens. Your knowledge survives the app's death. This is the philosophical core of [[AI Wiki - PKM - Local-First and Data Sovereignty]] and [[AI Wiki - PKM - Plain Text and Interoperability]].

## Limitations

Markdown is not perfect for every PKM need:

- **No native database.** You cannot query Markdown files without external tools (Dataview, Bases, scripts). Structured data lives awkwardly in YAML frontmatter.
- **Limited formatting.** No columns, no text wrapping around images, no complex layouts. Markdown is for prose, not page design.
- **Learning curve.** Non-technical users find the syntax unfamiliar. WYSIWYG editors like Notion feel more accessible, even if they sacrifice portability.
- **Flavor fragmentation.** Proprietary extensions reduce the portability that is Markdown's core value proposition.

## Markdown and Interoperability

Markdown enables interoperability across the PKM ecosystem. You can move notes between Obsidian and Logseq. You can publish from Markdown to Ghost, Hugo, or Quartz. You can process Markdown with Pandoc into PDF, DOCX, or LaTeX. YAML frontmatter adds structured metadata without breaking the format. The combination of readable prose and machine-parseable properties makes Markdown the ideal format for systems where both humans and AI operate on the same data.

## Key Points

- Markdown is a lightweight markup language (2004) that has become the default PKM format
- Human-readable, tool-agnostic, future-proof, version-controllable, and AI-native
- Flavors (CommonMark, GFM, Obsidian Flavored Markdown) add features but risk portability
- "File over app" depends on Markdown as the durable data layer
- Limitations include no native database, limited formatting, and flavor fragmentation

## Open Questions

- Will a successor format emerge that combines Markdown's simplicity with richer structure?
- How should PKM practitioners handle Obsidian-specific syntax (wikilinks, callouts) for portability?
- Can AI tools bridge the gap between Markdown's limitations and richer formatting needs?

## References

- John Gruber, Markdown informal specification (daringfireball.net/projects/markdown/syntax)
- CommonMark specification (spec.commonmark.org)
- Steph Ango, "File over app" (stephango.com)
- Vault note: Markdown

## Related

- [[AI Wiki - PKM - Plain Text and Interoperability]]
- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
- [[AI Wiki - PKM - Open Data Formats]]
- [[AI Wiki - PKM - Obsidian]]
- [[AI Wiki - PKM - Tools for Thought]]
- [[AI Wiki - PKM - Tagging and Metadata]]
