---
wiki_name: PKM
wiki_role: article
explored: true
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
created: 2026-04-07T10:13
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Context Anchoring

Context anchoring is the practice of externalizing decision context and non-negotiable reference points into persistent, version-controlled documents. Anchors are the fixed points in AI context that everything else is evaluated against. They prevent [[AI Wiki - PKM - Context Drift]] by establishing what must not shift.

## The Problem Anchoring Solves

AI conversations are ephemeral. Decisions made early in a session fade as the context window fills. Research (Liu et al., 2023) shows models perform worse on information buried in the middle of long conversations. Worse, the reasoning behind decisions fades faster than the decisions themselves. Developers end up keeping conversations running far too long, not because long sessions are productive, but because closing the session means losing context that exists nowhere else.

The litmus test: "Could I close this conversation right now and start a new one without anxiety?" If discomfort emerges, context is trapped in the wrong medium.

## Two Layers of Anchors

**Priming documents** (project-level): tech stack, architecture patterns, naming conventions, identity notes, core values, style guides. Relatively stable, updated quarterly. Shared across all tasks. These are the non-negotiable pieces that persist across every session. In PKM terms: your About Me note, your manifesto, your writing style guide, your core principles.

**Feature documents** (task-level): specific decisions, rejected alternatives, constraints, open questions, implementation state. These evolve rapidly with each session and enable coordination across developers and AI sessions.

The distinction matters. Priming documents are anchors. Feature documents are working context. Confusing the two leads to either rigidity (treating everything as an anchor) or drift (treating nothing as an anchor).

## Anchoring in PKM

Which notes should always be loaded as AI context? The answer defines your anchors:

- **Identity notes.** Who you are, what you value, how you think. These should inform every AI interaction.
- **Style guides.** How you write, what patterns you follow. Consistency requires persistent reference points.
- **Hard rules.** Non-negotiable constraints. "Never commit secrets." "Always use atomic notes." These cannot drift.
- **Top-of-mind notes.** Current priorities, active projects, immediate goals. These change but should always be current.

Anchoring prevents [[AI Wiki - PKM - Context Drift]] by establishing fixed reference points. When new context enters the system, it is evaluated against anchors. If new context contradicts an anchor, either the new context is wrong or the anchor needs explicit, deliberate updating.

## Connection to Context-as-Code

[[AI Wiki - PKM - Context-as-Code]] is the implementation mechanism for anchoring. CLAUDE.md files, AGENTS.md, identity notes checked into version control: these are anchors made durable through code practices. Version control provides natural audit trails for when and why anchors changed.

## Key Points

- Anchors are the non-negotiable, persistent reference points in AI context
- Two layers: priming documents (stable anchors) and feature documents (working context)
- In PKM: identity notes, style guides, hard rules, and top-of-mind notes are anchors
- Anchoring prevents context drift by establishing fixed evaluation points

## Open Questions

- How many anchors can a system sustain before they consume too much of the context budget?
- Should anchors carry explicit version numbers so drift from the canonical version is detectable?
- Can AI agents autonomously propose anchor updates when they detect persistent contradictions?

## References

- Vault: Context Anchoring, Context Drift, Context Hygiene
- Martin Fowler's team on context anchoring in AI-assisted development
- Liu et al. (2023), "Lost in the Middle: How Language Models Use Long Contexts"

## Related

- [[AI Wiki - PKM - Context Drift]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - AI Master Prompt]]
- [[AI Wiki - PKM - Context Layering]]
- [[AI Wiki - PKM - Epistemic Hygiene]]
- [[AI Wiki - PKM - Single Source of Truth]]
