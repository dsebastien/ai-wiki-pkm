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
  - Gruber, T. (1993) — A Translation Approach to Portable Ontology Specifications
  - Berners-Lee, T. et al. (2001) — The Semantic Web
  - Quine, W. V. O. (1948) — On What There Is
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T16:59
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Ontology

Every PKM system ships with an ontology — a theory of what kinds of things exist in it and how they relate. Folders, tags, note types, properties, and links are not neutral containers; they are ontological commitments. Make the ontology explicit and it becomes a thinking tool. Leave it implicit and it quietly shapes what you can see, say, and connect.

## Two Senses of Ontology

The word carries two related meanings. In philosophy, ontology asks what exists — what the basic categories of being are and how entities depend on each other. Quine framed the question as "on what there is," arguing that a theory's ontology is revealed by the entities it quantifies over. In information science, following Gruber's 1993 definition, an ontology is "an explicit specification of a conceptualization" — a formal inventory of entity types, properties, and relationships that a system recognizes. PKM sits at the intersection: every vault is both a philosophical commitment about what deserves to exist as a note and a technical schema describing how those notes behave.

## Your Vault Already Has One

Whether you wrote it down or not, your vault has an ontology. Its folders assert a top-level taxonomy. Its note types declare distinct kinds of thing (permanent, literature, daily, project, person). Its properties declare attributes that matter (status, rating, created date, tags). Its links declare relations (referenced-by, cites, part-of, contradicts). A typical Obsidian Starter Kit vault encodes dozens of ontological distinctions before the user writes a single note. This is the substrate of every thought you will later have in the system.

## Taxonomies vs Ontologies

A taxonomy is a tree: parent-child containment with a single inheritance path. A folder structure is a taxonomy. A tag hierarchy is a taxonomy. Taxonomies are easy to navigate but brittle — every entity has exactly one home, and things that belong in multiple places distort the tree. An ontology is a graph: entities of many types, connected by many kinds of relation, none of them uniquely containing the others. Bidirectional links, properties, and typed relations push a vault from taxonomy toward ontology. The shift is not cosmetic; it changes what questions the vault can answer.

## Note Types as Ontological Commitments

When a vault declares that "book," "article," "person," "project," and "quote" are distinct note types, it is saying these things have different essences, different behaviors, different lifecycles. A book has an author and a read status. A person has a relationship and a last-contact date. A project has a goal and a deadline. Typed notes make these commitments explicit and enforce them through templates and validation. The alternative — unstructured notes with ad-hoc properties — is ontologically minimalist: one type, everything else is convention. Both work. The trade-off is between expressive power and friction.

## The Tag Problem

Tags are the most common ontological failure mode in PKM. Started as quick labels, they proliferate, overlap, and drift. `#pkm`, `#PKM`, `#personal-knowledge-management`, and `#knowledge-management` coexist; `#ai` tags AI content and also things about AI. Without a controlled vocabulary, tags become noise rather than signal. The fix is ontological: treat the tag set as a schema, normalize it, enforce a namespace, and document what each tag means. The most disciplined vaults publish their tag ontology as a note.

## Formal Ontologies: RDF, Schema.org, and Beyond

Outside PKM, the Semantic Web project (Berners-Lee 2001) built a formal ontology stack — RDF triples, OWL, SKOS, schema.org — that lets systems reason about entities and relations across the web. Most PKM tools do not use these formally, but the influence is visible: Obsidian properties mirror RDF subject-predicate-object structure (note — property — value), and schema.org vocabularies increasingly show up in note templates. The practical ceiling is low (no inference engines, no cross-vault queries), but the conceptual lineage is direct.

## Folk Ontologies and the PKM Method Wars

PARA, Johnny Decimal, LATCH, Zettelkasten folgezettel — each is a folk ontology proposing a specific theory of what exists in a personal information space. PARA says four categories (Projects, Areas, Resources, Archives) exhaust the space. Johnny Decimal says flat numeric coordinates beat semantic hierarchies. Zettelkasten's folgezettel says notes exist in a sequential but branching structure. The PKM method wars are, at their heart, ontological debates. Choosing a method is committing to a metaphysics of personal knowledge.

## Ontological Drift

As a vault grows, its implicit ontology drifts. New note types appear ad hoc. Tags fork. Properties accumulate. Eventually the vault's working ontology no longer matches the one documented in templates and rules. This drift is the PKM equivalent of technical debt: each individual note is fine, but the system as a whole becomes harder to query, harder to automate, and harder to reason about. Periodic ontology audits — tag harmonization, note-type validation, property normalization — are the equivalent of refactoring.

## Ontology as UX

The deepest effect of ontology is on thought itself. You cannot easily think in distinctions your vault cannot express. If there is no "hypothesis" note type, you will not reliably capture hypotheses. If there is no property for confidence, you will not consistently track it. If there is no relation for "contradicts," you will not surface contradictions. Expanding the ontology expands the thinkable. This is the most important design lever in PKM and the least-discussed.

## Key Points
- Every PKM system has an ontology — the only question is whether it is explicit
- Ontology has a philosophical sense (what exists) and an information-science sense (formal schema); PKM lives at their intersection
- Folders and tags are taxonomies; properties, typed notes, and relations are the building blocks of a richer ontology
- Note types encode essential differences between kinds of things and enforce them through templates and validation
- Tag proliferation without a controlled vocabulary is the most common ontological failure
- PKM methods (PARA, Johnny Decimal, Zettelkasten) are competing folk ontologies, not just organization tricks
- Ontological drift accumulates as vaults grow; periodic normalization is essential maintenance
- What your ontology can express shapes what you can think — the ontology is ultimately UX for cognition

## Open Questions
- Can a vault auto-derive its de facto ontology from actual usage and compare it against the declared one?
- Where is the right point on the expressiveness / friction curve for a solo knowledge worker?
- Can LLM agents use a vault's ontology to reason about it — querying by type, enforcing schemas, proposing new categories?
- Is there a minimal ontology that covers 80 percent of personal knowledge work, or does every domain need its own extensions?

## References
- Quine, W. V. O. (1948). "On What There Is," *The Review of Metaphysics*
- Gruber, T. R. (1993). "A Translation Approach to Portable Ontology Specifications"
- Berners-Lee, T., Hendler, J., Lassila, O. (2001). "The Semantic Web," *Scientific American*
- Stanford Encyclopedia of Philosophy — *Logic and Ontology* entry
- Schema.org — structured vocabulary for entities and relations on the web

## Related
- [[AI Wiki - PKM - Epistemology]]
- [[AI Wiki - PKM - Ontological Commitment]]
- [[AI Wiki - PKM - Taxonomies vs Ontologies]]
- [[AI Wiki - PKM - Controlled Vocabulary]]
- [[AI Wiki - PKM - Typed Notes]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - Knowledge Graphs]]
- [[AI Wiki - PKM - Personal Knowledge Graphs]]
- [[AI Wiki - PKM - Semantic Links]]
- [[AI Wiki - PKM - Information Architecture for PKM]]
- [[AI Wiki - PKM - Object-Oriented Note-Taking]]
- [[AI Wiki - PKM - Zettelkasten Method]]
- [[AI Wiki - PKM - PARA Method]]
- [[AI Wiki - PKM - Johnny Decimal System]]
- [[AI Wiki - PKM - Folgezettel]]
