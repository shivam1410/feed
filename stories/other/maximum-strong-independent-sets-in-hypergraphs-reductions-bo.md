---
title: "Maximum Strong Independent Sets in Hypergraphs: Reductions, Bounds, and Greedy Certificates"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17951"
authors: ["Yingquan (Cody),  Wu, Jason Cong"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17951v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17951v1 Announce Type: new Abstract: We study the maximum strong independent set problem in a finite hypergraph: find the largest vertex set that intersects every hyperedge in at most one vertex. This objective arises whenever each observed block is a local incompatibility constraint but transitive closure across overlapping blocks is not justified. A motivating example is multi-band LSH-MinHash deduplication, where each collision bucket gives local evidence, while connected-component contraction can impose spurious global equivalences. The paper develops an incidence-structural toolkit for this problem. We prove exact reductions for dominance, incidence twins, and weight-1 blocks; derive closed-form and low-weight upper bounds; introduce puncturing and covering certificates that sharpen those bounds; and analyze a layered greedy clustering algorithm driven by block weights and residual incidence. The algorithmic analysis includes feasibility, maximality, conditional optimality, a layered witness-matching upper bound, and incidence-local complexity bounds. The results give correctness, termination, fixed-point, and optimality certificates for broad incidence families, together with examples showing when different certificates separate or coincide.
