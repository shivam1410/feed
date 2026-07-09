---
title: "Rewriting Bun in Rust"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/8/rewriting-bun-in-rust/#atom-everything"
authors: []
date: "2026-07-08T23:57:21+00:00"
score: 50
guid: "https://simonwillison.net/2026/Jul/8/rewriting-bun-in-rust/#atom-everything"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

Jarred Sumner describes the sophisticated agentic engineering behind rewriting Bun from Zig to Rust. The rewrite was driven by critical memory management challenges: use-after-free, double-free, and forgot-to-free bugs. While Zig successfully built Bun to maturity, mixing garbage collection with manual memory management created reliability concerns. Modern AI coding agents powered by frontier language models fundamentally changed the economic calculus of rewrites. Complete rewrites of large projects—previously considered reckless—became tractable through dynamic workflows, adversarial review, and trial runs. This represents a paradigm shift: AI agents enabled a methodical rewrite that would have been considered impossible years ago, suggesting new possibilities for addressing deep architectural challenges.
