---
title: "Boundary Variance Inflation Causes Acquisition Bias in Gaussian Processes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07561"
authors: ["Maria B{\\aa}nkestad, Sanna Jarl, Jens Sj\\\"olund"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2606.07561v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07561v1 Announce Type: new Abstract: Gaussian processes with stationary kernels on bounded domains exhibit inflated posterior variance near the boundary. Despite being a long-recognized artifact in geostatistics and a source of over-exploration in Bayesian optimization, the causes and effects of boundary-induced acquisition bias are underexplored. We trace the root cause to a simple geometric mechanism: the truncation of the kernel correlation neighborhood at the domain boundary creates an observation-independent distortion that worsens with dimensionality. We show how this distortion manifests across three acquisition classes: variance maximization concentrates selections at the corners, whereas negative integrated posterior variance and expected predictive information gain move selections inward to axis-aligned interior shells. These patterns arise without reference to any objective function, meaning that acquisition behavior can be dominated by kernel geometry rather than the desired task-specific uncertainty. To quantify this, we introduce a function-free selection-profile diagnostic for arbitrary acquisitions, kernels, and bounded-domain geometries.
