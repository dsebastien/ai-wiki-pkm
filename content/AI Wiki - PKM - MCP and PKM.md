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
created: 2026-04-07T09:53
updated: 2026-05-06T10:03
public_note: true
---

# AI Wiki - PKM - MCP and PKM

The Model Context Protocol (MCP) is an open protocol created by Anthropic that standardizes how AI models connect to external tools and data sources. For PKM, MCP represents the plumbing layer that makes AI-enhanced knowledge management practical: it provides a standardized way for AI agents to read your vault, query your highlights, interact with your tools, and take actions on your behalf.

## What MCP Is

MCP defines a client-server architecture where AI applications (clients) connect to MCP servers that expose resources (data the AI can read), tools (actions the AI can perform), and prompts (reusable interaction patterns). The protocol is transport-agnostic and language-agnostic, meaning any AI tool that speaks MCP can connect to any MCP server regardless of implementation language. Think of MCP as a USB-C port for AI: one standard interface that connects to many different things.

## How MCP Enables PKM Integration

Without MCP, every AI-PKM integration requires custom code. Want Claude to read your Obsidian vault? Write a custom tool. Want it to query Readwise? Write another. Want it to check your calendar? Another. MCP replaces this per-integration work with a standard protocol. A vault exposed via an MCP server becomes accessible to any MCP-compatible AI client. This shifts the integration problem from N-times-M custom integrations to N servers plus M clients.

For PKM specifically, MCP enables: vault contents as readable resources (notes, templates, metadata), vault operations as callable tools (create note, search, update frontmatter), and reading data from external knowledge sources (Readwise, browsers, file systems).

## MCP Servers for Knowledge Work

Several MCP servers are directly relevant to PKM workflows:

**Readwise MCP Server.** Exposes your Readwise library to AI clients. Agents can search highlights, retrieve book notes, and access your reading history without custom API integration.

**File system MCP.** Provides read/write access to local files. This is how AI agents interact with Obsidian vaults at the file level, reading markdown, updating frontmatter, and creating new notes.

**Browser MCP.** Enables AI agents to read web pages, extract content, and interact with web applications. Useful for content capture workflows where an agent needs to fetch and process web content into vault notes.

**Obsidian MCP servers.** Community-built servers that expose Obsidian-specific operations (search, create note, read note) through the MCP protocol.

## MCP vs AI Agent Skills

MCP and skills serve different but complementary roles. MCP answers "how does the AI connect to this tool?" while skills answer "what should the AI do with this tool?" An MCP server for Readwise provides the capability to search highlights; a skill like "osk-readwise-ingest-full" defines the complete workflow of fetching highlights, processing them, and creating vault notes.

In the Obsidian Starter Kit architecture, MCP servers are infrastructure (always available, stateless, capability-focused) while skills are workflows (task-specific, context-aware, often invoking multiple MCP tools in sequence). A mature AI-PKM system uses MCP as the connection layer and skills as the intelligence layer.

## MCP as Infrastructure for Agentic Knowledge Management

The longer-term significance of MCP for PKM is that it makes agentic knowledge management composable. When every tool in your PKM stack exposes an MCP server, AI agents can orchestrate across them: read a Readwise highlight, check if a related note exists in the vault, create a new atomic note if not, and update a Map of Content. Each step uses a different MCP server, but the agent coordinates them through a single protocol.

This composability is what transforms PKM from a manually maintained knowledge store into an active system where AI agents can perform maintenance, surface connections, and process information autonomously.

## Key Points
- MCP is Anthropic's open protocol standardizing AI-to-tool connections
- MCP replaces per-integration custom code with a universal client-server protocol
- Key MCP servers for PKM include Readwise, file system, browser, and Obsidian-specific servers
- MCP provides connection capability; skills provide workflow intelligence
- MCP makes agentic knowledge management composable across the entire tool stack

## Open Questions
- Will MCP become the dominant standard, or will competing protocols fragment the ecosystem?
- How should MCP servers handle access control for sensitive knowledge base content?
- What is the performance cost of MCP indirection vs direct API access for latency-sensitive PKM operations?

## References
- Anthropic, "Model Context Protocol" specification
- Vault notes: Readwise (MCP server reference), Model Context Protocol (MCP)
- https://modelcontextprotocol.io

## Related
- [[AI Wiki - PKM - AI Agent Systems]]
- [[AI Wiki - PKM - AI Skills in PKM]]
- [[AI Wiki - PKM - Agentic Knowledge Management]]
- [[AI Wiki - PKM - Readwise and Reading Workflows]]
- [[AI Wiki - PKM - PKM Automation]]
- [[AI Wiki - PKM - Tools for Thought]]
