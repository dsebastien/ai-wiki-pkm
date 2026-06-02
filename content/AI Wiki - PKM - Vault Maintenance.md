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

# AI Wiki - PKM - Vault Maintenance

Vault maintenance is proactive monitoring and repair of a knowledge base as a system. It is distinct from [[AI Wiki - PKM - Periodic Reviews]], which review content for knowledge freshness. Maintenance addresses the structural and technical health of the vault itself: broken links, orphaned notes, tag inconsistencies, missing metadata, bloated notes, path length issues, and backup integrity. Treating a PKM system like software that needs regular maintenance.

## What Maintenance Covers

**Orphaned notes.** Notes with no incoming or outgoing links. These are knowledge islands, disconnected from the graph. They cannot compound in value (see [[AI Wiki - PKM - Compounding Knowledge]]) because nothing references them and they reference nothing. Fix: link them to relevant notes, or if they have no value, archive or delete.

**Duplicate notes.** Two or more notes covering the same concept. These violate the [[AI Wiki - PKM - Single Source of Truth]] principle and create confusion about which version is authoritative. Fix: merge the best content into one note, redirect or remove the others.

**Broken links.** Wikilinks pointing to notes that do not exist (renamed, moved, or deleted). Broken links degrade trust in navigation. Fix: update the link target, create the missing note, or remove the link.

**Tag inconsistencies.** Variant spellings, abandoned tags, tags with only one or two notes. A messy tag taxonomy makes tag-based navigation unreliable. Fix: harmonize spellings, merge near-duplicates, prune unused tags.

**Missing metadata.** Notes lacking required frontmatter properties for their type. A meeting note without a date, a person note without an organization, a project note without a status. Fix: fill in missing properties using the note type template as a checklist.

**Bloated notes.** Notes that have grown beyond atomic scope and now cover multiple ideas. These need splitting into proper [[AI Wiki - PKM - Atomic Notes]]. Fix: identify distinct ideas within the note and extract each into its own note.

**Path length issues.** File paths that exceed OS limits (especially relevant for Windows sync). Deeply nested folders with long names create fragile paths. Fix: shorten folder names or flatten the structure.

**Backup integrity.** Verifying that backups are current, complete, and restorable. A PKM system without verified backups is one hardware failure away from total loss.

## Maintenance vs Review

Periodic reviews ask: "Is this knowledge still accurate and relevant?" Vault maintenance asks: "Is this system still structurally sound?" Both are necessary. A vault can have perfectly fresh content but be riddled with broken links and orphan notes. Conversely, a structurally clean vault can contain outdated knowledge. The two practices complement each other.

## Maintenance Debt

Skipping maintenance accumulates debt. Like technical debt in software, maintenance debt compounds. A few broken links are easy to fix. Hundreds of broken links, thousands of orphan notes, and a taxonomy of 500 inconsistent tags require a major cleanup project that most people never undertake. The vault degrades gradually until it becomes easier to start over than to repair. Regular, small maintenance sessions prevent this death spiral.

## Automation

Many maintenance tasks are mechanical and repetitive, making them ideal candidates for automation. Orphan detection, broken link scanning, tag auditing, metadata completeness checks, and duplicate flagging can all be automated. See [[AI Wiki - PKM - PKM Automation]] and [[AI Wiki - PKM - Agentic Knowledge Management]]. Human judgment is still needed for the remediation step (should this orphan be linked or deleted?), but surfacing the problems is a machine task.

## Key Points

- Vault maintenance addresses structural health: orphans, duplicates, broken links, tag mess, missing metadata
- Distinct from periodic reviews, which address content freshness
- Maintenance debt compounds like technical debt; small regular sessions prevent decay
- Many maintenance tasks can be automated; remediation still requires human judgment
- Backup integrity is a maintenance concern, not just an IT concern

## Open Questions

- What is the right cadence for vault maintenance (weekly, monthly, quarterly)?
- Can AI agents perform remediation autonomously, or should they only surface issues for human decision?
- How should maintenance be prioritized when the backlog is large?

## References

- Vault: Obsidian Starter Kit - Theory, Broken windows theory, Boy Scout rule
- Ward Cunningham, "Technical Debt" metaphor (1992) — applied to PKM maintenance

## Related

- [[AI Wiki - PKM - Periodic Reviews]]
- [[AI Wiki - PKM - PKM Anti-Patterns]]
- [[AI Wiki - PKM - Knowledge Lifecycle]]
- [[AI Wiki - PKM - Knowledge Decay]]
- [[AI Wiki - PKM - PKM Automation]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - Single Source of Truth]]
- [[AI Wiki - PKM - Atomic Notes]]
