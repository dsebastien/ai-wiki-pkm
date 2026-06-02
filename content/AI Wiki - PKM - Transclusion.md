---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: low
maturity: draft
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
created: 2026-04-07T09:56
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Transclusion

Transclusion is the inclusion of content from one document inside another by reference, not by copy. The term was coined by [[Ted Nelson]] as part of his Project Xanadu vision in the 1960s. In Nelson's conception, content exists in exactly one canonical location but can appear in unlimited contexts. When the source changes, every transclusion reflects the update. This is the knowledge management equivalent of the [[Don't Repeat Yourself (DRY) principle]] in software: write once, reference everywhere.

## How Transclusion Works in Practice

[[Obsidian]] implements transclusion through embed syntax. `![[Note Name]]` embeds an entire note. `![[Note Name#Heading]]` embeds a specific section. `![[Note Name^blockid]]` embeds a single block (paragraph, list item, or other content unit). The embedded content renders inline in reading mode, pulling live from the source. [[Roam Research]] and [[Logseq]] support block-level transclusion natively, since their outliner architecture treats every bullet as an independently referenceable block.

## Why Transclusion Matters for PKM

Transclusion solves the duplication problem. Without it, the same definition, procedure, or context paragraph gets copied into multiple notes, creating maintenance nightmares when the information changes. With transclusion, a single canonical note serves as the source of truth, and every note that needs that content simply references it. This keeps vaults DRY and ensures consistency.

Transclusion also enables composition. You can build complex documents from atomic components: a project brief that transcludes the project goal, the team roster, and the timeline from their respective source notes. This turns your vault into a set of reusable building blocks rather than isolated documents.

## The Connection to Atomic Notes

Atomic notes (see [[AI Wiki - PKM - Atomic Notes]]) are the ideal unit for transclusion. A note capturing exactly one idea can be meaningfully embedded in any context where that idea is relevant. Multi-idea notes cannot be cleanly transcluded because you end up pulling in content you do not need. The atomicity principle and transclusion are mutually reinforcing: atomic notes enable precise transclusion, and the possibility of transclusion incentivizes atomic note-taking.

## Tradeoffs

Transclusion has real costs. Transcluded content can be harder to read in plain text editors (you see `![[Note^block]]` instead of the actual content). Heavy transclusion can obscure where content actually lives, making the vault harder to navigate. Transclusion syntax is not portable across tools; moving from Obsidian to another system means resolving every embed into inline content. And in collaborative contexts, transcluded content can be confusing if readers do not understand the mechanism.

## Key Points
- Transclusion embeds content by reference, not by copy; the source remains canonical
- Obsidian supports note-level, heading-level, and block-level transclusion via `![[]]` syntax
- Solves the duplication problem: write once, reference everywhere, update propagates automatically
- Atomic notes are the ideal transclusion unit; multi-idea notes cannot be cleanly embedded
- Tradeoffs include reduced plain-text readability, obscured source locations, and lack of cross-tool portability

## Open Questions
- Will AI-assisted tools make transclusion unnecessary by dynamically assembling context from atomic notes?
- Can transclusion work across vaults or across tools, or is it inherently tool-locked?
- Is there an optimal ratio of transclusion to inline content before a note becomes too fragmented to read?

## References
- Nelson, T. (1981). "Literary Machines"
- Obsidian documentation on embedding files
- [[Transclusion]] (vault note)

## Related
- [[AI Wiki - PKM - Atomic Notes]]
- [[AI Wiki - PKM - Hypertext and the Memex]]
- [[AI Wiki - PKM - Bidirectional Linking]]
- [[AI Wiki - PKM - Plain Text and Interoperability]]
- [[AI Wiki - PKM - LIFT Principle]]
- [[AI Wiki - PKM - Networked Thought]]
