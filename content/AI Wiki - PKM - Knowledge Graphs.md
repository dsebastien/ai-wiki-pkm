---
wiki_name: PKM
wiki_role: article
explored: true
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - vault notes
  - web research
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T09:53
updated: 2026-04-07T17:52
public_note: true
---

# AI Wiki - PKM - Knowledge Graphs

A knowledge graph represents knowledge as a network of nodes (concepts, notes, entities) connected by edges (links, relationships). In PKM, a knowledge graph emerges naturally from the practice of linking notes to each other, creating a structure where insights live not just in individual notes but in the connections between them.

## Nodes and Edges

Every note in a linked system is a node. Every wikilink, backlink, or explicit relationship is an edge. The graph grows organically as you write and link. Unlike hierarchical folder systems where each item has exactly one location, a graph allows any node to connect to any other node, reflecting how ideas actually relate: messily, multiply, and across domains.

## Implicit vs Explicit Graphs

Most PKM tools create **implicit graphs**. Obsidian's wikilinks generate an undirected graph where `[[Note A]]` referencing `[[Note B]]` creates an edge, but the nature of that relationship is unspecified. You know they are connected but not *how*.

**Explicit graphs** use typed relationships and ontologies. A note might declare "concept X *is-a-subtype-of* concept Y" or "person Z *authored* paper W." Tools like Tana and research-grade knowledge graph systems support this. The tradeoff: explicit graphs are more powerful for querying but impose significantly more friction on the author.

## Graph Visualization

Obsidian's graph view renders the knowledge graph as a force-directed layout: nodes repel each other, edges pull connected nodes together, and clusters emerge visually. This is useful for spotting orphans (disconnected notes), identifying heavily linked hubs, and discovering unexpected clusters. The visualization is more diagnostic than navigational; few people browse their vault through the graph view daily.

## Graph Properties That Matter for PKM

**Clustering** reveals topic neighborhoods. Dense clusters indicate well-developed areas of thinking. Gaps between clusters may signal missing bridge notes.

**Centrality** identifies hub notes. Notes with high link counts (both incoming and outgoing) are structural pillars. If those notes are weak, the surrounding cluster suffers.

**Orphans** are notes with zero connections. In a knowledge graph, an orphan is a failure of integration. It represents captured information that was never processed into connected knowledge.

## Dense Graphs Enable Serendipity

When any note connects to many others, following links becomes an act of exploration rather than retrieval. You look up one concept and stumble into a related idea you had forgotten. This is the "communication partner" quality that Niklas Luhmann described in his Zettelkasten: a sufficiently dense, well-linked system surprises its creator by surfacing connections the creator did not consciously make.

## Knowledge Graphs Beyond PKM

In AI, knowledge graphs power retrieval-augmented generation (RAG) by providing structured context that vector similarity alone cannot capture. Graph RAG traverses relationships rather than just matching semantics, enabling queries like "what concepts did this author work on that relate to my current project?" The parallel between PKM knowledge graphs and AI knowledge graphs is direct: both distill raw information into atomic units connected through meaningful relationships.

## Key Points
- A knowledge graph is nodes (notes) connected by edges (links), emerging naturally from linked note-taking
- Implicit graphs (wikilinks) are low-friction but untyped; explicit graphs (ontologies) are powerful but high-friction
- Clustering, centrality, and orphan detection are the most useful graph properties for PKM
- Dense graphs create serendipity by surfacing forgotten connections
- Luhmann's Zettelkasten was an early knowledge graph that functioned as a "communication partner"

## Open Questions
- At what link density does a knowledge graph start generating genuinely surprising connections?
- Should PKM tools automatically suggest typed relationships to bridge the implicit/explicit gap?
- How do AI-generated links compare to human-created links in terms of serendipity value?

## References
- Niklas Luhmann, "Communicating with Slip Boxes" (1981)
- Vault notes: Knowledge Graph (KG), Personal Knowledge Graph (PKG), Web of knowledge
- Johnny Decimal website: https://johnnydecimal.com

## Related
- [[AI Wiki - PKM - Personal Knowledge Graphs]]
- [[AI Wiki - PKM - Zettelkasten Method]]
- [[AI Wiki - PKM - Linking Your Thinking]]
- [[AI Wiki - PKM - Atomic Notes]]
- [[AI Wiki - PKM - RAG for Personal Knowledge]]
- [[AI Wiki - PKM - Compounding Knowledge]]
