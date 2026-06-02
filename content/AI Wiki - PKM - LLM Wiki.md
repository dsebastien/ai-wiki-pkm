---
wiki_name: PKM
wiki_role: article
explored: true
ai_generated: true
confidence: high
maturity: substantial
graduated_notes:
sources:
  - vault notes (LLM Wiki, Compounding Knowledge, Farzapedia)
  - Andrej Karpathy (April 2026)
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
updated: 2026-04-08T06:04
public_note: true
---

# AI Wiki - PKM - LLM Wiki

An LLM Wiki is a pattern for persistent, compounding knowledge bases maintained entirely by LLMs. The human discovers sources and asks strategic questions; the LLM handles all bookkeeping: summaries, cross-references, contradiction resolution, and index maintenance. The pattern was proposed by Andrej Karpathy in April 2026.

## The Core Insight

LLMs excel at mechanical bookkeeping that humans reliably abandon. Most knowledge bases die not from lack of input but from lack of maintenance. Cross-references go stale, indexes become incomplete, contradictions accumulate unnoticed, and new material is never integrated with existing content. LLMs eliminate this failure mode by performing maintenance as a side effect of every operation.

## Three-Layer Architecture

### Layer 1: Raw Sources
User-curated, immutable documents: articles, papers, repos, data. The LLM reads this layer but never modifies it. These are the primary sources that ground the wiki in reality.

### Layer 2: The Wiki
LLM-generated and LLM-maintained Markdown files: entity pages, concept pages, summaries, and interconnected analyses. The LLM owns this layer entirely. It creates, updates, cross-links, and maintains articles as new sources are ingested and queries are answered.

### Layer 3: The Schema
A configuration document (e.g., CLAUDE.md, AGENTS.md) defining structure, conventions, and workflows. This is [[AI Wiki - PKM - Context-as-Code]] applied to knowledge base maintenance. The schema tells the LLM how to organize, name, tag, and cross-reference articles.

## Core Operations

**Ingest** — When a new source is added, the LLM extracts key takeaways, writes or updates wiki articles, creates cross-references to existing articles, and appends to the operation log.

**Query** — The LLM searches relevant articles, synthesizes an answer with citations, and optionally promotes valuable query outputs into new wiki pages.

**Lint** — A health-check operation that scans for contradictions, stale claims, orphan articles, missing cross-references, and index inconsistencies. Lint repairs what it finds.

## Structural Files

Every LLM Wiki has two mandatory structural files:

- **Index** — A content-organized catalog with one-line summaries for each article. Updated on every ingest, explore, or lint operation.
- **Log** — A chronological, append-only operation record with parseable prefixes. Provides full audit trail.

## Why File-Based Beats RAG

At scale (~100 articles / ~400K words), a well-maintained wiki with auto-maintained indexes outperforms RAG for question-answering. The LLM navigates file structure directly — following cross-references and reading targeted articles — rather than relying on embedding-based retrieval that can miss nuance and context.

The Farzapedia variant (by Farza) demonstrated this with 2,500 diary entries producing 400 articles with backlinks. His key distinction: the wiki is built for the agent, not the human. File-system structure with backlinks is more easily crawlable than vector similarity search.

## LLM Wiki and Compounding Knowledge

LLM Wikis are a concrete implementation of [[AI Wiki - PKM - Compounding Knowledge]]. Every ingested source triggers updates across multiple existing articles. Every query can generate new articles or improve existing ones. The wiki becomes a compounding artifact where the act of using it makes it more valuable.

This is also how [[AI Wiki - PKM - Agentic Knowledge Management]] manifests in practice: the AI agent does not just answer questions — it builds and maintains the knowledge infrastructure.

## Key Points

- LLMs handle the bookkeeping humans reliably abandon: cross-references, indexes, contradiction detection
- Three layers: raw sources (immutable), the wiki (LLM-maintained), the schema (conventions)
- Core operations: ingest, query, lint
- File-based navigation outperforms RAG at scale for structured knowledge
- The wiki compounds in value with every operation

## Open Questions

- How to handle conflicting information across sources?
- What is the optimal article granularity for LLM consumption?
- Can multiple humans curate a shared LLM Wiki effectively?

## References

- Andrej Karpathy, "LLM Wiki" (April 2026)
- Farza, Farzapedia implementation
- Vault: LLM Wiki, Compounding Knowledge

## Related

- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - Compounding Knowledge]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - AI Skills in PKM]]
- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - RAG for Personal Knowledge]]
- [[AI Wiki - PKM - Plain Text and Interoperability]]
