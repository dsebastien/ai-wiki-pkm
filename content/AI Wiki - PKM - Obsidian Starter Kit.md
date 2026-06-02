---
wiki_name: PKM
wiki_role: article
explored: false
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
created: 2026-04-07T09:52
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Obsidian Starter Kit

The Obsidian Starter Kit (OSK) is a pre-configured Obsidian vault that implements PKM best practices out of the box. It bridges the gap between "I downloaded Obsidian" and "I have a working PKM system" by providing a complete structure with folders, templates, note types, metadata conventions, and increasingly, an AI assistant system.

## What OSK Provides

OSK is not a plugin or a theme; it is a full vault with a ready-to-use organizational structure, dozens of templates, a defined note type system, tagging conventions, and comprehensive documentation. It draws on Zettelkasten, PARA, GTD, and other established methodologies, combining them into a coherent, opinionated system that works immediately while remaining customizable.

## The Note Type System

OSK defines distinct note types, each with specific properties, tags, folders, and templates. These include fleeting notes, literature notes, permanent notes, daily notes, periodic notes (weekly, monthly, quarterly, yearly), Maps of Content (MoCs), task notes, project notes, goal notes, and several others. Each note type has a defined purpose, a template with pre-configured frontmatter, and a designated folder location. This taxonomy ensures consistency across the vault and enables automated processing via Dataview queries and AI agents.

## Folder Structure

OSK uses a zone-based folder hierarchy inspired by PARA but more granular. Key zones include Meta (system configuration, personal identity, AI assistant), Journal (daily and periodic notes), Areas (literature notes, permanent notes, maps, creations), Resources, and Archive. Numbering (10, 20, 30, etc.) provides stable sort order. The structure is opinionated enough to eliminate decision paralysis about where to put things, but flexible enough to extend.

## Templates

Templates are central to OSK. Every note type has a corresponding template with pre-populated frontmatter properties (tags, dates, aliases, descriptions), structural headings, and placeholder content. Templates enforce consistency, reduce cognitive overhead when creating notes, and ensure that metadata required by Dataview queries and AI agents is always present.

## Metadata Conventions

OSK uses YAML frontmatter extensively. Standard properties include tags (using a hierarchical taxonomy), created/updated timestamps, aliases, descriptions, and type-specific fields. This metadata layer enables powerful querying, filtering, and AI processing that would be impossible with unstructured notes.

## The Zettelkasten Implementation

OSK implements a practical Zettelkasten with fleeting notes (quick captures in daily notes or the WIP folder), literature notes (processed highlights from books, articles, and other sources), and permanent notes (atomic, original-thought notes that form the core knowledge graph). The progression from fleeting to literature to permanent mirrors the Zettelkasten workflow while integrating with modern tooling like Readwise sync and AI-assisted processing.

## The AI Assistant System

OSK includes an AI assistant infrastructure built on Claude Code. This system comprises agents (specialized AI personas with defined roles, memory, and skills), skills (discrete capabilities like note writing, vault hygiene, content creation), and panels (groups of agents that evaluate content from multiple angles). Agents have persistent memory and accumulate knowledge about the user and the vault over time. This system turns the vault from a passive knowledge store into an active, AI-augmented knowledge management environment.

## Bridging the Setup Gap

The fundamental problem OSK solves is the blank-vault problem. Most PKM tools, Obsidian included, start empty. The user must decide on folder structure, note types, naming conventions, tagging taxonomy, templates, and workflows before they can begin productive knowledge work. OSK front-loads these decisions with well-tested defaults, letting users start capturing and organizing knowledge immediately and customizing the system as they develop their own preferences.

## Key Points
- OSK is a complete, pre-configured Obsidian vault implementing PKM best practices
- The note type system provides templates, metadata, and folder placement for every kind of note
- Zone-based folder hierarchy draws from PARA but extends it with numbering and granularity
- An integrated AI assistant system (agents, skills, panels) enables agentic knowledge management
- OSK eliminates the blank-vault problem that stops most PKM newcomers

## Open Questions
- How should OSK evolve as AI capabilities expand beyond text processing into multimodal knowledge work?
- What is the right balance between opinionated defaults and user customization?
- Can the AI assistant system be extracted and applied to non-OSK vaults?

## References
- Vault notes: Obsidian Starter Kit - Theory, Obsidian Starter Kit - Reference - Folder structure, Obsidian Starter Kit - Reference - Templates
- Published at: https://notes.dsebastien.net

## Related
- [[AI Wiki - PKM - Obsidian]]
- [[AI Wiki - PKM - Zettelkasten Method]]
- [[AI Wiki - PKM - PARA Method]]
- [[AI Wiki - PKM - AI Agent Systems]]
- [[AI Wiki - PKM - AI Skills in PKM]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - Note-Taking Taxonomy]]
