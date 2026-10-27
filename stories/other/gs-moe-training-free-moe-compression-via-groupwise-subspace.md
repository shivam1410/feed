---
title: "GS-MoE: Training-Free MoE Compression via Groupwise Subspace Sharing and Pruning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.32009"
authors: ["Carson Cary, Yukai Jin, Yihao Huang, Zhankai Ye, Fangyi Li, Ting Hua, Xin Liu, Shangqian Gao"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.32009v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Mixture-of-Experts (MoE) models reduce computation through sparse activation, but storing their expert parameters remains a major memory bottleneck. We introduce GS-MoE, a training-free compression framework that addresses redundancy across and within experts through two compression axes: shared-subspace rank and expert intermediate width. Groupwise low-rank representations capture shared structure across experts while retaining expert-specific projections, and Nystr\"om-based neuron compression reduces intermediate width within each expert. For fixed shared subspaces, we derive per-expert reconstruction-error reductions from the reconstruction objective and use them to guide expert grouping. Budgets are allocated hierarchically using a gradient-free layer-importance score to guide the allocation of rank and width budgets across layers, which eigenvalues and leverage then distribute as non-uniform ranks across groups and intermediate widths across experts. Experiments demonstrate the complementary benefits of compression along both axes, particularly at high compression rates on fine-grained MoE models. On DeepSeek-MoE-16B-Base, at a 60% reduction in total model parameters, GS-MoE retains approximately 90% of the uncompressed model's average reasoning performance, compared with 73% for D$^2$-MoE, while achieving 20% lower out-of-domain perplexity. We provide a code implementation at: https://github.com/cbacary/GS-MoE
