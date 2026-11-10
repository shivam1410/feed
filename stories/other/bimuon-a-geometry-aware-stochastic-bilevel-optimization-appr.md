---
title: "BiMuon: A Geometry-Aware Stochastic Bilevel Optimization Approach"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10188"
authors: ["Zhen Qin, Zhiyao Zhang, Yingbin Liang, Jia Liu"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10188v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Stochastic bilevel optimization provides a general framework for many machine learning applications, such as hyperparameter learning, data reweighting, language model alignment, and actor-critic reinforcement learning. However, most existing bilevel optimization methods treat matrix-valued gradients as flattened vectors and perform optimization in the resulting vectorized space, ignoring the matrix structures common in modern neural networks. Moreover, the lower-level (LL) problem curvature can induce significant spectral imbalance in the upper-level (UL) geometry. Such limitations of existing bilevel optimization methods motivate us to develop BiMuon, a geometry-aware stochastic bilevel optimization method that integrates implicit hypergradient estimation in bilevel optimization with Muon-style orthogonalized updates at the UL. To our knowledge, BiMuon is the first stochastic BLO method with Muon-style orthogonalized matrix updates and an $O(\epsilon^{-4})$ iteration-complexity guarantee, matching the best-known rates achieved by Muon-type methods based on matrix parameterizations. To improve computational and parallel efficiency for models with multiple matrix parameters, we further study BiMuon for blockwise diagonal matrix approximation and derive a relative stepsize allocation rule based on UL progress and blockwise LL sensitivity. We evaluate BiMuon on representation learning and blockwise bilevel optimization, providing empirical support for our methods.
