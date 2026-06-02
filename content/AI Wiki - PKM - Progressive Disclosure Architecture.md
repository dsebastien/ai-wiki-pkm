---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - Muratcan Koylan, 'The File System Is the New Database' (2026-02)
  - Anthropic Agent Skills documentation (the progressive-disclosure pattern is standardized there)
  - Vercel, 'AGENTS.md outperforms Skills in our agent evals' (2026-01) — counter-evidence on progressive disclosure reliability
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T08:50
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Progressive Disclosure Architecture

**Progressive disclosure** in the PKM-agent sense is an architectural pattern in which context is loaded in *levels* rather than all at once — a lightweight routing layer points to module-specific instructions, which in turn point to specific data files. The pattern is designed around the two central facts of LLM context: finite context windows and U-shaped attention curves (tokens at the beginning and end are recalled better than those in the middle). Dumping everything into a prompt wastes capacity and degrades recall. Progressive disclosure makes loading *purposive*.

## The Pattern (3 Levels)

From Koylan's Personal OS implementation:

### Level 1 — Routing

- Always loaded
- Lightweight (a single `SKILL.md` or similar orientation file)
- Tells the agent *which module* to load
- Example content: "If the request is about writing, load the brand module. If it's about meetings, load the contacts module."

### Level 2 — Module Instructions

- Loaded only when the relevant module is relevant
- 40-100 lines each
- File inventory for the module
- Workflow sequences
- `<instructions>` block with domain-specific behavioral rules
- Example files: `CONTENT.md`, `OPERATIONS.md`, `NETWORK.md`

### Level 3 — Data

- Loaded last, only when the task actually requires it
- JSONL logs, YAML configs, research documents
- Agent reads *line by line* from JSONL rather than parsing the full file
- Maximum two hops from any request to any data item

## Why It Matters

### Attention Budget

LLMs have a mathematically measurable attention penalty for middle-of-context content. Filling the context window with content that isn't relevant to the current task doesn't just waste tokens — it *actively degrades* recall of what *is* relevant. Progressive disclosure preserves attention for what matters.

### Scalability

Without progressive disclosure, a 10,000-line vault forces you to either (a) stuff everything into context and suffer attention degradation, or (b) write custom retrieval every time. Progressive disclosure is the middle path: the architecture itself does the retrieval, using filesystem structure as an index.

### Mirrors Expert Cognition

Experts do not recall all their knowledge simultaneously. They recall a *routing layer* first ("this is a legal question" / "this is a debugging question"), then relevant subsystems, then specifics. Progressive disclosure encodes this pattern into the file structure.

## Relationship to [[AI Wiki - PKM - Context Layering|Context Layering]]

The two concepts are closely related but not identical:

| Context Layering | Progressive Disclosure |
|---|---|
| About the *hierarchy* of context specificity | About the *loading mechanism* for context |
| CSS-like specificity: global rules → project rules → task rules | Three levels: routing → module → data |
| Answers "which context wins when they conflict" | Answers "which context loads when" |
| Exists orthogonally to agent tooling | Specifically designed around agent tool loading patterns |

Progressive disclosure is context layering operationalized for file-based agent systems.

## Counter-Evidence: The Reliability Problem

Vercel's January 2026 evals on Next.js 16 APIs flagged a real failure mode: **"In 56% of eval cases, the skill was never invoked. The agent had access to the documentation but didn't use it."** Progressive disclosure relies on the agent *choosing to load* Level 2 and Level 3 content; if the agent doesn't realize it needs module instructions or data, disclosure stops at Level 1 and the task is attempted on routing alone.

This is a real limitation. Approaches that address it:

- **AGENTS.md pattern** (Vercel's proposal) — put critical content higher in the hierarchy so it's always-loaded; trade attention cost for reliability
- **Triggered auto-loading** — Koylan's reference-skill pattern (`user-invocable: false`) forces auto-load for critical skills like voice guides, bypassing agent judgment
- **Decision tables** — Koylan's `AGENT.md` pattern: explicit "if user says X, do steps 1-2-3" rules that reduce the need for agent routing inference

Koylan and Vercel are actually addressing the same problem from different directions. Progressive disclosure is not a pure solution; it's a design target that requires supporting mechanisms.

## Design Heuristics

1. **Make routing explicit.** Don't make the agent guess which module to load. Provide a decision table or explicit trigger conditions.
2. **Front-load critical invariants.** Rules that must apply regardless of task (safety, voice anti-patterns, never-do lists) should be always-loaded, not disclosed progressively.
3. **Auto-load for consistency, manual-invoke for precision.** Reference skills auto-load. Task skills manual-invoke.
4. **Keep Level 2 files short.** 40-100 lines. Enough to orient the agent; not so much that lost-in-middle kicks in.
5. **Schema-first Level 3.** JSONL schemas as first line, version fields, documented structure — so the agent can read a file without having to parse it fully.
6. **Measure the loading.** If you can't tell which level of context was active for a given response, you can't debug or improve the architecture.

## Beyond Koylan: The Pattern's Generality

Progressive disclosure as a design pattern is older than LLM agents — it appears in:

- **Software UI design** — beginner modes vs advanced panels
- **Documentation** — getting-started vs reference vs deep-dive
- **Human memory** — schema-first encoding, then elaboration
- **Pedagogy** — scaffolded instruction

What's new with LLMs is that the pattern has to be implemented in *context design* rather than in user interface — because the agent has no UI the user clicks through. The progressive disclosure happens through file system structure, instruction hierarchy, and skill registries.

## Key Points

- Progressive disclosure = context loaded in levels (routing → module → data) rather than all at once
- Designed around LLM attention budgets and U-shaped attention curves
- Canonical 3-level implementation in Koylan's Personal OS
- Not a pure solution — Vercel's evals show 56% skill-invocation failure rate
- Supporting mechanisms required: always-loaded invariants, auto-loading reference skills, explicit decision tables
- Pattern is older than LLMs; what's new is implementation in context rather than UI

## Open Questions

- What is the reliability threshold (% of correct skill invocations) below which progressive disclosure stops being a win?
- Should critical invariants be duplicated at multiple levels or always-loaded once? Different tradeoffs.
- How do agent memory features (Claude's memory tool, etc.) interact with progressive disclosure — replace it, complement it, or make it more reliable?

## References

- Muratcan Koylan, "The File System Is the New Database" (2026-02)
- Anthropic Agent Skills documentation
- Vercel, "AGENTS.md outperforms Skills in our agent evals" (2026-01)

## Related

- [[AI Wiki - PKM - Source - Koylan 2026-02 - File System Is the New Database]]
- [[AI Wiki - PKM - Personal OS]]
- [[AI Wiki - PKM - Context Layering]]
- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - AI Master Prompt]]
- [[AI Wiki - PKM - Agentic Constitution]]
- [[AI Wiki - PKM - Context Compression]]
- [[AI Wiki - PKM - AI Skills in PKM]]
