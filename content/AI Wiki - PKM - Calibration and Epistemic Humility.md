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
  - Tetlock, P. (2015) — Superforecasting
  - Tetlock, P. & Gardner, D. — Good Judgment Project
  - Yudkowsky, E. — LessWrong sequences on calibration
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T19:02
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Calibration and Epistemic Humility

A well-calibrated knowledge worker's 80-percent-confidence claims come true about 80 percent of the time. A poorly calibrated one might be right only 50 percent of the time with the same expressed confidence, or 95 percent. Calibration is the bridge between subjective certainty and actual reliability. Epistemic humility is the attitude that makes calibration possible. A vault without either is a confident-sounding archive of unverified claims.

## Calibration Defined

Calibration is the match between expressed confidence and actual accuracy across a distribution of claims. Weather forecasters are famously well-calibrated: when they say 70 percent chance of rain, it rains about 70 percent of the time. Most humans, in contrast, are poorly calibrated on most domains — overconfident on familiar topics, underconfident on unfamiliar ones, miscalibrated on emotionally charged questions.

Good calibration is not about being right more often. It is about matching your confidence to your actual reliability, including being willing to say "I'm only 55 percent sure" when the evidence warrants that rather than rounding up to "definitely" or down to "I don't know."

## Why PKM Needs It

A PKM vault encodes confidence implicitly. Notes are written in declarative sentences. Claims are linked into supporting structures. The reader — future-you, an LLM agent, a collaborator — receives the claims as assertions, not as "I believe this at 70 percent." Without explicit calibration markers, a vault accumulates a mix of high-confidence, medium-confidence, and speculative claims all styled identically. Queries return this mix as if it were uniform knowledge.

Explicit calibration markers solve this. Per-note confidence properties, per-claim confidence annotations, or section-level epistemic-status notes make the calibration texture visible. The cost is small; the benefit compounds.

## Epistemic Humility as Attitude

Epistemic humility is not the performance of uncertainty. It is the recognition that even well-evidenced beliefs may be wrong, that your expertise has limits, that your priors are shaped by forces you did not choose, and that conversations with disagreers may contain information your position does not. It is compatible with acting confidently — you can hold strong views, lightly — but it requires keeping the lightness real.

Epistemic humility shows up in a vault as: confidence markers lower than feels comfortable, "things I might be wrong about" sections in foundational notes, explicit records of updated or retracted beliefs, and routine engagement with steelmanned opposing views. Its absence shows up as: ungraded confident assertions, no retraction history, and a vault that never disagrees with itself across time.

## Training Calibration

Calibration is trainable. Tetlock's Good Judgment Project showed that explicit probability assignment plus feedback over hundreds of predictions produces measurable improvement. The mechanism: when you predict "75 percent likely" and track outcomes, you learn which kinds of questions you tend to overshoot and which you tend to undershoot.

Practical PKM calibration training:

- Keep a prediction log — claims about verifiable future events or states, with explicit probabilities
- Resolve predictions after the horizon passes; record hit, miss, and closeness
- Review periodically for systematic biases (overconfidence, topic-specific miscalibration)
- Apply lessons to how you mark confidence in new notes

Even a dozen logged predictions can surface patterns you did not notice.

## Where Miscalibration Hides

Miscalibration is hardest to catch where confidence feels most secure.

- **Expertise domains** — fluency feels like understanding; you may know *less* than your vocabulary suggests.
- **Emotionally charged topics** — motivated reasoning masks itself as strong evidence.
- **Widely-shared beliefs** — social consensus is not epistemic evidence; your community's conviction does not raise the probability.
- **Old beliefs** — long-held views feel more certain than their evidence supports because familiarity is mistaken for justification.
- **AI-mediated synthesis** — LLM-fluent output raises your felt confidence faster than it raises actual justification.

A calibrated PKM practice routinely re-audits the beliefs that feel most solid, not just the ones flagged uncertain.

## Calibration and AI

LLM output introduces a specific calibration hazard: it can be confidently wrong in ways that feel authoritative. A well-calibrated vault treats LLM output as a distinct evidence class with a modest default confidence contribution, regardless of its rhetorical confidence. "Claude said so" is not strong evidence. "Three independent sources agree, one of which is a primary source" is. The vault's confidence assignments should reflect this even when the fluent AI output makes the claim feel more certain than its warrant allows.

## The Humility-Action Balance

Over-humility is a failure mode. A vault full of "I'm 30 percent sure" on every claim becomes paralyzing and useless. The target is not maximum uncertainty; it is honest uncertainty. Most claims can be stated confidently and acted on confidently while still carrying an internal marker that revises under new evidence.

The test: would you bet on the claim at the odds your expressed confidence implies? If you would not bet at those odds, your confidence is too high. If you would bet at much higher odds, your confidence is too low.

## Key Points
- Calibration: confidence matches actual accuracy across claims; 80-percent claims come true 80 percent of the time
- Epistemic humility: acknowledge even well-evidenced beliefs may be wrong; hold strong views lightly
- PKM vaults implicitly encode confidence in declarative prose — explicit markers make calibration visible
- Calibration is trainable through prediction logs with explicit probabilities and feedback
- Miscalibration hides where confidence feels most secure: expertise, emotion, consensus, old beliefs, AI fluency
- LLM output warrants modest default confidence regardless of its rhetorical register
- The target is not maximum uncertainty but honest uncertainty — the betting test is a useful check

## Open Questions
- What prediction-log cadence produces the best calibration improvement without becoming burdensome?
- Can LLM tools help with calibration — flagging claims whose confidence markers diverge from cited evidence?
- How should a vault expose its aggregate calibration to its owner as a review signal?

## References
- Tetlock, P. & Gardner, D. (2015). *Superforecasting*
- Tetlock, P. — Good Judgment Project publications
- Yudkowsky, E. — LessWrong sequence on calibration
- Moore, D. & Healy, P. (2008). "The Trouble With Overconfidence"

## Related
- [[AI Wiki - PKM - Epistemology]]
- [[AI Wiki - PKM - Bayesian Epistemology]]
- [[AI Wiki - PKM - Fallibilism]]
- [[AI Wiki - PKM - Epistemic Hygiene]]
- [[AI Wiki - PKM - Epistemic Virtues]]
- [[AI Wiki - PKM - Justified True Belief]]
- [[AI Wiki - PKM - AI Sycophancy and PKM]]
- [[AI Wiki - PKM - Argumentation in PKM]]
