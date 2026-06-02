---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: high
maturity: draft
graduated_notes:
sources:
  - vault notes (Context Engineering, Prompt Engineering, Intent Engineering, Context Reduces AI Entropy)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T10:07
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Context Engineering

Context engineering is the discipline of designing dynamic systems that provide the right information and tools, in the right format, at the right time, to an LLM. It is the bridge between having knowledge (PKM) and making that knowledge useful to AI.

## The Formal Model

Context engineering can be expressed as an optimization problem:

**C = A(c_instr, c_know, c_tools, c_mem, c_state, c_query)** subject to |C| ≤ L_max

Where the components are: instructions, knowledge, tools, memory, state, and query — all competing for a finite token budget. The goal is to maximize signal-to-noise ratio within that budget.

This formalization elevates context from craft ("write a good prompt") to engineering discipline ("design a system that loads the right context dynamically").

## Beyond Prompt Engineering

Three disciplines represent increasing sophistication:

| Discipline | Optimizes | Core Question |
|-----------|-----------|---------------|
| **Prompt Engineering** | Responses | "What should I say?" |
| **Context Engineering** | Reasoning continuity | "What information is relevant?" |
| **Intent Engineering** | Business impact | "What must be accomplished?" |

Prompt engineering focuses on crafting a single question (static, stateless). Context engineering focuses on the entire information environment (dynamic, stateful, full interaction lifecycle). A well-engineered prompt inside poorly engineered context still fails.

Intent engineering is the emerging frontier: designing AI systems around goals, constraints, and measurable outcomes rather than instructions.

## Six Principles

1. **Less is more** — Excess context degrades output. Every irrelevant token competes for attention.
2. **Modularity** — Composable context units loaded and unloaded as needed (see [[AI Wiki - PKM - AI Skills in PKM]] for the progressive disclosure pattern)
3. **Freshness** — Stale information is worse than no information
4. **Format matters** — Headers, tables, and examples affect model attention differently
5. **Context hygiene** — Active management throughout conversations, not just at the start
6. **Tool-augmented context** — Let the model pull information on demand rather than front-loading everything

## The Understanding-Generation Asymmetry

Research (Mei et al., 2025) shows LLMs are much better at understanding complex contexts than generating equally complex outputs. The optimal strategy: provide rich, detailed input context; request concise, focused output. This is why a well-structured PKM vault (rich context) produces dramatically better AI output than ad-hoc prompting.

## Design Patterns

**Receptionist** — A routing agent that analyzes intent and delegates to the right specialist with the right context loaded.

**Lazy loading** — Load context on demand rather than upfront. [[AI Wiki - PKM - AI Skills in PKM]] uses this: only name + description at startup (~100 tokens), full instructions when activated.

**Context windowing** — Age out older context as conversations progress.

**Hierarchical context** — Always-present high-level rules + task-specific detail loaded per operation.

**RAG-augmented** — Dynamic document injection based on query relevance. See [[AI Wiki - PKM - RAG for Personal Knowledge]].

## Context Engineering and PKM

PKM and context engineering are two sides of the same coin. PKM builds the knowledge base; context engineering makes it accessible to AI. The [[AI Wiki - PKM - Knowledge-Context Pipeline]] describes the continuous loop between them.

A well-maintained vault with [[AI Wiki - PKM - Atomic Notes]], consistent [[AI Wiki - PKM - Tagging and Metadata]], and rich [[AI Wiki - PKM - Connected Notes]] is not just good PKM — it is good context engineering. The same practices that make knowledge findable for you make it loadable for AI.

## Key Points

- Context engineering optimizes the information environment, not just the prompt
- Formal model: maximize signal-to-noise within a finite token budget
- Six principles: less is more, modularity, freshness, format, hygiene, tool-augmented
- Understanding-generation asymmetry: rich input, concise output
- PKM and context engineering are two sides of the same coin

## Open Questions

- How do you measure context quality objectively?
- Will intent engineering supersede context engineering, or are they complementary layers?
- Can context engineering be fully automated, or does human curation remain essential?

## References

- Vault: Context Engineering, Prompt Engineering, Intent Engineering, Context Reduces AI Entropy
- Mei et al., "Understanding-Generation Asymmetry" (2025)

## Related

- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - Context Entropy]]
- [[AI Wiki - PKM - AI Master Prompt]]
- [[AI Wiki - PKM - AI Skills in PKM]]
- [[AI Wiki - PKM - RAG for Personal Knowledge]]
