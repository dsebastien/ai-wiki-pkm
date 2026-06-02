---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: high
maturity: draft
graduated_notes:
sources:
  - vault notes (Single Source of Truth (SSOT), Single Source of Truth in a PKM system, My PKM System Handbook)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T10:03
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Single Source of Truth

A Single Source of Truth (SSOT) is a central location where all information of a given type is either stored or reliably indexed. In PKM, the SSOT principle is the architectural foundation that prevents information from fragmenting across tools, devices, and formats.

## The Problem: Information Silos

Without an SSOT, knowledge scatters. Highlights live in Kindle. Voice memos live on your phone. Handwritten notes live in a notebook. Meeting notes live in Google Docs. Bookmarks live in your browser. Ideas live in your head.

Each of these is an information silo: a container that cannot connect to the others. A brilliant insight captured in a margin note cannot link to a related idea in your digital vault. A voice memo cannot be searched alongside your written notes. The more silos you have, the less your knowledge can compound.

## Two Forms of SSOT

An SSOT operates in two modes, ideally combined:

1. **Contains all the data** — Everything lives in one system. Your Obsidian vault holds all notes, highlights, references, and captures directly.
2. **Acts as a reliable index** — The SSOT knows where everything is, even if some data lives elsewhere. Your vault contains a note pointing to the Google Drive folder where family photos live, the Zotero library where papers are managed, etc.

The best approach combines both: store what you can directly, index what must live elsewhere. The vault becomes both library and catalog.

## SSOT in Practice

**One tool to rule them all.** Choose a primary Tool for Thought (e.g., [[AI Wiki - PKM - Obsidian]]) and make it the convergence point. Every other tool (Readwise, email, voice memos, paper notebooks) is a temporary inbox that feeds into the SSOT.

**Per-type SSOTs.** For each information type, define where the canonical version lives:

| Type | SSOT | Temporary sources |
|------|------|-------------------|
| Notes and ideas | Obsidian vault | Daily captures, paper notebooks, voice memos |
| Reading highlights | Obsidian (via Readwise sync) | Kindle, web clipper, PDF annotations |
| Tasks | Obsidian or dedicated task manager | Email, Slack messages, meeting notes |
| Photos | NAS or cloud storage | Phone cameras, SD cards |
| Code | Git repositories | Local files, scratch pads |

**An SSOT about your SSOTs.** Maintain an index note that documents where each type of information lives. This meta-SSOT prevents the "where did I put that?" problem at the system level.

## Why SSOT Matters for PKM

**Findability.** One place to search means you always find what you need. Multiple systems mean you search three places and miss the fourth.

**Connectability.** Notes in the same system can link to each other. Notes in different systems cannot. [[AI Wiki - PKM - Connected Notes]] only compound when they share a system.

**Backup simplicity.** One system to back up is manageable. Seven systems with different backup strategies is fragile.

**AI accessibility.** AI agents work best with comprehensive context. A fragmented knowledge base means the AI only sees a fraction of what you know. An SSOT gives agents the full picture. See [[AI Wiki - PKM - Agentic Knowledge Management]].

## The Capture Funnel

The SSOT principle shapes the architecture of [[AI Wiki - PKM - The Capture Habit]]: all capture paths (voice, handwriting, digital, paper) funnel into the same destination. The variety of entry points does not matter; convergence does.

This is also why analog capture should be transient. Handwritten notes and voice memos are valid capture methods, but they must transition to the SSOT to participate in the knowledge graph. [[AI Wiki - PKM - Analog-to-Digital Pipeline]] describes this transition.

## Key Points

- An SSOT is where all information of a given type is stored or reliably indexed
- Without SSOT, knowledge fragments into silos that cannot connect or compound
- Every tool outside the SSOT is a temporary inbox
- Maintain a meta-index documenting where each type of information lives
- SSOT enables findability, connection, backup, and AI accessibility

## Open Questions

- How do you handle information that genuinely must live in multiple systems (e.g., team Confluence AND personal vault)?
- When does an SSOT become too large to navigate effectively?

## References

- Vault: Single Source of Truth (SSOT), Single Source of Truth in a PKM system, My PKM System Handbook

## Related

- [[AI Wiki - PKM - The Capture Habit]]
- [[AI Wiki - PKM - Personal Knowledge Management]]
- [[AI Wiki - PKM - Single vs Multiple Knowledge Bases]]
- [[AI Wiki - PKM - Analog-to-Digital Pipeline]]
- [[AI Wiki - PKM - Connected Notes]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
