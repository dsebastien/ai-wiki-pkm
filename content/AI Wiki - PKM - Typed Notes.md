---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - vault notes (Obsidian Starter Kit documentation)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T14:00
updated: 2026-04-14T17:23
public_note: true
---

# AI Wiki - PKM - Typed Notes

Instead of treating all notes as freeform text, typed notes assign each note an explicit type with a defined purpose, structure, properties, and template. Permanent note, literature note, meeting note, person note, project note, task note, daily note, dot. Each type is a schema: what properties must be present, what sections the note contains, where in the vault it lives, and what tags it carries.

## Why Type Notes

**Consistency.** With thousands of notes, freeform chaos becomes unsearchable. Typed notes ensure that every meeting note has the same structure, every person note has the same properties, every project note tracks the same metadata. You can rely on a note's structure without reading it first.

**Queryability.** Structured properties in frontmatter enable powerful queries. "Show all meeting notes from this month with participant X." "List all project notes with status 'active' and deadline before next week." "Find all literature notes rated 4 or above." Without types, these queries are impossible; you would need to full-text search and manually filter.

**AI Readability.** AI agents can parse typed notes reliably. When a note declares itself as type "person" with properties for name, organization, and last-interaction-date, an AI knows exactly what it is looking at. Freeform notes require the AI to infer structure, which is slower and error-prone. This is a key factor in [[AI Wiki - PKM - PKM-to-AI Readiness]].

**Templates eliminate blank-page syndrome.** When you create a new note, the template for its type pre-populates the structure. You fill in the blanks rather than staring at an empty document. This removes friction from capture and ensures completeness.

## Common Note Types

A mature typed system includes: fleeting notes (quick captures), literature notes (processed highlights from sources), permanent notes (atomic ideas in your own words), daily notes (time-stamped journals), meeting notes (structured records of discussions), person notes (relationship hubs), project notes (bounded work with status), task notes (actionable items), goal notes (long-term aspirations), dot notes (sub-atomic fragments; see [[AI Wiki - PKM - Dots and Sub-Atomic Knowledge]]), and maps of content (curated navigation hubs; see [[AI Wiki - PKM - Maps of Content]]).

## The Architectural Principle

Type-centric PKM scales where freeform does not. The insight is borrowed from software engineering: just as a codebase with well-defined types (classes, interfaces, schemas) is more maintainable than one with untyped data, a knowledge base with well-defined note types is more navigable, queryable, and automatable than one with generic notes.

## Relationship to Object-Oriented Note-Taking

The [[AI Wiki - PKM - Object-Oriented Note-Taking]] article covers the database-native approach (Capacities, Tana) where note types are first-class objects with supertags and properties. Typed Notes in Markdown+frontmatter (as in Obsidian) achieve the same conceptual result through conventions: YAML properties, templates, folder placement, and tag-based type identification. The tradeoff: Markdown is more portable and future-proof; database tools offer richer native querying.

## Evolution of Types

Note types are not fixed at vault creation. They evolve as your needs change. A system that starts with three types (fleeting, literature, permanent) might grow to fifteen as you add meeting notes, person notes, project notes, and more. The key is to add types when you notice a pattern, not in anticipation. If you find yourself repeatedly creating notes with the same structure, that is a signal for a new type.

## Key Points

- Each note type has defined purpose, structure, properties, template, and folder placement
- Types enable consistency, queryability, AI readability, and frictionless capture
- Type-centric PKM scales where freeform does not; the insight parallels typed vs untyped code
- Markdown+frontmatter achieves typed notes through conventions; database tools do it natively
- Types evolve organically as recurring patterns emerge

## Open Questions

- What is the optimal number of note types before the taxonomy itself becomes overhead?
- Should type enforcement be strict (reject malformed notes) or advisory (flag issues)?
- Can AI infer note types from content, enabling gradual typing of legacy freeform vaults?

## References

- Vault: Obsidian Starter Kit - Reference - Note Types, Obsidian Starter Kit - Theory
- Andy Matuschak, "Evergreen notes should be concept-oriented" (working notes) — implicit typing through naming convention

## Related

- [[AI Wiki - PKM - Ontology]]
- [[AI Wiki - PKM - Ontological Commitment]]
- [[AI Wiki - PKM - Taxonomies vs Ontologies]]
- [[AI Wiki - PKM - Controlled Vocabulary]]
- [[AI Wiki - PKM - Object-Oriented Note-Taking]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - Zone-Based Organization]]
- [[AI Wiki - PKM - Note-Taking Taxonomy]]
- [[AI Wiki - PKM - PKM-to-AI Readiness]]
- [[AI Wiki - PKM - Dots and Sub-Atomic Knowledge]]
- [[AI Wiki - PKM - Maps of Content]]
- [[AI Wiki - PKM - Personal CRM]]
