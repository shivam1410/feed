---
title: "Efficient Neural Field Learning via Adaptive Coverage and Focused Sampling"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02410"
authors: ["Guang Zhao, Xihaier Luo, Huan-Hsin Tseng, Seungjun Lee, Shinjae Yoo, Yihui Ren, Wei Xu"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.02410v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Implicit neural representations (INRs) provide a flexible framework for modeling high-dimensional continuous fields, but their training is often inefficient due to uniform subsampling that ignores spatial heterogeneity. Existing adaptive sampling methods partially address this issue by prioritizing high-error samples, but typically operate at the point level, often leading to redundant sampling in localized regions and insufficient coverage of the domain. We propose ACES (Adaptive Coverage-aware Efficient Sampling), a structured sampling framework that improves training efficiency by decoupling coverage and importance. ACES constructs adaptive spatial partitions to ensure domain coverage and reduce redundancy, and applies region-level importance weighting to prioritize informative regions during training. We provide a theoretical analysis showing that adaptive partitioning reduces gradient variance by increasing within-region homogeneity, and that controlled bias in region-level weighting may improve optimization efficiency relative to standard unbiased estimators. Experiments on scientific field learning tasks demonstrate that ACES achieves faster convergence and lower error than uniform and pointwise adaptive sampling baselines, with the largest gains in fields with highly localized complexity.
