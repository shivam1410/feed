---
title: "Generative Distributionally Robust Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.24983"
authors: ["Ziwei Zhang, Jonathan Yu-Meng Li, Zhihao Jin"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.24983v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.24983v1 Announce Type: new Abstract: Generative models are increasingly adopted in distributionally robust optimization (DRO), but existing approaches trade off model compatibility and adversarial structure: methods that accept arbitrary samplers do not restrict worst-case laws to a generator family, while generator-parameterized adversaries rely on model-specific access such as likelihoods, scores, or training data. We propose Generative Distributionally Robust Optimization (GDRO), a principled framework that accepts any sampleable conditional generator as the nominal model and restricts worst-case laws to a chosen conditional generator family. The key is the sampler-Sinkhorn pairing: samplers represent the conditional laws exactly, while Sinkhorn divergence compares their induced distributions without likelihood access and can be estimated from samples alone. The resulting population problem admits a direct finite-sample approximation and differentiable primal-dual implementation at the active decision context. For Lipschitz losses, the population Sinkhorn radius bounds downstream degradation. Across explicit and implicit generators, our method reduces rare-context inventory regret by 60% and SocialGAN navigation collisions by 50% relative to nominal decisions.
