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
created: 2026-04-07T10:12
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Context Provenance

Context provenance is the practice of tracking where each piece of AI context came from, when it was added, by whom, and how trustworthy it is. It answers the question: "Why is this in the context, and should I trust it?"

## The Problem

AI models treat all context as equally trustworthy. They have no built-in mechanism to distinguish between a carefully reviewed CLAUDE.md rule and a scraped web page that happened to land in a RAG result. A hallucinated memory entry and a human-authored identity note look the same to the model. Without provenance metadata, the human cannot distinguish them either after the fact.

## Why Provenance Matters

Provenance enables three critical capabilities:

**Trust.** When AI gives you an answer grounded in your vault, you can trace which notes informed it. You know whether the source was a verified permanent note or an unreviewed capture. Trust is earned by transparency about sources.

**Debugging.** Bad AI output traces back to bad source context. If you can identify which context entry caused a wrong answer, you can fix it. Without provenance, debugging AI behavior is guesswork.

**Audit.** For professional and compliance contexts, knowing what AI used to generate output is not optional. Provenance makes the AI reasoning chain inspectable. This connects directly to [[AI Wiki - PKM - Epistemic Hygiene]] applied at the AI layer.

## Provenance Dimensions

| Dimension | Question | Example |
|---|---|---|
| **Source** | Where did this come from? | Human-authored, RAG retrieval, tool output, AI-generated memory |
| **Author** | Who created or approved it? | User, team lead, automated pipeline |
| **Timestamp** | When was it added/updated? | Created 2026-01-15, last reviewed 2026-03-01 |
| **Trust level** | How reliable is this source? | Verified (human-reviewed) vs unverified (auto-retrieved) |
| **Scope** | Who is this for? | Enterprise, team, personal, task-specific |

## Implementation in PKM

In [[AI Wiki - PKM - Context-as-Code]] systems, provenance comes naturally through version control. Git blame shows who changed what and when. For dynamic context (RAG results, tool outputs, AI memories), provenance requires explicit metadata: the `ai_generated` flag, `sources` field, and `confidence` level in wiki article frontmatter are examples of provenance in practice.

The PKM angle: every note in your vault is a potential context source. Notes with clear provenance (dated, attributed, reviewed) produce more trustworthy AI output than notes without. Your [[AI Wiki - PKM - Single Source of Truth]] practice should extend to tracking not just what is true, but how you know it is true.

## Key Points

- AI treats all context as equally trustworthy; provenance adds the missing trust layer
- Three capabilities: trust, debugging, audit
- Five dimensions: source, author, timestamp, trust level, scope
- Version control provides natural provenance for code-as-context; dynamic context needs explicit metadata

## Open Questions

- Should AI automatically downweight context entries without clear provenance?
- Can provenance tracking be automated without adding prohibitive overhead?
- How do you handle provenance for AI-generated content that was later human-reviewed?

## References

- Vault: Context Provenance, Context-as-Code, Context Hygiene

## Related

- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Epistemic Hygiene]]
- [[AI Wiki - PKM - Single Source of Truth]]
- [[AI Wiki - PKM - Context Entropy]]
- [[AI Wiki - PKM - Context Drift]]
- [[AI Wiki - PKM - AI Agent Systems]]
