---
wiki_name: PKM
wiki_role: source_summary
explored: false
ai_generated: true
confidence: medium
maturity: draft
sources:
  - Tal Raviv — Build Your Personal AI Copilot (Lenny's Newsletter, 2026; via Readwise)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-28T08:38
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Source - Raviv 2026 - Build Your Personal AI Copilot

**Author:** Tal Raviv
**Published:** 2026 (Lenny's Newsletter)
**Source:** Readwise highlights (multi-paragraph capture)

## Summary

Raviv argues that LLMs underperform for knowledge work not because they are weak, but because users keep starting from zero context every conversation. The fix is to treat the LLM like a teammate: give it the same background information any new colleague would need, then keep it in the loop over time. The mechanical embodiment of this is a "Project" (in tools like Claude or ChatGPT) made of three layers — project knowledge (durable documents), instructions (a "super-prompt" sticky across the conversation), and chat threads (recurring task history). Together, these turn a stateless assistant into a personal AI copilot that compounds in usefulness with every interaction.

## Key Takeaways

- **Context is the lever, not prompting**. "AI tools had felt like blunt, generic instruments because I wasn't providing enough context." The skill is identifying what context the AI needs, not crafting clever prompts.
- **LLMs as colleagues, not search**. "Using AI at work shouldn't mean sifting through generic responses or conjuring perfect prompts. The most fruitful way to think about using LLMs is like collaborating with an inspirational colleague who knows your company strategy, remembers that conversation last week, and shares your team's vocabulary."
- **The copilot model has three layers**: project knowledge (uploaded documents), instructions (the super-prompt), chat threads (task history). The instructions extend the system prompt and persist across the conversation.
- **Bootstrap with an AI-led interview**. If you lack written documentation, ask the LLM to interview you, then have it generate a single project-knowledge document that you upload. This turns tacit knowledge into durable copilot memory.
- **The human is currently the API**. "Today, I'm the human API between my copilot and everything else." Manual export, copy-paste, and re-prompting are the friction; integrations (e.g. via MCP) collapse it.
- **Diagnose bad outputs by missing context, not bad prompts**. "If you're frequently getting outputs you're not happy with, ask yourself, 'What context does the AI need to succeed here?'" — recurring gaps should be promoted into project knowledge.
- **Use cases beyond writing**: strategic decisions, roadmap brainstorming, soft-skill development, emotional support, decision frameworks, prioritization, rehearsing hard conversations.
- **Team copilots compound on personal copilots**. "Shared knowledge layers curated by leadership" sit underneath each person's individual copilot — a multi-layer context architecture for organizations.
- **Inspiration over replacement**. "When we treat LLMs as partners that inspire rather than replace our thinking, our output only gets sharper." The point is getting more out of yourself, not getting answers.

## Concepts Mentioned

- AI copilot (vs. one-off chat queries)
- Project knowledge / instructions / chat threads (the three-layer Project model)
- Super-prompt / extended system prompt
- The "human API" problem (manual context bridging)
- AI-led interview as bootstrap mechanism
- Context-as-Code (this article is a practical instantiation)
- Compounding context over time
- Team copilots and shared knowledge layers
- Vibe-coding prototypes from copilot context
- Habits for maintaining copilot quality

## Entities Mentioned

- Tal Raviv (author)
- Lenny Rachitsky / Lenny's Newsletter (publisher)
- Anthropic Claude Projects, ChatGPT Custom GPTs (the canonical implementations)

## Relevance to PKM

This article is the most operational treatment of the [[AI Wiki - PKM - AI Copilot for Knowledge Work]] pattern available in the corpus. It bridges PKM (durable, captured knowledge) and AI workflows (stateless inference) by treating the PKM artifacts as the project knowledge layer. Every Markdown note in a vault becomes copilot fuel. The "ask the LLM to interview you" pattern is a practical capture mechanism that complements [[AI Wiki - PKM - The Capture Habit]]. The "diagnose bad outputs as missing context" framing reframes prompt-engineering as [[AI Wiki - PKM - Context Engineering]] at the personal scale.

The article also implicitly validates [[AI Wiki - PKM - Compounding Knowledge]]: the copilot's value compounds because the context layer compounds. Stateless prompts give linear returns; persistent project knowledge gives compounding returns.

## Open Questions

- Where does project knowledge end and the broader vault begin? Is the project a curated subset or a parallel knowledge layer?
- How do you keep project knowledge fresh without it becoming a maintenance burden?
- Can copilot context be made portable across providers (Claude → ChatGPT → Gemini), or does each rebuild lock you in?
- When team copilots layer over personal copilots, how do you prevent context pollution (where company defaults overwhelm personal preferences)?

## References
- Original article: Lenny's Newsletter (Tal Raviv, 2026) — see Readwise capture

## Related
- [[AI Wiki - PKM - AI Copilot for Knowledge Work]]
- [[AI Wiki - PKM - Context Engineering]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - Compounding Knowledge]]
- [[AI Wiki - PKM - The Capture Habit]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - Exocortex]]
