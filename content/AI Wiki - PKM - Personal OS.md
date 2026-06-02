---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - Muratcan Koylan, 'The File System Is the New Database' (2026-02) and follow-up (2026-04)
  - Contemporary practitioner convergence (Karpathy LLM Wiki, YB agentic vault, TfTHacker plugin platform)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T08:49
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Personal OS

A **Personal OS** is a file-based, Git-versioned, user-owned information architecture designed for AI agents to read natively — an evolution of the PKM vault from "notes a human reads" to "context a human and their agents share." Muratcan Koylan's "Personal Brain OS" (2026) is the canonical worked example: ~80 files in markdown/YAML/JSONL, no database, no API, no build step, structured so any AI tool pointed at the repository has instant context on identity, voice, goals, contacts, and decisions.

The term also surfaces in adjacent framings: Karpathy's [[AI Wiki - PKM - LLM Wiki|LLM Wiki]], YB's [[AI Wiki - PKM - Agentic Constitution|agentic constitution]] + subroutines, TfTHacker's Obsidian-as-app-platform argument. All describe the same direction with different emphasis.

## Core Claim

**The filesystem is enough.** You do not need a database, vector store, specialized retrieval system, or cloud service to build a personally-useful context substrate for AI agents. Markdown, YAML, and JSONL on disk, versioned with Git, read by LLMs directly, are sufficient.

This is the *local-first*, *user-owned*, *vendor-independent* end of the PKM spectrum. The opposite end is SaaS PKM (Notion, Evernote), where the user's context is rented from the vendor.

## Why Personal OS, Not Just Vault

"Vault" names a content store. "Personal OS" names the *operating system* layer around the content — the routing, the instructions, the workflows, the skills, the orchestration. The difference:

| Vault | Personal OS |
|---|---|
| "My notes" | "My notes + how I work + how my agents work" |
| Read by me | Read by me and by my agents |
| Organized for my recall | Organized for routing + recall + agent action |
| Growth = more notes | Growth = more notes + more skills + better routing |
| Success = findability | Success = agents behaving like me |

The Personal OS frame makes explicit that the agent-substrate role of a modern vault is a first-class design concern, not incidental.

## Design Principles (across the practitioner corpus)

### 1. User-owned, local-first

Files live on disk. Git versions them. No hosted service is required. The user can move everything to a new machine, a new tool, a new agent — nothing is trapped in a vendor database.

### 2. Plain-text substrates only

Markdown, YAML, JSONL. No binary formats. LLMs read them natively. Humans read them natively. Diffs work. Merges work. Grep works.

### 3. Schema-first JSONL

Koylan's pattern: every JSONL file begins with a schema line (`{"_schema": "contact", "_version": "1.0", ...}`). Agents know the shape before reading data. Versioning is explicit.

### 4. Progressive disclosure

Not everything loads at once. A small routing layer points to a larger module layer points to a larger data layer. See [[AI Wiki - PKM - Progressive Disclosure Architecture]].

### 5. Separation of knowledge and judgment

Separate stores for facts (content, contacts, metrics) and judgment ([[AI Wiki - PKM - Episodic Memory in PKM|episodic memory]] — experiences, decisions, failures).

### 6. Cross-module references without coupling

Flat-file relational model: `contact_id` in `interactions.jsonl` references `contacts.jsonl`; `pillar` in `ideas.jsonl` references `brand.md`. Modules isolated for loading, connected for reasoning.

### 7. Agents have instructions too

`CLAUDE.md` / `AGENTS.md` at the repo level, `AGENT.md` at the brain level, per-module instruction files. Instructions are themselves vault content, not something external.

## Components

A mature Personal OS typically contains some or all of:

- **Identity layer** — voice guide, values, goals, manifesto, [[AI Wiki - PKM - Personal Identity in PKM|personal identity]] notes
- **Content layer** — templates, posts log, ideas, drafts, publication metrics
- **Relationships layer** — contacts, interactions, circles
- **Knowledge layer** — research, highlights, reference material
- **Memory layer** — experiences, decisions, failures (episodic)
- **Process layer** — workflows, routines, skills, automation scripts
- **Agent layer** — instruction hierarchy, skill registry, routing

Not every Personal OS has all components; most start with a subset and accrete.

## Contrasts with Related Concepts

- **vs. [[AI Wiki - PKM - LLM Wiki|LLM Wiki]]** — LLM Wiki emphasizes AI-maintained interlinked knowledge articles with source provenance; Personal OS is broader and includes workflow, skills, and episodic memory
- **vs. [[AI Wiki - PKM - Agentic Constitution|Agentic Constitution]]** — the agentic constitution is *one file* within a Personal OS, the orientation document every agent reads first
- **vs. [[AI Wiki - PKM - Building a Second Brain|Second Brain]]** — Second Brain is human-reader-oriented; Personal OS is human-and-agent-reader-oriented. Overlapping artifacts, different design emphasis.
- **vs. [[AI Wiki - PKM - Exocortex|Exocortex]] / Extended Mind** — Exocortex is the cognitive framing; Personal OS is the architectural instantiation

## The Open Problem

After two years of building, Koylan's own (2026-04) assessment: **architecture is the easy part. Keeping it fed is the hard part.** See [[AI Wiki - PKM - Knowledge Transfer Pipeline]]. The compound is: file system + routing + skills + episodic memory is solved as a *structure*; the ongoing labor of placing material in the right files at the right time in the right shape is not.

This is the pipeline problem: capture tools, processing pipelines, trigger APIs, agent-driven routing. "Nobody wants to be the cron job for their own life" (Koylan). The next generation of Personal OS tooling likely competes on *pipeline automation*, not *file structure*.

## Key Points

- Personal OS = file-based, user-owned agent-readable context substrate
- Canonical worked example: Koylan's Personal Brain OS (2026)
- Evolution of vault from "content store" to "operating-system-around-content"
- Plain-text only; Git-versioned; no database or vendor service
- Design principles: local-first, progressive disclosure, schema-first, separated knowledge/judgment, cross-module references, agents-have-instructions-too
- Contrasts: broader than LLM Wiki, inclusive of Agentic Constitution, beyond Second Brain
- Current open problem: keeping the Personal OS fed; architecture alone is insufficient

## Open Questions

- Will a standardized Personal OS schema emerge across the practitioner community, or will each practitioner maintain their own?
- How much of a Personal OS's value requires user-specific tuning vs. general best-practice templates?
- What is the transition cost when migrating between AI agent platforms with an already-compounded Personal OS?

## References

- Muratcan Koylan, "The File System Is the New Database" (2026-02)
- Andrej Karpathy, LLM Wiki pattern
- YB, Claude-Obsidian setup + agentic constitution articulation
- TfTHacker, Obsidian as app platform

## Related

- [[AI Wiki - PKM - Source - Koylan 2026-02 - File System Is the New Database]]
- [[AI Wiki - PKM - Source - Koylan 2026-04 - Knowledge Transfer Pipeline as the Open Problem]]
- [[AI Wiki - PKM - Progressive Disclosure Architecture]]
- [[AI Wiki - PKM - Episodic Memory in PKM]]
- [[AI Wiki - PKM - Knowledge Transfer Pipeline]]
- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - LLM Wiki]]
- [[AI Wiki - PKM - Agentic Constitution]]
- [[AI Wiki - PKM - Building a Second Brain]]
- [[AI Wiki - PKM - Exocortex]]
- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
- [[AI Wiki - PKM - Plain Text and Interoperability]]
- [[AI Wiki - PKM - Context Compounds]]
- [[AI Wiki - PKM - Vault-as-Platform]]
