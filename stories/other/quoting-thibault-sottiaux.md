---
title: "Quoting Thibault Sottiaux"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/16/bad-codex-bug/#atom-everything"
authors: []
date: "2026-07-16T17:45:59+00:00"
score: ""
guid: "https://simonwillison.net/2026/Jul/16/bad-codex-bug/#atom-everything"
image: ""
generated: "2026-07-18T21:58:10+05:30"
---

On file deletions. We’ve investigated a handful of reports where GPT-5.6 unexpectedly deleted files. What we have found is that this most commonly occurs when: Full access mode is enabled and codex is run without sandboxing protections, including without auto review being enabled The model attempts to override the $HOME env var to define a temporary directory. The model makes an honest mistake and mistakenly deletes $HOME instead. — Thibault Sottiaux , describing a pretty gnarly Codex bug Tags: codex , coding-agents , generative-ai , ai , llms
