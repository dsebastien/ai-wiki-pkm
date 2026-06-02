---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: low
maturity: draft
graduated_notes:
sources:
  - web research
  - Buytaert 2026 — How I Collect and Connect Ideas (Readwise capture)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T09:46
updated: 2026-06-02T12:19:23.599Z
public_note: true
public_ghost_blog_news_ignore: true
---

# AI Wiki - PKM - Plain Text and Interoperability

Plain text is the most durable digital format. A text file written in 1970 is still readable today. The same cannot be said for most proprietary formats. The plain text movement in PKM is built on this observation: if your knowledge matters, store it in a format that will outlast any single tool.

## File Over App

Steph Ango (CEO of Obsidian) articulated the "file over app" philosophy: apps are ephemeral, but files can last. Your notes should be files you own on your filesystem, not entries in a proprietary database accessible only through one application. When the app dies — and eventually it will — your files survive. This philosophy directly shaped [[AI Wiki - PKM - Obsidian]]'s design: a vault is just a folder of Markdown files.

## Markdown as Universal Format

Markdown has become the de facto standard for plain text knowledge. It is human-readable without rendering, supported by hundreds of tools, trivially parseable, and diffs cleanly in version control. YAML frontmatter extends Markdown with structured metadata without breaking the format. The combination of Markdown body + YAML properties gives you both prose and structured data in a single portable file.

## Version Control and Git

Plain text files are version-control friendly. You can track your entire knowledge base in git, getting full history, branching, diffing, and backup for free. This is impossible — or at best painful — with database-backed tools like Notion or Roam. Git-based PKM also enables [[AI Wiki - PKM - Local-First and Data Sovereignty]]: your knowledge lives on your machine, synced on your terms.

## Data Portability

Plain text maximizes portability. Moving from Obsidian to another Markdown editor requires copying a folder. Moving from Notion to anything else requires an export process that loses structure. Moving from Tana requires hoping they've built an export feature. The portability argument becomes stronger as your note collection grows — migrating 10,000 notes from a proprietary format is a project; migrating 10,000 Markdown files is a file copy.

## Tradeoffs

Plain text is not without costs. Rich formatting is limited (no native tables-within-tables, no embedded spreadsheets). Real-time multiplayer collaboration is hard — Google Docs this is not. Media handling requires external files and relative links. And some structured workflows (like [[AI Wiki - PKM - Object-Oriented Note-Taking]] with enforced schemas) are easier in database-backed tools than in flat files with convention-based frontmatter.

## The Connection to Local-First

Plain text and [[AI Wiki - PKM - Local-First and Data Sovereignty]] are natural allies. Both prioritize user ownership and resilience over convenience features. Together they form the philosophical foundation for tools like Obsidian, Logseq, and Zettlr — and for the broader argument that your most valuable digital asset (your accumulated knowledge) should not depend on any company's continued existence.

## Practitioner Validation (Buytaert 2026)

Dries Buytaert's 2026 "How I Collect and Connect Ideas" is a working confirmation of the plain-text thesis. He cites Steph Ango's "files over apps" framing and operationalizes it: plain Markdown on local filesystem, iCloud sync, manual backups, Git history. The durability claim is direct and testable: "Note-taking apps come and go, companies fold, subscription models shift. But plain text files remain accessible. A Markdown file you write today will open just fine in 2050."

The control argument is concrete: "Plain text files give you full control. I sync them with iCloud, back them up myself, and track changes using Git. You can search them with command-line tools, write scripts to process them outside of Obsidian, or edit them in other applications. Your notes stay portable and usable any way you want." This is multi-tool composability that no proprietary substrate permits without an export step.

The piece also surfaces a privacy implication often missed: plain text on disk is the substrate that lets [[AI Wiki - PKM - Selective Encryption]] work cleanly. Encryption is applied per-file because the substrate is per-file. A proprietary database substrate forces encryption to operate at coarser granularity. The plain-text choice is not just about durability; it is about the privacy patterns it enables.

## Key Points

- Plain text files are the most durable digital format — readable decades from now regardless of tooling
- Steph Ango's "file over app" philosophy shaped Obsidian's design and the broader PKM movement
- Markdown + YAML frontmatter provides both prose and structured data in a portable format
- Git version control works naturally with plain text, enabling full history and backup
- Tradeoffs include limited rich formatting, no real-time collaboration, and less enforced structure

## Open Questions

- Will AI tools that need structured data push PKM away from plain text toward richer formats?
- Can plain text PKM scale to multimedia knowledge (audio notes, visual thinking, video annotations)?
- Is Markdown's dominance permanent, or will a successor format emerge?

## References

- Steph Ango, "File over app" (2023), stephango.com
- Cory Doctorow on enshittification and data ownership
- Gwern Branwen's long-content site as a plain text PKM exemplar

## Related
- [[AI Wiki - PKM - File Over App]]

- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
- [[AI Wiki - PKM - Privacy in PKM]]
- [[AI Wiki - PKM - Selective Encryption]]
- [[AI Wiki - PKM - Source - Buytaert 2026 - How I Collect and Connect Ideas]]
- [[AI Wiki - PKM - Obsidian]]
- [[AI Wiki - PKM - Tools for Thought]]
- [[AI Wiki - PKM - Object-Oriented Note-Taking]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - LLM Wiki]]
