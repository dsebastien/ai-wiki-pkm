---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - YB (@yb_effect), 'Claude-Obsidian Setup Tips,' X thread (2026-04-13)
  - Practitioner accounts of agentic vault workflows
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

# AI Wiki - PKM - Knowledge Work PRs

**Knowledge Work PRs** is YB's (2026) term for a review loop in which vault-resident agents/skills ("subroutines") produce proposed changes to the vault, and the human owner reviews each proposed change like a pull request before it is merged into the vault's "production" state. The metaphor imports git/GitHub workflow discipline into knowledge work: agents do the writing, humans do the reviewing and merging, and unmerged work stays in a proposed state.

## The Pattern

The core loop:

1. **Trigger a subroutine.** A skill or agent with a defined job (e.g., "Tend the Vault," "process last week's highlights," "rewrite this draft in my voice") is invoked.
2. **Subroutine reads orientation.** The [[AI Wiki - PKM - Agentic Constitution|agentic constitution]] and any relevant vault context is loaded so the agent acts in alignment.
3. **Agent produces proposed changes.** Drafts, diffs, or suggestions — *not* direct writes to canonical notes.
4. **Human reviews changes one by one.** YB's example: a 5-minute voice session reviewing each proposed note update — approve, tweak, or reject.
5. **Approved changes are merged.** Only after human review do the changes hit the canonical vault.

This explicitly prevents the [[AI Wiki - PKM - AI Sycophancy and PKM|sycophancy]] and [[AI Wiki - PKM - Cognitive Debt|cognitive debt]] failure modes of "let the agent just update everything." The human's attention is focused on the *review*, not the *production*, which is a real shift in where human effort goes.

## Example: "Tend the Vault"

YB's concrete example:

- **Job**: Check daily commonplace entries since last trigger; notice key threads and insights; tell the user which atomic notes to update; create a draft of what to add.
- **Review**: 5-minute voice session, edit by edit, approve/tweak/reject.
- **Merge**: Approved edits get written to the relevant markdown files.

This is a specific case of the broader pattern: an agent with a defined beat ("vault hygiene," "reading processing," "weekly review synthesis") that produces a batch of candidate changes for human review.

## Why the Metaphor Works

The PR metaphor captures several design constraints that knowledge-work agents need:

- **Separation of production from canonical state.** Agent output is a proposal, not a fact. Until merged, it can be inspected, amended, or discarded without cost.
- **Reviewability at the change level, not the artifact level.** A PR is a diff; it focuses human attention on what *changed*, not on re-reading the whole document.
- **Batching + asynchrony.** Reviews can be batched (review when convenient) and asynchronous (agents don't block on human approval).
- **Audit trail.** The history of what an agent proposed, what was merged, and what was rejected is itself useful data about agent calibration and about the user's own preferences.

The metaphor is also a soft limit on agent autonomy: the human remains the merge authority. Agents can propose; only humans can commit.

## Relationship to Other PKM Patterns

- **[[AI Wiki - PKM - Supervisory Control|Supervisory control]]** — Knowledge Work PRs are a concrete implementation of the supervisory pattern: the human decides, the agent drafts
- **[[AI Wiki - PKM - Agentic Knowledge Management|Agentic knowledge management]]** — Knowledge Work PRs specify *how* agents participate in the vault without overwhelming it
- **[[AI Wiki - PKM - Vault Maintenance|Vault maintenance]]** — "Tend the Vault"-style subroutines make vault maintenance itself a reviewable process
- **[[AI Wiki - PKM - PKM Automation|PKM automation]]** — PRs are automation *with* a human review step rather than raw automation; they preserve judgment at the merge point

The pattern also recalls the medieval practice of having the master verify [[AI Wiki - PKM - Reportatio and Reportationes|reportationes]] before circulation — a human review gate between agent-like transcription work and canonical publication.

## Infrastructure Requirements

For Knowledge Work PRs to work, several substrate pieces must be in place:

- A **stable agentic constitution** so agents produce aligned drafts
- **Well-defined subroutines** with clear jobs (not open-ended "help me with the vault")
- **A review interface** — voice, text diff, side-by-side markdown view — that makes per-change review tolerable
- **Version control or change journaling** so approvals and rejections are tracked
- **A trigger rhythm** — subroutines run on a schedule or on-demand, not continuously

Without these, the pattern degrades into either "agent does stuff and the user trusts it" (no review in practice) or "user gives up on reviewing and the backlog accumulates" (proposals pile up, never merged).

## Risks

- **Review fatigue.** If agents produce too many proposed changes, the review backlog grows faster than the user can process it. Subroutines need careful scoping.
- **Rubber-stamping.** Once users trust a subroutine, they may approve without real scrutiny — which is worse than not having a review step at all.
- **Merge-conflict analogues.** Two subroutines proposing overlapping changes create genuine conflicts the PR metaphor imports from git.
- **Scope creep.** Adding subroutines is easy; removing them is not. Each subroutine is a standing commitment to review.

## Key Points

- Knowledge Work PRs = review loop where agent-produced changes are inspected and merged like git pull requests
- Pattern: trigger → agent drafts → human reviews per-change → approved changes merged
- Example: "Tend the Vault" subroutine + 5-minute voice review session
- Preserves human judgment at the merge point without duplicating agent labor
- Requires stable constitution, scoped subroutines, review interface, trigger rhythm
- Primary risks: review fatigue, rubber-stamping, scope creep

## Open Questions

- What is the optimal cadence (per-change, per-session, per-batch) for PR review in knowledge work?
- Can parts of the review be delegated to a second agent (meta-review) without undermining the human-in-the-loop principle?
- How should overlapping proposals from different subroutines be resolved — merge-queue logic, priority ordering, or human arbitration?
- Is there a size at which a vault becomes unreviewable and the pattern breaks?

## References

- YB (@yb_effect), X thread, 2026-04-13 — coined "Knowledge Work PRs"
- Martin Fowler, "Continuous Integration" (for the PR workflow metaphor import)
- OSK/DeveloPassion agent system (practical implementation of a closely related pattern)

## Related

- [[AI Wiki - PKM - Source - YB 2026 - Claude-Obsidian Setup Tips]]
- [[AI Wiki - PKM - Agentic Constitution]]
- [[AI Wiki - PKM - Supervisory Control]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - AI Skills in PKM]]
- [[AI Wiki - PKM - AI Agent Systems]]
- [[AI Wiki - PKM - PKM Automation]]
- [[AI Wiki - PKM - Vault Maintenance]]
- [[AI Wiki - PKM - Cognitive Debt]]
- [[AI Wiki - PKM - AI Sycophancy and PKM]]
