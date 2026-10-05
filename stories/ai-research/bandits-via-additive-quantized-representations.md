---
title: "Bandits via Additive Quantized Representations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02440"
authors: ["Ami Tavory, Noam Touitou, Tal Sarig, Frank Cheng, Ido Guy"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.02440v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Contextual bandits require balancing nonlinear reward modeling with online efficiency. Tree ensembles and neural methods capture nonlinearities but require periodic retraining and large replay buffers. Linear models update efficiently per observation with O(1) memory, but are fundamentally restricted to linear reward structures. We propose Residual Quantization (RQ) as a representation layer to bridge this gap. An offline-trained RQ codebook maps continuous contexts into discrete centroid assignments across multiple levels, set dynamically through a shadow mechanism. This enables a spectrum of additive bandit algorithms that achieve nonlinear expressivity with strictly bounded memory. Across 13 datasets, RQ variants beat their non-RQ counterparts on 11 of 13 datasets, often by wide margins, while matching doubling-retrain XGBoost and neural baselines using up to 1000 times less memory.
