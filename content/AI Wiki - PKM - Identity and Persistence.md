---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - web research
  - Stanford Encyclopedia of Philosophy — Identity Over Time
  - Plutarch — Life of Theseus (Ship of Theseus)
  - Parfit, D. (1984) — Reasons and Persons
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T19:08
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Identity and Persistence

When is a note the same note? A permanent note created in 2023, edited monthly for three years, with half its text replaced, most of its links re-worked, and its title changed once — is that the same note it was, or a different one? The Ship of Theseus question transposes directly into PKM, and the answer shapes how vaults track revision, attribution, and history.

## The Classical Problem

Plutarch posed the original puzzle: the ship Theseus sailed back from Crete was preserved in Athens, with rotting planks replaced one at a time over generations. At some point every original plank was gone. Is it still the ship of Theseus? If yes, what made it the same ship through the replacements? If no, when exactly did it become a different ship — at one plank, at 51 percent, at the last?

The puzzle has no universally accepted solution. Different accounts of identity handle it differently. **Material continuity** says identity requires shared matter (the new ship fails). **Formal continuity** says identity requires shared form and function (the new ship passes). **Causal continuity** says identity requires an unbroken causal chain of gradual change (the new ship passes, but a plank-by-plank reconstruction of the original after it was destroyed would not). **Narrative continuity** says identity requires a continuous history acknowledged by relevant communities (the Athenians kept calling it the ship of Theseus, so it is).

## Note Identity

Every PKM system takes an implicit position. Most tools treat identity as **filename identity**: the note is the same while the filename is the same, different when renamed. This breaks down when you rename a note (is the note destroyed and recreated?), merge two notes (which one survives?), or split a note (which child inherits the original's backlinks?).

More sophisticated tools use **UUID identity**: a hidden stable identifier travels with the note regardless of filename changes. Obsidian's approach is filename-based by default but tools like the Advanced URI plugin add UUIDs. File-system–native markdown vaults inherit file-system identity, which is generally filename-plus-path.

None of these is obviously right. UUID identity survives renames and splits but complicates Ship-of-Theseus questions (if I rewrite every word of a note, the UUID identity says it's still the same note; most users would disagree). Filename identity matches human intuition for simple cases but fails under rename. File-system identity is whatever the file system thinks, which varies.

## Persistence Through Revision

A more practical question than strict identity: when a note changes substantially, how do you preserve the trace of what it was?

Version control (git) gives one answer: the history is preserved as diffs and the current state is what the file says now. The note is "the same note" in the sense that its history is continuous, but you can always check what it was at any past moment. This is material-continuity-plus-history.

Without version control, the common fallback is human-maintained change logs at the bottom of notes, or struck-through text showing superseded content. This is less complete but more visible than a git log; the revision history is part of the note itself.

A third approach — forking — treats major revisions as new notes that link back to the old. The 2023 version remains as an artifact; the 2026 version is a new note that cites and supersedes it. This is appropriate when the revision is substantive enough that conflating them would lose information.

## Why This Matters for PKM

Several practices depend on identity decisions.

- **Backlink preservation**: when you rename a note, do the backlinks still work? Depends on whether your tool updates references automatically and whether other vaults (collaborators, AI agents, publications) have cached the old reference.
- **Retraction propagation**: if a note is updated with corrected information, how do downstream notes that cited it learn of the change? Identity continuity matters here — the updated note is (or isn't) the same note the downstream notes intended.
- **Learning from revision history**: understanding how your thinking evolved requires that the note you are looking at today has a traceable identity connection to yesterday's note.
- **Credit and attribution**: if a collaborator contributed to a note, the identity over time determines what they contributed to.

## Personal Identity as Analogy

Parfit's work on personal identity gives useful vocabulary. You are the same person over time in the sense of psychological continuity — memories, personality, goals — not because any single physical or mental component persists unchanged. Parfit argued that identity is less important than we think; what matters is the continuity of the relevant features, not some metaphysical persisting self.

Transposed to notes: what matters is not whether this note IS the same note it was, but whether the features that made it useful (meaning, place in the link structure, confidence markers, revision history) carry through the changes. A note that is "the same note" by filename but whose meaning has completely drifted is less continuous in the relevant sense than two forked notes with clear lineage.

## LLM-Assisted Evolution

LLMs add a new dimension. When you use an LLM to rewrite, expand, or refactor a note, how do you track what the LLM contributed vs what you authored? Marking the LLM's contribution preserves a kind of authorship trace. Not marking it produces a note whose identity is muddled — both yours and not yours, evolved partly by a system whose inputs and reasoning you cannot fully reconstruct.

A hygienic approach: treat substantial LLM assistance as a forking event. Either mark the note as AI-assisted with the context of assistance, or keep a pre-LLM version as the canonical and treat the LLM-assisted version as a derivation.

## Key Points
- Ship of Theseus: identity over time is philosophically unresolved; any account has limits
- Note identity systems: filename (simple, breaks on rename), UUID (durable, conflates radical revision), file-system (varies)
- Persistence through revision: version control, in-note change logs, or forking for major revisions — each preserves history differently
- Identity decisions matter for backlink preservation, retraction propagation, learning from revision, and attribution
- Parfit's analogy: what matters is continuity of relevant features, not metaphysical identity
- LLM assistance complicates identity; substantial AI involvement is functionally a forking event and should be marked

## Open Questions
- What identity semantics should a PKM tool enforce — strict UUID, fuzzy match, user-chosen per-note?
- How should tools propagate retractions or updates to notes that cited an earlier version?
- Is there a workable middle path between filename-simple and UUID-rigid identity schemes?

## References
- Plutarch — *Life of Theseus*
- Parfit, D. (1984). *Reasons and Persons*
- Stanford Encyclopedia of Philosophy — "Identity Over Time" and "Personal Identity"
- Hume, D. — *Treatise of Human Nature*, Book I, Part IV, Section 6

## Related
- [[AI Wiki - PKM - Ontology]]
- [[AI Wiki - PKM - Ontological Commitment]]
- [[AI Wiki - PKM - Evergreen Notes]]
- [[AI Wiki - PKM - Knowledge Lifecycle]]
- [[AI Wiki - PKM - Knowledge Decay]]
- [[AI Wiki - PKM - Typed Notes]]
- [[AI Wiki - PKM - Vault Maintenance]]
- [[AI Wiki - PKM - Context Provenance]]
