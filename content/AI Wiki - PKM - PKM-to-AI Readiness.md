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
created: 2026-04-07T10:10
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - PKM-to-AI Readiness

PKM-to-AI readiness measures how consumable a knowledge system is for AI agents. The gap between "I use Obsidian" and "my AI gets useful context from my vault" is not a tooling problem. It is a structural, metadata, and discipline problem. Most knowledge bases were built for human browsing, not machine consumption. This article provides a practical assessment framework for closing that gap.

## The Seven Dimensions

Each dimension represents one axis of readiness, scored from "not ready" to "fully AI-ready":

1. **Structure**. Consistent folder hierarchy enables context selection. Flat file dumps force brute-force search.
2. **Metadata**. Tags, properties, dates, and types in frontmatter enable filtering. Without metadata, you cannot selectively load relevant context into a token budget.
3. **Linking**. Wikilinks create a traversable graph. AI can follow connections to gather related context automatically rather than relying on keyword search alone.
4. **Currency**. Stale notes produce stale AI output. A note that was accurate in 2023 may mislead an agent in 2026.
5. **Completeness**. Knowing what is missing matters as much as knowing what is present. Gaps in your vault become blind spots in AI output.
6. **Format**. Clean, consistent Markdown is parseable. PDFs, images, and proprietary formats are opaque to most AI pipelines.
7. **Atomicity**. One idea per note means one loadable unit of context. Monolithic documents force loading irrelevant content, wasting the context budget.

## The Compounding Effect

These dimensions are not independent. A vault that scores well on all seven is exponentially more useful than one that scores well on three. Structure without metadata means AI can find notes but cannot filter them. Linking without atomicity means traversal pulls in bloated documents. Currency without completeness means the vault is accurate but has dangerous blind spots.

## Practical Assessment

For each dimension, ask: "Could an AI agent, with no prior knowledge of my vault, accomplish a task using only my notes?" If the answer involves "well, they'd need to know that I keep X in Y folder" or "the tag system is inconsistent but I know what I mean," that dimension is not AI-ready.

The goal is not perfection. It is reducing the friction between your knowledge and AI's ability to use it. [[AI Wiki - PKM - Context Engineering]] is the skill of loading context effectively; readiness is the precondition that makes loading possible.

## Key Points

- Seven dimensions: structure, metadata, linking, currency, completeness, format, atomicity
- Dimensions compound; weakness in one undermines strength in others
- The litmus test is whether an AI agent can use your vault without human hand-holding
- Readiness is a precondition for effective [[AI Wiki - PKM - Context Engineering]]

## Open Questions

- Can readiness be scored automatically via vault analysis tools?
- Is there a minimum viable readiness threshold, or is it a continuous spectrum?
- How do you prioritize which dimension to improve first?

## References

- Vault: PKM-to-AI Readiness, AI-Ready Second Brain

## Related

- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - Atomic Notes]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - Single Source of Truth]]
- [[AI Wiki - PKM - Context Entropy]]
- [[AI Wiki - PKM - Epistemic Hygiene]]
- [[AI Wiki - PKM - Personal Knowledge Management]]
