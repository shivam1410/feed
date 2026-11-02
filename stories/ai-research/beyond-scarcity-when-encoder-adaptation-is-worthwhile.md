---
title: "Beyond Scarcity: When Encoder Adaptation Is Worthwhile"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41213"
authors: ["Zexing Zhang, Jichao Li, Tianyang Lei, Yiyin Zhang, Kewei Yang"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 20
guid: "oai:arXiv.org:2610.41213v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Long-tailed recognition often learns a shared representation before correcting the classifier for class imbalance. Once the classifier has been rebalanced, however, final accuracy does not reveal whether further encoder adaptation remains worthwhile. Standard imbalance benchmarks obscure this question because they jointly vary the number of distinct examples available to rare classes and the frequency with which those examples shape the representation. We introduce a controlled evaluation framework that separates unique support from representation allocation and estimates the incremental value of encoder updates through matched classifier-only and full-network continuations from a common corrected model. The framework combines stage-specific controls, multiple representation and adaptation objectives, whole-distribution metrics, and hierarchical inference over class assignments, support reconstructions, and optimization runs. Across the controlled study, the same low-support regime moves from one in which classifier-only training is adequate to one in which encoder adaptation yields a practically meaningful benefit solely as representation allocation becomes more imbalanced. The transition persists across classifier corrections, representation objectives, normalization and augmentation controls, and ImageNet-scale evaluation, while preserving frequent-class accuracy. Under the prespecified one-percentage-point operating margin, the two regimes are separated by simultaneous confidence bounds. These results show that benchmark construction can alter a post-correction training decision and that support size alone does not characterize the remaining value of representation adaptation.
