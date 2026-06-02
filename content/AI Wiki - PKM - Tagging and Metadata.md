---
wiki_name: PKM
wiki_role: article
explored: true
ai_generated: true
confidence: high
maturity: draft
graduated_notes:
sources:
  - vault notes (Why and how to tag notes in your PKM, When you take a note you need to add a minimum of metadata, Information Architecture)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T09:11
updated: 2026-04-14T17:23
public_note: true
---

# AI Wiki - PKM - Tagging and Metadata

Tags and metadata are the organizational scaffolding of a PKM system. While links connect ideas conceptually, tags and metadata enable filtering, querying, and navigating the knowledge base at scale. A well-designed tagging system makes notes findable without requiring you to remember where you put them.

## Why Tag?

Tags solve the "one note, many contexts" problem. A note about "cognitive load in UI design" is relevant to both "psychology" and "software development." A folder-based system forces you to choose one location. Tags allow the note to live in both contexts simultaneously.

Beyond categorization, tags enable:

- **Filtering** — Show all notes tagged `#project/active` to see what is in flight
- **Querying** — Combine tags for powerful searches: all `#literature_note` tagged `#topic/psychology` from the last 6 months
- **Discovery** — Browse a tag to find notes you had forgotten about
- **Status tracking** — Tags like `#status/draft`, `#status/reviewed`, `#status/evergreen` track note maturity

## Metadata Beyond Tags

Modern PKM tools support structured metadata (YAML frontmatter in Obsidian, properties in Notion). Common metadata fields:

- **Type** — What kind of note is this? (permanent note, literature note, daily note, etc.)
- **Source** — Where did the information come from?
- **Date created / Date modified** — Temporal context
- **Status** — Draft, reviewed, published, archived
- **Rating** — How valuable is this note? (1-5 stars)
- **Related topics** — Tags or links to parent concepts

When you take a note, you need to add a minimum of metadata. The exact minimum depends on your system, but type and at least one tag are usually non-negotiable. Metadata added at creation time is far more reliable than metadata added retroactively.

## Five Types of Tags

A useful classification system distinguishes five tag purposes:

1. **Taxonomy tags** — Topics and domains a note belongs to (`#psychology`, `#software_development`)
2. **Type tags** — What kind of note it is (`#type/quote`, `#type/meeting`, `#type/project`)
3. **Status tags** — Progress state (`#status/draft`, `#status/reviewed`, `#status/outdated`)
4. **Action tags** — What should happen next (`#action/review`, `#action/publish`, `#action/summarize`)
5. **Concept tags** — Identify first principles across domains (`#concept/feedback_loops`, `#concept/compounding`)

This classification helps ensure tags are used consistently for different purposes rather than being a flat, undifferentiated pool. A single note might carry tags from multiple categories: a taxonomy tag for its topic, a type tag for its form, and a status tag for its maturity.

**Practical rule:** Tags over folders for topic organization. Notes can have many tags but only one folder location. Use folders to categorize by content type (note type, project), not by topic. Topics belong to tags.

## Tagging Best Practices

**Use an existing taxonomy.** Before creating a new tag, check if a suitable one already exists. Tag sprawl (dozens of near-duplicate tags) is the enemy of findability.

**Hierarchical tags help at scale.** `#topic/psychology/cognitive-load` is more useful than flat `#cognitive-load` when you have thousands of notes. Hierarchies enable both broad (`#topic/psychology`) and narrow (`#topic/psychology/cognitive-load`) queries.

**Tags over folders.** A note can only be in one folder but can carry many tags. Tags offer richer, multi-dimensional organization. Folders are best used for high-level structural separation (note types, projects), not topic-based filing.

**Automate where possible.** Templates that pre-fill metadata, plugins that auto-tag based on content or folder location, and AI-assisted tagging all reduce the manual burden.

**Regular maintenance.** Periodically audit your tag taxonomy: merge duplicates, retire obsolete tags, ensure consistency. A neglected tag system degrades the entire knowledge base.

## Information Architecture

Tagging and metadata design is fundamentally an information architecture (IA) problem. Good IA makes information findable, usable, and navigable. In a PKM context, this means:

- Consistent naming conventions for tags
- Clear definitions for each metadata field
- Documented rules for how and when to apply tags
- Regular audits to maintain quality

The investment in IA pays compound returns as the knowledge base grows. A system with 100 notes can survive chaotic tagging; a system with 10,000 notes cannot.

## Key Points

- Tags solve the "one note, many contexts" problem that folders cannot
- Metadata (type, source, status, rating) adds structured context to notes
- Use existing tags before creating new ones; tag sprawl kills findability
- Hierarchical tags and automation help at scale
- Regular tag maintenance is essential

## Open Questions

- Can AI reliably auto-tag notes, or does human judgment remain essential?
- What is the optimal depth for tag hierarchies before they become unwieldy?

## References

- Vault: Why and how to tag notes in your PKM, When you take a note you need to add a minimum of metadata, Information Architecture

## Related

- [[AI Wiki - PKM - Ontology]]
- [[AI Wiki - PKM - Ontological Commitment]]
- [[AI Wiki - PKM - Taxonomies vs Ontologies]]
- [[AI Wiki - PKM - Controlled Vocabulary]]
- [[AI Wiki - PKM - Personal Knowledge Management]]
- [[AI Wiki - PKM - Note-Taking Taxonomy]]
- [[AI Wiki - PKM - Obsidian]]
- [[AI Wiki - PKM - Atomic Notes]]
- [[AI Wiki - PKM - Object-Oriented Note-Taking]]
- [[AI Wiki - PKM - Knowledge Lifecycle]]
- [[AI Wiki - PKM - Personal Knowledge Graphs]]
