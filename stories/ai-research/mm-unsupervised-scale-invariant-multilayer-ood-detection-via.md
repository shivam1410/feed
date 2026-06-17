---
title: "MM++: Unsupervised Scale-Invariant Multilayer OOD Detection via Top-K Gated Feature Fusion"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17352"
authors: ["Rahim Hossain, Md Tawheedul Islam Bhuian, Md Farhan Shadiq, Kyoung-Don Kang"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.17352v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17352v1 Announce Type: new Abstract: We introduce MM++ (Multilayer Mahalanobis++), a fully unsupervised, strictly post-hoc, and scale-invariant framework for Out-of-Distribution (OOD) detection. To address the trade-off between scale invariance and hierarchical expressivity, MM++ constructs a principled joint feature space. It first identifies discriminative intermediate layers by measuring entropy density drops, which mark the boundaries of sharp semantic compression. By fusing these selected layers with the terminal representation, the framework captures latent cross-layer correlations while mitigating early-layer noise. Crucially, a Ledoit-Wolf regularized tied covariance matrix stabilizes this unified space, enabling reliable distance estimation. Requiring no auxiliary OOD data, classifier fine-tuning, or architectural modifications, MM++ delivers robust performance across distinct architectures for both near- and far-OOD detection.
