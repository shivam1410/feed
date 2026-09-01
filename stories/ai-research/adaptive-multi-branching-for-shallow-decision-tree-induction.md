---
title: "Adaptive Multi-Branching for Shallow Decision Tree Induction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29262"
authors: ["Hanul Park, Jeonghoon Choi, Juseong Kim, Sanghun Sel, Giltae Song"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.29262v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29262v1 Announce Type: new Abstract: Decision trees are attractive for tabular prediction tasks because each prediction follows an interpretable sequence of feature-threshold tests. Under a strict maximum-depth budget, however, conventional binary trees can be under-expressive, since each internal node makes only a single threshold decision. We study shallow-depth tree induction, where the goal is to improve accuracy while keeping root-to-leaf paths short. We propose the Multi-Branch Neural Decision Tree with Adaptive Pruning (MBNDT), a single axis-aligned tree trained end-to-end with differentiable multi-way splits. Each internal node learns ordered thresholds over a selected feature and a branch mask that adapts its effective arity, and the trained model is converted to a deterministic single-path tree for inference. Across 21 OpenML binary-classification benchmarks, MBNDT achieves the best average rank and mean balanced accuracy among depth-constrained single-tree baselines; a controlled ablation isolates multi-way splitting as the source of the gain. These gains come with an explicit trade-off: MBNDT realizes more leaves than the other single-tree baselines, making it best suited when accuracy under short, bounded decision paths is prioritized over minimal global tree size.
