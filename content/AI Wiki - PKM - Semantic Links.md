---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: low
maturity: draft
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
created: 2026-04-07T09:56
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Semantic Links

Semantic links are hyperlinks that carry explicit meaning about the relationship type between connected notes. Where a plain wikilink says only "these are related," a semantic link specifies *how*: "contradicts," "supports," "is example of," "evolved from." This distinction transforms a simple note network into a structured knowledge base where relationships are queryable and reasoning becomes traceable.

## Beyond Plain Wikilinks

A standard `[[Note B]]` link from Note A tells you nothing about why they are connected. Is Note B evidence for Note A? A counterargument? A prerequisite? A later version? You have to read both notes to find out. Semantic links encode this meaning in the link itself, enabling queries like "show all notes that contradict this claim" or "find every example of this concept." The idea traces back to [[Randall Trigg]]'s 1983 PhD thesis, which proposed a comprehensive taxonomy of link types, and [[Frank Halasz]]'s work on [[NoteCards]] at Xerox PARC.

## Common Relationship Types

The most useful semantic link types for PKM include: **supports/contradicts** (argumentative structure), **is-example-of/has-example** (concept-instance relationships), **is-part-of/has-part** (composition), **derived-from/is-source-of** (provenance), **extends/extended-by** (intellectual development), and **prerequisite-of** (learning sequences). [[Randall Trigg|Trigg's]] original taxonomy grouped these into commentary, elaboration, organization, reference, rhetorical, and temporal categories.

## Implementations

[[Tana]] supports typed links natively through supertags with relationship fields. [[Obsidian]] users implement semantic links through Dataview properties (`supports:: [[Note]]`) or plugins like Breadcrumbs. [[Logseq]] uses block properties. TheBrain has link types as a first-class feature. On the formal end, RDF triples and ontologies from the Semantic Web provide full semantic linking but with significant overhead.

## When Semantic Links Are Worth the Overhead

Typing every link adds friction. For personal vaults under roughly 1,000 notes, plain wikilinks with contextual sentences around them usually suffice; the surrounding text implies the relationship. Semantic links pay off in larger vaults, research contexts where argumentative structure matters, and team environments where shared understanding of relationships is critical. They also become valuable when building systems that machines need to parse, such as personal knowledge graphs or AI-assisted reasoning tools.

## Connection to Knowledge Graphs

Semantic links are the building blocks of [[Knowledge Graph (KG)|knowledge graphs]]. A vault with typed, directional relationships between notes is, structurally, a knowledge graph. The difference between a casual PKM vault and a formal knowledge graph is the degree of relationship typing. Moving along that spectrum involves tradeoffs between expressiveness and maintenance burden.

## Key Points
- Semantic links specify *how* notes relate (supports, contradicts, exemplifies), not just *that* they relate
- Originated in hypertext research (Trigg 1983, Halasz/NoteCards), now implemented in tools like Tana, Obsidian (via Dataview), and TheBrain
- Worth the overhead in large vaults, research, and team contexts; overkill for small personal collections
- Plain wikilinks with contextual surrounding text are often sufficient for personal PKM
- Semantic links are the building blocks of personal knowledge graphs

## Open Questions
- Can LLMs automatically infer relationship types from existing wikilinks and their surrounding context?
- Is there a minimal set of relationship types that covers 80% of PKM needs without excessive overhead?
- Will native semantic link support become standard in mainstream PKM tools?

## References
- Trigg, R.H. (1983). "A Network-Based Approach to Text Handling for the Online Scientific Community"
- Halasz, F.G. (1988). "Reflections on NoteCards: Seven Issues for the Next Generation of Hypermedia Systems"
- [[Semantic Links]] (vault note)

## Related
- [[AI Wiki - PKM - Bidirectional Linking]]
- [[AI Wiki - PKM - Personal Knowledge Graphs]]
- [[AI Wiki - PKM - Linking Your Thinking]]
- [[AI Wiki - PKM - Object-Oriented Note-Taking]]
- [[AI Wiki - PKM - Networked Thought]]
- [[AI Wiki - PKM - Hypertext and the Memex]]
