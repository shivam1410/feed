---
title: "Graph-Based Stochastic Power-UCT: Monte-Carlo Graph Search with Power Mean Estimation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19956"
authors: ["Tung Tran, Viet Bao Mai, Hoang Ta, Tuan Dam"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19956v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19956v1 Announce Type: new Abstract: Tree-based Monte-Carlo Tree Search (MCTS) duplicates the same state when it is reached through different trajectories, which can waste simulations in stochastic MDPs. We introduce Graph-Based Stochastic-Power-UCT (GS-Power-UCT), which shares states reached at the same planning depth while keeping separate values for states reached at different depths. This design applies to general stochastic MDPs, including problems with cycles. We prove that for a fixed planning horizon, the root estimate converges to the finite-horizon value at rate $O(n^{-1/2})$, matching tree-based Stochastic-Power-UCT while reusing samples across shared states. We also study two full-state variants: GS-Power-UCT-F, which stores one node per physical state to increase sample sharing but may mix values from different remaining horizons, and GS-Power-UCT-F$^+$, which uses an adaptive horizon to control this bias. The latter converges to $V^{\star}(s_0)$, the optimal infinite-horizon discounted value at the root state $s_0$, when the remaining cross-depth gap vanishes. Experiments on stochastic planning benchmarks show improved sample efficiency over tree-based and graph-based baselines.
