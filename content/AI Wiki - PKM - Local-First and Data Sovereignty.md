---
wiki_name: PKM
wiki_role: article
explored: true
ai_generated: true
confidence: medium
maturity: draft
graduated_notes:
sources:
  - web research
  - Buytaert 2026 — How I Collect and Connect Ideas (Readwise capture)
  - Addyman 2026 — What 18,000 Files Taught Me About the Future of Digital Knowledge (Readwise capture)
review_count: 0
review_interval:
last_reviewed:
notes:
tags:
  - type/ai_wiki
  - ai_wiki/pkm
  - zone/meta
  - ai
created: 2026-04-07T09:44
updated: 2026-04-28T08:45
public_note: true
---

# AI Wiki - PKM - Local-First and Data Sovereignty

The local-first movement represents a significant philosophical and architectural shift in how PKM tools are built and used. Rather than treating the cloud as the source of truth and local devices as thin clients, local-first software keeps the user's data on their own devices as the primary copy. Cloud services, if used at all, serve only as optional sync conduits. This matters deeply for knowledge management because your notes may span decades, and their survival should not depend on a startup's business model.

## Local-First Architecture Principles

The foundational articulation of local-first principles comes from the Ink & Switch research lab's 2019 paper "Local-First Software: You Own Your Data, in Spite of the Cloud." The paper identifies seven ideals: no spinners (fast), your work is not trapped on one device, the network is optional, seamless collaboration, the Long Now (data outlives the app), security and privacy by default, and user retains ownership and control.

These principles directly challenge the dominant SaaS model where data lives on company servers, access requires authentication against their infrastructure, and export is an afterthought. For PKM, the stakes are high: a knowledge base built over years becomes deeply personal intellectual infrastructure. Losing access to it (through service shutdown, pricing changes, or policy shifts) is a genuine loss.

## File Over App

Steph Ango, CEO of Obsidian, crystallized the ethos with the phrase [[AI Wiki - PKM - File Over App|file over app]]. The argument is simple: applications are ephemeral, but files (especially plain-text formats like Markdown) can outlast any particular tool. If your knowledge is stored in Markdown files on your local filesystem, you can read them with any text editor, process them with any script, and migrate them to any future tool. The app becomes a lens on your data, not a prison for it.

This philosophy directly informs why [[AI Wiki - PKM - Obsidian]] uses a local vault of Markdown files rather than a proprietary database. It also explains the appeal of tools like Logseq, Zettlr, and even plain directories of text files. The format is the freedom. See [[AI Wiki - PKM - File Over App]] for the full unpacking.

## Why Markdown on Disk Matters

Markdown on disk is not just a technical choice; it is a sovereignty choice. Plain-text files are grep-able, version-controllable (via Git), scriptable, and readable without any special software. They compose well with AI tools, CLI utilities, and automation pipelines. This is directly relevant to [[AI Wiki - PKM - Context-as-Code]] and [[AI Wiki - PKM - Agentic Knowledge Management]], where AI agents need programmatic access to knowledge without going through proprietary APIs.

Contrast this with Notion, Roam Research, or Evernote, where your data lives in proprietary formats behind APIs that the company controls. Export features exist but are often lossy, slow, or incomplete.

## CRDTs and the Sync Problem

The hardest technical challenge for local-first software is synchronization. When multiple devices each have their own copy of the data, conflicts are inevitable. Conflict-free Replicated Data Types (CRDTs) are the primary technical solution. CRDTs are data structures designed so that concurrent edits on different devices can always be merged without conflict.

Ink & Switch's Automerge library is the most prominent CRDT implementation for local-first apps. However, CRDTs add complexity, and for file-based PKM tools like Obsidian, simpler sync mechanisms (Syncthing, iCloud, Git) are more common. These work well enough for single-user vaults but can produce conflicts when edits happen simultaneously on multiple devices.

## Subscription Fatigue and Vendor Lock-In

The local-first movement gains energy from a growing backlash against subscription-based SaaS. Users are tired of paying monthly fees for tools that hold their data hostage. Vendor lock-in is not hypothetical: Google killed Google Reader, Evernote's decline left millions of users scrambling to export, and Notion's pricing changes have pushed teams to look for alternatives.

For PKM specifically, the risk is compounded by the deeply personal nature of the data. Your Zettelkasten or second brain is not a replaceable commodity; it is the accumulated residue of your thinking over years.

## Privacy-First PKM

Local-first is inherently privacy-first. If your notes never leave your device (or only sync via encrypted channels you control), there is no third-party server to breach, no terms of service granting the company rights to your content, and no risk of your private reflections being used to train AI models without consent. This is increasingly relevant as AI companies aggressively seek training data.

## The Tradeoffs

Local-first is not without costs. Real-time collaboration is significantly harder without a central server. Sync across devices requires manual setup (Syncthing, Git, or paid services like Obsidian Sync). Mobile experiences are often weaker than cloud-native alternatives. And for less technical users, managing files and folders is more friction than a polished SaaS interface.

Despite these tradeoffs, the trend toward local-first PKM has accelerated in 2025 and 2026, driven by AI privacy concerns, subscription fatigue, and the growing realization that your knowledge base is too important to entrust to any single company.

## Practitioner Evidence (2026)

Two 2026 articles concretize the abstract argument with working practice. Dries Buytaert ("How I Collect and Connect Ideas," dri.es, 2026) describes a long-running Obsidian vault where he syncs Markdown via iCloud, versions with Git, and runs his own backups; three independent layers under his control rather than a single SaaS sync. He pairs this with a [[AI Wiki - PKM - Selective Encryption|selective-encryption]] pattern: most notes are public-leaning plaintext, sensitive material is encrypted per-note. The architecture demonstrates that "local-first" does not mean "no sync"; it means *the user composes the sync stack*.

Caspar Addyman ("What 18,000 Files Taught Me About the Future of Digital Knowledge," 2026) extends the same logic to AI integration. His vault scaled to ~18,000 notes precisely because the AI layer (Smart Connections) runs locally and "keeps everything private." This is the architectural fix the Local-First philosophy needs in the AI era: the privacy-keeping component is the *inference substrate*, not just the storage substrate. Cloud AI on a local-first vault is not local-first in any meaningful sense; see [[AI Wiki - PKM - Privacy in PKM]] for the full unpacking.

Together these practitioners show that local-first plus selective encryption plus local AI is a coherent, working stack — not just a philosophical position.

## Key Points
- Local-first software keeps data on the user's device as the primary copy; cloud is optional
- "File over app" (Steph Ango) argues that plain-text files outlast any application
- Markdown on disk enables grep, Git, scripting, and AI agent access without proprietary APIs
- CRDTs solve the sync problem in theory; in practice, simpler tools like Syncthing are more common
- The movement is fueled by subscription fatigue, vendor lock-in horror stories, and AI privacy concerns
- Tradeoffs include harder collaboration, manual sync setup, and weaker mobile experiences

## Open Questions
- Will CRDTs mature enough to make local-first collaboration competitive with cloud-native tools?
- How will local-first PKM interact with AI services that require cloud processing?
- Can the "file over app" philosophy scale to multimedia-heavy knowledge bases?

## References
- Martin Kleppmann et al., "Local-First Software: You Own Your Data, in Spite of the Cloud" (Ink & Switch, 2019)
- Steph Ango, "File Over App" (stephango.com, 2023)
- Ink & Switch, Automerge (automerge.org)

## Related
- [[AI Wiki - PKM - File Over App]]
- [[AI Wiki - PKM - Privacy in PKM]]
- [[AI Wiki - PKM - Selective Encryption]]
- [[AI Wiki - PKM - Sensitive Information Boundaries]]
- [[AI Wiki - PKM - Source - Buytaert 2026 - How I Collect and Connect Ideas]]
- [[AI Wiki - PKM - Source - Addyman 2026 - 18000 Files and the Future of Digital Knowledge]]
- [[AI Wiki - PKM - Plain Text and Interoperability]]
- [[AI Wiki - PKM - Obsidian]]
- [[AI Wiki - PKM - Tools for Thought]]
- [[AI Wiki - PKM - Context-as-Code]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - Digital Gardens]]
- [[AI Wiki - PKM - PKM Anti-Patterns]]
- [[AI Wiki - PKM - RAG for Personal Knowledge]]
