---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - vault notes (Retrieval-Augmented Generation (RAG), LLM Wiki)
  - web research
  - Addyman 2026 — What 18,000 Files Taught Me About the Future of Digital Knowledge (Readwise capture)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T09:32
updated: 2026-04-28T08:46
public_note: true
---

# AI Wiki - PKM - RAG for Personal Knowledge

Retrieval-Augmented Generation (RAG) is a technique that enhances AI responses by retrieving relevant documents from a knowledge base and including them as context before generating an answer. When applied to personal knowledge bases, RAG enables "chat with your notes" — asking questions that are answered from your own captured knowledge rather than the AI's training data.

## How RAG Works

1. **Query** — The user asks a question
2. **Embed** — The question is converted to a vector embedding (a numerical representation of meaning)
3. **Retrieve** — The embedding is compared against pre-computed embeddings of all notes, and the most semantically similar notes are returned
4. **Generate** — The retrieved notes are included as context in the prompt, and the AI generates an answer grounded in your actual notes

This is the simplest form of AI integration with a PKM system. Many tools offer it: Obsidian plugins (Smart Second Brain, Copilot), Notion AI, Mem, and standalone RAG frameworks.

## Strengths

**Grounding.** AI responses cite your actual notes, reducing hallucination. The answer comes from what you have captured, not what the model was trained on.

**Discovery.** RAG can surface notes you had forgotten about. A question about "cognitive load" might retrieve a note from two years ago that you never explicitly linked to your current project.

**Low barrier.** RAG requires minimal setup: embed your notes, attach a retrieval layer, query. No restructuring of the knowledge base needed.

## Limitations

**Semantic similarity is not understanding.** Embedding-based retrieval finds notes that use similar words or discuss similar topics. It does not follow logical connections, understand note hierarchies, or reason about relationships between concepts.

**Context window constraints.** RAG can only retrieve a limited number of notes per query. If the answer requires synthesizing information spread across 20 notes in a specific order, RAG will struggle.

**No maintenance.** RAG retrieves existing content but does not maintain, update, or improve the knowledge base. It is read-only.

**Chunk granularity.** Notes must be split into chunks for embedding. Too large and retrieval is imprecise. Too small and context is lost. The optimal chunk size depends on note structure, and most implementations use naive splitting.

## RAG vs LLM Wiki

The [[AI Wiki - PKM - LLM Wiki]] pattern offers a contrasting approach:

| Dimension | RAG | LLM Wiki |
|-----------|-----|----------|
| Retrieval | Vector similarity search | File-system navigation via cross-references |
| Maintenance | None (read-only) | Active (indexes, cross-refs, lint) |
| Scale sweet spot | Any size, degrades gracefully | Shines at 100+ articles with rich structure |
| Setup cost | Low (embed and query) | Higher (schema, conventions, ingest workflows) |
| Answer quality | Good for factual recall | Better for synthesis and connection |
| Knowledge compounding | No | Yes (queries improve the wiki) |

At scale (~100 articles / ~400K words), a well-maintained LLM Wiki with auto-maintained indexes outperforms RAG because the AI navigates structured cross-references rather than relying on embedding proximity.

**They are complementary.** RAG works well as a discovery mechanism for finding relevant notes. The LLM Wiki pattern works better for deep synthesis and knowledge maintenance. A hybrid system could use RAG for initial retrieval and structured navigation for synthesis.

## Local AI and the Privacy Architecture (Addyman 2026)

Caspar Addyman's 2026 reflection on running an Obsidian vault to ~18,000 files names the architectural fact that turns RAG from a privacy liability into a privacy-compatible workflow: the embedding model can run locally. His stack uses Smart Connections (a local-AI Obsidian plugin) for semantic similarity over the entire vault — and this is precisely "Smart Connections keeping everything private." No vault content leaves the device for the retrieval step.

This matters for [[AI Wiki - PKM - Privacy in PKM]] in a way that is easy to miss: cloud-based RAG against a personal knowledge base sends *every retrieved chunk* to a third party at query time. The privacy posture of "local-first storage + cloud RAG" is not local-first in any meaningful sense. The privacy-keeping component must be the inference substrate, not just the storage substrate. Local embedding + local indexing closes that gap; the chat model becomes the next privacy boundary to evaluate (run locally for sensitive content; use cloud only for content explicitly cleared).

The scale claim is also notable. Addyman demonstrates that local AI scales to tens of thousands of files without degrading. Five years ago this would have required cloud infrastructure. The 2025-2026 window (see [[AI Wiki - PKM - The 2025-2026 Moment]]) is when local embedding models became good enough that the privacy architecture became practical, not just principled.

## RAG in a PKM Context

For personal knowledge bases, RAG is most useful when:

- You have a large vault (1000+ notes) and need to quickly find relevant material
- You want to ask questions across your entire knowledge base without knowing which notes to look at
- You need to ground AI responses in your actual captured knowledge
- You are building quick prototypes or exploratory workflows

RAG is less useful when:

- You need the AI to maintain, update, or improve your notes (use [[AI Wiki - PKM - Agentic Knowledge Management]] instead)
- You need deep synthesis across many interconnected notes (use [[AI Wiki - PKM - LLM Wiki]] patterns)
- Your notes are poorly structured (garbage in, garbage out applies to embeddings too)

## Key Points

- RAG retrieves semantically similar notes to ground AI responses in your knowledge
- Strengths: grounding, discovery, low barrier to setup
- Limitations: similarity is not understanding, no maintenance, context window limits
- LLM Wiki outperforms RAG at scale for synthesis; they are complementary
- Most useful for large vaults, exploratory queries, and quick prototyping

## Open Questions

- Can hybrid approaches (RAG + structured navigation) deliver the best of both?
- How do you optimize embedding strategies for personal notes (which are denser and more connected than typical documents)?
- Will local embedding models close the quality gap with cloud models for privacy-sensitive vaults?

## References

- Vault: Retrieval-Augmented Generation (RAG), LLM Wiki
- Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" (2020)

## Related

- [[AI Wiki - PKM - LLM Wiki]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - Tools for Thought]]
- [[AI Wiki - PKM - AI Agent Systems]]
- [[AI Wiki - PKM - Personal Knowledge Graphs]]
- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - Exocortex]]
- [[AI Wiki - PKM - Privacy in PKM]]
- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
- [[AI Wiki - PKM - Source - Addyman 2026 - 18000 Files and the Future of Digital Knowledge]]
- [[AI Wiki - PKM - The 2025-2026 Moment]]
