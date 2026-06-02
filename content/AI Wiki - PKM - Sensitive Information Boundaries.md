---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - Forte — What Information NOT to Store in Your Notetaking App (Readwise capture)
  - Buytaert 2026 — How I Collect and Connect Ideas (Readwise capture)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-28T08:42
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Sensitive Information Boundaries

Capture discipline is usually framed as deciding what to capture (see [[AI Wiki - PKM - The Capture Habit]]). Sensitive information boundaries are the inverse problem: deciding what to *not* capture, or to capture only outside the PKM system. Tiago Forte names this directly — "What Information NOT to Store in Your Notetaking App." Some categories are technically capturable but their presence in a vault creates risk that outweighs the value of having them indexed alongside everything else.

## Why a Boundary Exists at All

A vault is a high-value, broadly accessible artifact. It is open whenever you work, often synced across devices, and increasingly accessible to AI agents acting on your behalf. Each of those properties — duration, accessibility, agent reach — multiplies the cost of a sensitivity mistake. A note containing a one-time-use code captured during a flow becomes an attractor for any future agent or copilot pulling context from the vault. A casual observation about a colleague becomes a sentence retrieved by RAG and embedded in some future synthesis you did not intend.

Setting an explicit boundary up front is much cheaper than auditing the vault later.

## What Generally Should Not Live in the Vault

Categories where the negative externalities reliably exceed the benefit of indexed access:

- **Active credentials**. Passwords, API keys, recovery codes, 2FA backup codes. These belong in a password manager. A vault is the wrong substrate for secrets that need rotation, expiry, or specific retrieval flows.
- **Identifying numbers**. National ID, social security, credit card primary numbers. The combination of duration and accessibility makes these a poor fit; identity-document scans even more so.
- **Live medical detail attributable to others**. Notes about a family member's condition that go beyond what they have explicitly consented to share.
- **Other people's confidential disclosures**. A friend's mental health, a colleague's salary mentioned in confidence, a client's strategy under NDA.
- **In-progress legal matters**. Active disputes, draft testimony, anything subject to legal hold or discovery.
- **Information you would feel comfortable seeing on your screen with someone behind you**. The "shoulder-surfer test" sets a useful intuitive bar.
- **Operational secrets that protect others**. Locations, schedules, security codes for spaces shared with others (offices, family homes).

These do not belong in [[AI Wiki - PKM - Selective Encryption]] either; they belong outside the vault entirely. The point is not to encrypt them but to keep them in a system designed for that category — password managers, encrypted document vaults, secure notes apps with explicit access patterns.

## Categories That Need Care But Belong In

Other categories are appropriate to capture but require explicit privacy treatment (typically [[AI Wiki - PKM - Selective Encryption]] or hard-segregated folders):

- **Personal financial planning**. Targets, account aggregates, scenarios — high value to think through, sensitive enough to lock.
- **Health journal entries**. Personal patterns over time are a primary PKM use case; [[AI Wiki - PKM - Quantified Self and PKM]] depends on it. Lock or segregate, do not exclude.
- **Mid-deliberation drafts**. Letters, decisions, hard conversations — useful to write through, but exposure mid-process can be costly.
- **Attributable observations about others**. Notes from meetings, person profiles, relationship dynamics. These are the heart of [[AI Wiki - PKM - Personal CRM]]; the boundary is what you would be comfortable being visible to that person.

The rule of thumb: if the value of indexing it alongside the rest of your knowledge is high but the exposure cost is also high, it belongs in the vault under a privacy treatment. If the value is low or the exposure cost is catastrophic, it belongs outside the vault entirely.

## The Future-Self Test

A useful capture-time check: imagine reading this note in five years, in a context you do not currently anticipate (a different job, a different relationship, a different public profile). Is there a version where you would regret having captured it in this form? If yes, either reformulate (depersonalize, abstract, anonymize), defer (write the entry but do not save it), or decline.

This test is conservative by design. Most captures pass. The ones that fail are the ones worth catching.

## Capture Hygiene Practices

Practices that institutionalize the boundary:

- **Explicit "do not capture" list** at the top of the daily-note template or in a meta-note. The list is short, named, and reviewed quarterly.
- **Pseudonymization conventions**. Reference people by initials or codes when the substance matters but the identity does not.
- **Quote-don't-summarize rule for confidential disclosures**. If you must capture, capture the principle ("a colleague is dealing with X kind of situation") rather than the specifics.
- **Periodic privacy audit**. Search the vault for high-risk strings (account numbers, full names of sensitive contacts, medical terms) and review hits.
- **Default to deletion over archive**. For the high-risk class, the safest action is not capturing in the first place.

## The Tension With Capture-First PKM

Sensitive information boundaries push back against "capture everything, organize later" methodologies (variants of GTD's mind-sweep applied to knowledge). For most categories, capture-first is the right default — friction at capture time is the dominant failure mode. For sensitive categories, the calculus inverts: the cost of bad capture exceeds the cost of a missed capture. The two regimes coexist; the skill is knowing which one applies to a given input.

## Key Points

- Sensitive boundaries are the inverse of capture: what should not enter the vault at all
- Some categories belong outside the vault entirely (credentials, ID numbers, others' confidences, legal active matter)
- Other categories belong inside the vault with privacy treatment ([[AI Wiki - PKM - Selective Encryption]])
- Future-self test: would I be comfortable reading this in five years in an unanticipated context?
- Capture hygiene practices: do-not-capture list, pseudonymization, quote-don't-summarize, periodic audit
- Capture-first defaults invert for sensitive categories — friction at capture time becomes a feature

## Open Questions

- Can sensitive-input detection be automated (regex, classifier, agent review at capture time)?
- Where does the boundary live for shared family or business vaults?
- How does the boundary shift as AI agents capture *for* the user from voice, camera, calendar — without the explicit pause to apply judgment?
- Should the do-not-capture list itself be in the vault, or does that create a meta-leak?

## References
- Tiago Forte, "What Information NOT to Store in Your Notetaking App" — Readwise capture (Forte / Building a Second Brain corpus)
- Buytaert, "How I Collect and Connect Ideas" (dri.es, 2026) — Readwise capture

## Related
- [[AI Wiki - PKM - Privacy in PKM]]
- [[AI Wiki - PKM - Selective Encryption]]
- [[AI Wiki - PKM - The Capture Habit]]
- [[AI Wiki - PKM - Inbox Zero for Notes]]
- [[AI Wiki - PKM - Personal CRM]]
- [[AI Wiki - PKM - Quantified Self and PKM]]
- [[AI Wiki - PKM - PKM Anti-Patterns]]
- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
