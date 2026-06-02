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
  - Duke, A. (2018) — Thinking in Bets
  - Tetlock, P. & Gardner, D. (2015) — Superforecasting
  - Kahneman, D. (2011) — Thinking, Fast and Slow
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-17T05:50
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Decision Journaling

Decision journaling is the practice of writing down, before an outcome is known, what decision you are making, why, what you expect to happen, and how confident you are. Later, you return to the entry with the result in hand and compare. The gap between the prediction and the outcome is the data metacognition needs to improve judgment — and the vault is the substrate that keeps the data honest.

## Why Decisions Need a Journal

Without a written record, the mind rewrites the past. Hindsight bias makes outcomes feel predicted even when they were not. Memory softens decisions that went badly and sharpens ones that went well. Kahneman and others have documented this so extensively that the correction is no longer controversial: if you want to know how you actually reasoned, you must freeze the reasoning at decision time and read it back after the fact without editing.

A decision journal is the minimum apparatus that freezes reasoning. It is also one of the few PKM practices whose payoff is unambiguous. Practitioners who maintain one for even six months typically discover specific, recurrent errors they did not know they were making — a confidence bias in a particular domain, a misreading of certain kinds of evidence, an over-weighting of anecdote over base rate.

## Minimum Viable Entry

A useful decision-journal entry is short. Annie Duke's *Thinking in Bets* frames the essentials as four fields, and most practical templates collapse to roughly this shape.

- **The decision** — What is being chosen. One sentence.
- **The context and alternatives** — Why this is a decision worth recording; what other options were on the table.
- **The expected outcome** — What you expect to happen, with a probability or confidence range.
- **What would surprise you** — The observations that would tell you your reasoning was wrong.

Entries can be richer — including emotional state, deadline pressure, information available — but the four fields above are sufficient for the feedback loop. The honesty of the pre-commitment matters more than the richness of the template. See [[AI Wiki - PKM - Calibration and Epistemic Humility]] for the calibration theory this supports.

## The Resolution Step

Most of the value comes from returning. A decision journal with many entries and no resolutions is a capture log, not a feedback system. When the outcome is known, append a resolution block:

- **What happened** — The observable outcome.
- **Process review** — Given what you knew at the time, was the decision sound? This is distinct from whether it worked out. Good decisions can have bad outcomes and vice versa.
- **Pattern spotted** — Any systematic tendency this entry illustrates, for later aggregation.

Duke emphasizes the process-versus-outcome separation, and it is the single move that distinguishes decision journaling from outcome chasing. A vault that only celebrates wins is not training judgment; a vault that evaluates the process independent of the outcome is.

## Vault Patterns That Work

A vault offers several affordances that notebook-based decision journaling lacks.

- **Templates enforce the minimum fields** — A Templater or QuickAdd template makes it faster to open a new decision entry than to skip one. See [[AI Wiki - PKM - Typed Notes]].
- **Tagging enables aggregation** — A `decision` tag plus topical tags lets a future review pull all career decisions, all technical decisions, all financial decisions, and inspect the pattern across domains.
- **Forward-dated review reminders** — A resolution-due date in frontmatter surfaces the entry for review at the right time. Manual review relies on memory; frontmatter plus a Dataview query does not.
- **Aggregate calibration analysis** — With dozens of resolved entries tagged by domain and confidence level, a vault can reveal base-rate miscalibration (e.g., "my 80-percent technical decisions came true 62 percent of the time").
- **Linkability** — Each decision can wikilink to the projects, people, and prior notes that informed it. This preserves the reasoning context that pure-prose journals lose.

See [[AI Wiki - PKM - Tagging and Metadata]] and [[AI Wiki - PKM - Periodic Reviews]] for the infrastructure this sits on.

## Decision vs. Outcome

Process quality and outcome quality are separately auditable. A well-reasoned decision can produce a bad outcome because the world is probabilistic. A poorly reasoned decision can produce a good outcome because luck exists. Training judgment requires grading both.

Outcome-only review produces a specific pathology: resulting. The decision is judged by whether it worked, not by whether it was correctly made. Over time, resulting rewards lucky recklessness and punishes careful but unlucky choices. The decision journal is the structural correction — the written process record makes process-quality assessable independent of outcome.

## Scope: When to Open an Entry

A decision-journal entry is worth its effort when the decision is consequential, non-reversible, or recurring. Trivial decisions do not need one; nor do fully reversible ones. Recurring decisions (hiring, content choices, technical picks) benefit most because the aggregated record eventually makes the pattern legible.

A useful heuristic: if you will still care about the decision six months from now, write it down. If the answer is no, spend the minute on something else.

## LLMs in the Loop

LLMs can participate as decision-journaling tools without displacing the mechanism. Productive roles: drafting the "what would surprise you" list by generating plausible disconfirmers the user did not consider; surfacing prior decisions of similar type for pattern comparison; running a structured post-mortem against the entry at resolution time. The journal remains the human's reasoning record; the LLM is a probe, not the author. See [[AI Wiki - PKM - AI Copilot for Knowledge Work]] for the broader pattern and [[AI Wiki - PKM - AI Sycophancy and PKM]] for a risk this practice is especially exposed to.

## Key Points
- Decision journaling: write decision, reasoning, expectation, and disconfirmers *before* the outcome is known
- Without pre-commitment, hindsight bias and memory revision corrupt the record
- Minimum fields: decision, context, expected outcome with confidence, what would surprise you
- Resolution step is where the value sits — without it, the journal is capture without feedback
- Grade process and outcome separately; "resulting" rewards lucky recklessness
- Vault affordances (templates, tags, Dataview, links) make decision journaling sustainable
- Open entries only for consequential, non-reversible, or recurring decisions
- LLMs can probe reasoning and seed disconfirmers but cannot substitute for pre-commitment

## Open Questions
- How many resolved entries does it take to detect a stable calibration bias?
- What cadence of review best converts entries into updated mental models without decaying into ritual?
- Does public decision journaling (or journaling shared with a small group) improve the process-versus-outcome separation further?

## References
- Duke, A. (2018). *Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts*
- Tetlock, P. & Gardner, D. (2015). *Superforecasting: The Art and Science of Prediction*
- Kahneman, D. (2011). *Thinking, Fast and Slow*
- Farnam Street / Shane Parrish — decision-journal templates and essays

## Related
- [[AI Wiki - PKM - Metacognition]]
- [[AI Wiki - PKM - Calibration and Epistemic Humility]]
- [[AI Wiki - PKM - Bayesian Epistemology]]
- [[AI Wiki - PKM - Fallibilism]]
- [[AI Wiki - PKM - Journaling and Reflection]]
- [[AI Wiki - PKM - Epistemic Status Markers]]
- [[AI Wiki - PKM - Periodic Reviews]]
- [[AI Wiki - PKM - Typed Notes]]
- [[AI Wiki - PKM - AI Sycophancy and PKM]]
