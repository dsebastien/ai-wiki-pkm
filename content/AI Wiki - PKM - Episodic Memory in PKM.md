---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - Muratcan Koylan, 'The File System Is the New Database' (2026-02) — experiences/decisions/failures logs
  - Cognitive psychology — Tulving's episodic/semantic memory distinction
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T08:51
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Episodic Memory in PKM

**Episodic memory** in PKM is the deliberate capture and structuring of *judgment* — why you made decisions, how they turned out, what failed and why — as a distinct vault layer from the *facts* that most PKM systems store. The concept is drawn from Endel Tulving's (1972) psychological distinction between *semantic* memory (facts, concepts) and *episodic* memory (events, contexts, personal experiences). Koylan's Personal OS (2026) is the first practitioner architecture to make the split first-class: alongside content/contacts/metrics files (semantic), the system maintains `experiences.jsonl`, `decisions.jsonl`, and `failures.jsonl` (episodic).

The architectural distinction: "There's a difference between an AI that has your files and an AI that has your judgment."

## The Three Log Types

Koylan's concrete schema:

### `experiences.jsonl`

- Key moments in your life/work
- **Emotional weight score** (1-10) — intensity of the experience's impact on you
- Used to surface patterns across life — what kinds of experiences recur, which ones were pivotal

### `decisions.jsonl`

- Key decisions, not just what you decided but *how* you decided
- Fields: options considered, reasoning for each, constraints, outcome (tracked retroactively)
- Example from Koylan: the Antler Canada $250K investment vs Sully.ai Context Engineer role decision — both options, reasoning, applied priorities ("Learning > Impact > Revenue > Growth"), and the framework ("Can I touch everything? Will I learn at the edge? Do I respect the founders?")

### `failures.jsonl`

- What went wrong; root cause; prevention steps
- Koylan: "the most valuable [log]; encodes pattern recognition that took real pain to acquire"

## Why It Matters

### Semantic PKM is incomplete

A vault full of highlights, atomic notes, and reference material tells an agent *what the user knows*. It does not tell the agent *how the user thinks*. Two people with identical reading material make different decisions; the difference lives in episodic memory, not semantic.

### Decisions are the high-leverage data

Most of what a personal AI agent should do is make or support *decisions* — which task to prioritize, whom to contact, whether to accept an opportunity, how to respond to a message. Decisions draw from experience, not facts. A vault that logs decisions is a vault that an agent can reason from.

### Failures are under-captured

Most people never systematically log their failures. The failures that matter are the ones with a story attached (what happened, why, what they'd do differently), which is usually told once and then lost. Explicit `failures.jsonl` makes this a first-class vault layer.

### Emotional weight gives retrieval signal

Koylan's 1-10 weight on experiences is a salience signal agents can use to surface what matters. Without it, all experiences are equally weighted and the agent cannot prioritize.

## Relationship to Existing PKM Concepts

- **[[AI Wiki - PKM - Daily Notes|Daily notes]]** — often contain episodic material but unstructured; episodic memory in the Koylan sense is *distilled* and *tagged* rather than chronological narrative
- **[[AI Wiki - PKM - Evergreen Notes|Evergreen notes]]** — semantic, not episodic; the distinction complements rather than replaces
- **[[AI Wiki - PKM - Personal Identity in PKM|Personal Identity]]** — identity notes *reference* patterns in experience/decision logs; they are the synthesis layer on top of raw episodic material
- **[[AI Wiki - PKM - Dots and Sub-Atomic Knowledge|Dots]]** — the OSK dots framework with its *wisdom*, *hypothesis*, and similar types overlaps with the episodic-memory concept, often serving the same function

## Implementation Patterns

### Append-only

The logs are append-only (JSONL format). Decisions don't get deleted when they change; new entries supersede. Failures don't get edited; new insights become new entries referencing the old. This matters because:

- Pattern analysis benefits from full history
- Agent reasoning can trace how your thinking evolved
- You avoid the bug where an agent overwrites prior judgment

### Retroactive outcome tracking

A decision is logged *when made*; outcomes are logged *later* as they unfold. This is a form of lightweight [[AI Wiki - PKM - Periodic Reviews|periodic review]] — asking "how did the decisions I made three months ago actually play out?"

### Emotional weight is cheap

A 1-10 score per experience takes two seconds. It is dramatically cheaper than writing a paragraph of analysis and nearly as useful for agent retrieval.

### Cross-reference to decision frameworks

If you have an explicit priority order ("Learning > Impact > Revenue > Growth" in Koylan's case) or decision frameworks, the decision log should reference them. Then an agent can apply your frameworks to new choices by pattern matching.

## Risks and Caveats

- **Privacy surface.** Episodic logs are more sensitive than most other vault content — they reveal how you think, what you fear, what you regret. Access control and backup discipline matter more.
- **Not for everyone.** Highly structured decision logging is effortful. Practitioners who try it briefly often stop. The value compounds, but only if the habit survives.
- **Confirmation bias.** Logging decisions with reasoning can ossify wrong frameworks if they're never challenged. Periodic review should include asking whether the logged reasoning was actually correct.
- **Retroactive reconstruction is degraded.** Logs written *after the fact* from memory are lower-quality than logs written *at the time of decision*. This is the PKM version of survivorship bias.

## Practical Starting Point

If you want to try this pattern without a full Koylan-style architecture:

1. Create three notes (or three JSONL files): `experiences`, `decisions`, `failures`
2. Every ~2 weeks, add 1-3 entries to each
3. For experiences, include a 1-10 weight
4. For decisions, include options considered and the framework you applied
5. For failures, include root cause and prevention
6. Every quarter, read the oldest entries and ask: "how did this turn out? Was the reasoning right?"

This is the minimum viable episodic memory layer. It is far less than Koylan's system but contains the core design move.

## Key Points

- Episodic memory = judgment layer distinct from factual/semantic PKM content
- Concept from Tulving (1972); applied to PKM architecture by Koylan (2026)
- Three canonical logs: experiences (with emotional weight), decisions (with reasoning + outcome), failures (with root cause + prevention)
- Matters because decisions are the high-leverage data agents should reason from
- Complements rather than replaces semantic PKM (evergreen notes, reference material)
- Append-only, retroactive outcome tracking, cross-referenced to frameworks
- Privacy surface and habit sustainability are the main practical risks

## Open Questions

- What is the minimum viable episodic memory practice that actually sustains and produces value?
- Can AI agents reliably *extract* episodic material from daily notes, or does it need explicit logging?
- How should episodic-memory logs interact with [[AI Wiki - PKM - Periodic Reviews|periodic reviews]] and retrospectives?

## References

- Muratcan Koylan, "The File System Is the New Database" (2026-02)
- Endel Tulving, "Episodic and Semantic Memory" (1972) — the psychological distinction this borrows from
- Related decision-journal practices (Jim Collins, Daniel Kahneman on decision journals)

## Related

- [[AI Wiki - PKM - Source - Koylan 2026-02 - File System Is the New Database]]
- [[AI Wiki - PKM - Personal OS]]
- [[AI Wiki - PKM - Personal Identity in PKM]]
- [[AI Wiki - PKM - Daily Notes]]
- [[AI Wiki - PKM - Periodic Reviews]]
- [[AI Wiki - PKM - Dots and Sub-Atomic Knowledge]]
- [[AI Wiki - PKM - Context Compounds]]
- [[AI Wiki - PKM - Agentic Constitution]]
- [[AI Wiki - PKM - Journaling and Reflection]]
- [[AI Wiki - PKM - Knowledge Rollover]]
