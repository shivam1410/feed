---
title: "A Systematic Analysis of a Small Optimal Subspace for Physics-Informed Neural Networks: $n$-DAS $\\subset \\mathbb{R}^p$"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23773"
authors: ["Ahmad AliAhmad, Khemraj Shukla"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23773v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

The search for a low-dimensional subspace that governs neural network training has been a persistent goal in optimization. Yet subspaces defined by Hessian eigenvalue magnitude, such as the dominant/bulk decomposition underlying Dom-SGD and Bulk-SGD, have repeatedly failed to capture where optimization takes place, and adaptive Krylov-based alternatives built on energy-fraction thresholds show promise but still struggle at lower eigenmodes. We argue this failure is structural: the directions of highest curvature are not, in general, the directions along which training moves. We introduce the dominant aligned subspace (DAS), constructed from a full eigendecomposition of the Hessian but selected by gradient alignment rather than eigenvalue magnitude, as a tool for understanding optimization dynamics and a foundation for designing methods that exploit them. To expose this structure under the hardest conditions, we use physics-informed neural networks (PINNs) as a testbed: differential operators from the parabolic, elliptic, and hyperbolic classes induce severely ill-conditioned, anisotropic loss landscapes. Across Poisson, heat, wave, and viscous Burgers benchmarks DAS-restricted training with a line search matches full-space training even where the projected Hessian remains ill-conditioned, showing empirically that convergence does not require all Hessian eigendirections but only a low-dimensional, gradient-aligned subset. We extend the analysis to Gauss-Newton within the DAS and discuss what this structure implies for future subspace-aware optimizers.
