---
title: "Score-based Outlier Generation via Controlling the Radon-Nikodym Derivative"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12113"
authors: ["Amartya Mukherjee, Tristan Milne, Kry Yik-Chau Lui, Stephanie Hazlewood, Jun Liu"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12113v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12113v1 Announce Type: new Abstract: Outliers are important for stress-testing algorithms and understanding system behaviour under rare conditions. Despite being commonly described as low-likelihood events, existing generative approaches rarely control likelihood explicitly. In this work, we introduce a measure-theoretic notion of outliers based on the distribution of log-likelihood values, which is guaranteed to assign higher probability mass to low-likelihood events with a specifiable magnitude. Building on this formulation, we derive how likelihood reweighting modifies the diffusion score and use this relation to motivate a controlled modification of the reverse-time dynamics. In particular, likelihood reweighting implies a scaling of the score function with a control term derived from the Radon-Nikodym derivative of the likelihood distributions. Correspondingly, the updated score function can be obtained with no retraining of the diffusion model. We exploit the Ornstein-Uhlenbeck semigroup underlying diffusion models to motivate an exponentially interpolated controller which approximates the true control. Experiments demonstrate controlled generation of low-likelihood samples while remaining consistent with the data geometry.
