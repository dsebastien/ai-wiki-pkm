---
wiki_name: PKM
wiki_role: article
explored: false
ai_generated: true
confidence: high
maturity: substantial
graduated_notes:
sources:
  - Steph Ango — File over app (stephango.com, 2023)
  - Steph Ango — File over app manifesto (stephango.com)
  - Obsidian — File over app (obsidian.md, 2024)
  - Addyman 2026 — What 18,000 Files Taught Me About the Future of Digital Knowledge
  - Koylan 2026-02 — File System Is the New Database
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
public_note: true
created: 2026-06-02T13:34:58+02:00
updated: 2026-06-02T13:46:07+02:00
---

# AI Wiki - PKM - File Over App

"File over app" is a design philosophy coined by Steph Ango, CEO of Obsidian, in a 2023 essay of the same name. The argument compresses into one line: **the longevity of your knowledge depends on the file format, not the application that produced it.** Applications are mortal. File formats — especially simple, open, plain-text ones — can outlive any particular tool, company, or operating system. Whoever owns the format owns the future of the work.

For PKM this is not an aesthetic preference; it is an architectural commitment. A knowledge base built over decades must be readable in decades, by future tools that do not yet exist, possibly long after the original app has been discontinued, acquired, or pivoted into something unrecognizable.

## Origin and Statement

Steph Ango published "File over app" in 2023 and a follow-up manifesto on stephango.com. Obsidian later adopted the slogan as an official design principle on obsidian.md. The essay frames the choice as one of intellectual sovereignty: if you cannot read your own notes without a specific app running on a specific operating system on a specific account tied to a specific subscription, you do not really own them.

The original phrasing is deliberate. It is not "files matter more than apps" or "open formats are nice." It is "file *over* app" — a hierarchy. The file is the load-bearing layer. The app is decoration on top.

## The Core Argument

Three claims do the work:

1. **Apps die. Files persist.** Notion, Evernote, Roam, Workflowy, Google Reader, and dozens of other tools have either disappeared, pivoted, raised prices, or degraded into something users no longer trust. The half-life of a knowledge app is shorter than the half-life of the knowledge it stores. See [[AI Wiki - PKM - Knowledge Decay]].
2. **Plain text is the longest-lived format.** ASCII text from the 1960s is still readable today. Proprietary databases from the 1990s often are not. Markdown — plain text with light conventions — inherits this longevity while remaining readable by humans and parseable by machines. See [[AI Wiki - PKM - Markdown]] and [[AI Wiki - PKM - Plain Text and Interoperability]].
3. **Format ownership is identity ownership.** Your notes are not just data — they are the externalized substrate of your thinking. Locking that substrate to a vendor means renting your own cognition. See [[AI Wiki - PKM - Identity and Persistence]].

The conclusion is operational: choose tools whose data you could walk away from tomorrow without loss.

## Relationship to Local-First

File over app is the file-format slice of the broader [[AI Wiki - PKM - Local-First and Data Sovereignty]] movement. Local-first concerns *where* the data lives (your device, not a server). File over app concerns *what shape* the data takes (open, portable formats, not proprietary blobs).

The two are complementary but not identical:
- A cloud-only tool that exports clean Markdown is partially file-over-app but not local-first.
- A local app with a proprietary binary database is local-first in storage but not file-over-app in format.
- Obsidian, Logseq, and similar Markdown-on-disk tools satisfy both.

The practical test is the **walk-away test**: can you delete the application today and still read, edit, and continue working with your notes using only generic tools? If yes, file-over-app holds. If no, you have an [[AI Wiki - PKM - PKM Anti-Patterns|app-over-file]] inversion.

## Why It Matters for PKM

PKM systems are unusually exposed to format risk. A few reasons:

- **Time horizon.** A vault accumulates over years and decades. Few apps last that long. See [[AI Wiki - PKM - Compounding Knowledge]].
- **Personal density.** Notes carry context, links, frontmatter, and idiosyncratic conventions. Lossy export — losing backlinks, tags, embeds, or formatting — destroys the structure that makes the knowledge usable.
- **Composability.** A file-over-app vault is a platform. Scripts, AI agents, build pipelines, and external tools can read and write notes without API gymnastics. See [[AI Wiki - PKM - Vault-as-Platform]] and [[AI Wiki - PKM - Context-as-Code]].
- **AI readiness.** Local LLMs and agentic systems work best on plain text. A vault that is grep-able and parseable is AI-ready by default; a proprietary database is not. See [[AI Wiki - PKM - Agentic Knowledge Management]] and [[AI Wiki - PKM - RAG for Personal Knowledge]].

Caspar Addyman's 2026 essay on managing 18,000 files makes the case empirically: the vault scaled because the format did. Plain Markdown remained tractable at five orders of magnitude beyond what any single app's UI was designed for. See [[AI Wiki - PKM - Source - Addyman 2026 - 18000 Files and the Future of Digital Knowledge]].

## Implementation Patterns

In practice, file-over-app vaults share a few patterns:

- **One file per note.** Each note is a standalone Markdown file. Atomic, addressable, movable. See [[AI Wiki - PKM - Atomic Notes]].
- **Wikilinks in the body.** Links live inside the file content as `[[wikilinks]]`, not as foreign keys in a hidden database. The link graph is recoverable from the files alone. See [[AI Wiki - PKM - Bidirectional Linking]].
- **YAML frontmatter for metadata.** Structured properties live at the top of the file in a format any tool can parse.
- **Folder hierarchy as one organization axis.** Folders are honest filesystem paths, not synthetic database views. See [[AI Wiki - PKM - Zone-Based Organization]] and [[AI Wiki - PKM - Johnny Decimal System]].
- **Open sync mechanisms.** Syncthing, Git, iCloud, Dropbox — any tool that syncs files works. No proprietary sync protocol required.

This is the operational shape of [[AI Wiki - PKM - Obsidian]], [[AI Wiki - PKM - Obsidian Starter Kit]], Logseq, Zettlr, and similar tools. The app is a lens; the files are the substance.

## Critiques and Limits

File over app is not a free lunch:

- **Mobile UX suffers.** Polished cloud-native tools often have better mobile experiences than file-based ones. The format wins on longevity, the SaaS wins on touch.
- **Real-time collaboration is harder.** Concurrent multi-user editing on plain files requires either CRDTs or careful conflict resolution. Most file-over-app tools are single-user-first.
- **Format is not enough.** Markdown is a baseline. Wikilink syntax, embed syntax, frontmatter conventions, and plugin-specific blocks vary across tools. Migration is easier than from proprietary formats but rarely zero-friction. See [[AI Wiki - PKM - Open Data Formats]].
- **Discipline still required.** A folder of 10,000 Markdown files with no convention is still chaos. File-over-app removes the vendor-lock problem; it does not remove the [[AI Wiki - PKM - PKM Anti-Patterns|capture-without-curation]] problem.

The honest claim is narrower than the slogan: file-over-app is a *necessary* condition for long-lived personal knowledge, not a sufficient one.

## Adjacent and Aligned Movements

File over app sits inside a wider current:

- **Plain text computing.** A revival of CLI tools, Markdown, and Unix-style composability over GUI-bound workflows.
- **Local-first software.** Ink & Switch's seven ideals (see [[AI Wiki - PKM - Local-First and Data Sovereignty]]).
- **The file system as database.** Andrey Koylan's argument that the filesystem is the durable substrate apps keep rediscovering. See [[AI Wiki - PKM - Source - Koylan 2026-02 - File System Is the New Database]].
- **App-as-platform criticism.** Andy Matuschak's argument that the app abstraction itself is an accidental tyranny over user agency. See [[AI Wiki - PKM - Source - Matuschak 2026 - Apps and Programming Two Accidental Tyrannies]].
- **Obsidian as platform.** Community arguments that Obsidian's real product is the file-on-disk contract, not the app. See [[AI Wiki - PKM - Source - TfTHacker 2026 - Obsidian Is Secretly an App Platform]].

These overlap but are not identical. File over app is the cleanest, most operational slogan; the others are its scaffolding.

## Key Points

- "File over app" (Steph Ango, 2023) holds that file formats outlive applications; choose tools whose data you could walk away from tomorrow
- Plain Markdown on disk is the canonical file-over-app substrate for PKM — readable by humans, parseable by machines, durable across decades
- It is the format slice of [[AI Wiki - PKM - Local-First and Data Sovereignty]]; the two together define the modern sovereign PKM stack
- The walk-away test: delete the app today, can you still read and edit your notes with generic tools?
- The pattern enables [[AI Wiki - PKM - Vault-as-Platform|vault-as-platform]] composability — scripts, agents, AI all work directly on the files
- Necessary but not sufficient: format longevity does not save you from capture-without-curation chaos

## Open Questions

- How should file-over-app handle rich media (audio, video, large binaries) that resist plain-text expression?
- What is the right convention layer above Markdown — should the community converge on a shared wikilink/frontmatter standard, or is per-tool variance acceptable?
- How does file-over-app interact with agentic AI that increasingly *generates* and *mutates* notes on the user's behalf — does the abstraction hold when the writer is no longer human?
- Will future operating systems (especially mobile) erode the filesystem abstraction enough to make file-over-app practically harder, even if philosophically intact?

## References

- Steph Ango, "File over app" (stephango.com, 2023)
- Steph Ango, "File over app — a manifesto" (stephango.com)
- Obsidian, "File over app" (obsidian.md, 2024)
- Caspar Addyman, "What 18,000 Files Taught Me About the Future of Digital Knowledge" (2026)
- Andrey Koylan, "File System Is the New Database" (2026)

## Related

- [[AI Wiki - PKM - Local-First and Data Sovereignty]]
- [[AI Wiki - PKM - Plain Text and Interoperability]]
- [[AI Wiki - PKM - Open Data Formats]]
- [[AI Wiki - PKM - Markdown]]
- [[AI Wiki - PKM - Obsidian]]
- [[AI Wiki - PKM - Obsidian Starter Kit]]
- [[AI Wiki - PKM - Vault-as-Platform]]
- [[AI Wiki - PKM - PKM Stack]]
- [[AI Wiki - PKM - Identity and Persistence]]
- [[AI Wiki - PKM - Knowledge Decay]]
- [[AI Wiki - PKM - Compounding Knowledge]]
- [[AI Wiki - PKM - Atomic Notes]]
- [[AI Wiki - PKM - Bidirectional Linking]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - Vault Maintenance]]
- [[AI Wiki - PKM - PKM Anti-Patterns]]
- [[AI Wiki - PKM - Source - Addyman 2026 - 18000 Files and the Future of Digital Knowledge]]
- [[AI Wiki - PKM - Source - Koylan 2026-02 - File System Is the New Database]]
- [[AI Wiki - PKM - Source - Matuschak 2026 - Apps and Programming Two Accidental Tyrannies]]
- [[AI Wiki - PKM - Source - TfTHacker 2026 - Obsidian Is Secretly an App Platform]]
