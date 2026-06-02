---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - vault notes (Obsidian Starter Kit documentation)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T14:00
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Quantified Self and PKM

The Quantified Self movement tracks health and wellness data; PKM manages knowledge and ideas. These are usually treated as separate domains with separate tools. But integrating health tracking into PKM reveals cross-domain patterns that neither system can surface alone: the correlation between sleep quality and note quality, the relationship between exercise and creative output, the early warning signs of burnout hidden in daily note patterns.

## What Gets Tracked

Health and wellness data captured as structured frontmatter properties in daily notes: sleep duration and quality, energy level (scaled), mood (scaled), exercise type and duration, nutrition quality, stress level, screen time, caffeine intake. The key is structured capture. Free-text journaling about "feeling tired" is useful for reflection but not for analysis. Numeric or categorical properties enable queries, charts, and trend detection.

## Why Integration Matters

Separate health apps (Fitbit, Apple Health, mood trackers) create information silos. Each app sees its own data in isolation. Your sleep tracker does not know about your productivity. Your mood tracker does not know about your meeting schedule. By integrating health data into the [[AI Wiki - PKM - Single Source of Truth]], patterns emerge that cross domains.

Examples: consistently low energy on days following poor sleep (obvious but only visible in data). Declining note quality correlating with rising stress over weeks (not obvious without tracking). Creative breakthroughs clustering on days with morning exercise (actionable once detected). Mood dips preceding periods of low productivity by 2-3 days (early warning system).

## The Burnout Detection Use Case

Burnout rarely announces itself. It builds gradually through patterns that are individually unremarkable but collectively alarming: slightly less sleep, slightly more stress, slightly fewer notes taken, slightly shorter journal entries, slight increase in task rollovers. A PKM system that tracks these metrics can surface the trend before the person experiencing it recognizes the pattern. This is preventive self-knowledge.

## Implementation Approaches

**Manual entry.** Daily note templates with frontmatter fields for health metrics. Quick to fill in during the morning or evening ritual. See [[AI Wiki - PKM - Daily Notes]].

**Automated ingestion.** Import data from wearables and health apps via APIs or automation tools. More accurate for biometric data (sleep, heart rate) but requires technical setup.

**Hybrid.** Automated data for objective metrics (steps, sleep from wearables), manual entry for subjective metrics (mood, energy, stress). This is usually the pragmatic sweet spot.

## Analysis and Review

Raw data without analysis is just noise. Periodic reviews (weekly, monthly) should include a health data scan: trends, correlations, anomalies. AI agents are well-suited to this analysis, surfacing patterns that would take a human hours to spot in spreadsheets. See [[AI Wiki - PKM - Agentic Knowledge Management]].

## Key Points

- Integrating health tracking into PKM reveals cross-domain patterns invisible in siloed apps
- Structured properties in daily notes enable queries and trend detection
- The convergence of Quantified Self and PKM makes the SSOT more powerful
- Early burnout detection is a high-value use case for integrated health+productivity data
- Hybrid approach (automated biometrics + manual subjective) is the pragmatic sweet spot

## Open Questions

- How much health tracking is useful before it becomes obsessive self-monitoring?
- Can AI reliably detect pre-burnout patterns with acceptable false positive rates?
- What is the minimum viable set of health metrics to track for meaningful cross-domain insights?

## References

- Vault: Obsidian Starter Kit - Theory, The relationship between Journaling Personal Health and Growth
- Gary Wolf and Kevin Kelly, "Quantified Self" (quantifiedself.com, 2007)

## Related

- [[AI Wiki - PKM - Daily Notes]]
- [[AI Wiki - PKM - Single Source of Truth]]
- [[AI Wiki - PKM - Periodic Reviews]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - Life Operating Systems]]
- [[AI Wiki - PKM - Journaling and Reflection]]
- [[AI Wiki - PKM - Personal Identity in PKM]]
