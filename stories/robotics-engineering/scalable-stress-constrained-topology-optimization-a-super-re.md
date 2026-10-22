---
title: "Scalable Stress-Constrained Topology Optimization: A Super-resolution and Simultaneous Approach Based on Machine Learning"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28703"
authors: ["Xiangyu Sun, Shirin Hosseinmardi, Ramin Bostanabad"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 28
guid: "oai:arXiv.org:2610.28703v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Large-scale topology optimization (TO) remains computationally demanding, especially for stress-constrained problems. To address this challenge, we propose the simultaneous neural topology optimization (SNTO) framework where we represent state, adjoint, and design variables with custom neural networks (NNs) whose parameters are jointly optimized within a single optimization loop that leverages continuous adjoint analysis and automatic differentiation. This optimization minimizes a multi-component loss function that combines the design objective, an aggregation of the local stress constraints, and the potential energy functionals. Our NNs have a unique architecture that accelerates convergence while enabling the networks to capture sharp gradients and boundaries which are critical to stress-constrained TO. To achieve scalability to millions of degrees of freedom (DoF), we develop a hardware-aware training scheme in which the design domain is partitioned into subdomains that are distributed across multiple GPUs. To control peak GPU memory usage, we further slice each subdomain into smaller regions whose loss gradients are evaluated sequentially and accumulated to update the NN parameters. Unlike domain decomposition approaches, our partitioning naturally ensures field continuity across the subdomains and does not require the introduction of additional terms into the loss function. For validation, we first evaluate the proposed framework on various 2D stress-constrained benchmarks and compare our results to a conventional finite element-based approach, showing that SNTO produces super-resolution designs with sharper boundaries, smaller gray areas, and lower volume fractions. We then consider large-scale 3D problems with up to eight million collocation points and distribute the training over up to eight GPUs.
