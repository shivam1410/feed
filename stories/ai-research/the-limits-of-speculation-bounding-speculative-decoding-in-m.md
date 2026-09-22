---
title: "The Limits of Speculation: Bounding Speculative Decoding in Mixture-of-Experts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22156"
authors: ["Aidar Amankulov, Denis Mamatin"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.22156v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22156v1 Announce Type: new Abstract: Speculative decoding in Mixture-of-Experts (MoE) models faces the problem of unstable verification cost caused by input-dependent expert loading. To study the physics of this process, we formulate speculation-budget selection as an offline Stochastic Shortest Path (SSP) problem over reference sequences and build a diagnostic Oracle that uses counterfactual simulation to account for MoE verification cost. A detailed analysis of the Oracle's decisions on the Qwen3-Coder and EAGLE-3 pairing, in the space of marginal deltas (Delta Space), shows that rejected candidates form a strict linear boundary. This result demonstrates that a complex global optimization is locally governed by a necessary condition balancing marginal cost against expected progress ($\frac{\Delta \mathbb{E}[Cost]}{\Delta \mathbb{E}[a]}$), providing a rigorous mathematical reference point for designing future adaptive online heuristics.
