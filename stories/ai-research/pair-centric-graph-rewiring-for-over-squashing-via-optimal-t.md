---
title: "Pair-Centric Graph Rewiring for Over-Squashing via Optimal Transport-Guided Communication Alignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10619"
authors: ["Yan Wang, Chuan-Xian Ren"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.10619v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

arXiv:2608.10619v1 Announce Type: new Abstract: Message-passing neural networks (MPNNs) often struggle when task-relevant information is distributed across distant regions of a graph, since local propagation must compress remote signals through limited structural interfaces. Graph rewiring provides a structural response to over-squashing. Most existing methods rely on edge-level bottleneck scores or graph-level connectivity surrogates. With a limited rewiring budget, the key question is which pairwise communications most need structural support. This paper proposes PairAlign, a pair-centric graph rewiring framework that makes this question explicit through demand-support shortage. Specifically, PairAlign combines original-graph structural demand with current-graph finite-hop propagation support; their ratio highlights interactions whose communication demand is poorly supported by topology, and our theory shows that this score provides a computable proxy for the corresponding Jacobian-based shortage with a pair-level interpretation of over-squashing. Our theory reveals a two-sided effect of edge insertion: a new edge can create useful walks and simultaneously dilute existing normalized transition mass. Guided by this observation, PairAlign optimizes shortage to favor edge additions that alleviate over-squashing. Beyond selecting useful additions, PairAlign further introduces an Optimal Transport-guided rewiring mechanism to coordinate the finite edge budget for pair-level structural compatibility and shortage-target coverage. It formulates communication alignment between the candidate edge budget and the shortage targets, and the theory shows that this allocation covers shortage targets more broadly and effectively than a greedy-local assignment. Experiments on standard graph benchmarks show PairAlign's improvement across message-passing backbones, validating pair-level repair as an effective route for alleviating over-squashing.
