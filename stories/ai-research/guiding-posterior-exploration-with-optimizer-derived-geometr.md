---
title: "Guiding Posterior Exploration with Optimizer-Derived Geometry"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25312"
authors: ["Moritz Schlager, Emanuel Sommer, Thomas M\\\"ollenhoff, David R\\\"ugamer"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.25312v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25312v1 Announce Type: new Abstract: Sampling-based methods offer a principled approach to uncertainty quantification in Bayesian neural networks. Their practical use, however, is often challenged by the computational cost of exploring high-dimensional and multimodal posterior distributions. To overcome these difficulties, Bayesian Deep Ensembles, i.e., warmstarting the sampling from several optimized solutions, have proven to be an effective strategy. In this paper, we demonstrate that curvature estimates computed during the warmstart as a byproduct in adaptive optimizers such as AdamW can inform the sampling phase at negligible additional cost. Specifically, our proposed preconditioned sampling strategy based on optimizer-derived geometries can substantially reduce or even eliminate the need for a lengthy sampling burn-in phase and leads to greater numerical stability. This approach consistently maintains or improves predictive performance and uncertainty quantification without any additional computational costs. We confirm the consistency of our findings across various datasets and network architectures.
