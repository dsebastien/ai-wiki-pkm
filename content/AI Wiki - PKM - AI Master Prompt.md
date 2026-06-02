---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: high
maturity: draft
graduated_notes:
sources:
  - vault notes (AI Master Prompt, How to structure your AI Master Prompt)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T10:08
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - AI Master Prompt

An AI Master Prompt is a carefully structured document that provides relevant context and rules before you start interacting with AI. It is the practical entry point for [[AI Wiki - PKM - Context Engineering]] — the place where your PKM system meets your AI assistant.

## What a Master Prompt Contains

A well-structured master prompt includes:

- **General rules** — Behavior guidelines, communication style, constraints
- **Personal information** — Identity context (values, beliefs, goals, expertise)
- **Work/business context** — Projects, products, team, domain knowledge
- **Roles** — How the AI should behave in different contexts
- **Tasks** — Specific task definitions with description, goals, context, rules, inputs, and outputs
- **Configuration** — Tool access, permissions, formatting preferences

## Two Structural Approaches

### Single Long Document
One file containing everything. Easy to start with but does not scale:
- Hard to maintain (changes require finding the right section)
- Forces duplication (same context repeated for different tasks)
- Hits context limits fast (a 20-page master prompt wastes tokens on irrelevant sections)
- Cannot be shared or composed

### Knowledge Graph (Recommended)
Multiple documents in a linked structure. The master prompt becomes an entrypoint that references other files:
- No duplication (shared rules in one place, referenced by many tasks)
- Easier maintenance (change one file, all references update)
- Scalable via lazy loading (AI fetches what it needs from the graph)
- Composable (team members inherit shared context, layer personal context)

The entrypoint must include: knowledge base overview, architecture explanation, and instructions for navigating and loading context. This is [[AI Wiki - PKM - Context-as-Code]] in practice — CLAUDE.md → AGENTS.md → skills → agent configs → memory.

## The PKM Connection

The master prompt is where your PKM system becomes AI-accessible. The quality of AI output is directly proportional to the quality of context provided, which depends on the quality of the underlying knowledge base.

A master prompt grounded in a well-maintained vault (with identity notes, organized knowledge, consistent metadata) produces dramatically better results than one written from memory. Your [[AI Wiki - PKM - Single Source of Truth]] feeds your master prompt; your master prompt feeds your AI.

This is also implicit intent engineering: a master prompt already encodes roles, tasks, and success criteria — just not yet formalized as a discipline.

## Anti-Pattern

**The knowledge dump.** Sharing a huge knowledge base and hoping AI magically understands it all. Without structure, priority signals, and navigation instructions, more context means more noise. The AI needs a map, not just a territory.

## Key Points

- The master prompt is the practical entry point for context engineering
- Knowledge graph structure (multiple linked files) beats single long document
- The PKM vault feeds the master prompt; master prompt feeds the AI
- Entrypoint + lazy loading + composability = scalable context
- Anti-pattern: dumping everything without structure

## Open Questions

- How often should a master prompt be reviewed and updated?
- Can AI agents maintain their own master prompts through accumulated memory?
- What is the minimum viable master prompt for useful results?

## References

- Vault: AI Master Prompt, How to structure your AI Master Prompt

## Related

- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Context Entropy]]
- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - AI Agent Systems]]
- [[AI Wiki - PKM - Single Source of Truth]]
