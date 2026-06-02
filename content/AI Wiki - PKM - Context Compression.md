---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - vault notes
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T10:14
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Context Compression

Context compression is the art of structuring notes so AI extracts maximum value from minimum tokens. Every token in the context window competes for model attention. Compression reduces volume while preserving utility. Token-efficient notes are AI-efficient notes.

## Compression Techniques for PKM

**Executive summaries at the top.** Start every substantial note with a one-to-three sentence summary. AI reads top-down; the summary provides the signal. If the AI needs depth, it follows links. This is progressive disclosure applied to note structure.

**Structured metadata.** YAML frontmatter (tags, properties, dates) enables filtering before content even enters the context window. A well-tagged vault lets AI load only the notes that matter, which is compression at the selection stage rather than the content stage.

**Consistent naming conventions.** A wikilink title IS a compressed reference. `[[Context Engineering]]` conveys the full concept in two words. Consistent naming means AI can infer meaning from link titles without loading the linked note. Every link is a summary.

**Hierarchical headings as progressive disclosure.** H2 headings act as a table of contents. AI can scan headings to decide which sections are relevant before reading the full content. Well-structured headings compress a 500-word note into a 50-word outline.

**Link-as-summary.** In a connected vault, the links section of a note provides a compressed map of its conceptual neighborhood. `Related: [[Atomic Notes]], [[Context Engineering]], [[Knowledge-Context Pipeline]]` tells AI the conceptual context in three tokens per concept.

## Connection to Progressive Summarization

[[AI Wiki - PKM - Progressive Summarization]] layers 2 through 4 are compression for both future-self and for AI. Layer 1 (the full source) is uncompressed context. Layer 2 (bold passages) highlights signal. Layer 3 (highlighted highlights) distills further. Layer 4 (a remix in your own words) is maximally compressed.

Each layer trades detail for density. For AI, the right layer depends on the task. Exploration tasks benefit from layers 1-2 (more context, more nuance). Execution tasks benefit from layers 3-4 (distilled instructions, clear directives). See [[AI Wiki - PKM - Compression vs Context]] for the fundamental tension this creates.

## Technical Compression

At the model level, context compression includes KV cache optimization, hierarchical memory (summaries in active window, details offloaded), and selective attention mechanisms. But at the knowledge system level, compression is a human discipline. Writing concise, information-dense context entries is a form of compression that benefits from the same skill as good technical writing.

The core tension from [[AI Wiki - PKM - Compression vs Context]] applies: compress too aggressively and you lose nuance; keep too much and you get context bloat. Good compression preserves signal while reducing noise.

## Key Points

- Five techniques: executive summaries, structured metadata, naming conventions, hierarchical headings, link-as-summary
- Progressive summarization layers are compression layers; right layer depends on task type
- Compression operates at both selection stage (metadata filtering) and content stage (note structure)
- Token-efficient notes are AI-efficient notes

## Open Questions

- Can AI automatically determine which compression layer is appropriate for a given task?
- Is there a measurable relationship between note structure and AI output quality?
- Should vaults maintain both compressed and expanded versions of key notes?

## References

- Vault: Context Compression, Natural tension between compression and context

## Related

- [[AI Wiki - PKM - Compression vs Context]]
- [[AI Wiki - PKM - Progressive Summarization]]
- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - Atomic Notes]]
- [[AI Wiki - PKM - Context Entropy]]
- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - Tagging and Metadata]]
