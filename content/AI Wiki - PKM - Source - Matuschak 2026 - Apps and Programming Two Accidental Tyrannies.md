---
wiki_name: PKM
wiki_role: source_summary
explored: false
ai_generated: true
confidence: high
maturity: draft
graduated_notes:
sources:
  - "Andy Matuschak, 'Apps and Programming: Two Accidental Tyrannies,' MIT HCI Seminar, 2026-03-03, https://andymatuschak.org/tat/"
credibility_note: High-tier primary source. Author is a foundational figure in tools-for-thought and PKM (Evergreen Notes, Quantum Country, former Apple HI engineer). Talk transcript posted on author's own site; venue is the MIT HCI Seminar.
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T08:37
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Source - Matuschak 2026 - Apps and Programming Two Accidental Tyrannies

## Citation

Andy Matuschak, "Apps and Programming: Two Accidental Tyrannies," MIT HCI Seminar, March 3, 2026. URL: https://andymatuschak.org/tat/

## Overview

Matuschak's thesis is that the contemporary landscape of digital tools is shaped by two inadvertent constraints that have narrowed what computing can be: the **app model** (software that siloes functionality behind one-size-fits-all interfaces users cannot meaningfully extend) and **programming as specialization** (the restriction of interface invention to those with technical fluency, starving the field of designers and domain experts with novel vision). Both constraints, he argues, can now be partially lifted — the first via **composable architectures** like CodeMirror's facet model, the second via **coding agents** that let non-programmers prototype directly. The essay is structured around three sections: Apps, an Interlude on digital reading, and Programming.

## Main Thesis

1. **The app model is a tyranny.** Users can only combine tools "at junctions the developer anticipated." Meaningful customization requires reimplementing the surrounding software.
2. **Specialized programming is a tyranny.** Novel interface invention requires imaginative design skill, technical fluency, and domain insight. Because the technical requirement is hard and the others are not taught together, programmer-inventors dominate the field, and non-programmer designers/domain experts must pitch ideas to programmers to reach prototypes. This gatekeeping prevents many good ideas from ever existing.
3. **Both constraints are being partially lifted.** Composable architectures (CodeMirror's facet system) allow plugins to declare what they contribute without coupling to other plugins. Coding agents allow designers and domain experts to prototype directly — what Matuschak (citing Nio Ono) describes as "vibe-coding" when ideas are still inchoate.

## Key Concepts

- **Research purgatory** — the state in which novel interface ideas remain trapped in academic prototypes, never reaching actual production use because "each has to pay an enormous tax to escape"
- **Facets** — declarative structures through which plugins contribute to shared concerns (decorations, keybindings, state) without mutating shared state, avoiding the fragile coupling of systems like Emacs
- **Physics of a medium** — the foundational model (for text: state, selection, decorations) that enables extensible, composable design; the thing everything else is built on top of
- **Vibe-coding** — exploratory prototyping using coding agents when design concepts are still inchoate; "trying all kinds of ideas I just wouldn't have tried a year ago"
- **Gatekeeping dynamic** — the structural pattern where non-programmers must pitch ideas to programmers for execution, preventing iterative exploration on genuinely novel concepts
- **Real-enough prototypes** — prototypes that demonstrate dynamic feel and communicate intent without needing to be production-quality; reusable prototype code need not ship

## Structural Observations

### On composability (CodeMirror case)

- CodeMirror is built *from* plugins, not *with* plugins bolted on
- Declarative facet system: plugins declare contributions rather than mutate shared state
- Users get first-class access to the same primitives the core developers used
- Obsidian is cited as an analogous case — plugins using "exactly the same primitives that the Obsidian developers used to create their product"

### On reading (Interlude)

- Reading environments have barely evolved; current tools mostly display "pictures of paper on screens"
- Multiple research prototypes (Scim, CiteSee, Papeos, LiquidText, SpaceInk, Quantum Country) demonstrate rich augmentation possibilities
- All sit in research purgatory, isolated from each other
- A composable reading substrate with facets could support all these ideas simultaneously

### On education

- HCI/interface design programs are dominated by computer science pedagogy
- "We may need programs that look a little more like art school with technical electives"
- Rebalancing curricula toward design-first training with technical support could diversify the invention pool

## Practical Recommendations

1. **Architecture**: Design systems with declarative, composable extension points (facets), not isolated plugin panels
2. **Teams**: Remove programmer gatekeeping in early invention stages
3. **Education**: Rebalance curricula toward art-school-style design pedagogy with technical support
4. **Reading tech**: Build open reading environments with facet-based composition
5. **Practitioners**: Cultivate complementary capacities (programmers → design; designers → technical literacy)
6. **Prototyping**: "Real enough" prototypes beat production-quality exploration

## Why This Matters for PKM

Matuschak's essay is directly load-bearing for several PKM debates:

- **PKM is mostly research-purgatory-adjacent.** Many of the most interesting PKM ideas — spatial canvases, rich transclusion, typed links, AI-augmented retrieval — exist in scattered tools, none of which compose. The [[AI Wiki - PKM - Research Purgatory|research purgatory]] framing names a problem PKM has had for decades.
- **Obsidian is a positive example of composability.** The plugin API gives users the same primitives as the core team. This is why Obsidian's ecosystem accumulates depth while Notion's does not — same function, different architecture.
- **Agentic vaults are the pattern continued.** YB's agentic-vault work ([[AI Wiki - PKM - Agentic Constitution|constitution]], [[AI Wiki - PKM - Knowledge Work PRs|Knowledge Work PRs]], subroutines) is exactly the [[AI Wiki - PKM - Vibe-Coding|vibe-coding]] pattern applied to the vault itself — knowledge workers prototyping their own tools with coding agents.
- **Reading augmentation is a PKM primitive.** Reading tools are the input side of the knowledge pipeline; their composability determines whether new reading ideas can ever reach daily practice.
- **The gatekeeping critique applies to PKM tool-building.** Most novel PKM ideas come from programmer-practitioners because they can prototype. Matuschak's argument predicts that coding agents will let more non-programmer PKM practitioners prototype directly, diversifying the field.

## Concepts and Entities

### Concepts
- App model / programming as accidental tyrannies
- Composability; facets (CodeMirror-style declarative contribution)
- Research purgatory
- Vibe-coding
- Physics of a medium
- Real-enough prototypes
- Gatekeeping dynamic (programmer-generalist as bottleneck)

### Entities
- Andy Matuschak (author; Quantum Country co-creator with Michael Nielsen; former Apple; Evergreen Notes)
- Marijn Haverbeke — CodeMirror author
- Nio Ono — designer cited on coding-agent experience
- Steve Rubin — audio-text synchronization research
- Bas Ording — iOS inertial scrolling prototyping anecdote
- Research prototypes: Scim, CiteSee, Papeos, LiquidText, SpaceInk, Quantum Country
- Historical: Engelbart (1962), Smalltalk, Webstrates, Potluck, Canon Cat, Ted Nelson / Xanadu

## Related

- [[AI Wiki - PKM - Research Purgatory]]
- [[AI Wiki - PKM - Vibe-Coding]]
- [[AI Wiki - PKM - Composability as PKM Architecture]]
- [[AI Wiki - PKM - Tools for Thought]]
- [[AI Wiki - PKM - PKM Extensibility]]
- [[AI Wiki - PKM - PKM as Platform]]
- [[AI Wiki - PKM - Hypertext and the Memex]]
- [[AI Wiki - PKM - Atomic Notes]]
- [[AI Wiki - PKM - Evergreen Notes]]
- [[AI Wiki - PKM - Key Practitioners]]
- [[AI Wiki - PKM - Agentic Constitution]]
- [[AI Wiki - PKM - Knowledge Work PRs]]
