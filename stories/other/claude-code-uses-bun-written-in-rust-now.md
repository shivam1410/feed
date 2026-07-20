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
generated: "2026-07-20T19:05:49+05:30"
---

Claude Code version 2.1.181 and later embed Bun rewritten in Rust instead of JavaScript. The embedded version is Bun v1.4.0, which was not yet publicly released when Claude shipped it, suggesting early adoption of performance improvements. Evidence comes from embedded source code strings showing 563 Rust filenames, and the version can be verified via embedded Bun.version queries. The rewrite achieved a 10% startup speedup on Linux but otherwise went nearly unnoticed—a sign that the infrastructure change was boring and reliable. The Rust version has since been released publicly as Bun canary. This matters because it demonstrates successful production deployment of a major rewrite across millions of devices with minimal disruption.
