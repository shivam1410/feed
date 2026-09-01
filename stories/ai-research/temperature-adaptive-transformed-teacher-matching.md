---
title: "Temperature-Adaptive Transformed Teacher Matching"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29099"
authors: ["Hiroaki Aizawa, Yoshikazu Hayashi"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.29099v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29099v1 Announce Type: new Abstract: Temperature scaling is a core component of knowledge distillation, yet its role and effect are still not fully understood. Transformed Teacher Matching (TTM) clarifies the role of temperature scaling by applying it only to the teacher distribution and interpreting the resulting objective as standard distillation with an implicit R\'enyi entropy regularization on the student. However, TTM still relies on a fixed temperature and does not specify how the teacher-side temperature should be adapted for individual samples. In this paper, we introduce a sample-wise inverse-temperature update for TTM by locally minimizing the Kullback-Leibler divergence between the temperature-scaled teacher distribution and the student's prediction. We derive closed-form first and second derivatives with respect to the inverse temperature, and show that they can be expressed using variance and covariance statistics of centered teacher and student logits under the transformed teacher weighting. This yields an efficient curvature-aware update that requires one softmax evaluation and a constant number of class-wise weighted sums. Experiments on standard image classification distillation benchmarks show that our temperature adaptation generally improves TTM and WTTM, while remaining competitive with or outperforming prior temperature-adaptive distillation baselines.
