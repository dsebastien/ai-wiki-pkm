---
wiki_name: PKM
wiki_role: article
explored: true
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
created: 2026-04-07T09:55
updated: 2026-04-08T07:37
public_note: true
---

# AI Wiki - PKM - FILE Framework

The FILE framework is an evaluation heuristic for information and knowledge management systems. It provides four criteria that any system must satisfy to be usable in practice. FILE stands for: **F**ile (easy to file), **I**dentify (easy to identify), **L**ocate (easy to locate), **E**asy to retrieve (low friction retrieval).

## The Four Criteria

**File.** When you have a new piece of information, can you put it in the right place quickly and without agonizing? Systems that require complex classification decisions at capture time create friction that discourages use. If filing is hard, people stop filing. The best systems make the "where does this go?" decision obvious or eliminate it entirely (e.g., daily notes that auto-sort by date).

**Identify.** When you look at an item, can you immediately understand what it is and why it is there? Clear naming conventions, descriptive titles, consistent formatting, and meaningful metadata all serve identification. A folder full of files named "notes_final_v2_REAL.txt" fails this criterion. A vault with atomic notes using concept-oriented titles passes it.

**Locate.** Can you find something when you need it? This covers both browsing (navigating a folder structure) and searching (full-text search, tag queries, link traversal). A system that is easy to file into but hard to locate within is a black hole: information goes in and never comes out. Location depends on having good structure (folders, tags, links) and good tooling (fast search, graph views, Dataview queries).

**Easy to retrieve.** Once located, can you actually get the information out and use it? Retrieval goes beyond finding; it means the information is in a format you can work with immediately. A PDF buried in a zip file inside a cloud archive is locatable but not easily retrievable. A markdown note with clear headings, linked to related notes, with source references is both locatable and immediately usable.

## As a Design Guide

When building a PKM system from scratch, FILE serves as a design checklist. For each structural decision (folder hierarchy, naming convention, tag taxonomy, template design), ask: does this make filing easier? Does this make identification clearer? Does this improve locatability? Does this reduce retrieval friction? Any decision that degrades one criterion without improving another is suspect.

## As a Diagnostic Tool

When an existing system feels broken, FILE helps pinpoint *where* it is broken. Common failure patterns:

- **Filing failure.** You capture things but they pile up in an unsorted inbox because you cannot decide where they belong. Fix: simplify the folder structure, add a default landing zone, reduce classification choices.
- **Identification failure.** You find notes but cannot tell what they contain without opening each one. Fix: enforce descriptive titles, add frontmatter summaries, use consistent note templates.
- **Location failure.** You know something exists but cannot find it. Fix: add more cross-links, improve tagging, use Maps of Content for topic clusters.
- **Retrieval failure.** You find it but cannot use it because the format is wrong, the context is missing, or the note is too cryptic. Fix: write notes in full sentences, include source references, link to related context.

## Relationship to LIFT

FILE is closely related to the LIFT principle (Locatable, Identifiable, Flat, Try to stay DRY), which originated in Google's Angular code style guides and was adapted for PKM. Both frameworks emphasize locatability and identifiability. FILE adds explicit attention to the filing (input) and retrieval (output) ends of the pipeline, making it a more complete heuristic for the full information lifecycle.

## Tool-Agnostic Application

FILE works regardless of whether you use Obsidian, Notion, a physical filing cabinet, or a hybrid system. The criteria are about information architecture, not implementation. A Johnny Decimal folder structure optimizes for locatability and identification. A Zettelkasten optimizes for retrieval and connection. PARA optimizes for filing by actionability. Evaluating any method through FILE reveals its strengths and the criteria where it needs supplementary practices.

## Key Points
- FILE: easy to File, easy to Identify, easy to Locate, Easy to retrieve
- Functions as both a design guide (when building) and a diagnostic tool (when something feels broken)
- Each criterion targets a different phase of the information lifecycle: input, recognition, search, output
- Related to but more complete than the LIFT principle
- Applies to any PKM system regardless of tool or methodology

## Open Questions
- Should a fifth criterion address *connection* (easy to link to related information)?
- How do AI-powered systems change the FILE equation, particularly for locating and retrieving?
- Can FILE criteria be quantitatively measured, or is it inherently subjective?

## References
- Vault notes: FILE framework, LIFT principle, Introducing the FILE Framework for Information and Knowledge Management

## Related
- [[AI Wiki - PKM - PARA Method]]
- [[AI Wiki - PKM - Johnny Decimal System]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - PKM Anti-Patterns]]
- [[AI Wiki - PKM - Note-Taking Taxonomy]]
- [[AI Wiki - PKM - PIM vs PKM]]
