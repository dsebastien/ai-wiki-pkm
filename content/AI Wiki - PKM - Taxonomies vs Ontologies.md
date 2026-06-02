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
  - ANSI/NISO Z39.19 — Guidelines for Controlled Vocabularies
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T17:19
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Taxonomies vs Ontologies

A taxonomy is a tree. An ontology is a graph. The difference sounds technical but it is the central structural choice in any PKM system. The choice determines what you can express, what you can query, and what kinds of thought the vault can support.

## The Basic Distinction

A **taxonomy** organizes entities by a single hierarchical inheritance relation — usually "is-a" or "part-of." Every entity has exactly one parent. Every entity has exactly one path to the root. This produces a tree: clean, navigable, unambiguous. Biological classification (kingdom, phylum, class) is the paradigm case. Folder structures on a file system are taxonomies. Traditional library classifications (Dewey, LCC) are taxonomies.

An **ontology** in the information-science sense organizes entities by many types of relation simultaneously. An entity can belong to multiple classes, have many kinds of connection, and be reached by many paths. The resulting structure is a graph, not a tree. RDF, OWL, and property graphs are ontology technologies. Obsidian's mix of tags, properties, typed notes, and bidirectional links is an implicit ontology, not a taxonomy.

## Where Taxonomies Work

Taxonomies succeed when the domain has a natural hierarchical structure, when each entity really does have one best parent, and when navigation by drill-down is the primary use case. Filing physical documents, organizing files by project, and browsing product categories on a simple store all fit taxonomic structure well.

In PKM specifically, taxonomies work for clear structural dimensions: the PARA four-fold (Projects, Areas, Resources, Archives) is taxonomic; Johnny Decimal's numeric categories are taxonomic; Dewey-style numbered hierarchies inside a vault are taxonomic. They work because the dimension being organized really does have a cleanish hierarchical shape.

## Where Taxonomies Break

Taxonomies fail whenever an entity belongs to multiple categories equally. A note on "AI ethics in PKM" is about AI, about ethics, and about PKM — it has three natural parents and no single best one. Forcing it into one parent under a taxonomy loses information in the other two dimensions. File systems make this pain visible: you move a file to one folder, knowing it belongs in two others, and you will never find it by the other paths again.

Cross-cutting concerns break taxonomies. So do entities of mixed kind (a person who is also a coauthor, a mentor, and a customer). So do domains that evolve faster than the hierarchy adapts. Most of a real PKM is full of these cases, which is why pure-taxonomy vaults feel rigid and lossy.

## Where Ontologies Work

Ontologies succeed when entities belong to multiple categories, when relations are heterogeneous (citation is a different kind of link from contradiction, which is different from elaboration), and when queries cut across dimensions. An ontological vault can answer "find all notes about AI that also relate to ethics and cite primary sources" because the structure supports the cross-dimensional query.

Ontologies also support richer reasoning. If "cites" is a declared relation, a tool can follow citation chains. If "contradicts" is declared, contradictions can be surfaced. The more the vault's relations are typed and semantic (not just "linked"), the more computation can lean on the structure.

## Where Ontologies Break

Ontologies fail when they are undisciplined. Unlike a taxonomy, an ontology does not prevent malformation — there is no single parent to force consistency. Without explicit schemas and validation, an ontological vault drifts: properties used inconsistently, link relations invented ad hoc, types applied loosely. The structure is there but its contents are unreliable.

Ontologies also fail when they are too expressive. A system that allows arbitrary relation types produces a different ad-hoc vocabulary per user, which means no shared reasoning. The trade-off between expressive power (many relations) and shared structure (few well-defined relations) is always alive.

## The Folder Tax

Most PKM tools still ship with file-system folders, which are taxonomic by default. Users hit the "where does this go?" problem, invent workarounds (duplicate files, symlinks, aggressive tagging), and end up with an unstable hybrid. The honest response is to accept that folders are one dimension of organization (typically by note type or zone) and use tags, links, and properties for cross-cutting organization.

The Obsidian Starter Kit pattern — folders by zone (Meta, Actions, Areas, Journal, Resources, Archives), with cross-cutting tags, types, and properties — is explicitly this hybrid. Folders handle the coarsest taxonomy; ontology handles everything else.

## Folk Ontologies as Competing Methods

PARA, Johnny Decimal, Zettelkasten folgezettel, LATCH, Bullet Journal — each is a folk ontology proposing a specific theory of what exists in a personal information space. They differ in how taxonomic or ontological they are. PARA is mostly taxonomic (four categories, some overlap). Johnny Decimal is strictly taxonomic (flat numeric hierarchy). Zettelkasten (original) has a taxonomic address system but a deeply ontological link structure. LYT (Linking Your Thinking) leans fully ontological.

The PKM method wars are, at structural level, debates about where on the taxonomy-ontology spectrum a personal knowledge system should sit.

## Practical Guidance

A mature vault usually has:

- **One taxonomic backbone** — typically folders by zone or note type, chosen for clear hierarchical structure (Actions vs Areas vs Archives, for example)
- **A controlled tag namespace** — tags as a light ontology for cross-cutting domains and statuses, governed by a [[AI Wiki - PKM - Controlled Vocabulary]]
- **Typed notes with properties** — for structured attributes that support Dataview queries
- **Bidirectional links with optional semantic markers** — for the generative, emergent web of thought

The backbone is taxonomy; the rest is ontology. Neither alone is enough.

## Key Points
- Taxonomy = tree (one hierarchical inheritance relation, unique parent); ontology = graph (many relations, multiple memberships, many paths)
- Taxonomies are clean and navigable but lossy for cross-cutting concerns and multi-kind entities
- Ontologies handle cross-cutting concerns and richer relations but drift without explicit schemas
- Folders are taxonomic by default; pure-folder organization fails on the cross-cutting-concerns problem
- PKM methods differ on the taxonomy-ontology spectrum: Johnny Decimal is strictly taxonomic, LYT is fully ontological, PARA and Zettelkasten are hybrids
- Mature vaults combine one taxonomic backbone (zones/types) with controlled-vocabulary tags, typed notes, and semantic links
- The trade-off is expressive power (ontology) vs enforceable consistency (taxonomy); well-designed vaults use both appropriately

## Open Questions
- What is the minimal ontological overlay that rescues a primarily taxonomic vault?
- Are there tooling patterns that make ontology drift visible (e.g., tag divergence, orphaned link types)?
- Can a vault be too ontological — so expressive that navigation and reasoning fail?

## References
- Gruber, T. R. (1993). "A Translation Approach to Portable Ontology Specifications"
- Berners-Lee, T., Hendler, J., Lassila, O. (2001). "The Semantic Web," *Scientific American*
- ANSI/NISO Z39.19 — Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies
- Hjørland, B. — information-science writings on classification theory

## Related
- [[AI Wiki - PKM - Ontology]]
- [[AI Wiki - PKM - Ontological Commitment]]
- [[AI Wiki - PKM - Controlled Vocabulary]]
- [[AI Wiki - PKM - Typed Notes]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - Information Architecture for PKM]]
- [[AI Wiki - PKM - Knowledge Graphs]]
- [[AI Wiki - PKM - Semantic Links]]
- [[AI Wiki - PKM - Maps of Content]]
- [[AI Wiki - PKM - PARA Method]]
- [[AI Wiki - PKM - Johnny Decimal System]]
- [[AI Wiki - PKM - Zettelkasten Method]]
- [[AI Wiki - PKM - Folgezettel]]
- [[AI Wiki - PKM - Zone-Based Organization]]
