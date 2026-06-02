---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - "Andy Matuschak, 'Apps and Programming: Two Accidental Tyrannies' (2026) — facet model, CodeMirror case"
  - Obsidian plugin architecture (practitioner reference)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-14T08:40
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Composability as PKM Architecture

**Composability** is the architectural principle that independent extensions should be able to contribute to shared concerns without coupling to each other and without mutating shared state. Matuschak (2026) frames it as the structural antidote to the "app tyranny": a composable system lets users extend it using the same primitives the core developers used, rather than through a developer-blessed set of knobs. For PKM, composability determines whether a vault's value is bounded by its vendor's imagination or by its community's.

## The Core Idea

In a non-composable system:

- Plugins extend through a designated API surface
- The core owns state; plugins request permission to modify it
- Multiple plugins targeting the same concern conflict unpredictably
- Extension is bolted on; the architecture was closed first and opened second

In a composable system (CodeMirror-style):

- Plugins *declare* contributions (decorations, keybindings, state, commands) via **facets**
- The core composes contributions deterministically
- Plugins do not need to know about other plugins targeting the same concern
- Extension is primary; the architecture was built from plugins, not retrofitted for them

The declarative contribution model is the key technical move. Instead of plugins saying "I want to change X," they say "here is my contribution to X" — and the core decides how to combine all contributions.

## The Obsidian Positive Case

Matuschak cites Obsidian explicitly: plugins use "exactly the same primitives that the Obsidian developers used to create their product." The core functionality and plugin functionality run on the same substrate. This produces:

- **Ecosystem depth.** Community plugins reach feature parity with (and sometimes exceed) core features
- **Survivability.** If the vendor changes direction, the community carries valued features forward
- **Plurality.** Users can combine plugins from different authors without coordination
- **Innovation velocity.** New ideas become plugins in days; they would be core-team negotiation in a non-composable system

The same cannot be said for Notion, Evernote, or most SaaS PKM tools, where extension is via approved integrations or not at all.

## Facets in PKM Terms

Facets as an architectural pattern map cleanly onto PKM concerns:

| Concern | Possible facet | Contributions |
|---|---|---|
| Search | `search-providers` | Semantic index, tag filter, date filter, plugin-specific indices |
| Note rendering | `render-decorations` | Syntax highlight, link preview, callout, spell-check |
| Daily note | `daily-note-sections` | Tasks, mood, reading log, AI summary |
| Publish pipeline | `publish-transformers` | Wikilink conversion, image optimization, frontmatter stripping |
| Graph view | `graph-edges` | Wikilinks, tag co-occurrence, embedding similarity, citation |
| AI context | `agent-context-providers` | Identity note, top-of-mind, active projects, recent decisions |

Most of these already have partial implementations in practice, often as entangled special cases. A facet-style architecture would let them compose cleanly.

## What Composability Buys PKM Specifically

- **Escape from [[AI Wiki - PKM - Research Purgatory|research purgatory]].** Novel ideas can land as plugins rather than as entire competing tools.
- **Reduced lock-in.** If the data format and plugin API are open, users can switch cores without losing their extensions.
- **Agent-assisted extensibility.** [[AI Wiki - PKM - Vibe-Coding|Vibe-coding]] an Obsidian plugin is approachable in a way that forking Notion is not.
- **Ecosystem over vendor.** Community depth compounds across plugins rather than being gated by roadmap decisions.
- **Interoperability pressure.** Plugins written for one core (Obsidian) sometimes inspire equivalents for others (Logseq, Foam), increasing de-facto standardization of the substrate.

## What Composability Does Not Automatically Deliver

- **Quality.** Composable ecosystems produce quantity, not necessarily quality; most plugins are abandoned or niche.
- **Coherence.** A vault extended with 30 plugins from 30 authors is often less coherent than one extended with 3 well-designed plugins from 1 author.
- **Performance.** Composed systems carry coordination overhead; naive implementations can suffer.
- **Security.** Open plugin APIs are also open attack surfaces (see the plugin-security concerns in most plugin ecosystems).
- **Migration.** Composability of plugins does not automatically yield composability of *data*; plugin-specific metadata is often as locked-in as vendor-specific data.

## Design Heuristics

Drawn from Matuschak's architectural examples and practical PKM experience:

1. **Plugins first, not bolt-on.** Build the core *from* plugins, not for plugins
2. **Declarative over imperative.** Contributions via facets beat state mutation
3. **Same primitives.** Whatever the core team uses, users should be able to use
4. **Separation of core and chrome.** Let plugins replace UI chrome without touching business logic
5. **Explicit extension points.** Every extensible concern should be a named facet, not an undocumented hook
6. **Standardize the substrate.** Markdown + frontmatter + wikilinks is a minimum; more shared conventions = more transferable plugins

## Tension with Simplicity

Composability has a cost: simple users face more complexity than they should. A well-designed composable tool needs to feel *simple by default* even though it is *deep by design*. Systems that fail this trade-off (early Emacs for new users; Obsidian without sensible defaults) create a "power user tax" that excludes the majority of potential users.

The best PKM tools manage this by shipping with curated defaults and surfacing extensibility progressively — beginners do not confront the plugin system; intermediates find it; experts operate inside it.

## Key Points

- Composability = independent extensions contributing to shared concerns without coupling
- Matuschak's facet model (CodeMirror) is the canonical architectural pattern
- Obsidian is the PKM-space positive example; Notion et al. are negative examples
- For PKM: escape from research purgatory, reduced lock-in, agent-assisted extension, ecosystem depth
- Does not automatically deliver: quality, coherence, performance, security, data portability
- Design heuristics: plugins first, declarative over imperative, same primitives, standardize the substrate
- Productive tension with simplicity — manage via curated defaults and progressive exposure

## Open Questions

- Is it possible to standardize a cross-tool facet specification so plugins travel between cores?
- How should composable PKM tools manage plugin quality without becoming a walled garden?
- Does AI-assisted plugin generation change the calculus — does the quality floor rise when everyone can vibe-code their own?

## References

- Andy Matuschak, "Apps and Programming: Two Accidental Tyrannies" (2026)
- CodeMirror (Marijn Haverbeke) — canonical facet-model implementation
- Obsidian plugin architecture — PKM-space reference
- Related prior art: Smalltalk, Webstrates, Potluck

## Related

- [[AI Wiki - PKM - Source - Matuschak 2026 - Apps and Programming Two Accidental Tyrannies]]
- [[AI Wiki - PKM - Research Purgatory]]
- [[AI Wiki - PKM - Vibe-Coding]]
- [[AI Wiki - PKM - PKM Extensibility]]
- [[AI Wiki - PKM - PKM as Platform]]
- [[AI Wiki - PKM - Plain Text and Interoperability]]
- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
- [[AI Wiki - PKM - Obsidian]]
- [[AI Wiki - PKM - Tools for Thought]]
