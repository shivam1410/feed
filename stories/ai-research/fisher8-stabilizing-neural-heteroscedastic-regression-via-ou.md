---
title: "Fisher8: Stabilizing Neural Heteroscedastic Regression via Output-Layer Fisher Geometry"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10374"
authors: ["Sumedh Vemuganti, Nickvash Kani"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.10374v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

arXiv:2608.10374v1 Announce Type: new Abstract: Training neural networks to jointly predict mean and uncertainty estimates from noisy observations can be unstable, prompting a series of independent stabilization efforts. We argue that these interventions highlight a common underlying issue where gradient steps are poorly aligned with the geometry of the loss landscape. To better align updates with local curvature, we derive Fisher8, an output-layer gradient correction that reorients and rescales updates using Fisher geometry rather than Euclidean geometry. Unlike past stabilizers, Fisher8 introduces no data-dependent hyperparameters beyond learning rate and admits an approximate KL trust radius between successive predictive distributions. We show that prior stabilizers converge on overlapping components of this geometric correction. Across multidimensional regression and representation-learning tasks, Fisher8 obtains superior likelihood--error tradeoffs, predicts calibrated uncertainty estimates, and learns rich uncertainty-aware feature spaces.
