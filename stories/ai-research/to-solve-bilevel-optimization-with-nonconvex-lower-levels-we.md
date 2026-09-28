---
title: "To Solve Bilevel Optimization with Nonconvex Lower Levels, We Need Second-Order Stationarity"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30501"
authors: ["Zhiyao Zhang, Menglu Yu, Alvaro Velasquez, Nathaniel D. Bastian, Jia Liu"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2609.30501v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Although bilevel optimization (BLO) has emerged as a powerful framework for addressing many complex and nested machine learning problems in recent years, most existing studies are confined to the lower-level strongly convex (LLSC) or lower-level generally convex (LLGC) settings (i.e., the lower-level objective function is assumed to be, at least, convex). While the LLSC/LLGC assumptions render more tractable algorithmic design and theoretical analysis, they are too rigid to encompass many machine learning problems in practice. The limitations of LLSC/LLGC assumptions in BLO motivate us to investigate solving the BLO problem in the general lower-level nonconvex (LLNC) settings, which remains in its infancy. In the literature on LLNC-BLO, most of the existing works either require additional structures in the lower-level objective function for tractable theoretical analysis, or adopt the first-order stationarity reformulation as a lower-level surrogate problem, which is inherited from the LLSC/LLGC settings but could lose their effectiveness in the LLNC setting. To bridge this gap, we propose to reformulate the nonconvex lower-level problem using a second-order stationarity-based surrogate, the solution of which guarantees a local optimal solution at the lower level. Based on this reformulation, we propose the PROBE (Perturbed gradient algorithm for bilevel problem) and show that it overcomes the limitations of prior works by probing and escaping lower-level saddle points. We prove that PROBE achieves a finite-time convergence rate of $O(T^{-2/5})$, where T denotes iterations. To our knowledge, this work is the first to establish the finite-time convergence for achieving lower-level second-order stationary solutions in general LLNC-BLO. Our experiments on both a large language model-based data curation task and a meta-learning task also show that PROBE outperforms SOTA methods.
