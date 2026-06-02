---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - "Multi-source synthesis: Matuschak 2026, Koylan 2026-02 and 2026-04, TfTHacker 2026, YB 2026 corpus, Karpathy LLM Wiki 2026"
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T08:54
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - The 2025-2026 Moment

A specific 12-18 month window, roughly mid-2025 through mid-2026, in which Personal Knowledge Management underwent a visible structural shift. The defining change: **the arrival of competent coding agents and LLMs with large, persistent context made the vault-as-agent-substrate practical for individual users**. Multiple independent practitioners converged on similar architectures almost simultaneously; the collective output reframed what a PKM system is for.

Naming the moment as a moment matters because the pattern is easier to see in retrospect than in the middle of it. Several of the framings that now feel obvious (Personal OS, agentic constitution, Knowledge Work PRs, vibe-coding) did not exist publicly eighteen months earlier.

## What Changed

Three preconditions fell into place roughly together:

### 1. Coding agents crossed a capability threshold

Claude Code, OpenAI Codex, Cursor's agent mode, and peers reached the point where *non-programmers could produce working software* through dialogue. [[AI Wiki - PKM - Vibe-Coding|Vibe-coding]] — prototyping without a specification — became a realistic practice rather than a demo. Nio Ono (via Matuschak): "I'm trying all kinds of ideas I just wouldn't have tried a year ago."

### 2. LLM context windows expanded enough to matter

Million-token contexts and prompt caching made it feasible to load a substantial personal vault on every interaction. The engineering pattern shifted from *retrieving from* a vault to *loading* a vault. Progressive disclosure (Koylan) became the design pattern because it was now tractable.

### 3. Practitioners published the architecture

Multiple independent practitioners documented working architectures within months of each other:

- **Koylan (2026-02):** Personal OS — 80+ file Git repo; progressive disclosure; episodic memory
- **YB (2026-01 to 2026-04):** Engineering Agency corpus — agentic constitution, Knowledge Work PRs, subroutines, context compounds
- **Karpathy (2026, date approximate):** LLM Wiki — AI incrementally builds interlinked markdown
- **TfTHacker (2026-04):** Obsidian as app platform demonstration
- **Matuschak (2026-03):** MIT HCI talk framing the architectural thesis

None of these cite each other as origin (Koylan's follow-up acknowledges Karpathy as "independent validation"); the simultaneity is evidence that the underlying shift was real and visible across the community.

## What Is Now Possible

Capabilities that existed as ideas in 2023 and became mundane by 2026:

- **Agents that behave like you** when given sufficient personal context
- **Vibe-coded personal plugins** ([[AI Wiki - PKM - Source - TfTHacker 2026 - Obsidian Is Secretly an App Platform|TfTHacker's Spanish-numbers plugin]] built in 1.5 days)
- **Context compounding** — accumulated personal notes producing super-linear agent improvements ([[AI Wiki - PKM - Context Compounds|see]])
- **Agent-proposed vault updates** via Knowledge Work PRs discipline
- **Personal OS** as a distinct pattern — file-based, Git-versioned, agent-native
- **Voice-in, structure-out pipelines** via OpenHome-style tooling
- **Episodic memory** as first-class vault layer

## What Is Still Not Solved

The moment is mid-transition; several major problems remain open as of mid-2026:

- **[[AI Wiki - PKM - Knowledge Transfer Pipeline|Knowledge transfer pipeline]]** — Koylan's diagnosis: architecture is easy, keeping the vault fed is hard. "Nobody wants to be the cron job for their own life."
- **Cross-tool portability** — each practitioner's Personal OS is platform-coupled; migration is non-trivial
- **Progressive disclosure reliability** — Vercel's evals show 56% skill-invocation failure rate; the pattern is not self-enforcing
- **Privacy surface** — rich personal context = sensitive personal data; access control and backup discipline are under-theorized
- **Standardization** — no agreed schema for Personal OS components; each practitioner invents their own
- **Onboarding cliff** — the practices are power-user territory; casual users cannot enter without significant investment

## Why Naming The Moment Matters

Three reasons for naming the 2025-2026 shift as a discrete moment:

### 1. Contemporary framings age fast

"Agentic constitution," "vibe-coding," "Knowledge Work PRs," "context compounds" are concept-vocabulary for a specific technological window. In 2028 some of these will be renamed, absorbed into larger frameworks, or obsolete. Knowing *when* they emerged helps future readers contextualize them.

### 2. The pattern is inherited from before

The moment did not invent PKM. It is a continuation of:

- Bush's Memex (1945)
- Nelson's hypertext (1963)
- Luhmann's Zettelkasten (1950s-1990s)
- Ahrens's *How to Take Smart Notes* (2017)
- The 2019-2020 tools-for-thought renaissance (Roam, Obsidian)

Each prior wave added capability; the 2025-2026 moment added **agent readability** on top of the existing substrate. Placing it in lineage prevents the false impression that it is a clean break.

### 3. The moment likely narrows

Agent capabilities and PKM practitioner experimentation are both compressing on short timescales. The pre-2025 practice (vault as human-only notebook) is becoming a niche; the post-2027 practice is not yet clear. The 2025-2026 moment may be identifiable later as *the* bridge period between two regimes, not a permanent steady state.

## Characteristic Artifacts of the Moment

If future historians wanted a small canon of primary sources for the 2025-2026 PKM shift, candidates include:

- **Matuschak, "Apps and Programming: Two Accidental Tyrannies"** — architectural frame
- **Koylan, "The File System Is the New Database"** — systematic practitioner architecture
- **Koylan, follow-up (2026-04)** — the pipeline-is-hard pivot
- **Karpathy, LLM Wiki** — parallel independent framing
- **YB, "Context Compounds"** + the agentic constitution/Knowledge Work PRs articulations
- **TfTHacker, "Obsidian Is Secretly an App Platform"** — the demonstration-with-artifact
- **Vercel, "AGENTS.md outperforms Skills"** — the counter-evidence on progressive disclosure

Each is short, practitioner-authored, and web-native. The canonical documents of this moment are blog posts and tweets, not books or papers — a telling fact about the tempo.

## What Comes Next (Speculation)

Predictions at moderate confidence:

- **Pipeline infrastructure will stabilize.** Read-it-later, voice capture, event-triggered routing will consolidate into fewer, more reliable tools. The Koylan "cron job for your own life" problem gets partial solutions.
- **Cross-tool standards will emerge** or fail to emerge. A common plugin/skill format that travels between Obsidian, Logseq, and successors is the obvious win; whether it actually materializes depends on vendor cooperation.
- **Episodic-memory practices will become mainstream.** Judgment-logging, not just note-taking, will be a distinct PKM practice by 2028.
- **The power-user cliff will shift.** Some of today's advanced practices will become defaults; the frontier will move.
- **Privacy will become a visible problem.** As Personal OSes accumulate sensitive material, the data-sovereignty conversation moves from advocacy to necessity.

## Key Points

- The 2025-2026 moment = a 12-18 month window when PKM shifted toward agent-readable vaults as a widespread practice
- Three preconditions fell into place: coding-agent capability, context-window scaling, practitioner publishing
- Multiple independent framings converged on the same direction (Koylan, YB, Karpathy, Matuschak, TfTHacker)
- Newly-possible: vibe-coded personal plugins, agent-as-partner workflows, context compounding, Personal OS patterns
- Still unsolved: knowledge transfer pipeline, cross-tool portability, progressive disclosure reliability, privacy, standardization
- The moment is a continuation of PKM history (Memex → Zettelkasten → tools-for-thought renaissance), not a clean break
- The canonical documents are blog posts and tweets — revealing about the tempo

## Open Questions

- Is the moment already over, ongoing, or yet to peak? Answerable only retrospectively.
- Which 2026 practices will age well vs. which will look dated by 2028?
- Does the moment produce a durable "Personal OS" category, or get absorbed into a larger AI-assistant category?

## References

- Full practitioner corpus: Matuschak 2026, Koylan 2026 (both pieces), YB 2026 corpus, TfTHacker 2026, Karpathy LLM Wiki
- Historical lineage: Bush 1945, Nelson 1963, Luhmann's Zettelkasten, Ahrens 2017, 2019-2020 tools-for-thought wave

## Related

- [[AI Wiki - PKM - Vault-as-Platform]]
- [[AI Wiki - PKM - Personal OS]]
- [[AI Wiki - PKM - Agentic Constitution]]
- [[AI Wiki - PKM - Context Compounds]]
- [[AI Wiki - PKM - Knowledge Work PRs]]
- [[AI Wiki - PKM - Vibe-Coding]]
- [[AI Wiki - PKM - Research Purgatory]]
- [[AI Wiki - PKM - Escape from Research Purgatory]]
- [[AI Wiki - PKM - Composability as PKM Architecture]]
- [[AI Wiki - PKM - LLM Wiki]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - AI Copilot for Knowledge Work]]
- [[AI Wiki - PKM - History of Note-Taking]]
- [[AI Wiki - PKM - Knowledge Transfer Pipeline]]
