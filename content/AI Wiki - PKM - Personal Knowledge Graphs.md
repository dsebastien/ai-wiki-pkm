---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: low
maturity: draft
graduated_notes:
sources:
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
created: 2026-04-07T09:44
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Personal Knowledge Graphs

Most PKM practitioners link notes casually — a wikilink here, a backlink there. Personal Knowledge Graphs (PKGs) take this further by applying formal graph structures to personal knowledge, borrowing concepts from the semantic web and enterprise knowledge management.

## From Wikilinks to Formal Graphs

A wikilink says "these two notes are related." A knowledge graph says *how* they're related. The difference is typed, directional relationships: not just `[[Zettelkasten Method]]` but `was-created-by → Niklas Luhmann`, `influences → Atomic Notes`. This shift from untyped to typed links transforms a pile of notes into a queryable knowledge structure.

## Semantic Knowledge Graphs and Ontologies

Formal PKGs draw on semantic web concepts: RDF triples (subject-predicate-object), ontologies that define categories and relationships, and linked data principles. In theory, you could represent your entire PKM as a graph database where every note is a node and every relationship carries meaning. In practice, almost nobody does this for personal knowledge — the overhead is enormous.

## Property Graphs and Practical Approaches

Property graphs (as in Neo4j) offer a more pragmatic model: nodes and edges both carry key-value properties without requiring a full ontology. Some tools bridge the gap between casual PKM and formal graphs. Tana's supertags let you define node types with structured fields. Obsidian plugins like Breadcrumbs or Juggl enable typed links. Capacities treats every note as a typed object with properties.

## Personal vs Enterprise Knowledge Graphs

Enterprise knowledge graphs (Google's Knowledge Graph, Wikidata) are built by teams with dedicated ontologists. PKGs are maintained by one person in stolen moments. This asymmetry matters. The academic PKG research track — emerging since roughly 2020 — explores how to make formal graphs feasible for individuals, often proposing AI-assisted schema inference or semi-automatic relationship extraction.

## When Formality Pays Off

Formal graphs pay off when you need structured queries ("show me all books by authors I've met who work on topic X") or when building an [[AI Wiki - PKM - Exocortex]] that machines must parse. For most people, casual wikilinks with occasional metadata in frontmatter properties hit the sweet spot. The overhead of maintaining an ontology rarely justifies itself unless your PKM doubles as a research database.

## Key Points

- Personal Knowledge Graphs add typed, directional relationships to notes, going beyond simple wikilinks
- Formal approaches (RDF, ontologies) are powerful but carry significant maintenance overhead for individuals
- Tools like Tana supertags, Capacities typed objects, and Obsidian plugins bridge casual and formal linking
- Academic PKG research is exploring AI-assisted ways to reduce the formalization burden
- For most PKM practitioners, casual linking with structured frontmatter is sufficient

## Open Questions

- Can LLMs infer graph schemas from existing note collections, making formal PKGs low-effort?
- Will the convergence of [[AI Wiki - PKM - Agentic Knowledge Management]] and PKGs create self-organizing knowledge structures?
- Is there a middle ground between casual wikilinks and full ontologies that most people could actually maintain?

## References

- Balog & Kenter, "Personal Knowledge Graphs: A Research Agenda" (2019)
- Neo4j documentation on property graph model
- Tana documentation on supertags and structured nodes

## Related

- [[AI Wiki - PKM - Object-Oriented Note-Taking]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - Linking Your Thinking]]
- [[AI Wiki - PKM - RAG for Personal Knowledge]]
- [[AI Wiki - PKM - Exocortex]]
- [[AI Wiki - PKM - Compounding Knowledge]]
- [[AI Wiki - PKM - Zettelkasten Method]]
