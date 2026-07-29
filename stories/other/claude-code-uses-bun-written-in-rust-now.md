---
title: "Claude Code uses Bun written in Rust now"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/#atom-everything"
authors: []
date: "2026-07-19T03:54:09+00:00"
score: 35
guid: "https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/#atom-everything"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

Claude Code now runs Bun—a JavaScript runtime—recompiled in Rust instead of JavaScript (since v2.1.181, June 2026). Startup improved 10% on Linux. Evidence includes Bun v1.4.0 embedded in Claude's binary and 563 Rust source files discoverable via string inspection. The infrastructure change shipped transparently to millions of users without disruption. This demonstrates successful large-scale modernization: replacing underlying implementations when backward compatibility holds and performance improves measurably, allowing developer tools to adopt cutting-edge rewrites invisibly.
