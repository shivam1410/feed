---
title: "PRIME: Frequency-Aware Unified Pruning and Merging for MoE Compression"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.13982"
authors: ["Shanfeng Huang, Rongqian Zhang, Zhou Fang, Song Xiao, Hai Du"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.13982v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Mixture-of-Experts (MoE) models have emerged as an effective paradigm for scaling large language models, yet their massive parameter footprint poses severe memory challenges for deployment. Existing compression methods typically treat expert pruning and merging as disjoint operations and rely on greedy heuristics, often leading to irreversible information loss or representational pollution. In this paper, we propose PRIME, a unified optimization framework for MoE compression via adaptive PRunIng and MErging. PRIME casts the discrete prune-merge assignment step as a global Integer Linear Programming over a frequency-weighted surrogate objective, jointly selecting pruning and merging decisions while accounting for expert usage. We motivate the frequency-aware objective through an error-bound analysis under fixed representative assignments, and show that the formulation favors high-frequency experts as centroids, promoting routing stability. Extensive experiments on Qwen3-30B-A3B and Qwen3.5-122B-A10B demonstrate that PRIME achieves strong accuracy retention across knowledge, coding, math, and long-context tasks, while serving benchmarks of merged models quantify the memory and throughput benefits of expert compression in vLLM.
