---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
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

# AI Wiki - PKM - PKM for Research

Academic and research workflows place specific demands on PKM systems that general-purpose setups don't always address: rigorous source attribution, citation management, systematic literature processing, and the need to trace every claim back to its origin.

## Reference Management

Reference managers are the foundation of research PKM. Zotero (open-source, extensible) and Mendeley (Elsevier-owned, tightly integrated with their ecosystem) handle the core tasks: storing PDFs, extracting metadata, generating citations, and managing bibliographies. Zotero has become the dominant choice in the PKM community due to its plugin ecosystem, open data format, and interoperability with tools like Obsidian.

## The Annotation Pipeline

Research PKM follows a distinct processing chain: highlight → annotate → synthesize. First, you mark passages in a source. Then you add your own commentary explaining why a passage matters. Finally, you synthesize across multiple sources, extracting insights into atomic notes that stand on their own. This pipeline prevents the common failure mode of collecting hundreds of highlighted PDFs that never get processed into usable knowledge.

## The Zotero-to-Obsidian Workflow

A widely adopted research PKM workflow connects Zotero to Obsidian via plugins like Zotero Integration (formerly Obsidian Citations). The pipeline: import a paper into Zotero, annotate the PDF there, then pull annotations and metadata into Obsidian as a literature note. From the literature note, you extract key ideas into permanent/evergreen notes linked back to the source. This creates a two-layer system: a reference library (Zotero) and a thinking environment (Obsidian).

## Managing Hundreds of Papers

Scale introduces specific challenges. Literature reviews may require processing 50-200+ papers. Strategies include: tagging papers by theme and methodology in Zotero, creating synthesis matrices (concept × source) in Obsidian, and writing progressive summary notes that evolve as you read more sources. The goal is never to remember every paper but to build navigable structure that lets you find relevant sources when you need them.

## How Research PKM Differs

Research PKM diverges from general PKM in several ways. Source attribution is non-negotiable; every claim must trace to a citable reference. Citation chains matter because one paper's references lead you to the next. Systematic review requires exhaustive coverage, not selective capture. And the output format is typically formal writing with strict citation requirements, not informal notes or blog posts.

## Connection to Zettelkasten

It's worth remembering that Zettelkasten, one of the most influential PKM methods, was invented for exactly this purpose. Niklas Luhmann built his slip-box to manage a massive, decades-long academic research program. The method's emphasis on source notes, permanent notes, and explicit linking was designed for scholarly work from the start.

## Key Points
- Research PKM demands rigorous source attribution and citation management that general PKM often skips
- The annotation pipeline (highlight → annotate → synthesize) prevents the "graveyard of highlights" problem
- Zotero-to-Obsidian is the dominant open-source research PKM workflow
- Synthesis matrices and progressive summaries help manage large literature review projects
- Zettelkasten was originally designed for academic research, making it a natural fit

## Open Questions
- How will AI-assisted literature review change the annotation pipeline?
- Can semantic search (RAG) replace manual synthesis for navigating large reference libraries?
- What's the right balance between structured reference management and freeform note-taking in research?

## References
- Luhmann, N. — Zettelkasten method for academic research
- Ahrens, S. (2017). "How to Take Smart Notes"
- Zotero — https://www.zotero.org
- Obsidian Zotero Integration plugin

## Related
- [[AI Wiki - PKM - Zettelkasten Method]]
- [[AI Wiki - PKM - Progressive Summarization]]
- [[AI Wiki - PKM - Atomic Notes]]
- [[AI Wiki - PKM - Evergreen Notes]]
- [[AI Wiki - PKM - Tools for Thought]]
- [[AI Wiki - PKM - Knowledge Lifecycle]]
