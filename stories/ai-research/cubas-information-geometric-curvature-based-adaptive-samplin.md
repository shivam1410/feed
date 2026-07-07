---
title: "CuBAS: Information Geometric Curvature-Based Adaptive Sampling for Supervised Classification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03145"
authors: ["Alexandre L. M. Levada"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.03145v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03145v1 Announce Type: new Abstract: The informativeness of a training set is as consequential as its size, yet most sampling strategies remain agnostic to the intrinsic geometry of the data distribution. We introduce CuBAS (Curvature-Based Adaptive Sampling), an information-geometric framework for adaptive data selection in supervised classification, grounded in the q-state Potts Markov random field (MRF) model. The central insight is that a labeled dataset can be viewed as a statistical manifold, on which local curvature, estimated via the ratio of second to first-order observed Fisher information, faithfully encodes the geometric complexity of the data distribution. We construct a k-nearest-neighbor graph over the labeled data and derive a closed-form curvature score at each vertex from the Potts sufficient statistics. This curvature signal partitions the graph into two complementary regimes: low-curvature regions, corresponding to smooth, homogeneous clusters, and high-curvature regions, concentrated around decision boundaries that are disproportionately informative for classification. By selecting nodes from both regimes, CuBAS constructs compact yet maximally informative training subsets. Empirical evaluation across more than 60 benchmark datasets demonstrates consistent and statistically significant improvements over random sampling and uncertainty-based baselines, across a wide range of labeling budgets and classifier architectures. CuBAS is computationally efficient (linear in the number of k-NN graph edges), theoretically grounded in the differential geometry of statistical manifolds, and interpretable in terms of the local shape operator of the data manifold.
