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
created: 2026-04-07T09:56
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Johnny Decimal System

The Johnny Decimal system, created by Johnny Noble, is a folder-based organizational system inspired by the Dewey Decimal Classification. It imposes a strict two-level numerical hierarchy that gives every item a unique, memorable address. The core constraint: nothing goes deeper than two levels.

## The Structure

The system works in three steps:

1. **Divide everything into at most 10 areas.** Areas are broad, non-overlapping domains. Each gets a two-digit code starting at 10 and incrementing by 10: 10, 20, 30, up to 90.
2. **Within each area, create at most 10 categories.** Categories are specific containers where content actually lives. They are numbered from the area code plus 1: area 10 has categories 11-19, area 20 has categories 21-29, and so on.
3. **Assign items within categories.** Individual items use the format `XX.YY Name`, where XX is the category number, a decimal dot separates it from the item ID (01, 02, 03...), and the name follows.

The result: `32.07 Project Proposal` tells you this is item 07 in category 32 (which falls under area 30). The address is unique, sortable, and speakable. You could tell someone "it is in 32.07" over the phone and they would find it.

## The Two-Level Constraint

Johnny Decimal prohibits creating folders below the category level. This is the system's most important rule and its most controversial. Deep folder hierarchies create navigation problems: you forget where things are, duplicates appear in parallel branches, and the structure becomes a maze. By capping at two levels, Johnny Decimal forces you to keep things flat and findable. "Nothing is more than two clicks away."

## Benefits

**Logical ordering.** Numbers let you arrange categories by importance or frequency of use rather than alphabetically. Put your most-used categories at lower numbers where you see them first.

**Unique addresses.** Every item has coordinates. This makes search trivial (type "32.07") and communication clear. File systems, cloud drives, email folders, and note-taking tools can all use the same numbering.

**Forced simplicity.** The 10-area, 10-category limit prevents the organizational complexity that kills most systems. If you cannot fit your life into 100 categories, you are probably over-classifying.

## Johnny Decimal and PKM

In PKM contexts, Johnny Decimal provides a stable folder backbone that coexists with tags and links. The Obsidian Starter Kit uses a Johnny Decimal-inspired numbering for its top-level folder structure (10 Meta, 20 Inbox, 30 Areas, 40 Journal, etc.). Notes within those folders are connected through wikilinks and tags, not deeper folder nesting. This hybrid approach gets the navigational clarity of numbered folders with the networked flexibility of a knowledge graph.

## Comparison with PARA

PARA (Projects, Areas, Resources, Archive) organizes by actionability: what is the current status of this item? Johnny Decimal organizes by stable categories: what *kind* of thing is this? PARA items move between categories as their status changes. Johnny Decimal items stay put because categories are defined by type, not state.

PARA is simpler (four buckets) but less precise. Johnny Decimal is more structured (up to 100 categories) but requires upfront planning. Some practitioners combine both: PARA at the conceptual level to decide *what to work on*, Johnny Decimal at the folder level to decide *where things live*.

## When Johnny Decimal Works Best

The system excels for people who think spatially in folders, who manage mixed digital and physical systems (the same numbering works for paper files, USB drives, and cloud storage), and who want a structure that does not change as projects come and go. It is less suited for people who prefer flat, search-first workflows or who find numerical systems unintuitive.

## Key Points
- Structure: 10 areas max, 10 categories per area, items numbered XX.YY
- The two-level constraint prevents deep folder hierarchies and keeps everything findable
- Every item gets a unique, speakable address
- Works as a folder backbone alongside tags and links in PKM tools like Obsidian
- PARA organizes by actionability; Johnny Decimal organizes by stable category type

## Open Questions
- Does the 100-category cap become limiting for people managing multiple life domains (personal, work, side projects)?
- How should Johnny Decimal numbering adapt when a PKM vault's scope grows beyond the original 10 areas?
- Can AI assistants auto-assign Johnny Decimal coordinates to new items based on content analysis?

## References
- Johnny Decimal official site: https://johnnydecimal.com
- Johnny Decimal forum: https://forum.johnnydecimal.com
- Vault notes: Johnny Decimal system, LIFT principle, PARA method, Obsidian Starter Kit

## Related
- [[AI Wiki - PKM - PARA Method]]
- [[AI Wiki - PKM - FILE Framework]]
- [[AI Wiki - PKM - Obsidian Starter Kit]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - PIM vs PKM]]
- [[AI Wiki - PKM - Life Operating Systems]]
