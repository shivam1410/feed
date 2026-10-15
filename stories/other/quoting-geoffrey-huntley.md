---
title: "Quoting Geoffrey Huntley"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Oct/13/geoffrey-huntley/"
authors: []
date: "2026-10-13T13:32:00+00:00"
score: ""
guid: "https://simonwillison.net/2026/Oct/13/geoffrey-huntley/"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

If the agent isn't using my diagnostics library, I could introspect and update AGENTS.md, but there's still a delta, and it'll drift. Instead, I write a pre-commit hook that checks the git diff for direct calls to observability modules that bypass my diagnostics module. Boom: fail the commit, inject a prompt telling the agent to use the diagnostics library. All of a sudden it's ten out of ten. — Geoffrey Huntley , nobody should type code by hand anymore. here's what's left. Tags: coding-agents , generative-ai , git , agentic-engineering , ai , geoffrey-huntley , llms
