---
title: "Curvature-Independent Regret Bounds for Distributed Online Optimization on Hadamard Manifolds"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13646"
authors: ["Zhanyuan Cai, Emre Sahinoglu, Shahin Shahrampour"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13646v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13646v1 Announce Type: new Abstract: This work addresses decentralized online Riemannian optimization on Hadamard manifolds. Prior work under geodesic convexity (g-convexity) may require curvature information in the optimization analysis, typically through a finite lower bound on the sectional curvature. Curvature may also enter the step size or contraction factor of tangent-space Riemannian consensus schemes. In this work, we relax the curvature dependence for a narrower class of horospherical convex (h-convex) functions. We study Distributed Riemannian Online Gradient Descent (D-ROGD), which combines local Riemannian h-subgradient updates with an implicit Fr\'echet-mean consensus. For h-convex and strongly h-convex local objectives, we establish $O(\sqrt{T})$ and $O(\log T)$ static regret, respectively, matching the corresponding Euclidean rates with respect to $T$, with network dependence governed solely by the spectral gap. To our knowledge, these are the first curvature-independent regret guarantees for decentralized online optimization on Hadamard manifolds. Experiments on hyperbolic embeddings corroborate the predicted rates, with no observable degradation due to curvature.
