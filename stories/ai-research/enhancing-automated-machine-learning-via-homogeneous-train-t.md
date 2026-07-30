---
title: "Enhancing Automated Machine Learning via Homogeneous Train-Test Splitting Methods"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26625"
authors: ["Yearn Tan Yin Tze, Charles Grellois"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 56
guid: "oai:arXiv.org:2607.26625v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26625v1 Announce Type: new Abstract: Accurate model evaluation in machine learning depends critically on how datasets are split into training and testing subsets. Standard random splitting assumes that both partitions share the same underlying distribution, an assumption often violated in datasets with class imbalance, natural clustering, or spatial autocorrelation. This paper investigates the role of statistical similarity in train-test splitting and its consequences for AutoML model evaluation. Five established strategies are compared across fifteen UCI benchmark datasets: random splitting, stratified sampling, Kennard-Stone, Duplex, and SPXY. Similarity is assessed using chi-square, Kolmogorov-Smirnov, and Maximum Mean Discrepancy (MMD) tests. Geometry-based methods consistently produce near-zero MMD scores, introducing instability into downstream performance estimates. The proposed Optimised-Distribution method treats similarity as an explicit optimisation objective and achieves the highest mean MMD similarity, 89.0%, across all strategies evaluated.
