---
title: "Exact Schur-Sylvester Dimensionality Reductions for Non-Smooth Stochastic Complexity and Manifold Sampling"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23867"
authors: ["Trenton Lau, Gary P. T. Choi"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23867v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23867v1 Announce Type: new Abstract: The exact computation of the Normalized Maximum Likelihood (NML) codelength for regular non-smooth estimators (e.g., Lasso) has been historically limited by the cubic scaling walls of manifold-constrained projection and volume integration. At each step of the geometric Propose-and-Project Metropolis--Hastings (PPMH) sampler, evaluating the projection operator requires inverting an $(N+k) \times (N+k)$ generalized KKT matrix, while calculating the volume factor requires the determinant of an $(N-k) \times (N-k)$ Gram matrix. This paper presents an exact, mathematically equivalent formulation that bypasses both bottlenecks by utilizing the block Schur complement and Sylvester's determinant identity. We prove that the computational complexity of both operations collapses from $\mathcal{O}(N^3)$ to $\mathcal{O}(k^3 + N^2 k)$ per step. We generalize this reduction to Sparse Support Vector Machines (SVMs), Elastic Net, and Group Lasso. Finally, we provide a rigorous numerical stability analysis and evaluate the sampler's efficiency using the Effective Sample Size (ESS) per second. Our empirical benchmarks on high-dimensional datasets confirm a constant speedup exceeding $14{,}100\times$ while maintaining double-precision numerical equivalence, rendering exact non-smooth NML estimation highly tractable for large-scale statistical inference.
