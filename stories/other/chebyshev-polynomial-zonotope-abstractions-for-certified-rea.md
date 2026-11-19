---
title: "Chebyshev Polynomial Zonotope Abstractions for Certified Reachability of Learning-Enabled Systems"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23246"
authors: ["Peng Xie, Amr Alanwar"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23246v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Nearly all current methods for computing reachable sets of nonlinear dynamics propagate them with truncated Taylor expansions plus rigorous remainders. The expansion is pointwise: once its argument is a whole set rather than a point, one polynomial must stay accurate across that set, and it reaches only as far as its disc of convergence. The limit binds hardest on the rational terms and sigmoid gates of modern controllers: smooth as these look on the real line, in the complex plane they blow up at points just off the real axis, closer as a gate sharpens, and those points cap the set width a Taylor expansion can cover, most tightly on the switching surface where the controller decides. We prove a dichotomy: no Taylor degree certifies sets wider than that cap, while a Chebyshev abstraction of equal degree, anchored to the whole set in the same polynomial-zonotope pipeline, has no cap and gains width at a geometric rate in degree. Measured walls match the formulas to between 89 and 94 percent. We give closed-form rigorous remainders, among them the first polynomial softmax transformer; existing sound treatments are linear relaxations. On closed loops, certificates survive where the Taylor ones diverge, and specifications flip from unknown to proven; on trained classifiers up to real MNIST digits, the Chebyshev frontier certifies input territory the Taylor basis surrenders. Every certified claim passed large Monte-Carlo harnesses with zero violations, and an applicability map states in advance where the basis provably cannot matter.
