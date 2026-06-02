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
  - Jaynes, E. T. (2003) — Probability Theory - The Logic of Science
  - Stanford Encyclopedia of Philosophy — Bayesian Epistemology
  - Tetlock, P. (2015) — Superforecasting
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T17:16
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Bayesian Epistemology

Bayesian epistemology treats beliefs as probabilities and belief change as probabilistic updating. Evidence doesn't confirm or refute; it shifts credence along a continuous scale between zero and one. The framework is more demanding than casual confidence-talk but gives PKM practitioners the tools to calibrate, update, and audit their own beliefs with unusual precision.

## Beliefs as Credences

Classical epistemology treats belief as binary — you either believe a proposition or you don't. Bayesian epistemology replaces this with **credence**: a real number between 0 and 1 representing your degree of belief. Credence 0.95 means you'd bet at 19-to-1 odds; credence 0.5 means total uncertainty; credence 0.1 means unlikely but not dismissed. This matches how thinking actually feels — you hold most beliefs with partial confidence — and gives the confidence a precise mathematical structure.

For PKM, this translates into confidence markers that are richer than "high/medium/low." A fully Bayesian vault tracks probabilities per claim (at least for load-bearing claims). Rough buckets work in practice: 90 percent, 75 percent, 60 percent, 50 percent (genuinely uncertain), 25 percent, 10 percent.

## Prior, Likelihood, Posterior

Bayes' theorem prescribes how to update beliefs when evidence arrives. You start with a **prior** — your credence before the evidence. You estimate the **likelihood** — how probable the evidence is given your hypothesis compared to its alternatives. You multiply these (normalized) to get the **posterior** — your updated credence.

In PKM terms: when you encounter new information, the correct response is not "this proves it" or "this disproves it." It's "how does this shift my prior?" Strong evidence that is very likely given your hypothesis and very unlikely given its negation shifts credence substantially. Weak evidence, or evidence nearly equally expected under both hypotheses, shifts credence a little. The mistake to avoid is updating strongly on weak evidence because the evidence feels novel or emotionally salient.

## Calibration

A well-calibrated forecaster's 70-percent claims come true about 70 percent of the time. A miscalibrated one might have 70-percent claims come true only 40 percent of the time (overconfidence) or 90 percent of the time (underconfidence). Tetlock's work on superforecasters shows calibration is trainable — through explicit prediction, explicit probability assignment, and tracking outcomes.

A PKM practice that takes calibration seriously includes a prediction log: claims the practitioner expects to be verified or refuted over a defined horizon, with explicit probabilities assigned in advance. Reviewing this log periodically teaches the practitioner where they are miscalibrated — which kinds of claim they overweight, which they underweight.

## Bayesian Stakes in PKM

Several PKM workflows gain from a Bayesian frame.

- **Source evaluation**: different source types (peer-reviewed study, blog post, podcast claim, social media post) carry different evidential weights; Bayesian thinking makes these weights explicit and combinable.
- **Contradiction handling**: when two notes contradict, Bayesianism prescribes weighting by source quality and prior plausibility rather than recency or prominence.
- **AI synthesis verification**: LLM output should shift credence only in proportion to the independent verification available; confident-sounding output is not high-likelihood evidence.
- **Belief revision**: scheduled note review becomes an opportunity to Bayes-update based on anything learned since the last visit.

## The Costs

Full Bayesianism is expensive. Assigning explicit probabilities to every claim is infeasible. Computing exact posteriors requires numbers you often don't have. The mathematical apparatus is easier to wield poorly than well.

The practical compromise is **Bayesian thinking without Bayesian calculation**: internalize the updating logic without forcing explicit numbers. Ask "how surprised am I that the evidence came out this way under each hypothesis?" Ask "what was my credence before this?" and "how much should it shift?" Even approximate, this discipline beats unstructured intuition.

## Common Failure Modes

- **Base-rate neglect**: updating on specific evidence without considering how common the hypothesis is in general.
- **Confirmation bias**: treating evidence as only supporting the favored hypothesis, not checking the likelihood under alternatives.
- **Anchoring**: failing to update enough because the prior feels too comfortable.
- **Motivated priors**: setting priors to serve conclusions already held rather than reflect actual evidence.

Each of these is a trained-away miscalibration. Explicit Bayesian frame, plus periodic review of past predictions, surfaces them.

## Bayesianism and LLM PKM

The Bayesian frame is especially useful for LLM-mediated PKM. LLM output is a probability distribution over plausible completions, rendered as authoritative prose. Treating it Bayesianly means: its credence contribution to any claim should be modest by default, upgraded only when the LLM output is corroborated by independent sources. The rhetorical confidence of the output does not raise its likelihood. This discipline prevents the laundering of probabilistic synthesis into apparent knowledge.

## Key Points
- Bayesian epistemology replaces binary belief with credence: a probability between 0 and 1
- Evidence shifts credence through Bayes' theorem: prior × likelihood → posterior
- Calibration is trainable; prediction logs surface where a practitioner is systematically over or underconfident
- In PKM, Bayesian thinking sharpens source evaluation, contradiction handling, and belief revision
- Full formal Bayesianism is expensive; the practical compromise is Bayesian thinking without forced calculation
- Common failures: base-rate neglect, confirmation bias, anchoring, motivated priors
- LLM output should receive modest default credence, upgraded only with independent corroboration

## Open Questions
- Can a vault automate Bayesian updating — tracking priors on claims and prompting revision when new notes appear as evidence?
- What is the right cadence and scope for a personal prediction log?
- Do confidence markers need to be per-claim, per-note, or per-belief-cluster?

## References
- Jaynes, E. T. (2003). *Probability Theory: The Logic of Science*
- Stanford Encyclopedia of Philosophy — "Bayesian Epistemology"
- Tetlock, P. & Gardner, D. (2015). *Superforecasting*
- Kahneman, D. (2011). *Thinking, Fast and Slow* — base-rate neglect and anchoring

## Related
- [[AI Wiki - PKM - Epistemology]]
- [[AI Wiki - PKM - Fallibilism]]
- [[AI Wiki - PKM - Justified True Belief]]
- [[AI Wiki - PKM - Epistemic Hygiene]]
- [[AI Wiki - PKM - Mental Models for Knowledge Work]]
- [[AI Wiki - PKM - Argumentation in PKM]]
- [[AI Wiki - PKM - AI Sycophancy and PKM]]
