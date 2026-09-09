---
title: "Calendar-SPCA: Interpretable Representation Learning for Multi-Periodic Electricity Consumption Profiles"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.06060"
authors: ["Carlos Quesada-Granja, Tony Castillo-Calzadilla, Carlos Rizo-Maestre"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.06060v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.06060v1 Announce Type: new Abstract: Long-term electricity-consumption profiles exhibit several simultaneous periodic structures, including daily, weekly, and annual cycles. This work introduces Calendar-SPCA, a calendar-structured sparse principal component method that incorporates this known multi-periodic geometry directly into low-dimensional representation learning. The feature domain is represented as the Cartesian product of cyclic calendar axes, and a low-rank factorization is estimated using an L1 loading penalty together with graph total variation over the resulting calendar graph. The method therefore produces sparse and locally coherent loading patterns that remain directly readable in their original temporal coordinates. Calendar-SPCA is evaluated on two independent smart-meter datasets with different sample sizes and temporal resolutions: GoiEner and Low Carbon London. A factorial experiment characterizes the complementary effects of sparsity and calendar coherence and examines robustness across sample size, latent dimensionality, and repeated fits. At rank 15, Calendar-SPCA retains 96.92% and 82.90% of the explained variance of rank-matched PCA in GoiEner and Low Carbon London, respectively, while producing mean loading sparsities of 61.95% and 81.50%. Comparisons with classical sparse PCA and SPCA-TV further show that Calendar-SPCA adds a systematic organization of the latent factors in the original calendar coordinates while preserving substantial low-rank information. The resulting components form coherent and complementary daily, weekly, seasonal, and jointly localized calendar patterns, with dataset-specific geometries across the two datasets.
