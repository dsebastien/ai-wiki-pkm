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
  - Plato — Theaetetus
  - Stanford Encyclopedia of Philosophy — The Analysis of Knowledge
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T17:13
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Justified True Belief

The classical definition of knowledge — a belief that is both true and justified — is 2500 years old and still the starting point for any discussion of what a PKM system actually holds. Understanding the three conditions, and how each one fails independently, makes the epistemic structure of a vault visible.

## The Three Conditions

Plato's *Theaetetus* frames knowledge as requiring three things to co-occur. **Belief**: the knower must actually hold the proposition to be true; mere recording is not enough. **Truth**: the proposition must in fact correspond to how things are; false beliefs, however sincere, are not knowledge. **Justification**: the knower must have good reasons for the belief; lucky guesses don't count. Remove any condition and knowledge collapses into something weaker — opinion, accidental fact, or hunch.

## Belief: What's In the Vault vs What You Believe

A vault captures far more than its owner believes. Quoted passages, steelmanned opposing views, speculative captures, AI-generated summaries, and explicit "things I'm not sure about" notes all exist in most vaults without being beliefs of the holder. This is healthy — a vault that only held confirmed beliefs would be a museum of conclusions, not a workshop of thinking. But the distinction matters: without marking which notes represent current belief and which represent material-under-consideration, the vault's epistemic state becomes unreadable even to its owner.

## Truth: The Correspondence Problem

Truth, in the classical formulation, is correspondence to reality. A PKM system cannot verify this directly. It can verify that a claim has a reputable source, that it has not been contradicted elsewhere in the vault, and that it has not been retracted by its original author — but these are proxies for truth, not truth itself. Well-sourced claims can be wrong. Widely-believed claims can be wrong. The vault is structurally incapable of distinguishing "I have strong evidence for this" from "this is the case," which is why intellectually honest PKM leans toward confidence markers over truth claims.

## Justification: The Core of Epistemic Discipline

The justification condition is where PKM earns its keep. A claim in a note can be justified by many things: a primary source, a chain of reasoning, a personal experiment, a community consensus, an authority's testimony, a logical derivation from other justified claims. Different justification types have different strengths and different failure modes. A vault that tracks justifications — not just what is claimed but why it is claimed and how strongly — converts scattered captures into defensible knowledge.

Justification can be **internal** (reasons the knower is aware of and can articulate) or **external** (reliable processes that produced the belief whether or not the knower can articulate them). PKM deals mostly in internal justification because it requires articulable traces.

## The Gettier Challenge

In 1963, Edmund Gettier showed that the three conditions can all be satisfied while still failing to be knowledge — a belief can be justified, true, and yet only accidentally correct. This broke the classical definition and spawned a large literature on what else is required. See [[AI Wiki - PKM - Gettier Problem]] for the cases and their PKM relevance. The practical takeaway: even perfectly-sourced, true beliefs can fail as knowledge if the justification connects to the truth by luck rather than structure.

## Operationalizing the Triad in a Vault

A mature PKM approach operationalizes each condition. For **belief**, use explicit markers: `#belief/current`, `#belief/steelmanned`, `#belief/abandoned`, or a `confidence` property. For **truth**, adopt humility: prefer "claim" and "evidence for" framings over "fact" and "truth." For **justification**, make the chain explicit: every strong claim should cite a source, a reasoning trace, or a derivation from other notes. The vault becomes a running ledger of justified beliefs-in-progress rather than an archive of pronouncements.

## Beyond Classical Epistemology

Modern epistemology has moved past strict JTB — adding no-defeaters clauses, reliabilist conditions, virtue-epistemic frames, and Bayesian probability updating. A fully sophisticated vault incorporates several of these: no-defeaters through contradiction-tracking notes, reliabilism through source-quality tiers, and Bayesianism through probabilistic confidence markers. But the three classical conditions remain the base layer — you can add to them, but you cannot skip them.

## Key Points
- Knowledge classically requires belief, truth, and justification co-occurring
- Vaults hold more than beliefs — steelmans, AI summaries, and captures all coexist with current beliefs
- Truth is unverifiable by a vault; it can track source quality and internal consistency but not correspondence to reality
- Justification is where PKM does real epistemic work — tracking why a claim is held and how strongly
- Gettier cases show even JTB satisfaction can fail as knowledge; the connection between justification and truth can be lucky rather than structural
- Operationalize each condition with markers for belief status, humility in truth claims, and explicit justification chains

## Open Questions
- Should a vault surface its "belief graph" — which notes the owner actively believes right now?
- How should retracted or superseded beliefs be preserved so their history is visible without polluting current state?
- Can automated tools trace justification chains and flag claims with weak or missing support?

## References
- Plato, *Theaetetus* — the original definition
- Stanford Encyclopedia of Philosophy — "The Analysis of Knowledge"
- Gettier, E. (1963). "Is Justified True Belief Knowledge?"
- Goldman, A. (1967). "A Causal Theory of Knowing"

## Related
- [[AI Wiki - PKM - Epistemology]]
- [[AI Wiki - PKM - Gettier Problem]]
- [[AI Wiki - PKM - Fallibilism]]
- [[AI Wiki - PKM - Foundationalism and Coherentism]]
- [[AI Wiki - PKM - Bayesian Epistemology]]
- [[AI Wiki - PKM - Epistemic Hygiene]]
- [[AI Wiki - PKM - Tacit and Explicit Knowledge]]
- [[AI Wiki - PKM - DIKW Pyramid]]
- [[AI Wiki - PKM - Argumentation in PKM]]
