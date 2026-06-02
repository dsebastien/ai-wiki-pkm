---
wiki_name: PKM
wiki_role: article
explored: true
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
created: 2026-04-07T09:54
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - LIFT Principle

The LIFT principle is a design heuristic originally from the [[AngularJS]] and Angular code style guides (introduced by Google) that translates remarkably well to [[Personal Knowledge Management (PKM)]]. It provides a quick quality check for any organizational decision: can you Locate it, Identify it, keep the structure Flat, and Try to stay DRY?

## The Four Components

**Locate.** Information should be easy to find. In code, this means predictable file names and folder structures. In PKM, it means consistent naming conventions, good search metadata, and enough structure that you can navigate to a note without remembering its exact location. If you cannot find a note within seconds, your system has a locate problem.

**Identify.** Once found, it should be immediately clear what something is. Note titles should be descriptive. Frontmatter properties should declare the note type. The first paragraph should state the core idea. A note titled "Thoughts 2024-03-15" fails the identify test; a note titled "LIFT principle" passes it.

**Flat structure as long as possible.** Resist premature nesting. Deep folder hierarchies create cognitive overhead and force classification decisions that slow you down. Keep structures flat until the volume of items genuinely demands subdivision. This aligns with the networked thought philosophy: prefer links over folders.

**Try to stay DRY.** The [[Don't Repeat Yourself (DRY) principle]] applies to knowledge too. When the same information exists in multiple notes, updates become inconsistent. Use links and transclusion instead of copying content. One canonical source, many references.

## LIFT as a Quality Check

LIFT works as a rapid diagnostic. For any note or folder, ask: Can I locate this easily? Can I identify what it is at a glance? Is the structure as flat as it can be? Am I repeating information that should be referenced instead? If any answer is no, that is the intervention point. The principle complements the [[Introducing the FILE Framework for Information and Knowledge Management|FILE Framework]], which addresses broader information lifecycle questions while LIFT focuses on structural usability.

## Key Points
- Originally a Google/Angular code organization principle, adapted effectively for PKM
- Four tests: Locate (findable), Identify (clear purpose), Flat (minimal nesting), Try DRY (no duplication)
- Works as a quick diagnostic for any organizational decision in a knowledge base
- Flat structure preference aligns with networked thought over hierarchical filing
- Complementary to the FILE Framework for comprehensive information management

## Open Questions
- Does the "flat structure" component conflict with vault structures that use deep folder hierarchies like PARA or Johnny Decimal?
- At what vault size does flatness become a liability rather than an asset?
- How should LIFT be adapted when AI search makes the "Locate" component less dependent on human-navigable structure?

## References
- Angular Style Guide: LIFT principle (https://angular.io/guide/styleguide#lift)
- [[LIFT principle]] (vault note)
- [[Organize Everything With The LIFT principle (Article)]]

## Related
- [[AI Wiki - PKM - Atomic Notes]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - PKM Anti-Patterns]]
- [[AI Wiki - PKM - Tools for Thought]]
- [[AI Wiki - PKM - Information Architecture for PKM]]
