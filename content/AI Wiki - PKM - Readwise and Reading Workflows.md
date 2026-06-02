---
wiki_name: PKM
wiki_role: article
explored: true
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
created: 2026-04-07T09:50
updated: 2026-04-07T18:01
public_note: true
---

# AI Wiki - PKM - Readwise and Reading Workflows

Readwise is a SaaS platform that serves as the integration layer between reading and a PKM system. It captures highlights from Kindle, articles, podcasts, PDFs, and other sources, then routes them into your knowledge base. For PKM practitioners, Readwise solves a fundamental problem: highlights scattered across a dozen apps and devices are useless unless they converge into a single, searchable, reviewable system.

## What Readwise Does

Readwise syncs highlights from virtually every reading surface: Kindle, Apple Books, Google Play Books, Instapaper, Pocket, web articles via browser extension, PDFs, Twitter/X threads, and podcast transcripts. It aggregates these into a unified highlight library. Key features include content curation (articles, videos, books, emails), highlight capture with notes, AI-powered chat with your highlights, export to external tools, and email summaries for review.

## Readwise Reader

Readwise Reader is Readwise's read-later application, replacing tools like Instapaper or Pocket. It supports articles, PDFs, EPUBs, email newsletters, RSS feeds, YouTube transcripts, and Twitter threads. Reader is both a consumption interface and a triage layer: content enters Reader, gets read and highlighted, and the highlights flow into the main Readwise library for export.

## The Highlight-to-Vault Pipeline

The standard workflow: capture content in Reader or native apps, highlight while reading, sync highlights to Readwise, then export to your PKM tool. For Obsidian users, the Readwise Official plugin handles this sync automatically. It imports highlights into the vault as markdown files, typically into a dedicated highlights folder. From there, highlights get processed into literature notes and eventually into permanent notes following a Zettelkasten-style workflow.

## Spaced Repetition: Daily Review

Readwise's Daily Review resurfaces past highlights using spaced repetition principles. Each day, a curated set of highlights appears via email or the app. This combats the forgetting curve: you highlighted something because it mattered, and periodic re-exposure helps it stick. The review can also trigger further processing, as re-encountering a highlight often sparks new connections worth capturing.

## The Readwise Official Obsidian Plugin

This plugin integrates Readwise directly with Obsidian, importing and synchronizing captured highlights. It creates markdown files from your Readwise library, keeping the vault in sync as new highlights are added. The plugin acts as the bridge between Readwise's capture ecosystem and Obsidian's knowledge management environment.

## Readwise in the Capture Funnel

In a mature PKM workflow, Readwise occupies a specific position: it sits between consumption and processing. Content enters via browser extensions, mobile apps, or email subscriptions. Readwise captures the highlights. The vault receives the exports. The human (or increasingly, AI agents) processes highlights into atomic notes. Readwise does not replace the thinking step; it makes the raw material reliably available for it.

## Developer and AI Integrations

Readwise provides several integration paths beyond the Obsidian plugin: a CLI for terminal and agent workflows, an MCP server for GUI-based AI applications, and pre-built AI skills for tasks like triage, quiz generation, and feed catchup. These integrations position Readwise as infrastructure for AI-enhanced reading workflows, not just a highlight sync tool.

## Read-Later Queue Management

The most common failure mode is an ever-growing read-later queue that induces guilt rather than enabling learning. Effective Readwise users practice aggressive triage: scan titles and sources, archive ruthlessly, and only commit to reading items that connect to active projects or genuine interests. The queue is an inbox, not a library.

## Key Points
- Readwise aggregates highlights from all reading sources into a single library
- Readwise Reader serves as both read-later app and triage layer
- The Obsidian plugin automates highlight-to-vault synchronization
- Daily Review applies spaced repetition to combat the forgetting curve
- CLI, MCP, and AI skill integrations extend Readwise into agentic workflows

## Open Questions
- How will AI-generated summaries change the highlight workflow (highlights of highlights)?
- Can Readwise's spaced repetition replace dedicated SRS tools for knowledge retention?
- What is the optimal processing cadence for converting highlights into permanent notes?

## References
- Readwise official website: https://readwise.io
- Readwise Reader: https://read.readwise.io
- Readwise Obsidian plugin: https://github.com/readwiseio/obsidian-readwise
- Vault notes: Readwise, Readwise official plugin for Obsidian

## Related
- [[AI Wiki - PKM - The Capture Habit]]
- [[AI Wiki - PKM - Spaced Repetition]]
- [[AI Wiki - PKM - Progressive Summarization]]
- [[AI Wiki - PKM - Information Diet]]
- [[AI Wiki - PKM - Knowledge-Context Pipeline]]
- [[AI Wiki - PKM - MCP and PKM]]
