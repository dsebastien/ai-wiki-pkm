---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: substantial
graduated_notes:
sources:
  - Buytaert 2026 — How I Collect and Connect Ideas (Readwise capture)
  - Addyman 2026 — What 18,000 Files Taught Me (Readwise capture)
  - Ink & Switch — Local-First Software (2019)
  - Steph Ango — File Over App (2023)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-28T08:40
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Privacy in PKM

A serious personal knowledge base accumulates the residue of a person's thinking — half-formed beliefs, financial details, health notes, professional politics, family observations, drafts that never shipped. Privacy in PKM is the question of who can read this residue, under what conditions, and for how long. The answer is not "make everything secret"; it is to design an explicit posture about what is shared, what is local, what is encrypted, and what should never be captured at all.

## Why Privacy Matters Here Specifically

Three properties make PKM data unusually sensitive. First, **density**: a vault with thousands of notes contains more inferable detail about a person than any single document. Cross-referenced over years, even innocuous notes reveal patterns of thought, relationships, and beliefs. Second, **duration**: a knowledge base built over a decade is essentially a partial autobiography. A breach is not a single document leak but a compounded one. Third, **AI exposure**: feeding a vault to a cloud LLM, even for a single query, may grant a third party rights or access patterns that the user did not intend. Privacy in PKM is therefore not a feature; it is an architectural decision.

## The Four Privacy Postures

Most working PKM systems sit on one of four postures, sometimes mixing them per-note:

1. **Default-public**. "If a note can be public, it should be" — Buytaert's stance. Most knowledge work is publishable; encryption is reserved for the few notes that genuinely require it. This posture maximizes [[AI Wiki - PKM - Public Learning]] benefits while accepting a [[AI Wiki - PKM - Selective Encryption]] cost on the small private subset.
2. **Default-private**. The vault is private by design; specific notes are explicitly marked for publication. This is the posture of users with strong privacy needs (clinicians, journalists, founders mid-deal) or strong publishing skepticism.
3. **Hard-segregation**. Two or more vaults, no overlap. Personal vault on a separate device, work vault on company-managed hardware. Strong privacy boundary at the cost of cross-vault discovery.
4. **Layered local-first**. One vault, all local, AI services run on-device when sensitive content is in scope; cloud AI is used only for content explicitly cleared for it. Closest to Addyman's stack.

The right posture depends on threat model, professional context, and how much of the value of PKM comes from publishing versus thinking.

## What Privacy Actually Protects Against

Privacy in PKM has at least five distinct adversaries; the same posture rarely defends against all of them equally:

- **Adversarial breach**. Account compromise, device theft, malicious insider at a SaaS provider. Defended by [[AI Wiki - PKM - Local-First and Data Sovereignty]] + at-rest encryption.
- **Legitimate-but-unwanted access**. Subpoena, employer review of company-managed accounts, family access after death. Defended by hard segregation and client-side encryption.
- **AI training pipelines**. Cloud providers using user content to train models. Defended by either local-first storage or terms-of-service vetting.
- **Inadvertent self-exposure**. Notes synced to a public folder, a screenshot shared, a published note that links to a private one. Defended by tooling, conventions, and review.
- **Future-self regret**. Today's casual journal entry becomes tomorrow's evidence. Defended by [[AI Wiki - PKM - Sensitive Information Boundaries]] (don't capture what you would not want to read in five years).

A privacy posture that ignores any of these five leaves a gap.

## The Privacy-Discoverability Tradeoff

Privacy and PKM value are in productive tension. The whole point of a connected knowledge base is that ideas surface unexpectedly — [[AI Wiki - PKM - Serendipity Machine]], [[AI Wiki - PKM - Idea Emergence]], [[AI Wiki - PKM - Compounding Knowledge]] all depend on notes being discoverable to the user (and increasingly to AI agents acting on the user's behalf). Maximally private notes are also maximally inert. The architectural question is therefore not "how private can I make this?" but "where is the privacy boundary that costs the least discoverability while protecting what genuinely needs protecting?"

Selective encryption (per-note locking) is one answer: keep the discovery graph intact for the public majority, encrypt only the genuinely sensitive minority. Hard segregation is another: pay the discovery cost in exchange for a clean privacy boundary. There is no free option.

## Privacy in the AI Era

The 2025-2026 moment changes the privacy calculation. When PKM was static text, privacy was a storage question. When PKM becomes the ground for AI agents, privacy becomes a runtime question:

- **Does the embedding model run locally?** Smart Connections in Obsidian keeps embeddings on-device; cloud embedding APIs do not.
- **Does the chat model see the full vault?** RAG with cloud LLMs leaks every retrieved chunk to the provider.
- **Does the agent take actions outside the vault?** External integrations via MCP introduce new exfiltration surfaces.
- **Does the AI provider train on user content?** Terms of service vary; defaults change.

Addyman's "local AI keeping everything private" framing names the architectural fix: the privacy-keeping component is the *inference substrate*, not just the storage substrate. Cloud AI on a local-first vault is not local-first in any meaningful sense.

## Operational Practices

A working privacy posture combines several tactics:

- **Selective per-note encryption** for sensitive content (Obsidian's Encrypt plugin, Cryptomator volumes, age/gpg files)
- **Plain text on disk** (see [[AI Wiki - PKM - Plain Text and Interoperability]]) so that even if a tool dies, the data remains in a readable format that can be re-encrypted under any future scheme
- **Sync layer chosen for privacy** (Syncthing, encrypted iCloud, Obsidian Sync's E2E encryption) — not the SaaS sync that maximizes collaboration features
- **Local-first AI** (Smart Connections, on-device LLMs, Ollama-based pipelines) for queries over sensitive content
- **Capture discipline** — see [[AI Wiki - PKM - Sensitive Information Boundaries]] for what should not enter the vault at all
- **Backup encryption** — backups inherit the vault's privacy properties only if encrypted at rest
- **Public-publishing review pass** before anything moves from vault to public surface

## Key Points

- Privacy in PKM is architectural, not feature-level — choose a posture explicitly
- Four postures (default-public, default-private, hard-segregation, layered local-first) cover most working systems
- Five distinct adversaries: breach, legitimate access, AI training, self-exposure, future-self regret
- Privacy and discoverability are in tension — selective encryption is one practical compromise
- AI changes privacy from a storage question to a runtime question (where does inference happen?)
- Operational practice combines encryption, plain text, private sync, local AI, and capture discipline

## Open Questions

- Is there a stable taxonomy of "what counts as sensitive" or does it inherently drift over time and life context?
- How should privacy posture change at career transitions (employee to founder, public figure to private)?
- Can AI providers offer credible technical guarantees that user content is not used for training, or does this require on-device inference?
- What is the right privacy default for AI-generated wiki content (like this article) — public or private?

## References
- Buytaert, "How I Collect and Connect Ideas" (dri.es, 2026) — Readwise capture
- Addyman, "What 18,000 Files Taught Me About the Future of Digital Knowledge" (2026) — Readwise capture
- Martin Kleppmann et al., "Local-First Software" (Ink & Switch, 2019)
- Steph Ango, "File Over App" (2023)

## Related
- [[AI Wiki - PKM - Selective Encryption]]
- [[AI Wiki - PKM - Sensitive Information Boundaries]]
- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
- [[AI Wiki - PKM - Plain Text and Interoperability]]
- [[AI Wiki - PKM - RAG for Personal Knowledge]]
- [[AI Wiki - PKM - AI Copilot for Knowledge Work]]
- [[AI Wiki - PKM - Public Learning]]
- [[AI Wiki - PKM - Tension - Private-First vs Public Learning]]
- [[AI Wiki - PKM - Knowledge Governance]]
- [[AI Wiki - PKM - PKM Anti-Patterns]]
