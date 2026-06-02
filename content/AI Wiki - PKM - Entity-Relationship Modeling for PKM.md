---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - web research
  - Chen, P. P.-S. (1976) — The Entity-Relationship Model
  - Codd, E. F. (1970) — A Relational Model of Data
  - Schema.org — structured vocabulary for entities
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T19:09
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Entity-Relationship Modeling for PKM

Entity-relationship (ER) modeling is a 50-year-old database-design technique: you enumerate the entity types in your domain, the attributes each entity has, and the relationships between entities. Applied to PKM, it turns implicit vault ontology into explicit design — and makes visible the choices most vaults make by accident.

## The ER Frame

Chen's 1976 ER model proposed three primitives. **Entities** are the kinds of things your domain contains (customer, order, product). **Attributes** are properties of entities (customer name, order date, product price). **Relationships** connect entities (customer places order; order contains products). A domain is modeled as a graph of entity types, their attributes, and their relationship types.

The model is lightweight, diagrammable, and general. It works for databases, object-oriented systems, ontologies, and — with minor translation — PKM vaults.

## PKM as an ER Domain

Most PKM vaults have implicit ER structure. The entities: notes of various types (permanent, literature, daily, project, person, source). The attributes: frontmatter properties (rating, status, created, tags, sources). The relationships: links (cites, elaborates, contradicts, part-of, authored-by) — though most vaults type their links weakly or not at all.

Making the ER structure explicit produces concrete benefits:

- Queries become reliable because the schema is known
- New notes follow consistent patterns because the types are defined
- LLM agents can reason about the vault's structure
- Migration and refactoring have a grounded starting point

## A Minimal PKM ER Diagram

A working ER sketch for a mature vault might include:

**Entities** (note types):
- Permanent note — synthesized durable claims
- Literature note — bounded summary of a specific source
- Source — external document (book, article, video)
- Person — individual contributor or figure
- Project — scoped effort with goals and deadlines
- Task — actionable item
- Daily note — dated journal entry
- Dot / seed — atomic proto-idea

**Attributes** (common properties):
- `title`, `created`, `updated`, `tags`
- `confidence`, `explored`, `review_count`
- Type-specific: `rating` and `read_status` for sources, `due_date` and `priority` for tasks, `domain` and `expertise_level` for persons

**Relationships**:
- Literature note — `summarizes` → Source
- Permanent note — `draws-from` → Literature note(s)
- Permanent note — `elaborates` / `contradicts` / `supersedes` → other Permanent notes
- Source — `authored-by` → Person
- Task — `part-of` → Project
- Daily note — `references` → other entities

This is a sketch, not a spec. Real vaults extend and customize. The point is that the structure can be drawn.

## Cardinality and Constraints

ER modeling adds cardinality: how many of each side a relationship can have. A literature note summarizes exactly one source (1:1) or possibly multiple (1:N). A project can have many tasks (1:N). A source can be authored by multiple persons (N:M). These are declarations about the vault's world.

Constraints go further: required attributes, unique identifiers, referential integrity (if note A references note B, B must exist). Most PKM tools enforce constraints weakly or not at all. Obsidian Starter Kit templates and md-base validation provide partial enforcement. Full-schema enforcement (every note must have X, every link must be typed) is rare in PKM because friction kills capture, but selective enforcement (load-bearing note types have required properties) is healthy.

## Semantic Links as Typed Relationships

Most PKM vaults have one link type: `[[wikilink]]` meaning "these notes are related somehow." ER thinking pushes toward typed relationships: `cites`, `contradicts`, `elaborates`, `part-of`, `supersedes`. Each type has different semantics and supports different queries.

Obsidian implements typed relationships through properties with wikilink values (e.g., `cites: [[Source X]]`) and through Dataview inline fields. The effect is an ER model layered on top of markdown — not as rigorous as a relational database, but far more structured than unnamed backlinks.

## Against Over-Modeling

ER modeling can be over-applied. A vault with 40 note types, 200 properties, and 30 link types is a schema maintenance project, not a thinking tool. The trade-off between expressiveness (more types, more relations) and friction (more to maintain) is always alive.

Practical guidance: start with the minimum types and properties that support your current queries. Add types only when you have multiple notes that don't fit existing types and when the new type will be used regularly. Prune types that never get populated. The ER model is a live design document, not a one-time specification.

## From ER Model to Templates to Validation

The pipeline from ER thinking to vault implementation:

1. **Sketch the ER diagram** — even informally; the point is visibility
2. **Encode entities as note types** — folders, type tags, template scaffolding
3. **Encode attributes as properties** — frontmatter fields with consistent names
4. **Encode relationships as typed links** — named properties or inline fields, not just `[[wikilinks]]`
5. **Validate against the model** — lint scripts, md-base validation, Dataview queries that check coverage

Each step makes the implicit ER more explicit. Few practitioners do step 1 before building; many rediscover the ER model through painful refactoring after years of drift.

## LLM Agents and ER Structure

Explicit ER structure is especially valuable when LLM agents participate in the vault. An agent that knows the entity types, properties, and relationships can query, validate, and maintain the vault in ways impossible without structure. An agent facing a vault with unknown schema must guess at conventions and often guesses wrong.

The practical implication: documenting the vault's ER structure in an agent-readable form (meta-note, schema file, MCP server output) is increasingly valuable as agents take on more vault work. See [[AI Wiki - PKM - Agentic Knowledge Management]].

## Key Points
- ER modeling enumerates entities, attributes, and relationships; a 50-year-old database technique that transfers to PKM
- Most vaults have implicit ER structure; making it explicit improves queries, consistency, and agent reasoning
- A minimal PKM ER sketch has entity types (note types), attributes (properties), and typed relationships (semantic links)
- Cardinality and constraints declare the vault's rules; most tools enforce weakly, selective enforcement is healthy
- Typed relationships (cites, contradicts, elaborates) enable queries that untyped backlinks cannot
- Risk: over-modeling produces schema-maintenance debt; start minimal and extend as needed
- Pipeline: ER sketch → note types → properties → typed links → validation
- Explicit ER structure is especially valuable for LLM agents that must reason about the vault

## Open Questions
- What is the right format to document a vault's ER schema so both humans and agents can use it?
- Can LLM agents infer the ER structure from a vault's content and propose formalizations?
- Where is the right friction/structure trade-off point for a solo knowledge worker vs a team?

## References
- Chen, P. P.-S. (1976). "The Entity-Relationship Model — Toward a Unified View of Data"
- Codd, E. F. (1970). "A Relational Model of Data for Large Shared Data Banks"
- Schema.org — structured vocabulary for web entities
- Allemang, D. & Hendler, J. (2011). *Semantic Web for the Working Ontologist*

## Related
- [[AI Wiki - PKM - Ontology]]
- [[AI Wiki - PKM - Ontological Commitment]]
- [[AI Wiki - PKM - Taxonomies vs Ontologies]]
- [[AI Wiki - PKM - Controlled Vocabulary]]
- [[AI Wiki - PKM - Typed Notes]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - Semantic Links]]
- [[AI Wiki - PKM - Information Architecture for PKM]]
- [[AI Wiki - PKM - Knowledge Graphs]]
- [[AI Wiki - PKM - Object-Oriented Note-Taking]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
