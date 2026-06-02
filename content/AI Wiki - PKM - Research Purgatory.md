---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - "Andy Matuschak, 'Apps and Programming: Two Accidental Tyrannies' (2026)"
  - "Multiple research prototypes cited: Scim, CiteSee, Papeos, LiquidText, SpaceInk, Quantum Country"
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T08:38
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Research Purgatory

**Research purgatory** is the condition in which novel interface ideas, proven valuable in academic prototypes, fail to reach production use because the cost of reimplementing surrounding software is prohibitive. The term is Andy Matuschak's (2026). Each promising prototype "has to pay an enormous tax to escape" — rebuilding everything around it (editor, reader, file system, UI chrome) just to make a specific innovation shippable. The result: an accumulating archive of demonstrated good ideas that never become anyone's tool.

## The Pattern

A typical research-purgatory trajectory:

1. **Novel idea demonstrated** in a dedicated prototype (often tied to a specific paper or PhD)
2. **Prototype is real**: it works, people use it in user studies, the evaluation is positive
3. **Paper published**; idea is documented
4. **Prototype is abandoned** or kept barely alive as demo infrastructure
5. **Idea is not integrated into production tools** because production tools are not composable enough to accept the idea without major rewriting
6. **Nothing happens for years** until someone rediscovers the idea and repeats the cycle

The result is that the *literature* of interface research is richer than the *practice* of interface use. Ideas that are known to be good sit unused.

## Matuschak's Reading Examples

Matuschak's 2026 talk lists several reading-augmentation prototypes that collectively demonstrate a vision of a richer reading environment — but none of which compose with each other or with mainstream reading tools:

- **Scim** — skimming support for academic papers
- **CiteSee** — citation context and tracking across a reading session
- **Papeos** — spatial video-augmented reading
- **LiquidText** — manipulable, reflowable PDF with active reading affordances
- **SpaceInk** — spatial annotation
- **Quantum Country** — embedded spaced-repetition prompts within explanatory text (Matuschak & Nielsen)

All of these have real users and positive evidence. None of them are composable with each other or with the reading tools most people use daily (Readwise Reader, Kindle, Obsidian's PDF support, browser-based reading). If they were, the sum would be a dramatically better reading environment than any single tool currently provides.

## Why It Happens

Three compounding mechanisms:

1. **The [[AI Wiki - PKM - Source - Matuschak 2026 - Apps and Programming Two Accidental Tyrannies|app model]] isolates functionality.** Each tool owns its rendering stack, document format, keyboard handling, and state model. A plugin written for one tool rarely transfers to another.
2. **Composability is the exception, not the rule.** Most production tools are built *with* plugins bolted onto a closed core; few are built *from* plugins with user-accessible primitives (CodeMirror, Obsidian being notable positive exceptions).
3. **Economic incentives don't reward integration.** A research lab is rewarded for publishing a novel idea; nobody is rewarded for integrating three existing ideas into a usable whole. The composition work is invisible academically and financially.

## PKM Relevance

Personal Knowledge Management has been heavily affected:

- **Many PKM concepts exist only as research demos.** Typed links, spatial-canvas+graph integration, bidirectional transclusion, reliable block-reference syntax across tools, AI-augmented retrieval on arbitrary corpora — all have working prototypes. None have converged into mainstream tools.
- **Tool lock-in is the default exit from purgatory.** When a single tool (Roam, Obsidian, Logseq) becomes capable enough to implement the idea internally, the idea lives — but only inside that tool. This is escape from purgatory via monopoly, not via composition.
- **Composable PKM would be an escape.** If Obsidian-style plugin primitives were standardized across tools (markdown + frontmatter + plugin API shape), research prototypes could land as plugins that run everywhere. This is the vision behind [[AI Wiki - PKM - Plain Text and Interoperability|plain text and interoperability]] advocacy.

## How to Escape Research Purgatory

Matuschak's implicit prescription:

1. **Build on composable substrates** so prototypes don't need to re-implement surrounding software
2. **Standardize extension APIs** where possible (markdown, wikilinks, plugin shapes)
3. **Use [[AI Wiki - PKM - Vibe-Coding|vibe-coding]] / coding agents** to lower the rewriting cost when substrates are imperfect
4. **Fund integration work** — treat synthesis-of-ideas as first-class research contribution, not janitorial follow-up
5. **Prioritize real-enough prototypes** that can be trialed in daily practice quickly, not production-grade finishes that never ship

## The Time Dimension

Research purgatory has a *long half-life*. Ideas that entered purgatory in the 1980s (Canon Cat's reference-passage interaction; much of Smalltalk; Hypercard's extensibility) are still useful and still unintegrated. This suggests the problem is structural rather than temporary. Without intervention, ideas enter purgatory faster than they exit.

The agentic-vault moment (2025-2026) is one of the rare periods when the cost of exiting purgatory is dropping fast, because coding agents lower the reimplementation tax. It is plausible that the next 5 years see more ideas escape purgatory than the last 30.

## Key Points

- Research purgatory = the condition in which proven interface ideas never reach production use
- Cause: reimplementation cost + non-composable app substrates + misaligned incentives
- PKM is heavily affected; many known-good ideas exist only as demos
- Matuschak's reading-tech examples illustrate the pattern sharply
- Escape mechanisms: composable substrates, standardized APIs, coding agents, integration-as-research
- Coding agents may be the first tool in decades that shifts the escape economics substantially

## Open Questions

- Is there a PKM-specific corpus of research-purgatory ideas worth systematically triaging for integration?
- What composability standards would be most productive to define (plugin shape, document format, render pipeline)?
- Does the agentic-vault moment actually decrease purgatory residency, or does it just create more isolated prototypes faster?

## References

- Andy Matuschak, "Apps and Programming: Two Accidental Tyrannies" (2026)
- Cited prototypes: Scim, CiteSee, Papeos, LiquidText, SpaceInk, Quantum Country
- Matuschak's broader argument parallels Bret Victor's "Seeing Spaces" and other tools-for-thought essays

## Related

- [[AI Wiki - PKM - Source - Matuschak 2026 - Apps and Programming Two Accidental Tyrannies]]
- [[AI Wiki - PKM - Composability as PKM Architecture]]
- [[AI Wiki - PKM - Vibe-Coding]]
- [[AI Wiki - PKM - PKM Extensibility]]
- [[AI Wiki - PKM - PKM as Platform]]
- [[AI Wiki - PKM - Tools for Thought]]
- [[AI Wiki - PKM - Plain Text and Interoperability]]
- [[AI Wiki - PKM - Hypertext and the Memex]]
