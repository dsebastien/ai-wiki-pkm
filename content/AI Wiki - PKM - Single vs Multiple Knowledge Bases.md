---
wiki_name: PKM
wiki_role: article
explored: false
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
created: 2026-04-07T09:51
updated: 2026-04-07T16:05
public_note: true
---

# AI Wiki - PKM - Single vs Multiple Knowledge Bases

One of the most consequential architectural decisions in PKM is whether to maintain a single unified knowledge base or split across multiple. This choice affects search, linking, privacy, performance, and increasingly, how well AI agents can operate on your knowledge.

## Arguments for a Single Knowledge Base

**Single Source of Truth (SSOT).** One vault means every piece of information has exactly one canonical location. No duplication, no sync conflicts, no wondering "which vault was that in?"

**Cross-domain linking.** The most valuable connections in a knowledge graph are often between domains: a management insight that applies to parenting, a physics metaphor that clarifies a business problem. Multiple vaults make these serendipitous links structurally impossible.

**One search.** A single vault means one search covers everything. Splitting vaults forces you to remember which vault to search, or to run searches in multiple places.

**Simpler tooling.** One sync configuration, one backup strategy, one set of plugins, one set of templates. The operational overhead of maintaining multiple vaults compounds over time.

## Arguments for Multiple Knowledge Bases

**Work/personal separation.** Employment contracts may require that work-related notes live on company infrastructure. Even without legal requirements, many people prefer a hard boundary between professional and personal knowledge.

**Team sharing.** A shared team vault cannot contain your personal journal entries, health data, or financial notes. Separation is a prerequisite for collaboration.

**Performance.** Very large vaults (50,000+ notes) can cause performance issues in some tools. Splitting into domain-specific vaults keeps each one responsive.

**Privacy and security.** Different knowledge domains have different sensitivity levels. Health records, financial data, and personal reflections warrant stronger protection than public reference material.

## Hybrid Approaches

**One vault with access controls.** Some practitioners maintain a single vault but use folder-level encryption (e.g., Obsidian's restricted folders or external encryption tools) to protect sensitive sections.

**Multiple vaults with cross-linking.** Tools like Obsidian support linking across vaults using file URIs or custom protocols. This preserves some connection benefits while maintaining separation.

**Primary vault with satellite vaults.** A main personal vault serves as the knowledge hub, with purpose-specific vaults (team wiki, client project) that are treated as temporary or domain-scoped.

## How AI Changes the Calculus

AI agents and LLMs work dramatically better with comprehensive context. An agent that can see your projects, goals, reading notes, daily journal, and professional knowledge simultaneously can make connections and provide assistance that a vault-limited agent cannot. This creates strong pressure toward consolidation. The Obsidian Starter Kit approach, for instance, puts everything in one vault precisely to enable AI agents that understand the full picture of a person's knowledge and commitments.

## Practical Considerations

**Sync.** Syncing one large vault across devices (Syncthing, iCloud, Obsidian Sync) is simpler than syncing multiple. But a single vault containing large attachments can strain sync bandwidth.

**Backup.** One vault means one backup target. Multiple vaults mean multiple backup configurations or a wrapper script.

**Size limits.** Cloud storage quotas, Git repository limits, and mobile device storage all impose practical ceilings. At some point, splitting becomes a performance necessity rather than an organizational preference.

**Migration cost.** Consolidating vaults after the fact is painful. Links break, paths change, metadata conflicts arise. Choosing early is significantly cheaper than choosing late.

## Key Points
- A single vault maximizes cross-domain linking, search simplicity, and AI agent effectiveness
- Multiple vaults are justified by privacy requirements, team collaboration, and performance at scale
- Hybrid approaches exist but add complexity
- AI agents strongly favor single, comprehensive knowledge bases
- The migration cost of changing this decision later is high; choose deliberately

## Open Questions
- Will federated search and AI-mediated linking eventually make the single-vs-multiple question irrelevant?
- How do access control models need to evolve to make single-vault approaches viable for mixed personal/professional use?
- At what vault size does performance degradation force a split, and how does this threshold change with tooling improvements?

## References
- Vault notes: Single vs multiple knowledge bases, Obsidian Starter Kit - Theory
- Vault notes: Single Source of Truth (SSOT), Why knowledge centralization matters

## Related
- [[AI Wiki - PKM - Personal Knowledge Management]]
- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
- [[AI Wiki - PKM - PKM for Teams]]
- [[AI Wiki - PKM - Obsidian]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
