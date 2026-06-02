---
wiki_name: PKM
wiki_role: source_summary
explored: false
ai_generated: true
confidence: high
maturity: substantial
graduated_notes:
sources:
  - "Muratcan Koylan, 'The File System Is the New Database: How I Built a Personal OS for AI Agents,' X thread, 2026-02-21, https://x.com/koylanai/status/2025286163641118915"
  - Muratcan Koylan, Agent Skills for Context Engineering GitHub repo, https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering
credibility_note: High-tier practitioner source. Author is Context Engineer at Sully.ai; open-source work cited in academic research; 8,000+ GitHub stars on relevant repos. Presents a detailed, reproducible architecture with explicit trade-offs and post-mortems, not just claims.
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T08:47
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Source - Koylan 2026-02 - File System Is the New Database

## Citation

Muratcan Koylan, "The File System Is the New Database: How I Built a Personal OS for AI Agents," X thread, February 21, 2026. URL: https://x.com/koylanai/status/2025286163641118915. Framework repo: https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering

## Overview

The most systematic practitioner-level essay yet published on [[AI Wiki - PKM - Context Engineering|context engineering]] for personal AI agents. Koylan describes a file-based, Git-versioned Personal OS of 80+ markdown/YAML/JSONL files — no database, no API, no build step — structured for LLM agents to read natively. The essay's contribution is less the fact of a vault-as-agent-substrate (that thesis is widely shared) and more the *specific architectural decisions* that make it work at scale: progressive disclosure, format-function mapping, agent instruction hierarchies, and an episodic-memory design that encodes *judgment* rather than just facts.

## Core Thesis

**"This is context engineering, not prompt engineering."** Prompt engineering asks how to phrase a question better. Context engineering asks *what information does this AI need to make the right decision, and how do I structure that information so the model actually uses it?* The shift is from optimizing individual interactions to designing information architecture.

The concrete form: a Git repository of ~80 files in markdown/YAML/JSONL that any AI tool (Cursor, Claude Code) can read to have instant context on who the user is, how they write, what they're working on, and how they make decisions.

## Architectural Pillars

### 1. Attention Budget

LLMs have finite context windows with **U-shaped attention curves** — tokens at the beginning and end are recalled better than those in the middle. This is "mathematically measurable." Implication: dumping everything into a system prompt actively degrades performance. The design response is progressive disclosure (below).

### 2. Progressive Disclosure (3 levels)

Instead of loading all 80+ files at once:

- **Level 1 — Routing** (`SKILL.md`): always loaded; lightweight; tells the agent which module is relevant ("this is a content task, load the brand module")
- **Level 2 — Module instructions** (`CONTENT.md`, `OPERATIONS.md`, `NETWORK.md`): 40-100 lines each; file inventories, workflow sequences, `<instructions>` blocks with domain behavioral rules; loaded only when that module is needed
- **Level 3 — Data** (JSONL logs, YAML configs, research docs): loaded last, only when the task requires them; agents read line-by-line from JSONL rather than parsing whole files

Maximum two hops from any request to any piece of information.

### 3. Format-Function Mapping

Each format chosen for a specific reason:

- **JSONL for logs** — append-only by design (prevents overwrite bugs); stream-friendly (read line by line); each line is self-contained valid JSON
- **YAML for configuration** — hierarchical data; supports comments; human-readable
- **Markdown for narrative** — LLMs read it natively; renders everywhere; clean Git diffs

Every JSONL file starts with a schema line: `{"_schema": "contact", "_version": "1.0", ...}` so agents always know the structure before reading data.

### 4. Agent Instruction Hierarchy

Three scoped layers of instructions to prevent conflict:

- **Repository level** (`CLAUDE.md`) — onboarding document, read first, full project map
- **Brain level** (`AGENT.md`) — 7 core rules + decision table mapping common requests to action sequences
- **Module level** (each directory) — domain-specific behavioral constraints

Decision table example: "User says 'send email to Z'" → Step 1 look up contact in HubSpot → Step 2 verify email → Step 3 send via Gmail.

### 5. Episodic Memory (judgment, not facts)

Most "second brain" systems store facts. Koylan's stores judgment via three append-only logs:

- **`experiences.jsonl`** — key moments with emotional weight scores (1-10)
- **`decisions.jsonl`** — key decisions with reasoning, alternatives considered, outcomes tracked
- **`failures.jsonl`** — what went wrong, root cause, prevention steps

"There's a difference between an AI that has your files and an AI that has your judgment."

### 6. Cross-Module References

Flat-file relational model — no database but structured enough for joins. `contact_id` in `interactions.jsonl` points to `contacts.jsonl`; `pillar` in `ideas.jsonl` maps to content pillars in `identity/brand.md`. Modules isolated for loading, connected for reasoning.

## The Skill System

Two kinds of skills:

- **Reference skills** (`user-invocable: false`) — voice guide, writing anti-patterns; auto-load whenever the task involves writing
- **Task skills** (`disable-model-invocation: true`) — `/write-blog`, `/topic-research`; invoked explicitly; become the agent's complete instruction set for that task

Auto-loading solves the consistency problem ("I don't have to remember to say 'use my voice'"). Manual invocation solves the precision problem (different quality gates for different task types).

Skills **reference source modules, never duplicate content** — single source of truth.

## The Voice System

Voice encoded as structured data:

- Five attribute scales rated 1-10 (Formal/Casual: 6, Serious/Playful: 4, Technical/Simple: 7, Reserved/Expressive: 6, Humble/Confident: 7)
- `anti-patterns.md` — 50+ banned words across three tiers, banned openings, structural traps, hard limit of one em-dash per paragraph
- "It's easier to define what you're NOT than what you are"
- 4-pass editing: structure → voice → evidence → read-aloud

## File Inventory

- **11 JSONL files** — posts, contacts, interactions, bookmarks, ideas, metrics, experiences, decisions, failures, engagement, meetings
- **6 YAML files** — goals, values, learning, circles, rhythms, heuristics
- **50+ Markdown files** — voice guides, research, templates, drafts, todos

## Post-Mortems (author-flagged)

1. **Over-engineered initial schemas.** 15+ fields per entry, most empty. Agents struggle with sparse data. Cut to 8-10 essential fields.
2. **Voice guide too long.** Version 1 was 1,200 lines — agent drifted by paragraph 4 (lost-in-middle). Restructured to front-load distinctive patterns in first 100 lines.
3. **Module boundaries matter.** Having identity and brand in one module meant loading the entire bio for voice-only tasks. Splitting cut token usage 40%.
4. **Append-only is non-negotiable.** Lost 3 months of engagement data once when an agent rewrote `posts.jsonl` instead of appending. JSONL's append-only isn't just convention — it's safety.

## Key Concepts

- Personal OS (Personal Brain OS) — file-based Git repo as agent substrate
- Context engineering (as distinct from prompt engineering)
- Attention budget / U-shaped attention curve
- Progressive disclosure architecture (3 levels)
- Format-function mapping
- Agent instruction hierarchy (repo/brain/module)
- Episodic memory (experiences + decisions + failures as judgment encoding)
- Cross-module flat-file relational model
- Reference vs task skills
- Voice-as-structured-data + anti-patterns
- Schema-first JSONL with version fields

## Why This Matters for PKM

- **Defines the state-of-the-art for agent-consumable vaults as of early 2026.** Multiple contemporary practitioners (YB, TfTHacker, Karpathy's LLM Wiki) converge on similar ideas; Koylan's essay is the most systematic treatment.
- **The judgment vs facts distinction is central.** Most PKM systems store *what happened*; Koylan's argues for storing *what you thought about what happened and what you'd do differently*. This is the difference between a second brain that remembers and a second brain that thinks like you.
- **Sparsity matters.** The agent-behavior findings on sparse data and lost-in-middle attention have direct implications for how to design vault note templates — they argue against optional-field-heavy templates and long identity notes.
- **Format function matching is PKM-universal.** The JSONL-for-logs, YAML-for-config, Markdown-for-narrative split generalizes beyond Koylan's specific implementation.

## Related
- [[AI Wiki - PKM - File Over App]]

- [[AI Wiki - PKM - Personal OS]]
- [[AI Wiki - PKM - Progressive Disclosure Architecture]]
- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - Episodic Memory in PKM]]
- [[AI Wiki - PKM - Agentic Constitution]]
- [[AI Wiki - PKM - LLM Wiki]]
- [[AI Wiki - PKM - Knowledge Work PRs]]
- [[AI Wiki - PKM - Composability as PKM Architecture]]
- [[AI Wiki - PKM - Context Layering]]
- [[AI Wiki - PKM - Context Compounds]]
- [[AI Wiki - PKM - AI Master Prompt]]
- [[AI Wiki - PKM - Vault Maintenance]]
