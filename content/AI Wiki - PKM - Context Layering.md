---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - vault notes
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T10:12
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Context Layering

Context layering is the architectural pattern of organizing AI context into hierarchical layers with defined scope, precedence, and inheritance. Like CSS specificity, the most specific layer wins when layers conflict. It explains why [[AI Wiki - PKM - Context-as-Code]] uses directory hierarchies and why your personal vault is one layer in a larger context stack.

## The Layer Architecture

From broadest to narrowest scope:

1. **Enterprise layer.** Organization-wide policies, compliance rules, shared knowledge bases. Applies to all teams and individuals.
2. **Team layer.** Project conventions, shared skills, team-specific rules. Inherits enterprise constraints and adds team-level context.
3. **Personal layer.** Individual preferences, personal knowledge, style, identity. Your PKM vault lives here. Inherits team context and adds personal customization.
4. **Task layer.** Context specific to the current operation. Loaded dynamically, highest precedence for its duration.

## Precedence Rules

When layers conflict, narrower scope wins: task overrides personal, personal overrides team, team overrides enterprise. This mirrors CSS specificity, environment variable inheritance, and configuration override chains.

The principle: context closer to the action takes priority. An enterprise style guide says "write formally." Your personal identity notes say "write casually." For your personal newsletter, the personal layer wins. For a company report, the enterprise layer should win; but the mechanism is the same.

## Why Layering Matters for PKM

Your personal vault is not the entire context stack. When working with team AI systems, your personal notes are one input layer alongside team documentation, project requirements, and task-specific instructions. Understanding layering helps you design your PKM for composability rather than standalone use.

Practically, this means: identity notes and style guides should be written as overridable defaults, not absolute rules. Project-specific conventions should be separate from personal conventions so they can be loaded independently. The same note structure that makes your vault useful to you should integrate cleanly into team and enterprise layers.

## The Claude Code Example

Claude Code implements context layering directly:

- **Enterprise:** organization-wide settings and MCP servers
- **Team:** project CLAUDE.md, AGENTS.md, shared [[AI Wiki - PKM - AI Skills in PKM]]
- **Personal:** user settings, personal memory, ~/.claude config
- **Task:** conversation context, skill loaded for the current operation

Each layer inherits from above and can override. Root CLAUDE.md provides project-wide instructions; subfolder CLAUDE.md adds directory-specific rules; skill-level instructions override both for the duration of a task.

## Key Points

- Four layers: enterprise, team, personal, task; narrower scope wins
- Mirrors CSS specificity and configuration inheritance patterns
- Your PKM vault is the personal layer in a larger stack
- Design notes for composability: overridable defaults, not absolute rules

## Open Questions

- How should conflicts between layers be surfaced to the user rather than silently resolved?
- Can AI agents dynamically adjust which layer takes precedence based on task type?
- What happens when enterprise policies contradict personal values in the context stack?

## References

- Vault: Context Layering, Context-as-Code

## Related

- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - AI Skills in PKM]]
- [[AI Wiki - PKM - AI Master Prompt]]
- [[AI Wiki - PKM - AI Agent Systems]]
- [[AI Wiki - PKM - Context Entropy]]
- [[AI Wiki - PKM - PKM for Teams]]
