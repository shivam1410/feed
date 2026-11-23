---
title: "Affine-Image Propagation for Tight and Scalable Neural Network Verification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.26978"
authors: ["Hong-Ming Chiu, Haoyu Li, Huan Zhang, Richard Y. Zhang"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.26978v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

While bound propagation methods are highly effective for certifying neural networks against $\ell_{\infty}$ adversaries, tight and scalable verification for $\ell_{2}$ adversaries remains a significant open challenge. Existing methods incur geometric loss by enclosing preactivation sets in elementwise intervals or axis-aligned ellipsoids, and functional loss by restricting the linear bounds constructed over those domains. Consequently, tight $\ell_{2}$ verification is currently restricted to Lipschitz-regularized networks where these approximations are accurate. In this paper, we introduce affine-image SDP-CROWN, a novel bound propagation method that better approximates preactivation domains using affine-image constraints and jointly optimizes the linear bound to adapt to the resulting domain. To bypass the prohibitive computational cost of dense semidefinite constraints required by the affine-image representation, we replace them with scaled diagonal-dominance conditions, allowing a GPU-accelerated implementation. Our method preserves the bound propagation recursion and can be integrated with branch-and-bound. On five MNIST and CIFAR-10 non-Lipschitz-regularized networks, our method improves verified accuracy over state-of-the-art methods by 17% to 57.5%. With branch-and-bound, these improvements increase to between 27% and 63.5%.
