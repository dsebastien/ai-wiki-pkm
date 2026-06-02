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
created: 2026-04-07T10:11
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Compression vs Context

The fundamental design tension in AI-era PKM. Compression and context pull in opposite directions, and every knowledge system must navigate the trade-off. This is not a problem to solve once; it is a constraint to manage continuously.

## The Tension

Atomic notes compress knowledge into minimal, scannable units. This is excellent for human retrieval: you find the note, you get the idea, you move on. But AI needs rich context to reason well. A note that says "use dependency injection for testability" is perfectly clear to a developer who understands the concept. An AI agent working on your codebase needs more: why this pattern was chosen, what alternatives were rejected, which parts of the system it applies to.

[[AI Wiki - PKM - Progressive Summarization]] amplifies this tension. Each layer of summarization strips detail. Layer 4 (a remix in your own words) is maximally compressed. But the detail removed at layers 2 and 3 is precisely what AI sometimes needs to reconstruct reasoning.

## Why This Is the Core Constraint

Every choice in AI-era PKM touches this tension. Write longer notes and you waste tokens when AI loads them. Write shorter notes and AI lacks the context to reason about them. Tag aggressively and metadata helps AI filter; tag poorly and AI loads everything. Link richly and AI can traverse the graph; link sparsely and each note is an island.

The context budget is finite. The [[AI Wiki - PKM - Context Entropy]] of your vault determines how much signal AI extracts per token. Compression reduces tokens; context increases signal. The optimization problem is to maximize signal-to-noise ratio within the budget.

## Resolution Strategy

The resolution is not to choose compression or context. It is to write atomic notes (compressed) but maintain rich linking so AI can traverse the graph and reconstruct context on demand. The note itself is compressed. The graph around it provides context.

This means:

- **Atomic notes** as the storage unit. One idea, clearly stated. See [[AI Wiki - PKM - Atomic Notes]].
- **Rich wikilinks** as the context recovery mechanism. AI follows links to gather surrounding context.
- **Structured metadata** as the filtering layer. Tags and properties let AI load the right cluster of notes without loading everything.
- **Executive summaries** at the top of longer notes. AI reads the summary; it follows links only if it needs depth. See [[AI Wiki - PKM - Context Compression]].

The note is the compressed form. The graph is the expanded form. AI navigates between them based on need.

## Key Points

- Atomic notes optimize for human scanning; AI needs richer context to reason
- Progressive summarization removes detail AI may need
- Resolution: compress notes, enrich links; let AI traverse the graph to reconstruct context
- The context budget makes this an optimization problem, not a binary choice

## Open Questions

- Can AI learn to request additional context automatically when a note is too compressed?
- Is there an optimal note length that balances human readability and AI utility?
- Should notes have dual representations: human-facing and AI-facing?

## References

- Vault: Natural tension between compression and context, Context Compression, AI-Ready Second Brain

## Related

- [[AI Wiki - PKM - Context Compression]]
- [[AI Wiki - PKM - Atomic Notes]]
- [[AI Wiki - PKM - Progressive Summarization]]
- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - Context Entropy]]
- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - Compounding Knowledge]]
