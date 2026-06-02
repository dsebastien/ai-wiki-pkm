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
  - Alexander, S. (Slate Star Codex) — Epistemic Status convention
  - Muehlhauser, L. — Epistemic Status markers for blog posts
  - Matuschak, A. — Evergreen notes on confidence and orthogonality
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
public_note: true
created: 2026-04-17T05:53:12+02:00
updated: 2026-04-28T11:41
---

# AI Wiki - PKM - Epistemic Status Markers

An epistemic status marker is an explicit, machine-readable annotation on a claim, section, or note that records *how* the author knows what they claim — confidence level, source class, reasoning type, or review state. Most vaults encode epistemic texture implicitly through prose. Explicit markers make that texture queryable, reviewable, and improvable. They are small in cost and large in payoff, especially under LLM-mediated use where every note is at risk of being cited as confident fact.

## Why Explicit Markers Matter

Declarative prose flattens confidence. A note written in plain sentences reads as assertion regardless of whether the author is certain, speculative, or merely repeating a vaguely remembered claim. The reader — future-you, a collaborator, an LLM retriever — receives all of it as the same register. Important distinctions between "I have tested this and it works" and "I read this once and it seemed right" are invisible.

The fix is cheap: add a field. Scott Alexander's Slate Star Codex popularized an "epistemic status" line at the top of essays describing the reliability of the piece. Luke Muehlhauser and others formalized shorter markers. Andy Matuschak's evergreen-notes practice uses orthogonal axes (confidence, source class, permanence). Any of these conventions, applied consistently, turn a vault from a prose archive into an epistemically textured knowledge base.

## Axes Worth Tracking

A usable marker set is small. Most value comes from three or four axes.

- **Confidence** — `high | medium | low | uncertain`. How certain is the author that the claim is correct. This is the one the existing wiki already uses at article level.
- **Source class** — `primary | secondary | synthesis | personal-experience | speculation | llm-generated`. The evidential base of the claim. LLM-generated is particularly worth isolating because its default confidence warrants a discount.
- **Reasoning type** — `empirical | deductive | inductive | abductive | hypothesis`. What kind of inference the claim depends on. See [[AI Wiki - PKM - Inductive Deductive and Abductive Reasoning]].
- **Review state** — `draft | reviewed | challenged | superseded`. Whether the note has been tested against other views or updated to reflect a better understanding.

More axes than four produce friction that kills adoption. Fewer than two leave too much texture invisible. Start with two (confidence, source class) and expand only when a recurring query needs the extra axis.

## Where to Put Markers

- **Frontmatter for note-level markers** — Wiki articles in this vault already carry `confidence` in frontmatter; adding `source_class` or `reviewed: true` is a natural extension. Frontmatter is queryable by Dataview and readable by LLMs. See [[AI Wiki - PKM - Tagging and Metadata]].
- **Inline markers for claim-level nuance** — Some notes contain claims of mixed reliability. A simple convention like `[H]` / `[M]` / `[L]` or explicit "confidence: low" spans after a sentence lets a single note carry varied texture without splitting into separate atoms.
- **Section headers for block-level status** — A section titled "Speculative" or "Working Hypotheses" communicates status to every claim beneath it at zero per-claim cost.
- **Tags for cross-cutting status** — A `#speculation` or `#tentative` tag allows queries like "show me all speculative claims in the Strategy domain" that frontmatter alone cannot.

The aim is not to annotate everything but to annotate *at the resolution the query demands*. A high-stakes note benefits from claim-level markers; a well-understood reference note can live with a single frontmatter field.

## The Under-Marking and Over-Marking Traps

Two failure modes are common.

**Under-marking** — The default state. Declarative prose with no status signal. Symptoms: LLM queries return speculative claims as fact; future-you cannot distinguish "I tested this" from "I read this once"; review passes cannot prioritize because nothing flags what needs scrutiny. Accumulates silently over time.

**Over-marking** — The reactive failure. Every claim carries a status badge. Symptoms: notes become hard to read; authors spend more time classifying than thinking; the markers themselves drift toward a single default (everything labeled "medium") and the signal collapses. A status field every reader scrolls past is worse than no field.

The productive zone is in between: coarse markers everywhere, fine markers where stakes justify the cost. Calibrate by the downstream query. If a note will be searched for "what do I actually know about X", claim-level markers are worth it. If the note is a personal reference you will re-read as a unit, note-level is enough.

## Markers as Metacognitive Instrument

Assigning a marker is an act of metacognition. The author must decide, for each claim or note, *how they know what they are saying*. This act alone produces benefit even if no one ever queries the resulting field. It forces the question Flavell's framework sits on: what is the actual evidential base of this belief? See [[AI Wiki - PKM - Metacognition]] and [[AI Wiki - PKM - Calibration and Epistemic Humility]].

Over time, a vault with explicit markers becomes a map of the author's epistemology. Aggregate queries — "what fraction of my notes on topic X are marked high confidence?", "which topics are dominated by LLM-generated content?" — produce insight that no single-note inspection can. This is vault-level metacognition, operationalized.

## Markers and the Review Loop

Epistemic status is not static. A claim that was speculative in 2023 may be well-evidenced in 2026; a claim that was confidently held may be quietly invalidated by later work. Markers are only useful if they update. Two disciplines keep them alive:

- **Re-read triggers on confidence-low notes** — Periodic reviews should disproportionately surface `confidence: low` and `uncertain` notes. The question is not just "do I still agree?" but "has my confidence in this moved, in either direction?"
- **Retraction and supersession log** — When a claim is downgraded or invalidated, the record is preserved rather than silently edited. This protects against the failure mode of a vault that never admits to disagreeing with itself. See [[AI Wiki - PKM - Fallibilism]].

## LLMs and the Markers

Markers serve a specific role under LLM retrieval. An LLM querying a vault has no way to judge confidence from prose style — it infers from tone and emphasis, which are cheap to counterfeit. Explicit markers are the retriever's ground truth. A vault whose notes carry machine-readable status fields lets the LLM answer "what am I confident about?" with precision. A vault without them forces the LLM to hallucinate confidence from surface features.

This also cuts the other way: LLM-generated content inserted into a vault should always be marked. The `source_class: llm-generated` marker is a small discipline with a large payoff — it prevents the LLM's own prior output from being read back as authoritative in a future retrieval. See [[AI Wiki - PKM - AI Sycophancy and PKM]] and [[AI Wiki - PKM - Cognitive Debt]].

## Key Points
- Epistemic status markers make a claim's reliability, source, and reasoning type explicit and queryable
- Declarative prose flattens confidence; explicit markers restore texture
- Small marker set (confidence, source class, reasoning type, review state) carries most of the value
- Placement options: frontmatter, inline, section headers, tags — match resolution to downstream query
- Under-marking silently accumulates; over-marking collapses the signal — calibrate by stakes
- Assigning a marker is itself a metacognitive act that improves the thinking behind the claim
- Markers are dynamic; periodic review and retraction logs keep them honest
- Under LLM retrieval, explicit markers are the only reliable confidence signal

## Open Questions
- What is the minimum-viable marker set that produces measurable query-quality improvement without adoption friction?
- Can LLMs reliably assign epistemic status markers to existing notes, or does the assignment itself require human metacognition?
- How should a vault surface aggregate marker statistics — confidence distribution, source-class coverage — as a review instrument?

## References
- Alexander, S. — "Epistemic Status" convention (Slate Star Codex / Astral Codex Ten)
- Muehlhauser, L. — essays on epistemic status markers
- Matuschak, A. — Evergreen notes on orthogonality and confidence
- Yudkowsky, E. — LessWrong sequences on calibrated belief

## Related
- [[AI Wiki - PKM - Metacognition]]
- [[AI Wiki - PKM - Calibration and Epistemic Humility]]
- [[AI Wiki - PKM - Epistemic Hygiene]]
- [[AI Wiki - PKM - Epistemic Virtues]]
- [[AI Wiki - PKM - Bayesian Epistemology]]
- [[AI Wiki - PKM - Fallibilism]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - Decision Journaling]]
- [[AI Wiki - PKM - Knowledge Gap Surfacing]]
- [[AI Wiki - PKM - AI Sycophancy and PKM]]
- [[AI Wiki - PKM - Inductive Deductive and Abductive Reasoning]]
