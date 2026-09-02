---
title: "DK-GBMKKM: Dynamic Kernel-Space Granular-Ball Multiple Kernel $k$-Means Clustering"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00647"
authors: ["Xiaoyu Lian, Yuchao Zhang, Shuyin Xia, Siqi Zhong, Xuzhao Xiang"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.00647v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00647v1 Announce Type: new Abstract: Multiple kernel $k$-means integrates complementary nonlinear similarities by learning a combination of base kernels. Its pointwise optimization, however, is sensitive to noisy and boundary samples and repeatedly operates on sample-scale kernel matrices. Granular-ball representations organize local sample groups into mesoscopic units, but granular balls generated once in the input space may be inconsistent with the fused-kernel geometry that evolves during multiple kernel learning. We propose dynamic kernel-space granular-ball multiple kernel $k$-means (DK-GBMKKM). The method generates granular balls in the current fused kernel space and alternates kernel-weight learning with granular-ball membership updates, allowing the representation to adapt to changes in the fused-kernel geometry. A sample-size-weighted granular-ball kernel is further constructed to preserve the contributions of balls of different sizes, and its positive semidefiniteness and related equivalence properties are established. Experiments on 12 public datasets demonstrate the strong overall clustering performance of DK-GBMKKM. The code has been open-sourced for reproducibility: https://github.com/lianxiaoyu724/DK-GBMKKM.
