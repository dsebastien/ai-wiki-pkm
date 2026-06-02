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
  - Quine, W. V. O. (1948) — On What There Is
  - Stanford Encyclopedia of Philosophy — Logic and Ontology
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T17:18
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Ontological Commitment

To talk about something is to commit to its existence — at least in the weak sense that your theory treats it as real. Quine formalized this in 1948: "to be is to be the value of a bound variable." A theory's ontological commitments are revealed by what it quantifies over, not by what its authors say it is about. The same is true of PKM systems. A vault's ontological commitments are revealed by what it tracks as entities, regardless of what the owner thinks they are doing.

## Quine's Criterion

Quine's insight was deflationary and sharp. When a theory says "there are prime numbers greater than a million," the theory is committed to prime numbers existing. You cannot claim to be doing a theory of mathematics while denying that mathematical objects exist in whatever sense the theory demands. The ontological commitments are structural, not stylistic.

Applied to PKM: when a vault has a note type "Project" with properties for deadline and owner, the vault is ontologically committed to projects being real entities with those properties. You cannot later say "projects aren't really things" while continuing to use the type — the commitment is baked in.

## Reading Commitments Off a Vault

A vault's ontological commitments are visible in several places.

**Note types** are explicit entity commitments. A "Book" type commits to books as things with authors, ratings, and read statuses. A "Person" type commits to people as things with names, relationships, and contact histories. Each typed note declares "this kind of thing exists in my world."

**Properties** declare which attributes matter. A rating property commits to books having ratings, which commits to there being a property-space over which ratings live. A "confidence" property commits to notes having epistemic status, which is itself a substantive commitment about the structure of knowledge.

**Relations** (links, especially typed links) commit to relational kinds. A `cites` link type commits to citation being a distinct relation. A `contradicts` link type commits to contradiction as a recognized relation. The link graph's vocabulary reveals what relational structure the vault recognizes.

**Tags** commit to categorical kinds. `#domain/ai` commits to AI as a coherent domain. `#status/active` commits to status being a classification scheme with active as a value.

Together these form the vault's implicit ontology, independent of any explicit documentation.

## Commitment by Omission

What a vault does *not* track is also revelatory. A vault without a "hypothesis" note type is committed to hypotheses not being first-class entities — they can still be written about, but they are not ontologically distinguished from other notes. A vault without a "source reliability" property is committed to source reliability not being a tracked attribute. A vault without contradiction-detection is committed to contradictions not being first-class relations.

This is not necessarily wrong. Every ontology is a choice about what to individuate and what to fold into other categories. But the omissions shape what can be seen. If your ontology does not distinguish hypotheses from claims, you cannot easily query "what open hypotheses do I have?" The ontological commitment determines the space of questions.

## Commitments and the Dataview Query Surface

In Obsidian-style PKM, Dataview queries operationalize ontological commitments. The queries you can write depend on the structure you have committed to. If notes have a `status` property, you can query by status. If they do not, you cannot — or you must impose ad-hoc parsing. Every query in the vault is testing a specific ontological commitment against actual note state.

This means ontological commitment is not just a philosophical curiosity in PKM; it is the concrete constraint on the questions the vault can answer. Expanding the ontology (adding types, properties, link relations) expands the query space. Failing to maintain the ontology — notes without required properties, tags used inconsistently — corrupts the query space from within.

## Strong vs Weak Commitment

Not all commitments are equally firm. A **strong commitment** is enforced: the vault prevents or flags notes that violate the ontology (e.g., required properties missing, unknown types used). A **weak commitment** is declared but unenforced: the convention exists but nothing checks it. Most PKM vaults live in the weakly-committed zone, which is why they drift over time.

Typed notes with validation, schema-like templates, and automated lint checks shift commitments from weak to strong. This has costs (friction, rigidity) but benefits (the ontology remains structurally true to the declared commitments, so queries remain reliable).

## Revising Commitments

Ontological revision is one of the hardest PKM operations. Changing a note type's required properties affects every existing note of that type. Renaming a tag affects every note using it. Splitting one type into two forces retagging of all instances. Small vaults can handle this manually; large vaults need migration tooling.

The practical lesson is to be conservative with ontological additions (add types and properties only when they will be used) and disciplined with revision (batch changes, maintain migration scripts). A vault with ten well-used note types is more useful than one with thirty partially-filled types.

## Implicit vs Explicit Ontologies

Many vaults operate on implicit ontologies — commitments encoded in practice but not documented. This works until the vault grows past the owner's ability to remember all conventions, at which point the vault starts disagreeing with itself. Making the ontology explicit — in a meta-note, in template definitions, in validation rules — preserves coherence as the vault scales.

An explicit ontology also enables LLM agents to reason about the vault's structure, query it meaningfully, and maintain conventions. Implicit ontology is invisible to agents; explicit ontology is legible.

## Key Points
- Ontological commitment: to quantify over something is to commit to its existence (Quine)
- A vault's commitments are visible in note types, properties, link relations, and tags
- Omissions also reveal commitments — what the vault does not individuate is folded into other categories
- Commitments determine the query space: you can only ask questions the ontology can express
- Weak commitments (declared but unenforced) drift; strong commitments (validated) stay true but add friction
- Ontological revision is expensive at scale; be conservative with additions and disciplined with changes
- Explicit ontology (documented, validated) scales better than implicit ontology (encoded in habit)

## Open Questions
- Can tooling auto-infer a vault's de facto ontology from usage and compare it to the declared one?
- What is the minimal explicit ontology that supports most PKM queries without over-constraining capture?
- How do LLM agents benefit most from explicit vault ontology — which kinds of commitment are most legible to them?

## References
- Quine, W. V. O. (1948). "On What There Is," *The Review of Metaphysics*
- Quine, W. V. O. (1960). *Word and Object*
- Stanford Encyclopedia of Philosophy — "Logic and Ontology"

## Related
- [[AI Wiki - PKM - Ontology]]
- [[AI Wiki - PKM - Taxonomies vs Ontologies]]
- [[AI Wiki - PKM - Typed Notes]]
- [[AI Wiki - PKM - Tagging and Metadata]]
- [[AI Wiki - PKM - Controlled Vocabulary]]
- [[AI Wiki - PKM - Information Architecture for PKM]]
- [[AI Wiki - PKM - Object-Oriented Note-Taking]]
- [[AI Wiki - PKM - Semantic Links]]
