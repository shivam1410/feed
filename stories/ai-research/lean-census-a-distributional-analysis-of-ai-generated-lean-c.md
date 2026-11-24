---
title: "Lean Census: A Distributional Analysis of AI-Generated Lean Code"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28430"
authors: ["Justin Asher, Pietro Pellegrino"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.28430v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

We compare two human-written and four AI-generated Lean libraries with Mathlib through the distributions of simple statistics of their code. For each library we measure inline claims in proofs, proof length, how often each declaration is used, and design choices such as instances and private declarations, and we read each against the variation among Mathlib's own areas. The AI-generated libraries have more inline claims per theorem, longer proofs, fewer instances, and more private declarations than the human-written ones. We release the code for the analysis as a package, lean-census, at https://github.com/project-numina/lean-census.
