---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: low
maturity: draft
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
created: 2026-04-07T09:55
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Information Architecture for PKM

Information Architecture (IA) is the structural design of information environments. When applied to personal knowledge bases, IA determines how easily you find, navigate, and connect your notes. The discipline was formalized by [[Richard Saul Wurman]] (who coined the term in 1976) and by Rosenfeld and Morville's "Polar Bear Book" (1998). Its four core components map directly to PKM design decisions.

## The Four IA Components in PKM

**Organization** determines how notes are categorized. PKM systems use topical schemes (folders by subject), chronological schemes (daily notes by date), faceted schemes (tags enabling multiple classifications simultaneously), or hybrid approaches. The choice shapes everything downstream.

**Labeling** governs how notes are named. Clear, descriptive titles and consistent naming conventions reduce cognitive load. A note titled "Zettelkasten Method" is instantly identifiable; "Notes from Tuesday" is not.

**Navigation** defines how you move through your vault. Folder trees, Maps of Content (MoCs), backlinks, graph views, and breadcrumb trails are all navigation systems. Different tools emphasize different navigation paradigms.

**Search** handles direct retrieval. Full-text search, tag queries, Dataview queries, and AI-powered semantic search all serve this component.

## Wurman's LATCH Principle

[[Richard Saul Wurman]] proposed that all information can be organized by exactly five schemes: **L**ocation, **A**lphabet, **T**ime, **C**ategory, and **H**ierarchy. In PKM, time (daily notes, creation dates) and category (tags, folders) dominate, but location (geographic metadata), alphabet (alphabetical indexes), and hierarchy (nested folder structures, MoCs) all appear in well-designed vaults.

## The Findability-Serendipity Tension

Strict IA optimizes for findability: you know what you want and can get to it fast. But PKM also benefits from serendipity: stumbling on connections you did not anticipate. Graph views, random note surfacing, and loose linking serve serendipity at the cost of some structural predictability. The best PKM architectures balance both, using structure for retrieval and links for discovery.

## How Tools Implement Different IA Choices

Different PKM tools embed different IA philosophies. [[Obsidian]] uses flat Markdown files with links, favoring networked navigation. [[Notion]] uses databases with views, favoring structured queries. [[Tana]] uses supertags that combine typing and linking. Each tool's IA choices constrain and enable different knowledge workflows. Choosing a tool is partly choosing an information architecture.

## Compound Returns at Scale

IA investment pays off nonlinearly. A 100-note vault works fine with minimal structure. A 10,000-note vault without thoughtful IA becomes a graveyard of unfindable information. The time spent on naming conventions, tag taxonomies, and navigation structures compounds as the vault grows.

## Key Points
- The four IA components (organization, labeling, navigation, search) map directly to PKM design decisions
- Wurman's LATCH principle (Location, Alphabet, Time, Category, Hierarchy) covers all possible organization schemes
- Findability and serendipity are in productive tension; good PKM architectures balance both
- Tool choice is partly an IA choice: Obsidian favors links, Notion favors databases, Tana favors typed objects
- IA investment compounds at scale; it matters little for small vaults and enormously for large ones

## Open Questions
- Can AI-powered tools reduce the need for human-designed IA by making any structure searchable?
- Is there an optimal IA for PKM, or does it depend entirely on individual cognitive style?
- How should IA evolve as a vault grows from hundreds to tens of thousands of notes?

## References
- Rosenfeld, L. & Morville, P. (1998). "Information Architecture for the World Wide Web"
- Wurman, R.S. (1989). "Information Anxiety"
- [[Information Architecture (IA)]] (vault note)

## Related
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - LIFT Principle]]
- [[AI Wiki - PKM - Linking Your Thinking]]
- [[AI Wiki - PKM - Tools for Thought]]
- [[AI Wiki - PKM - Personal Knowledge Management]]
- [[AI Wiki - PKM - Networked Thought]]
