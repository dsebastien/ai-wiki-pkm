---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: high
maturity: draft
graduated_notes:
sources:
  - vault notes (Context Entropy, Context Reduces AI Entropy, Context Signal-to-Noise Ratio, Context Confusion, Context Distraction, Context Budget, Context Hygiene, Context Lifecycle)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T10:08
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Context Entropy

Context entropy is the system-level tendency of AI context to degrade toward disorder over time. It is the second law of thermodynamics applied to AI context: without active energy investment, context becomes noisy, contradictory, stale, and bloated. This concept mirrors [[AI Wiki - PKM - Knowledge Decay]] at the AI layer.

## How Entropy Accumulates

Five mechanisms drive context toward disorder:

1. **Additive bias** — It is always easier to add context than to remove it. Rules accumulate; exceptions pile up; edge cases overwhelm common cases.
2. **Temporal layering** — Context from different time periods coexists without clear precedence. A rule from six months ago may contradict a newer one, but both remain loaded.
3. **Multi-author drift** — Different people add context with different assumptions, terminology, and priorities.
4. **Tool output accumulation** — Agent conversations grow unboundedly. Tool results, intermediate reasoning, and old queries stay in context long after they are useful.
5. **Scope creep** — Context designed for one purpose gets reused for another, carrying irrelevant baggage.

## Six Failure Modes

Context quality degrades through distinct failure modes, each attacking the signal-to-noise ratio differently:

| Failure Mode | Problem Type | Description |
|-------------|-------------|-------------|
| **Context Bloat** | Volume | Too much context; token budget exhausted on low-value content |
| **Context Distraction** | Relevance | Correct but irrelevant information diverting model attention |
| **Context Confusion** | Consistency | Contradictory or ambiguous information producing confident-wrong outputs |
| **Context Poisoning** | Accuracy | Incorrect information treated as ground truth |
| **Context Rot** | Freshness | Individual entries becoming outdated |
| **Context Entropy** | Structural | System-level disorder from all the above accumulating |

**Context confusion is the most dangerous** because it produces confident-looking outputs that are subtly wrong. The model silently resolves contradictions in unpredictable ways without flagging the conflict.

**Context distraction** is the most common because the model's attention mechanism treats all tokens as potentially relevant. Noise competes with signal even when it is factually correct.

## The Signal-to-Noise Spectrum

Context engineering optimizes signal-to-noise ratio. The spectrum:

- **Zero context** → Maximum entropy. Generic, hallucination-prone output.
- **Minimal context** → Some grounding but still improvising.
- **Right-sized context** → Focused, accurate, aligned with intent.
- **Excess context** → Diminishing returns. Distraction and confusion increase.

"AI context is finite with diminishing returns": past a certain point, more context actively hurts. The optimal amount is the minimum context that produces the desired output quality.

## Fighting Entropy

**Context Budget** — Treat the token window as an allocation problem. Each component (instructions, knowledge, memory, tools, conversation) competes for the same budget. Budget strategies: progressive disclosure, lazy loading, compression, tiered priority (cut conversation history first, then tool results, then knowledge).

**Context Hygiene** — Ongoing pruning, consolidation, timestamping, validation, scoping, and versioning. Not a one-time setup; continuous work like code maintenance.

**Context Lifecycle** — Four phases that most people short-circuit:
1. **Build** — Initial setup (where most people stop)
2. **Maintain** — Keep current as the world changes
3. **Review** — Periodic audit for contradictions, noise, drift
4. **Evolve** — Intentional capability expansion

Most failures happen because people treat context as build-once, skip maintain and review, then do evolve reactively. The result is entropy.

**[[AI Wiki - PKM - Context-as-Code]]** enables lifecycle management by making context changes visible, reviewable, and reversible through version control.

## Context Entropy and PKM

Context entropy is the AI-layer equivalent of [[AI Wiki - PKM - Knowledge Decay]] in PKM. The same forces apply: information goes stale, structure degrades, noise accumulates. The same remedies apply: [[AI Wiki - PKM - Periodic Reviews]], active curation, and pruning.

The insight: maintaining your PKM system IS maintaining your AI context. A clean, well-linked, well-tagged vault produces clean context. A neglected vault produces entropic context. There is no shortcut.

## Key Points

- Context entropy is the natural tendency of AI context to degrade toward disorder
- Five accumulation mechanisms: additive bias, temporal layering, multi-author drift, tool output accumulation, scope creep
- Six failure modes: bloat, distraction, confusion, poisoning, rot, structural entropy
- Context confusion is the most dangerous (confident-wrong outputs); distraction is the most common
- Fighting entropy requires budget discipline, ongoing hygiene, and lifecycle management
- PKM maintenance IS context maintenance; there is no shortcut

## Open Questions

- Can AI agents detect and self-repair context entropy?
- What is the optimal review cadence for context (daily? weekly? per-session?)
- How do you measure entropy quantitatively rather than just feeling "the system is slower"?

## References

- Vault: Context Entropy, Context Reduces AI Entropy, Context Signal-to-Noise Ratio, Context Confusion, Context Distraction, Context Budget, Context Hygiene, Context Lifecycle

## Related

- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Knowledge Decay]]
- [[AI Wiki - PKM - Knowledge Lifecycle]]
- [[AI Wiki - PKM - Periodic Reviews]]
- [[AI Wiki - PKM - AI Master Prompt]]
