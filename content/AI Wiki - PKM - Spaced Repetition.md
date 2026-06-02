---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: high
maturity: draft
graduated_notes:
sources:
  - vault notes (Spaced repetition, Memory, Working Memory)
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
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Spaced Repetition

Spaced repetition is a learning technique that schedules review of material at increasing intervals, exploiting the spacing effect in memory research. In a PKM context, spaced repetition bridges the gap between capturing knowledge and retaining it, ensuring that important ideas do not fade into the forgotten corners of a growing note collection.

## The Science

The spacing effect, first identified by Hermann Ebbinghaus in 1885, shows that information is better retained when study sessions are spaced out over time rather than massed together (cramming). Each successful recall at a longer interval strengthens the memory trace.

The forgetting curve describes how memory of new information decays exponentially without reinforcement. Spaced repetition fights this curve by scheduling reviews just before the predicted forgetting point, each time pushing the next forgetting point further out.

## How It Works

Most spaced repetition systems use a variant of the SM-2 algorithm (or its successors):

1. After reviewing an item, rate your recall (easy, good, hard, forgot)
2. Based on the rating, schedule the next review:
   - Easy recall → longer interval (days → weeks → months)
   - Hard recall → shorter interval (reset or reduce)
3. Over time, well-known items are reviewed rarely; struggling items are reviewed frequently

The result: efficient allocation of review time. You spend the most time on what you know the least.

## Spaced Repetition in PKM

Traditional spaced repetition is associated with flashcard apps (Anki, SuperMemo). In PKM, the concept extends beyond flashcards:

### Note Review Scheduling
Schedule periodic reviews of permanent notes, not just memorization drills. Revisiting an [[AI Wiki - PKM - Evergreen Notes]] note after 2 weeks, then 1 month, then 3 months keeps it fresh and surfaces new connections each time.

### Review Queues
Build a review queue that surfaces notes based on:
- Time since last review
- Note importance or rating
- Confidence level
- Connection density (under-linked notes may need more attention)

### Knowledge Decay Detection
Identify notes where your understanding may have decayed. A note about a specific API you have not used in 6 months deserves a review before you rely on it.

### Progressive Deepening
Each review is an opportunity to deepen the note — add links, refine the writing, update with new understanding. This combines spaced repetition with the continuous refinement principle of [[AI Wiki - PKM - Evergreen Notes]].

## Integration with PKM Tools

Obsidian supports spaced repetition through community plugins that:
- Track review dates in note metadata
- Build review queues with SM-2 scheduling
- Generate flashcards from note content
- Surface notes due for review in daily notes

Readwise's Daily Review feature applies spaced repetition to reading highlights, resurfacing past highlights on a schedule.

## Limitations

- **Not all knowledge is flashcard-shaped.** Complex understanding, nuanced arguments, and creative insights resist reduction to recall prompts.
- **Maintenance overhead.** Large flashcard decks require daily time investment.
- **Retention is not understanding.** You can correctly recall a definition without truly understanding the concept. Spaced repetition helps retention; active writing and linking help understanding.

The most effective approach combines spaced repetition (for retention) with active note-writing (for understanding) and linking (for connection).

## Key Points

- Spaced repetition schedules reviews at increasing intervals to fight the forgetting curve
- In PKM, it extends beyond flashcards to note review scheduling and knowledge maintenance
- Each review is an opportunity to deepen and connect notes
- Retention alone is not understanding; combine with active writing and linking

## Open Questions

- Can AI replace manual scheduling by predicting which notes need review?
- How does spaced repetition interact with [[AI Wiki - PKM - Compounding Knowledge]]?

## References

- Vault: Spaced repetition, Memory, Working Memory
- Ebbinghaus, "Memory: A Contribution to Experimental Psychology" (1885)
- Wozniak, SuperMemo and SM-2 algorithm

## Related

- [[AI Wiki - PKM - Evergreen Notes]]
- [[AI Wiki - PKM - Compounding Knowledge]]
- [[AI Wiki - PKM - Note-Taking Taxonomy]]
- [[AI Wiki - PKM - Personal Knowledge Management]]
- [[AI Wiki - PKM - Cognitive Science of PKM]]
- [[AI Wiki - PKM - Knowledge Lifecycle]]
- [[AI Wiki - PKM - Obsidian]]
