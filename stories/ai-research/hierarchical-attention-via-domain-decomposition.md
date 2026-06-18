---
title: "Hierarchical Attention via Domain Decomposition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18525"
authors: ["Stephan K\\\"ohler, Oliver Rheinbach"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2606.18525v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18525v1 Announce Type: new Abstract: We propose a hierarchical attention mechanism based on two-level overlapping Schwarz domain decomposition. The method is motivated by the observation that two-level Schwarz domain decomposition methods combine local subdomain corrections with a coarse level that communicates global, long-range information. We test its usefulness in the context of finite-dimensional operator learning using a simple, one-dimensional diffusion problem with homogeneous Dirichlet boundary conditions. Although elementary, this problem provides a controlled sequence-to-sequence setting in which the exact nonlocal solution operator is known. After discretization, learning the solution operator amounts to approximating the inverse of a symmetric positive definite matrix. As a baseline, we use a global softmax-free low-rank attention operator of the form $QK^T$. The proposed construction replaces this dense global factorization by a two-level additive structure: local low-rank attention blocks on overlapping subdomains are combined with a coarse attention block. The resulting operator has the form $$M_{\theta}^{-1} = \Phi Q_0 K_0^T \Phi^T + \sum_{i=1}^{N} R_i^T D_i^{1/2} Q_i K_i^T D_i^{1/2} R_i.$$ Here $R_i$ restricts to an overlapping subdomain, $D_i$ is a partition-of-unity weight, and $\Phi$ is a coarse interpolation (or prolongation) matrix. Numerical experiments for synthetic Fourier right-hand sides indicate that the domain-decomposition attention operator is able to train faster and can give more accurate approximations than a global low-rank attention baseline while using significantly fewer parameters.
