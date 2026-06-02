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
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Zone-Based Organization

Zone-based organization structures a knowledge base by function (what type of thing a note is) rather than topic (what the note is about). Instead of folders like "Programming," "Health," or "Business," zones are defined by the role notes play in the system: Meta, Actions, Areas, Journal, Resources, Archives. This is an extension of the PARA method that adds Meta and Journal zones.

## The Zones

**Meta.** System configuration, identity, AI assistant infrastructure, templates, documentation about the system itself. The zone that makes the vault self-describing.

**Actions.** Goals, plans, projects, tasks. Everything with a deadline, a status, or a next step. This zone is where work gets done. See [[AI Wiki - PKM - GTD and PKM]] for the action management philosophy.

**Areas.** Ongoing domains of responsibility and interest with no end date. Literature notes, permanent notes, maps of content, creations. The heart of the knowledge base.

**Journal.** Time-based capture: daily notes, weekly reviews, monthly reflections, yearly reviews. The chronological backbone. See [[AI Wiki - PKM - Daily Notes]] and [[AI Wiki - PKM - Periodic Reviews]].

**Resources.** Reference material: templates, checklists, lookup tables, external documentation. Things you consult but do not develop.

**Archives.** Inactive items: completed projects, retired goals, obsolete references. Kept for historical value but removed from active navigation.

## Why Function-First Beats Topic-First

Topic-based organization seems intuitive but scales poorly. The problem: topics proliferate. A note about "using spaced repetition to learn programming" could go in "Learning," "Programming," "Productivity," or "Spaced Repetition." Every new note triggers a classification decision, and the decision gets harder as folders multiply. This is the core issue that [[AI Wiki - PKM - Tagging and Metadata]] solves for retrieval, but the folder problem remains for storage.

Function-based zones eliminate the classification problem for folders. A project note goes in Actions. A permanent note goes in Areas. A daily note goes in Journal. The function of a note is almost always unambiguous, even when its topic is not. Functions are stable (you will always have projects, areas, and journals) while topics shift with your interests.

## Extension of PARA

The [[AI Wiki - PKM - PARA Method]] defines four categories: Projects, Areas, Resources, Archives, organized by actionability. Zone-based organization extends PARA by adding Meta (the self-describing layer) and Journal (the temporal layer). These additions are critical for mature systems: Meta enables AI readiness (see [[AI Wiki - PKM - Context-as-Code]]), and Journal provides the chronological capture that PARA assumes but does not specify.

## Zones and Note Types

Within each zone, [[AI Wiki - PKM - Typed Notes]] provide further structure. The Areas zone contains permanent notes, literature notes, maps of content, and creations, each with its own template and properties. Zones define where notes live; types define what notes are. Together they form a two-dimensional organizational schema: function (zone) x structure (type).

## Key Points

- Zones organize by function (what a note does) not topic (what it is about)
- Six zones: Meta, Actions, Areas, Journal, Resources, Archives
- Function-first organization scales because functions are stable; topics proliferate
- Extends PARA by adding Meta (system self-description) and Journal (temporal capture)
- Zones define location; note types define structure; together they form a complete schema

## Open Questions

- Is the six-zone model universal, or do some workflows need additional zones?
- How should cross-zone linking work (e.g., a daily note referencing a project)?
- At what vault size do zones provide measurable navigation benefits over flat or topic-based structures?

## References

- Vault: Obsidian Starter Kit - System - Zone System, Obsidian Starter Kit - Theory
- Tiago Forte, "Building a Second Brain" (2022) — PARA method
- Johnny Decimal system — numerical zone-like structure

## Related

- [[AI Wiki - PKM - PARA Method]]
- [[AI Wiki - PKM - Typed Notes]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - Information Architecture for PKM]]
- [[AI Wiki - PKM - Daily Notes]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Life Operating Systems]]
