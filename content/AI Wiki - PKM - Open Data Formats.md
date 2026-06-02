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
created: 2026-04-07T10:12
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Open Data Formats

The choice of data format determines whether your knowledge outlives the tool that created it. Open formats are the insurance policy against vendor death, lock-in, and the slow decay of proprietary ecosystems. In PKM, format choice is not a technical detail; it is a strategic decision about the longevity of your intellectual work.

## What Makes a Format "Open"

A data format qualifies as "open" when it meets three criteria: the specification is publicly documented, there are no licensing restrictions on implementation, and multiple independent tools can read and write it. Markdown meets all three. JSON meets all three. Notion's internal block format meets none.

The distinction matters because open formats create a competitive market of tools, while proprietary formats create monopolies. When your data is in Markdown, you choose the best tool today and can switch tomorrow. When your data is in a proprietary format, you are a hostage.

## Key Open Formats in PKM

**Markdown (.md)** — The dominant format for note content. Human-readable, version-controllable, universally supported. See [[AI Wiki - PKM - Markdown]] for depth.

**YAML** — Used as frontmatter in Markdown files for structured metadata (tags, dates, properties). Machine-parseable and human-readable within the same file.

**JSON** — Configuration, plugin settings, and data export. The lingua franca of web APIs and data interchange.

**JSON Canvas (.canvas)** — Obsidian's open specification for spatial canvas files. Documented publicly so other tools can implement compatible canvas views. A rare example of a tool vendor deliberately open-sourcing a novel format.

**CSV** — Tabular data export and import. Universal spreadsheet compatibility.

**HTML** — The web's native format. Every Markdown file can be converted to HTML, making web publishing a format transformation rather than a platform migration.

## The Interoperability Argument

Open formats let you move between tools without data loss. Today you use Obsidian; tomorrow you might use Logseq, Zettlr, or a tool that does not yet exist. If your notes are Markdown on disk, migration is a folder copy. If your notes are in Notion's proprietary block format, migration is an export process that loses structure, metadata, and relationships.

Interoperability also enables tool composition: use Obsidian for writing, Dataview for querying, Pandoc for conversion, Git for versioning, and Claude Code for AI interaction. All of these operate on the same Markdown files. No adapters, no sync layers, no data translation. The open format is the integration layer.

## The Longevity Argument

Proprietary formats die with the company that created them. Google killed Google Reader. Evernote's decline left millions of users scrambling to export ENEX files. Notion's long-term survival is an act of faith. Plain text has survived every technology transition since the 1960s.

For a PKM system that aims to compound knowledge over decades (see [[AI Wiki - PKM - Compounding Knowledge]]), format longevity is not optional. A format that might not be readable in ten years is fundamentally incompatible with a practice designed to create value over a lifetime.

## The AI Argument

Open text formats are natively readable by large language models. An LLM can process Markdown, YAML, and JSON without any conversion or extraction step. Your vault in Markdown is already in the format AI operates on. Proprietary formats require parsing libraries, API access, or export steps before AI can work with the content. This makes open formats a prerequisite for [[AI Wiki - PKM - Agentic Knowledge Management]] and [[AI Wiki - PKM - Context-as-Code]].

## The Collaboration Argument

Open text formats work with Git. You can diff notes, create branches, submit pull requests, and review changes. Collaborative knowledge work becomes possible with the same tools software teams use for code. Binary or proprietary formats make meaningful diffs impossible.

## Proprietary Lock-In: Examples

- **Notion** — Internal block-based format. Export to Markdown loses database views, relations, and formulas.
- **Roam Research** — JSON export preserves structure but is only useful for reimport to Roam or conversion scripts.
- **Evernote** — ENEX (XML-based) export. Rich formatting and attachments make clean conversion difficult.
- **Apple Notes** — No export API. Copy-paste or third-party scraping only.

## The Tension: Rich Features vs Portable Formats

Open formats trade richness for portability. Notion's database views are powerful precisely because they use a proprietary format. Obsidian's wikilinks and callouts are useful precisely because they extend standard Markdown. Every feature addition that goes beyond the open spec creates a portability cost. The pragmatic response is to use tool-specific features when they genuinely improve your workflow, but to keep the core content in standard Markdown that any tool can read.

## Key Points

- Open formats require public specs, no licensing restrictions, and multiple implementations
- Key PKM open formats: Markdown, YAML, JSON, JSON Canvas, CSV, HTML
- Open formats enable tool switching, composition, longevity, AI access, and Git-based collaboration
- Proprietary lock-in examples: Notion, Roam, Evernote, Apple Notes
- The core tension is between rich features (which require proprietary extensions) and portable formats

## Open Questions

- Will a richer open format emerge that captures more structure than Markdown without sacrificing portability?
- How should PKM practitioners balance the productivity benefits of proprietary features against lock-in risk?
- Can AI-powered conversion tools reduce the effective cost of format migration?

## References

- Steph Ango, "File over app" (stephango.com)
- JSON Canvas specification (jsoncanvas.org)
- CommonMark specification (spec.commonmark.org)
- Vault notes: Markdown, Obsidian

## Related
- [[AI Wiki - PKM - File Over App]]

- [[AI Wiki - PKM - Markdown]]
- [[AI Wiki - PKM - Plain Text and Interoperability]]
- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
- [[AI Wiki - PKM - Obsidian]]
- [[AI Wiki - PKM - Compounding Knowledge]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - Context-as-Code]]
