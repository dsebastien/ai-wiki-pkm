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
created: 2026-04-07T09:45
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Object-Oriented Note-Taking

Traditional note-taking treats notes as documents — blobs of text, maybe with some metadata. Object-oriented note-taking treats each note as a typed object with a defined schema: a Book has an author, publication date, and rating; a Person has a role, organization, and last-contact date; a Meeting has attendees, date, and action items.

## The Paradigm Shift

The shift is from "notes are text files" to "notes are structured data that also contain text." This moves PKM closer to a personal database. Instead of searching through prose to find which books you read in 2024, you query a structured field. Instead of tagging a note `#person`, you instantiate a Person object with defined properties.

## Tools Leading the Charge

**Tana** is the most explicit implementation. Supertags define schemas: tag a node as `#book` and it gains fields for author, genre, status, and rating. Every supertag is essentially a class definition. Nodes inherit properties from their supertags, and you can build views that filter and sort by any property.

**Capacities** takes a similar approach with "typed objects" — each object type has a defined structure, and the tool enforces it at the UI level.

**Obsidian** approximates this through YAML frontmatter properties and templates. The Obsidian Starter Kit, for example, defines note types (book notes, permanent notes, literature notes) with expected frontmatter fields and folder conventions. But enforcement is by convention, not by the tool — nothing stops you from creating a book note without an author field.

**Roam/Logseq** use an outline-based model where structure emerges from indentation and block references rather than typed schemas. Structure is implicit rather than declared.

## The Database-Meets-Notes Tension

Object-oriented note-taking sits at the intersection of databases and documents. The more structure you add, the more queryable your knowledge becomes. But structure has costs: rigidity (does every meeting really need all those fields?), onboarding friction (you must learn the schema before you can take notes), and data portability risk (typed objects in Tana don't export cleanly to Markdown).

## Tradeoffs

More structure means more machine-readable, more queryable, and better suited for [[AI Wiki - PKM - Agentic Knowledge Management]]. Less structure means more flexibility, faster capture, and better portability. The right balance depends on whether your PKM is primarily for thinking (favor flexibility) or for retrieval and automation (favor structure).

## Key Points

- Object-oriented note-taking treats notes as typed objects with schemas rather than unstructured documents
- Tana supertags and Capacities typed objects are the purest implementations
- Obsidian approximates typed notes through frontmatter conventions and templates
- More structure enables better querying and AI integration but reduces flexibility and portability
- The approach works best when retrieval and automation matter more than freeform thinking

## Open Questions

- Can AI infer schemas from unstructured notes, giving the benefits of typed objects without the upfront cost?
- Will object-oriented PKM tools converge on a standard export format, reducing lock-in concerns?
- Is there a natural limit to how much structure a single person can maintain before it becomes [[AI Wiki - PKM - PKM Anti-Patterns]]?

## References

- Tana documentation on supertags and schema definitions
- Capacities documentation on typed objects
- Obsidian Starter Kit note type conventions

## Related

- [[AI Wiki - PKM - Personal Knowledge Graphs]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - Note-Taking Taxonomy]]
- [[AI Wiki - PKM - Tools for Thought]]
- [[AI Wiki - PKM - PKM Anti-Patterns]]
- [[AI Wiki - PKM - Obsidian]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
