---
title: "The Implicit Bias of Hyperbolic Representation Learning for Multiclass Data: A Busemann Risk Perspective"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07131"
authors: ["Xingrun Li, Sho Kuno, Yusuke Mukuta, Xin Yang, Tatsuya Harada"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.07131v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

We study the implicit bias of Riemannian gradient flow for hyperbolic multiclass classification with fixed class prototypes in hyperbolic space $\mathbb{H}^n$. Our framework accommodates general permutation invariant relative margin (PERM) losses, a class that includes cross entropy and other standard multiclass losses. Our analysis is based on a decomposition: at large radius, the distance to each prototype splits into a radial term and a direction-dependent term described by the Busemann function. This yields two main results. First, we prove a radial dichotomy: the sign of a drift coefficient $\mu$ determines whether the radius is pushed toward the ideal boundary or back toward the interior; if the positive drift persists, then $r(t)=\frac{1}{2}\log t+O(1)$, while persistent negative drift returns the trajectory to the large-radius threshold in finite time. Second, we show that the boundary direction converges to a critical point of the Busemann risk on $\partial\mathbb{H}^n$. These results provide a rigorous asymptotic perspective on two phenomena we refer to as boundary saturation and near-boundary clustering in hyperbolic representation learning.
