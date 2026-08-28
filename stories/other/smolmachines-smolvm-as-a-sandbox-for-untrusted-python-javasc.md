---
title: "smolmachines / smolvm as a sandbox for untrusted Python & JavaScript"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/19/smolmachines-untrusted-sandbox/"
authors: []
date: "2026-08-19T23:16:00+00:00"
score: 50
guid: "https://simonwillison.net/2026/Aug/19/smolmachines-untrusted-sandbox/"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

Claude Fable 5 evaluated smolvm, a sandbox for securely running untrusted Python and JavaScript with resource limits including CPU, RAM, network, and filesystem restrictions. Unable to run smolvm in Claude Code for web due to missing virtualization, it pivoted to GitHub Actions runners to conduct real testing. The work demonstrates practical approaches to sandboxing user code.
