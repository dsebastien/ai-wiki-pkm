---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: high
maturity: draft
graduated_notes:
sources:
  - vault notes (AI skills operationalize passive knowledge, AI Agent Skills, From Smart Notes to AI Skills, AI Skill Portability, AI Skill Scoping)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T09:30
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - AI Skills in PKM

AI Skills bridge the gap between passive knowledge (notes sitting in files) and active wisdom (knowledge that participates in your thinking and work). They are the mechanism by which a PKM system stops being a reference library and becomes an executable toolkit.

## The Problem: Three Friction Points

Notes are passive. For a note to be useful, you must:
1. **Remember it exists** at the right moment
2. **Find it** among thousands of other notes
3. **Figure out how to apply it** to your current situation

Each friction point is a failure point. Most captured knowledge never gets reused, not because it is low quality but because retrieval and application require too much effort at the moment of need.

## The Solution: Operationalized Knowledge

An AI Agent Skill is a codified procedure that an AI agent can execute. Unlike a note (which waits to be found), a skill shows up when relevant and applies frameworks to your actual problems.

**The transformation pipeline:**
```
Passive notes → Connected notes → AI Skills → Composable agent capabilities
```

This is the final step in the PKM process: knowledge becomes actionable. See [[AI Wiki - PKM - Knowledge-Context Pipeline]].

## The AI Agent Skills Standard

AI Agent Skills are an open standard specification for giving AI agents reusable capabilities and domain knowledge. Originally developed by Anthropic for Claude Code and released as an open standard in December 2025.

**Structure:** A skill is a directory containing a `SKILL.md` file with YAML frontmatter (name, description, triggers) and Markdown instructions the agent follows when activated.

**Progressive disclosure design:**
- At startup: only name + description loaded (~100 tokens per skill)
- On activation: full instructions loaded
- On demand: supporting files pulled in

This keeps context efficient — hundreds of skills can be available without overwhelming the agent.

**Industry adoption:** Within months, the standard was adopted by Claude Code, Cursor, GitHub Copilot, OpenAI Codex, Gemini CLI, Windsurf, Roo Code, and many more. One of the few genuinely cross-platform standards in the AI agent ecosystem.

**Complementary to MCP:** Model Context Protocol (MCP) standardizes how agents connect to external tools and data (the "how"). Agent Skills standardize how to package instructions and domain knowledge (the "what to do"). Together they give agents both capabilities and knowledge.

## From Smart Notes to AI Skills

A concrete method for turning book knowledge into executable wisdom:

1. **Read and capture** — Take smart/literature notes from a non-fiction book, capturing frameworks, mental models, decision criteria, and actionable principles in your own words
2. **Atomize** — Break into [[AI Wiki - PKM - Atomic Notes]], one clear idea each
3. **Generate skills** — Ask an AI agent to create a skill from your notes. Example: "Read my notes about atomic habits and create a skill that helps me acquire new habits efficiently."
4. **Compose and apply** — Use skills in daily work. Skills from different books compose together.

**Concrete examples:**
- Negotiation book → preparation checklist and BATNA analysis skill
- Writing book → draft review skill against the author's principles
- Decision-making book → decision framework application skill
- Business strategy book → plan audit skill against strategic patterns

## Composability: The Multiplier

Skills from different sources work together. A writing skill + persuasion framework + structural thinking model compose into something greater than any single source. This is [[AI Wiki - PKM - Compounding Knowledge]] applied to capabilities, not just information.

## Skill Design Principles

**Scoping:** A skill should do one thing well. Overly broad skills produce generic results. Overly narrow skills are rarely triggered. The right scope maps to a concrete workflow or decision type.

**Portability:** Skills stored as plain Markdown in standard directories work across machines, tools, and AI providers. No vendor lock-in.

**Testability:** A well-scoped skill can be tested: give it a known input, verify the output matches expectations.

## Key Points

- Notes are passive; skills are active — they show up when relevant and apply knowledge to your problems
- AI Agent Skills are an open standard (SKILL.md) with broad industry adoption
- The pipeline: capture → atomize → generate skills → compose and apply
- Skills from different sources compose together, compounding capability
- Complements MCP: skills are "what to do," MCP is "how to connect"

## Open Questions

- How do you maintain skill quality as the underlying knowledge evolves?
- What is the optimal number of skills before context overhead outweighs benefit?
- Can skills be auto-generated from well-structured atomic notes without human guidance?

## References

- Vault: AI skills operationalize passive knowledge, AI Agent Skills, From Smart Notes to AI Skills
- agentskills.io (open standard specification)

## Related

- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - Atomic Notes]]
- [[AI Wiki - PKM - Compounding Knowledge]]
- [[AI Wiki - PKM - AI Agent Systems]]
