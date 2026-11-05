---
title: "Sampling Interventional Distributions with Orthogonal MMD Flow"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03962"
authors: ["Bariscan Bozkurt, Hugh Dance, Zonghao Chen, Alexandre Galashov, Arthur Gretton, Houssam Zenati"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03962v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Many causal inference problems require sampling from interventional outcome distributions rather than estimating low-dimensional summaries. Existing approaches often rely on fitting generative models of the target distribution together with additional nuisance components, which can be computationally demanding for high-dimensional outcomes. We propose Interventional Maximum Mean Discrepancy Flow (IMMD-Flow), a particle-based method that instead represents the target interventional distribution through its kernel mean embedding. This kernel embedding admits a doubly robust, Neyman-orthogonal estimator with finite-sample guarantees and can be efficiently reused to sample from the interventional distribution via MMD gradient flow. IMMD-Flow accommodates both hard and soft interventions, admits theoretical guarantees for estimation and particle approximation, and extends to high-dimensional image outcomes through frozen encoders. Across image-based benchmarks, IMMD-Flow matches or improves upon state-of-the-art generative approaches while showing significant speed advantages.
