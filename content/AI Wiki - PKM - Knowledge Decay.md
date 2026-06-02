---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - vault notes
  - web research
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T12:00
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Knowledge Decay

Knowledge decay is the process by which stored knowledge loses accuracy, relevance, or usefulness over time. It affects every knowledge system: human memory, organizational wikis, personal note collections, documentation, and AI context systems alike. A PKM system that is only written to but never maintained accumulates decay silently until it becomes unreliable.

## Forms of Decay

**Knowledge rot.** Facts become outdated. A note about a software API describes last year's interface. A best-practice note reflects a superseded methodology. Technical knowledge decays fastest; principles and mental models decay slowest.

**Link rot.** External references break. URLs return 404s as pages move or disappear. Studies estimate that roughly 25% of web links break within 5 years. A note whose value depends on its references loses that value as links die.

**Context decay.** You forget why you captured something. A note that made perfect sense six months ago now reads as cryptic shorthand. The context that made it meaningful lived in your working memory at the time, not in the note itself. This is a failure of capture quality that only reveals itself later.

**Relevance drift.** Your interests, projects, and goals change. Notes about a technology you no longer use, a project that was cancelled, or a domain you have moved away from become irrelevant. They are not wrong; they just no longer matter. Unchecked, they dilute the signal-to-noise ratio of the entire system.

## The Law of Staleness

The Law of Staleness describes the core mechanism: information's reliability declines as a function of time since last verification. Older, unchecked information is statistically less reliable than recently verified information. This applies regardless of how accurate the information was when first captured. The world changes; static notes do not.

## The Forgetting Curve Applied to Knowledge Bases

Ebbinghaus's forgetting curve describes how individual memories decay exponentially without reinforcement. The same dynamic applies at the system level. A knowledge base that is not actively reviewed experiences its own forgetting curve: not literal forgetting, but functional decay as notes become stale, disconnected, and untrusted. [[AI Wiki - PKM - Spaced Repetition]] was designed to combat the individual forgetting curve; [[AI Wiki - PKM - Periodic Reviews]] are the equivalent defense for knowledge systems.

## Strategies to Combat Decay

**Periodic reviews.** The primary defense. Regular review cadences catch different classes of decay at different time horizons. Without reviews, decay is invisible until the system fails you at the moment you need it.

**Confidence markers.** Tag notes with a confidence level (high, medium, low, outdated). This makes decay visible rather than hidden. When reviewing, prioritize low-confidence and unreviewed notes.

**Last-reviewed dates.** Track when each note was last verified. Notes with old review dates are candidates for staleness. This metadata turns decay from a vague worry into a measurable metric.

**Expiration signals.** Some knowledge has a known shelf life. API documentation, version-specific guides, and time-sensitive references can be tagged with expected staleness dates to trigger proactive review.

**AI-assisted staleness detection.** AI agents can scan notes for outdated claims, broken links, and content that contradicts newer notes in the same system. This does not replace human review, but it can prioritize the review queue and catch decay that would otherwise go unnoticed.

**Pruning.** Not all decay should be repaired. Some notes should simply be archived or deleted. A note about a deprecated tool is not stale; it is done. Aggressive pruning keeps the active knowledge base lean and trustworthy.

## Key Points

- Four forms: knowledge rot, link rot, context decay, relevance drift
- The Law of Staleness: reliability declines with time since last verification
- Knowledge bases experience their own version of the forgetting curve
- Defenses: periodic reviews, confidence markers, last-reviewed dates, AI-assisted detection, pruning
- A system that is only written to but never maintained becomes unreliable

## Open Questions

- Can AI reliably detect context decay, or does it require the original author's judgment?
- What is the optimal review frequency for different knowledge domains (technical vs. conceptual vs. personal)?

## References

- Vault: Knowledge Decay, Law of staleness, Bit rot, Link rot, AI Context Rot
- Hermann Ebbinghaus, "Memory: A Contribution to Experimental Psychology" (1885)
- Berkman Klein Center, "Perma.cc and the Problem of Link Rot" (2014)

## Related

- [[AI Wiki - PKM - Periodic Reviews]]
- [[AI Wiki - PKM - Spaced Repetition]]
- [[AI Wiki - PKM - Knowledge Lifecycle]]
- [[AI Wiki - PKM - Epistemic Hygiene]]
- [[AI Wiki - PKM - PKM Anti-Patterns]]
- [[AI Wiki - PKM - Collector's Fallacy]]
