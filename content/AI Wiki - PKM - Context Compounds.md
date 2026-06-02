---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - YB, 'Context Compounds,' Engineering Agency Substack (2026-02-16)
  - YB, 'Claude-Obsidian Setup Tips,' X thread (2026-04-13)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T08:02
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Context Compounds

**Context compounds** is the claim — articulated in YB's February 2026 essay — that personal context accumulated in a PKM vault does not just add linearly but becomes progressively more valuable as it grows, because each new entry can be cross-referenced against, and contextualized by, everything already in the corpus. The specific context that matters is biographical, cognitive, and behavioral data about the user — the substrate that AI agents use to think and act on your behalf.

Distinct from the broader [[AI Wiki - PKM - Compounding Knowledge|compounding knowledge]] concept (which applies to knowledge in general), context-compounding specifies: *personal* context, accumulated *over time*, used by *AI agents* to produce aligned output.

## The Claim in Its Strongest Form

As AI models and tooling commoditize, the scarce resource for personal agentic systems is not compute or capability — it is **you-specific context**. An agent armed with rich context about your thinking, preferences, history, and decision patterns outperforms an agent with a better model but poorer context.

And this context *compounds* because:

- A single note about your preferences is useful in isolation
- Ten notes about your preferences let an agent detect patterns and resolve ambiguity
- A hundred notes across multiple domains let an agent reason about how *this* decision connects to how you reasoned about *that* decision three years ago
- At sufficient density, the agent can behave in ways that are genuinely aligned with a model of you that you could not articulate yourself

## Why It Compounds

Three mechanisms, each super-linear in added context:

### 1. Cross-referencing

New context is evaluated against old context. With a small corpus, most interpretation is done from scratch each time. With a large corpus, new input lands in a dense web of prior context and is immediately contextualized. The marginal utility of note N+1 depends on the density of notes 1 through N.

### 2. Pattern detection

Patterns (recurring preferences, blind spots, seasonal rhythms, evolving beliefs) can only be extracted from a sufficient base. Below a threshold of density the agent sees isolated data; above it, the agent sees trajectories.

### 3. Trust and delegation

Alignment enables delegation. An agent you trust to act in your name saves orders of magnitude more time than an agent you must supervise each step. Trust is itself a compounding resource — each correct action adds to it; each misaligned action subtracts. Richer context reduces misalignment and unlocks higher-leverage delegation.

## Practical Implementation

YB's recommendations (and convergent practice across the agentic-vault community):

- **Daily voice capture.** Under 5 minutes. Voice transcription produces more context per unit time than typing, because it lowers the friction for including hedges, side-thoughts, and context. See [[AI Wiki - PKM - Voice-to-Knowledge Pipeline]].
- **Evening reflection.** 10-minute journal entry or AI-guided daily call; captures decisions, open questions, what was learned.
- **Process documentation.** Walk-throughs of complete project workflows, not just outputs.
- **Keep it simple.** Elaborate systems become burdensome and stall the daily habit. The compounding only works if the capture survives.

The guiding principle: **consistency of capture over perfection of capture**. A mediocre daily note compounds; a perfect weekly note does not.

## What Gets Compounded

Useful categories of personal context, roughly in ascending value:

1. **Facts about you** — role, location, relationships, preferences (low-value, most agents can ask)
2. **Patterns in your behavior** — when you work best, how you respond to stress, what you avoid (medium-value, hard to ask)
3. **Reasoning traces** — how you thought through decisions, what you considered, what you rejected (high-value, enables genuine delegation)
4. **Evolving beliefs and open questions** — what you used to think, what you now think, what you're wrestling with (highest-value, lets agents track trajectories)

## Tension: Privacy and Lock-in

Rich personal context is intimate. The compounding benefit comes at the cost of:

- **Privacy surface.** A dense personal-context corpus is an unusually sensitive asset. Access control matters more as the corpus grows.
- **Platform lock-in.** Once an agent is calibrated to a particular corpus, switching costs are real. [[AI Wiki - PKM - Local-First and Data Sovereignty|Local-first and data sovereignty]] practices become more important, not less.
- **Monoculture risk.** Rich context with a single agent provider means your augmented thinking has a single vendor.

## Concepts and Relationships

- Not the same as [[AI Wiki - PKM - Compounding Knowledge|compounding knowledge]] — that applies to knowledge generally; this applies specifically to personal context for agents
- Upstream of [[AI Wiki - PKM - Agentic Constitution|agentic constitution]] quality — constitution writing draws on accumulated context
- Enabled by [[AI Wiki - PKM - Daily Notes|daily notes]], [[AI Wiki - PKM - Voice-to-Knowledge Pipeline|voice pipelines]], [[AI Wiki - PKM - The Capture Habit|the capture habit]]
- Filters up through [[AI Wiki - PKM - Context Layering|context layering]] and [[AI Wiki - PKM - Context Anchoring|context anchoring]]
- Distinct from [[AI Wiki - PKM - Context Compression|context compression]] — compression is about fitting context into token budgets, compounding is about accumulating it in the first place

## Key Points

- Personal context in a vault accumulates super-linearly as it grows
- The mechanism: cross-referencing, pattern detection, trust/delegation thresholds
- Compounds specifically into AI-agent effectiveness, not just human recall
- Best captured via low-friction daily practice (voice, 5 minutes)
- Consistency beats perfection; skipped days break the compounding
- Creates real privacy surface and lock-in risk — worth planning for early

## Open Questions

- At what corpus size do the compounding effects reliably kick in?
- Can agent-produced context (journaling-with-AI) compound as well as human-produced context, or is there a fidelity penalty?
- How do you migrate compounded context across tools without losing the alignment built up with a specific agent?

## References

- YB, "Context Compounds," *Engineering Agency* Substack (February 16, 2026)
- YB, "Claude-Obsidian Setup Tips," X thread (April 2026) — practical application
- Tyler Cowen — cited by YB as explicit context-building practitioner for future AI biographical use

## Related

- [[AI Wiki - PKM - Source - YB 2026 - Context Compounds]]
- [[AI Wiki - PKM - Source - YB 2026 - Claude-Obsidian Setup Tips]]
- [[AI Wiki - PKM - Compounding Knowledge]]
- [[AI Wiki - PKM - Agentic Constitution]]
- [[AI Wiki - PKM - Knowledge Work PRs]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - PKM-to-AI Readiness]]
- [[AI Wiki - PKM - Voice-to-Knowledge Pipeline]]
- [[AI Wiki - PKM - Daily Notes]]
- [[AI Wiki - PKM - The Capture Habit]]
- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
- [[AI Wiki - PKM - Personal Identity in PKM]]
