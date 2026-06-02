---
wiki_name: PKM
wiki_role: source_summary
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - "YB, 'Revisiting the Memex: A soul, heartbeat, and cron jobs,' Engineering Agency Substack, 2026-02-20, https://engineeringagency.substack.com/p/revisiting-the-memex"
  - Vannevar Bush, 'As We May Think,' The Atlantic (1945)
credibility_note: Single-author practitioner essay. Historical framing draws on Bush's canonical 1945 piece; contemporary claims are from YB's own ~9-month practice.
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T08:00
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Source - YB 2026 - Revisiting the Memex

## Citation

YB, "Revisiting the Memex: A soul, heartbeat, and cron jobs," *Engineering Agency* (Substack), February 20, 2026. URL: https://engineeringagency.substack.com/p/revisiting-the-memex

## Overview

Reframes Vannevar Bush's 1945 Memex vision for the AI era. Bush imagined a mechanized private file and library — essentially an archival device. YB argues the contemporary memex has become *a collaborative partner*: not a storage system we consult, but an agentic system we work with. The mechanization is trivial (markdown files + scheduled processes); what makes it work is accumulated personal context.

## Main Thesis

The memex has **evolved from passive repository to active partner.** Bush's original vision of "a mechanized private file and library" treated the device as a recall system. The contemporary memex is a *consultant* — one that reads from a vault and proposes actions, drafts, and answers. The hardware is commodity (text files, cron jobs, markdown); the differentiator is the [[AI Wiki - PKM - Context Compounds|compounded personal context]] that lets the agent perform well.

## Architecture Elements Described

- **`agent-rules.md`** — governing instructions (the [[AI Wiki - PKM - Agentic Constitution|agentic constitution]])
- **Subroutines** — specific workflows with defined jobs (e.g., "tend the vault")
- **PR documentation** — [[AI Wiki - PKM - Knowledge Work PRs|Knowledge Work PRs]]-style audit trail of changes
- **Heartbeat / cron jobs** — scheduled processes that trigger subroutines

## Key Concepts

- **The soul of the agent.** Personal context embedded in vault notes is what differentiates one user's agent from another's. Commoditized tooling + personalized context = differentiated output.
- **Agentic memex.** The Bush archive becomes an active partner when paired with an LLM that reads it. This is a substantive reframe, not a cosmetic relabel.
- **Simple substrate, rich context.** The implementation is small (plain text, cron, markdown). The value comes from what is written, not from the tooling around it.

## Practical Recommendations

- Build agents around existing knowledge systems (Obsidian vaults)
- Use voice interfaces for rapid agent prototyping and context capture
- Document agent rules *before* execution (alignment before action)
- Implement feedback loops with AI for iterative refinement
- Create audit trails through PR-style documentation

## Why This Matters for PKM

- **Updates the canonical history.** The [[AI Wiki - PKM - Hypertext and the Memex|History of Note-Taking article's Memex section]] should be read alongside this piece as a contemporary reinterpretation.
- **Ties together the YB corpus.** The agentic constitution, subroutines, Knowledge Work PRs, and context-compounding all fit under the "agentic memex" umbrella.
- **Reframes the vault.** A vault written for the agentic memex is different in emphasis from one written purely for human reading — more explicit context, more structured orientation, more documentation of reasoning.

## Concepts Introduced or Amplified

- **Agentic memex** — the contemporary, agent-partnered version of Bush's memex
- **Soul of the agent** — personal context as differentiator
- **Simple substrate, rich context** — architectural principle

## Related

- [[AI Wiki - PKM - Hypertext and the Memex]]
- [[AI Wiki - PKM - Agentic Constitution]]
- [[AI Wiki - PKM - Knowledge Work PRs]]
- [[AI Wiki - PKM - Context Compounds]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - PKM Automation]]
- [[AI Wiki - PKM - Source - YB 2026 - Claude-Obsidian Setup Tips]]
- [[AI Wiki - PKM - Source - YB 2026 - Context Compounds]]
