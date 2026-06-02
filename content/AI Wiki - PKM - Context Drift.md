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

# AI Wiki - PKM - Context Drift

Context drift is the gradual, often unnoticed misalignment between what AI context describes and what is actually true. Distinct from [[AI Wiki - PKM - Knowledge Decay]] (which affects the notes themselves), context drift affects the AI operating layer: instructions, memory entries, identity notes, and rules that guide AI behavior.

## The Mechanism

You start with perfectly accurate context. Then reality changes. A function gets renamed but the skill file still references the old name. A project completes but its context persists in memory. Your writing style evolves but your identity notes stay static. User preferences shift but the AI Master Prompt reflects last year's priorities.

Each change is minor. The cumulative effect is context that confidently describes a system, person, or workflow that no longer exists in that form. Think of it as configuration drift in infrastructure: the documented state slowly diverges from the actual state.

## Why Drift Is Dangerous

Context drift is invisible. The AI still produces coherent-sounding output based on drifted context. There is no error, no crash; just a slow decline in relevance. The outputs feel subtly wrong. The AI suggests approaches you abandoned months ago, references tools you no longer use, or writes in a style you have outgrown.

The law of staleness applies: the older the context entry, the higher the probability it has drifted. Memory entries from six months ago are almost certainly partially stale. Identity notes from a year ago may describe a different person.

## Detection Signals

- AI behavior that was good last month feels wrong now
- AI references projects, tools, or preferences you no longer hold
- AI-generated content requires increasing amounts of correction
- You find yourself overriding AI suggestions more frequently

## Remedies

- **Scheduled context reviews.** Quarterly review of all persistent context: identity notes, memory files, CLAUDE.md instructions, skill definitions. See [[AI Wiki - PKM - Epistemic Hygiene]].
- **Memory curation.** Prune memory entries that reference completed projects, outdated preferences, or stale information.
- **Expiry dates.** Tag context entries with creation dates and expected validity periods. Entries past their expiry get flagged for review.
- **AI self-audit.** Instruct AI to flag when its context seems inconsistent with user behavior in the current session.
- **[[AI Wiki - PKM - Context Anchoring]].** Establish fixed reference points that new context is evaluated against, reducing the surface area for drift.

## Key Points

- Context drift affects AI operating instructions, not the notes themselves
- Invisible by nature: no errors, just declining relevance
- Older context entries have higher drift probability
- Remedies: scheduled reviews, memory curation, expiry dates, self-audit

## Open Questions

- Can AI detect its own context drift by comparing instructions against observed user behavior?
- What is the half-life of different types of context (identity, project, style)?
- Should context entries carry confidence scores that decay over time?

## References

- Vault: Context Drift, Context Anchoring, Context Hygiene

## Related

- [[AI Wiki - PKM - Context Anchoring]]
- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - Knowledge Decay]]
- [[AI Wiki - PKM - Context Entropy]]
- [[AI Wiki - PKM - Epistemic Hygiene]]
- [[AI Wiki - PKM - AI Master Prompt]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
