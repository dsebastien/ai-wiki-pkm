---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - YB (@yb_effect), 'Claude-Obsidian Setup Tips,' X thread (2026-04-13)
  - Practitioner accounts across agentic-vault community
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T07:31
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Agentic Constitution

An **agentic constitution** is a markdown document inside a PKM vault that serves as the persistent, shared orientation file between the human owner and the AI agents operating on the vault. YB (2026) coined the phrase as the name for "the portal between your Obsidian and Claude." Every agent task begins by reading the constitution so that agent actions are aligned with the owner's identity, current priorities, and working preferences. The concept is a cousin of the [[AI Wiki - PKM - AI Master Prompt|AI master prompt]] but framed explicitly as a governance document rather than just a prompt.

## What Goes In

Per YB's description, the constitution captures high-level context that a new collaborator would need to start working effectively:

- **Who you are** — identity, role, domain
- **Your big question** — the overarching problem or curiosity driving your work
- **How you like to work** — preferences, rituals, anti-patterns to avoid
- **Main goals** — current top-level objectives
- **Current problems** — active constraints, blockers, open tensions
- **Team context** — people you work with, relationships, communication conventions

This is similar but not identical to an [[AI Wiki - PKM - Personal Identity in PKM|identity note]]. Identity notes tend to be retrospective and stable; the constitution is forward-looking and volatile — it is updated weekly or more often.

## Constitutional vs Contextual

The key design choice is that the constitution is **the standing context that every agent reads first**, before any task-specific context. This separates two layers:

- **Constitution** — slow-changing orientation; who, what, why, how
- **Task context** — fast-changing input; what this particular invocation is about

Without this separation, agents are re-briefed from scratch every session, or inherit stale task-specific context as if it were standing policy. The constitutional pattern is how practitioners are solving the [[AI Wiki - PKM - Context Drift|context drift]] problem for repeated agent use.

## Update Cadence

YB reports updating "almost weekly" and frames the discipline as: "Think about this doc like you're updating your team." The implication:

- If your life shifted, update the constitution
- If priorities rotated, update the constitution
- If you adopted or dropped a ritual, update the constitution

Treating it as a stale document defeats the purpose; treating it as a sacred document defeats the purpose differently. It is a working artifact that decays rapidly without maintenance, like a team onboarding doc.

## Relationship to Other PKM Patterns

The agentic constitution sits at the intersection of several existing PKM concepts:

- **[[AI Wiki - PKM - AI Master Prompt|AI master prompt]]** — the constitution is a specialized, personal form of a master prompt focused on identity/orientation rather than behavioral instructions
- **[[AI Wiki - PKM - Context Anchoring|Context anchoring]]** — the constitution anchors agent runs to non-negotiable reference points (values, goals, relationships)
- **[[AI Wiki - PKM - Context Layering|Context layering]]** — the constitution is one layer (the broadest) in a hierarchical context stack
- **[[AI Wiki - PKM - Personal Identity in PKM|Personal identity in PKM]]** — related but more stable; identity notes feed into the constitution
- **[[AI Wiki - PKM - Supervisory Control|Supervisory control]]** — the constitution is how the human supervises agents without re-stating policy every turn

The OSK/DeveloPassion vault pattern of shared agent rules, `About Me.md`, `Top of mind.md`, and per-agent `SOUL.md` files is a richer decomposition of the same idea: distribute constitutional content across several stable documents that agents compose at activation time.

## Risks

- **Staleness is the default failure mode.** A constitution written once and never updated is worse than no constitution — agents act confidently from obsolete assumptions.
- **Over-specification.** Writing every preference into the constitution bloats context and slows every agent run. Reserve it for what actually shifts agent behavior meaningfully.
- **Identity lock-in.** A constitution that captures a former self, earnestly reapplied by agents, can anchor you to stale priorities. YB's weekly-update cadence is defense against this.
- **False intimacy.** The doc is *context for a tool*, not a relationship; agents do not know you in any meaningful sense. Pretending otherwise is an [[AI Wiki - PKM - AI Sycophancy and PKM|AI sycophancy]] risk vector.

## Key Points

- Agentic constitution = markdown orientation file read at the start of every agent task
- Captures identity, big question, work preferences, goals, problems, team context
- Separates slow-changing orientation from fast-changing task context
- Updated weekly or more; staleness is the default failure mode
- Cousin of the AI master prompt, but framed as governance rather than behavior
- Best used in combination with context layering and supervisory control patterns

## Open Questions

- Does a single constitutional file scale, or should it decompose into several per-domain orientation files?
- What is the right size? Where does the token-cost-vs-alignment tradeoff break?
- Should the constitution be human-maintained, agent-maintained, or jointly maintained with a human review loop?
- How often should it be pruned vs appended? YB's weekly rhythm is one data point, not a rule.

## References

- YB (@yb_effect), X thread, 2026-04-13 — coined "agentic constitution" usage
- Related practitioner posts in the "Engineering Agency" Substack ecosystem

## Related

- [[AI Wiki - PKM - Source - YB 2026 - Claude-Obsidian Setup Tips]]
- [[AI Wiki - PKM - AI Master Prompt]]
- [[AI Wiki - PKM - Context Anchoring]]
- [[AI Wiki - PKM - Context Layering]]
- [[AI Wiki - PKM - Context Drift]]
- [[AI Wiki - PKM - Personal Identity in PKM]]
- [[AI Wiki - PKM - Supervisory Control]]
- [[AI Wiki - PKM - Knowledge Work PRs]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - AI Sycophancy and PKM]]
