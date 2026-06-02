---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: high
maturity: draft
graduated_notes:
sources:
  - vault notes (AI Assistant Architecture, AI Agent Memory, AI Agent Identity, AI Agent Orchestration, AI Agent Routing, AI Agent Panels, AI Agent Skills)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T09:31
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - AI Agent Systems

AI Agent Systems for PKM go beyond "chat with your notes" by deploying specialized, persistent agents that each have their own identity, memory, skills, and domain expertise. Instead of one general-purpose AI, you build a team of specialists that collaborate on knowledge work.

## Architecture: Three Layers

A PKM-native AI assistant system follows a three-layer architecture:

### Bootstrap Layer
Configuration files checked into the vault define the system's behavior: CLAUDE.md (behavior rules), AGENTS.md (routing table, conventions), and shared context files. This is [[AI Wiki - PKM - Context-as-Code]] at the system level.

### Routing Layer
A receptionist pattern matches user intent to the right agent or panel. When intent is clear, routing is direct (writing request → Ghostwriter agent). When ambiguous, the receptionist reads the agent registry and proposes the best match. Routing decisions consider: domain match, current context, task complexity, and whether the task needs a single agent or a panel.

### Execution Layer
Specialized agents execute tasks within their domain. Each agent operates with its full context loaded: identity (SOUL.md), accumulated memory (MEMORY.md), shared rules, and relevant skills.

## Agent Anatomy

Each agent in the system has four components:

### Identity (SOUL.md)
Defines who the agent is: its role, personality, expertise domain, communication style, and behavioral constraints. A Ghostwriter agent writes in the user's voice; a Skeptic agent challenges assumptions; a Coach tracks goals and accountability. Identity ensures consistent behavior across sessions.

### Memory (MEMORY.md)
Accumulated knowledge specific to the agent's domain. Stored as plain Markdown — human-readable, editable, transparent. Two levels:
- **Shared memory** — Stable facts about the user, cross-agent preferences, lessons from past mistakes
- **Agent-scoped memory** — Knowledge specific to one agent's domain, curated over time

Each session adds entries. Over months, agents develop rich contextual understanding impossible to provide in a single prompt. This compounding only works if feedback is captured consistently.

### Skills
Codified procedures the agent can execute. See [[AI Wiki - PKM - AI Skills in PKM]]. A Researcher agent has search and synthesis skills. An Editor has review and style-checking skills. Skills are the agent's toolkit.

### Capabilities
What tools and integrations the agent has access to: file read/write, web search, browser automation, MCP servers, API connections.

## Panels: Multi-Agent Evaluation

Panels are groups of agents that evaluate content from multiple angles simultaneously. Instead of getting one perspective, you get five.

**Example — Pre-publish panel:**
- Editor (structure, clarity, grammar)
- Beginner (accessibility, jargon detection)
- Power User (depth, novelty, actionability)
- Hater (weak arguments, logical holes)
- Marketer (hooks, CTAs, conversion)

Each panel member writes an independent evaluation. The human gets a multi-perspective scorecard. Panels are defined as configurations listing which agents participate, what they evaluate, and in what format they report.

**Other panel types:** Product review, launch stress-test, debate, health/sustainability check, content strategy, retention analysis.

## Agent Memory: Vault-Native vs Database-Backed

Most AI frameworks store agent memory in opaque vector databases or key-value stores. The vault-native approach stores memory as plain Markdown files:

| Property | Vault-Native | Database-Backed |
|----------|-------------|-----------------|
| Readability | Human can open and read any memory file | Requires API or admin interface |
| Editability | Direct file editing to correct mistakes | Requires tooling or code |
| Transparency | Full visibility into what the agent "knows" | Black box |
| Portability | Plain files, no vendor lock-in | Tied to specific platform |
| Search | Text search, agent reasoning | Vector similarity |

The tradeoff: vault-native retrieval depends on the agent's ability to read and reason over text files, which is slower than vector lookup but richer in context.

## Orchestration Patterns

**Single agent** — One specialist handles the task end-to-end. Used for focused, domain-specific work.

**Panel** — Multiple agents evaluate the same artifact independently. Used for quality review and multi-perspective feedback.

**Team** — Multiple agents work in parallel toward a shared goal, each contributing their specialty. Used for complex, multi-faceted projects.

**Chain** — Agents pass work sequentially: researcher → writer → editor → reviewer. Used for production pipelines.

## Relationship to AKM

AI Agent Systems are the runtime infrastructure of [[AI Wiki - PKM - Agentic Knowledge Management]]. AKM describes the vision (AI as active knowledge work partner); agent systems are the implementation. The [[AI Wiki - PKM - Knowledge-Context Pipeline]] flows through agent systems: agents consume context, produce output, and contribute new knowledge back into the system.

## Key Points

- Agent systems deploy specialized, persistent agents with identity, memory, skills, and capabilities
- Three-layer architecture: bootstrap (config), routing (intent matching), execution (agent work)
- Panels provide multi-perspective evaluation from 3-5 agents simultaneously
- Vault-native memory is human-readable, editable, and transparent
- Orchestration patterns: single agent, panel, team, chain

## Open Questions

- How do you handle agent disagreements in panel evaluations?
- What is the right number of agents before the system becomes unwieldy?
- How do you detect and correct agent memory drift over time?

## References

- Vault: AI Assistant Architecture, AI Agent Memory, AI Agent Identity, AI Agent Orchestration, AI Agent Routing, AI Agent Panels

## Related

- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - AI Skills in PKM]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - Exocortex]]
- [[AI Wiki - PKM - LLM Wiki]]
