---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: high
maturity: draft
graduated_notes:
sources:
  - vault notes (Context-as-Code, Personal Context Management, Context Management Maturity Model, Knowledge-Context Pipeline)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T09:29
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Context-as-Code

Context-as-Code is the practice of treating AI context definitions as version-controlled, reviewable, testable code rather than ephemeral prompt text. Just as Infrastructure-as-Code brought software engineering discipline to server configuration, Context-as-Code brings engineering discipline to how AI agents understand and interact with your knowledge, preferences, and workflows.

## Why It Matters

Without Context-as-Code, AI context is:
- **Ephemeral** — Lost when a conversation ends
- **Unreviewable** — No one can see what instructions the AI is operating under
- **Unreproducible** — Each session starts from scratch or from opaque memory
- **Unshared** — One person's AI setup cannot be extended by another

With Context-as-Code, context becomes:
- **Reviewable** in pull requests (teams can review AI configuration changes)
- **Versionable** via git (rollback to previous AI behavior)
- **Testable** (verify that context changes produce expected outputs)
- **Shareable** (teams inherit and extend via standard VCS workflows)
- **Auditable** (compliance can inspect exactly what the AI "knows")

## Manifestations

Context-as-Code appears in several concrete forms:

**CLAUDE.md / AGENTS.md** — Behavior rules, conventions, and routing instructions checked into the repository. These define how the AI assistant behaves across all sessions.

**Skill definitions (SKILL.md)** — Codified procedures with YAML frontmatter and Markdown instructions. See [[AI Wiki - PKM - AI Skills in PKM]]. Each skill is a reusable, version-controlled capability.

**Agent configurations** — Identity files (SOUL.md), memory files (MEMORY.md), and capability definitions stored as plain Markdown in the vault. See [[AI Wiki - PKM - AI Agent Systems]].

**MCP server configs** — Tool and integration definitions that declare what external services the AI can access.

**Hook definitions** — Event-driven behaviors (e.g., "before every commit, run linting") stored in settings files.

## The Context Management Hierarchy

Context-as-Code operates at multiple scales:

### Personal Context Management (PCM)
Curating the context layer that ensures AI aligns with you. Includes master prompts, identity context (values, beliefs, goals), memory systems, skills, and agents. PCM recognizes that AI output quality is directly proportional to how well the AI understands your full context.

PCM is PKM reimagined for the AI era: your second brain becomes your AI's brain too.

### Team Context Management (TCM)
Shared context across a team: coding conventions, architectural decisions, domain terminology, project context. Team members inherit shared context and layer personal context on top.

### Enterprise Context Management (ECM)
Organization-wide governance: compliance rules, security policies, brand voice, approved tools. Flows down through teams to individuals via context inheritance.

### Context Inheritance
Each level inherits from the level above. Project context inherits enterprise and team context. Individuals layer personal context on top. This mirrors how organizations actually work: global rules, team conventions, personal preferences.

## Context Management Maturity Model

Seven dimensions track maturity from ad-hoc to sophisticated:

| Dimension | Immature | Mature |
|-----------|----------|--------|
| Scope | Ad-hoc prompts per conversation | Structured, persistent context across all interactions |
| Lifecycle | Static, set-and-forget | Actively maintained, reviewed, evolved |
| Memory | None or built-in only | Managed, curated, auditable memory systems |
| Skills | Repetitive manual instructions | Codified skills that standardize outputs |
| Sharing | Individual silos | Layered sharing (PCM → TCM → ECM) |
| Governance | No policies | Clear policies on AI context access |
| Feedback | None | Agents learn from outcomes and update context |

**Diagnostic questions:** Do you repeat yourself to AI? Does AI know your goals, not just your current question? Can a new team member's AI get productive immediately?

## Relationship to the Knowledge-Context Pipeline

Context-as-Code is the bridge between knowledge management and AI execution. The [[AI Wiki - PKM - Knowledge-Context Pipeline]] describes the full loop: Knowledge Capture → Organization → Context Engineering → AI Output → New Knowledge. Context-as-Code is the implementation pattern for the "Context Engineering" stage.

## Key Points

- Context-as-Code brings version control, review, and sharing to AI configuration
- Manifests as CLAUDE.md, SKILL.md, SOUL.md, MEMORY.md, and hook definitions
- Context management operates at personal, team, and enterprise levels with inheritance
- PCM is PKM reimagined for AI: your knowledge system becomes your AI's context
- Maturity ranges from ephemeral prompts to governed, evolving context systems

## Open Questions

- How do you test context changes before deploying them?
- What is the right granularity for context version control?
- How do you handle context conflicts between team and personal levels?

## References

- Vault: Context-as-Code, Personal Context Management (PCM), Context Management Maturity Model, Knowledge-Context Pipeline

## Related

- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - AI Skills in PKM]]
- [[AI Wiki - PKM - AI Agent Systems]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - LLM Wiki]]
- [[AI Wiki - PKM - Plain Text and Interoperability]]
- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
