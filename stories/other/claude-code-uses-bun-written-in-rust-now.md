---
title: "Claude Code uses Bun written in Rust now"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/#atom-everything"
authors: []
date: "2026-07-19T03:54:09+00:00"
score: 50
guid: "https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/#atom-everything"
image: ""
generated: "2026-07-26T22:35:53+05:30"
---

Claude Code version 2.1.181 (released June 17) and later integrate a Rust rewrite of Bun, the JavaScript runtime. Startup performance improved 10% on Linux, but the change otherwise went unnoticed—intentionally, since invisibility signals stability. Investigation reveals Bun v1.4.0 (a preview version not yet released publicly) embedded in the binary, with 563 Rust source files detected within. This represents significant infrastructure modernization deployed silently to millions of Claude Code installations. The runtime rewrite demonstrates both engineering ambition and production readiness: Anthropic bet on Rust for reliability and performance, then shipped it without disrupting user experience. As the Rust version subsequently released as Bun canary, the deployment approach validates the rewrite's stability.
