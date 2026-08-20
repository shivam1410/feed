---
title: "CORAM: Coherent Orthogonal Rotation for Model Merging"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.17366"
authors: ["Xinyi Sui, Ziran Liu, Nam Ling, Wei Wang, Wei Jiang"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.17366v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.17366v1 Announce Type: new Abstract: Merging finetuned models combines specialized capabilities without joint training or access to the original data. Most methods operate by linear arithmetic in Euclidean weight space, which cannot carry the geometry of the update. Orthogonal Model Merging (OrthoMerge) uses a single orthogonal transform for each weight matrix, but such a transform cannot change singular values. We propose CORAM, which partitions each target matrix into row slices, represents every expert slice by its singular value decomposition in the corresponding base-model SVD frame, and merges the task-specific factors on their corresponding manifolds. Because manifold averaging contracts the merged update, CORAM applies an amplification coefficient $\lambda=\kappa\hat{c}$. The scale c_hat is estimated from the expert and merged update norms and is approximately $\sqrt{N}$ for $N$ experts with comparable update magnitudes. The restoration strength kappa is selected from the dispersion of expert updates without evaluating candidate merged models. This rule remains within 0.72 points of the best swept value on all evaluated suites. CORAM also includes spread slicing to distribute highly updated rows across slices and a residual pathway for non-target layers. Across four suites covering three model families, 3B to 9B scales, and language and vision-language experts, CORAM improves over OrthoMerge by 0.25 to 1.35 points and matches or exceeds the strongest weight-space baselines.
