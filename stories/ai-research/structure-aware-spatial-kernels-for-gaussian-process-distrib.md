---
title: "Structure-Aware Spatial Kernels for Gaussian Process Distributed Port-Hamiltonian Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22575"
authors: ["Tianyi Yang, Thomas Beckers"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.22575v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Gaussian process distributed port-Hamiltonian systems (GP-dPHS) enable data-driven modeling of distributed dynamical systems while preserving their physical structure. However, standard stationary kernels can be inefficient for spatially heterogeneous systems because they neither exploit known input invariances nor reflect structured spatial dependencies. We address this limitation with a structure-aware kernel design that removes irrelevant state coordinates and decouples state and spatial dependencies through a tensor-product covariance. This modular construction allows qualitative knowledge of spatial heterogeneity to be incorporated by selecting an appropriate spatial kernel without requiring an analytical description of the underlying profile. Numerical experiments on a nonlinear string with periodic, smoothly varying, and semi-piecewise stiffness profiles demonstrate that structural decoupling consistently improves reconstruction accuracy, while profile-matched spatial kernels yield substantially larger gains in force-field and trajectory reconstruction.
