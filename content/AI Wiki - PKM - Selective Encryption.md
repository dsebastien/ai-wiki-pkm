---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - Buytaert 2026 — How I Collect and Connect Ideas (Readwise capture)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-28T08:41
updated: 2026-04-28T11:41
public_note: true
---

# AI Wiki - PKM - Selective Encryption

Selective encryption is the practice of encrypting only the genuinely sensitive notes inside a vault, rather than encrypting (or segregating) everything. It treats the privacy boundary as a per-note property rather than a vault-wide one. The pattern is articulated most clearly by Dries Buytaert, who runs his thinking environment public-by-default with an "Encrypt – Encrypts specific notes with password protection" workflow for "sensitive information that I want in my knowledge base but need to keep secure."

## The Argument for Per-Note Encryption

A vault-wide encryption posture (everything encrypted at rest) defends well against breach but pays high discoverability costs. Search, semantic similarity, and AI integration all degrade or require the user to enter a password each session. Hard segregation (separate vaults) defends well but makes cross-domain connections invisible — the most valuable PKM property.

Selective encryption keeps the unsensitive majority of the vault in clear plain text where [[AI Wiki - PKM - Bidirectional Linking]], [[AI Wiki - PKM - RAG for Personal Knowledge]], and [[AI Wiki - PKM - Serendipity Machine]] all work normally. Encryption applies only to the small subset of notes whose exposure would be costly. This pays a much smaller discoverability tax: encrypted notes do not surface in search or AI context, but everything else does.

## What Belongs Behind the Lock

The candidate set is narrow but stable across users:

- **Account credentials and recovery codes** that have escaped a password manager into a note
- **Health and medical detail** beyond what is comfortable to expose in journal entries
- **Personal finance specifics** (account balances, stock positions, plans)
- **Confidential professional content** under NDA or legal hold
- **Notes about other people** that contain attributable observations the user would not want them to read
- **Drafts of decisions or letters** that are mid-deliberation and would be misread out of context

What does not belong behind the lock: most of the vault. Topic notes, public-leaning drafts, reading highlights, daily notes without sensitive entries, project documentation. The default is plain text; the lock is the exception.

## Implementation Patterns

Several patterns coexist:

- **Plugin-level encryption** (Obsidian Encrypt, Meld Encrypt). Per-note password or vault-wide passphrase. Notes appear in the file tree but their content is unreadable without decryption. Best for low-friction selective use.
- **Filesystem-level encryption** (Cryptomator, age, gpg). Encrypted at the file level using standard tools. Survives plugin churn. Higher friction (decrypt before read).
- **Folder-level encryption** (encrypted volume mounted on demand). One encrypted folder inside the vault for sensitive notes. Simple mental model, but the folder boundary is rigid.
- **Inline encrypted blocks**. Encryption applied to specific blocks within an otherwise plaintext note. Useful when most of a note is general but a section is sensitive (e.g., a meeting note where one paragraph names a person).

The right choice depends on threat model and tolerance for friction. A plugin approach is enough for casual sensitivity; a filesystem approach is needed for serious threat models.

## Tradeoffs

Selective encryption is not free:

- **AI agents cannot reach encrypted content**, by design. Smart Connections, copilots, and RAG pipelines all see plaintext only. This is the privacy benefit but also the discoverability cost.
- **Encrypted notes are invisible to backlink graphs**. They cannot participate in [[AI Wiki - PKM - Knowledge Graphs]] visualizations.
- **The encryption boundary requires maintenance**. A note that becomes sensitive over time (e.g., contains a person's evolving private detail) needs to be moved into the encrypted set. Nothing automates this — it requires capture discipline.
- **Plugin lock-in**. Encrypted-via-plugin notes may be unreadable if the plugin is abandoned. Filesystem-level approaches mitigate this but do not eliminate it (cipher tools can also become legacy).
- **Loss of password = loss of data**. The most common selective-encryption failure mode is forgotten passwords. The vault has no recovery path.

## The Default-Public Posture

Selective encryption is the natural complement of Buytaert's "if a note can be public, it should be" stance. The two together form a coherent posture: most knowledge benefits from being public (or at least shareable); the small remainder benefits from being locked. This rejects both extremes — keeping everything private (loses [[AI Wiki - PKM - Public Learning]] benefits) and publishing everything (creates exposure on the inevitable sensitive items).

The posture is not for everyone. Users in heavily regulated professions or politically sensitive contexts may need to invert it — default-private with selective publishing — but the architectural shape is the same: a per-note privacy decision.

## Key Points

- Selective encryption applies the lock per-note, not vault-wide
- The candidate set is small and stable: credentials, health, finance, NDA, attributable observations, mid-decisions
- Implementation options range from plugins (low friction) to filesystem encryption (durable) to folder volumes (simple)
- AI agents cannot reach encrypted content — this is the design, and the tradeoff
- Pairs naturally with a default-public posture (Buytaert pattern)
- Failure modes: password loss, plugin abandonment, drift in what counts as sensitive

## Open Questions

- Can AI agents safely operate over encrypted notes via local-only inference with explicit unlock per session?
- Should encryption boundaries be tagged or computed (e.g., automatic detection of sensitive content)?
- What is the right backup strategy for encrypted notes — encrypt the backups separately, or rely on the in-place encryption?
- Is there a clean pattern for time-based encryption (notes lock automatically after N years)?

## References
- Buytaert, "How I Collect and Connect Ideas" (dri.es, 2026) — Readwise capture
- Obsidian Encrypt plugin, Meld Encrypt plugin
- Cryptomator (cryptomator.org)
- age (age-encryption.org)

## Related
- [[AI Wiki - PKM - Privacy in PKM]]
- [[AI Wiki - PKM - Sensitive Information Boundaries]]
- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
- [[AI Wiki - PKM - Plain Text and Interoperability]]
- [[AI Wiki - PKM - Public Learning]]
- [[AI Wiki - PKM - RAG for Personal Knowledge]]
- [[AI Wiki - PKM - Knowledge Graphs]]
- [[AI Wiki - PKM - Tension - Private-First vs Public Learning]]
