---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - web research
  - University of Maryland Libraries — Primary, Secondary, and Tertiary Sources
  - Wikipedia — Reliable Sources Policy
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T19:03
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Primary Secondary and Tertiary Sources

Not all sources carry equal epistemic weight. A peer-reviewed study reports original data; a popular-press summary of that study interprets it for a general audience; a textbook's paragraph on the study compresses it further. Each layer adds useful context and adds opportunities for error. The primary-secondary-tertiary distinction is a 150-year-old framework from historiography that translates directly into PKM source hygiene.

## The Three Tiers

**Primary sources** are original, first-hand records of an event, claim, or investigation. In science: the paper presenting original data. In history: the letter, the diary, the contemporary newspaper report. In law: the statute, the court decision. In practice: the author's actual words, the original interview, the uninterpreted dataset. Primary sources are the closest you can get to the phenomenon without being there yourself.

**Secondary sources** analyze, interpret, summarize, or evaluate primary sources. Academic review papers, journalism about scientific findings, historical biographies drawing on archives, textbooks explaining research, and most books about ideas are secondary. They add synthesis, context, and accessibility at the cost of introducing the author's interpretation.

**Tertiary sources** compile or summarize secondary sources. Encyclopedias, handbooks, most reference works, and many popular-press articles about research are tertiary. They are furthest from the phenomenon and carry the most compounded interpretation risk, but they are also the most accessible and often the entry point to a topic.

The boundaries are fuzzy at the edges. A textbook chapter can be secondary or tertiary depending on whether the author worked from primary sources or from other textbooks. A blog post can range from tertiary (summarizing a summary) to primary (original argument by the author themself).

## Why It Matters for PKM

Several PKM failure modes trace to source-tier confusion.

**Compounding interpretation drift**: when you capture from a tertiary source that summarized a secondary source that interpreted a primary source, you are three degrees from the actual claim. Each layer has introduced selection, emphasis, and possible distortion. Your note reflects all of them without marking it.

**False appeal to authority**: a claim feels well-sourced because it was cited in a respected secondary source, but the respected author cited a tertiary, who cited a secondary, who misread the primary. The chain looks solid only because the proximate source was trusted.

**Gettier-flavored accuracy**: sometimes tertiary sources happen to be correct even when the interpretation chain was flawed. This is still epistemically lucky, not reliable. See [[AI Wiki - PKM - Gettier Problem]].

**Difficulty of retraction**: when a primary source is retracted, every secondary and tertiary source built on it becomes unreliable, but your vault's downstream notes don't automatically update. You need the chain recorded to walk back the damage.

## The Source Chain Record

A source-hygienic PKM records not just the source of a claim but its chain. At minimum:

- Which tier is the captured source?
- If secondary or tertiary, what primary source does it cite?
- Can the primary be verified?
- When was the capture dated (in case the primary is later retracted)?

For load-bearing claims, this is worth the effort. For casual captures, you can record only the proximate source and upgrade to chain-tracking only if the claim later proves load-bearing.

## Tier vs Quality

Tier is not quality. A carefully researched secondary source can be more reliable than a careless primary source — a rigorous biography quoting a sloppy diary, a careful review paper citing a fraudulent study. A good PKM vault tracks both: which tier, and which quality tier within that level.

Quality proxies include: peer review, institutional reputation, track record of the author, transparency of methods and data, citations received, and independent corroboration. No single proxy is sufficient; triangulation across several is the defensible minimum.

## LLM Output as Source

LLM synthesis is structurally tertiary at best, and often worse: it summarizes its training data, which is itself a mix of primary, secondary, and tertiary sources, weighted by frequency and recency rather than quality. The synthesis does not track its own source chain — it generates prose that may or may not reflect specific underlying sources.

A source-hygienic vault treats LLM output as requiring downstream verification before it carries any source-tier status at all. "The LLM said so" is not a citation. "The LLM paraphrased a claim that I then verified against source X" is a citation to X, with the LLM as generator not source.

## Practical PKM Guidance

- For load-bearing claims, use primary sources where feasible. When you use secondary, identify the primary and decide whether to verify.
- For casual captures, record the proximate source with honesty about its tier; upgrade later only if the claim matters.
- Track tier in frontmatter or tags (`#source/primary`, `#source/secondary`, `#source/tertiary`).
- For retractions: when a primary source is retracted, query the vault for downstream notes and flag them.
- Distinguish tier from quality; the best secondary source can beat the worst primary source.
- Treat LLM output as requiring primary-source verification before it counts as sourced.

## Key Points
- Primary = original / first-hand; secondary = analysis of primary; tertiary = summary of secondary
- Every layer adds context and interpretation risk; compounding across layers produces drift
- PKM failure modes: interpretation drift, false authority, Gettier accuracy, hard-to-retract downstream notes
- Hygiene fix: record the source chain, not just the proximate source, for load-bearing claims
- Tier is not quality — a rigorous secondary beats a sloppy primary
- LLM output is structurally tertiary at best and does not track its own source chain
- Practical discipline: tag tier, distinguish load-bearing from casual, verify primary for important claims

## Open Questions
- Can automated tools infer source-tier from capture metadata or require explicit tagging?
- What is the right friction level for tier tracking on casual captures — too much slows capture, too little erodes hygiene?
- How should a vault respond when a primary source is retracted — manual review or automated flag-and-review?

## References
- University of Maryland Libraries — "Primary, Secondary, and Tertiary Sources"
- Wikipedia — "Reliable Sources" policy (a real-world implementation of source-tier discipline)
- Eco, U. (1977). *How to Write a Thesis* — classic source-hygiene handbook

## Related
- [[AI Wiki - PKM - Epistemology]]
- [[AI Wiki - PKM - Epistemic Hygiene]]
- [[AI Wiki - PKM - Justified True Belief]]
- [[AI Wiki - PKM - Gettier Problem]]
- [[AI Wiki - PKM - Social Epistemology]]
- [[AI Wiki - PKM - Foundationalism and Coherentism]]
- [[AI Wiki - PKM - Readwise and Reading Workflows]]
- [[AI Wiki - PKM - Argumentation in PKM]]
