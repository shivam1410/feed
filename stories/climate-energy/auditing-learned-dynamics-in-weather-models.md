---
title: "Auditing Learned Dynamics in Weather Models"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25119"
authors: ["Skylar Gu, Christina Last"]
date: "Sat, 21 Nov 2026 00:00:00 -0500"
score: 55
guid: "oai:arXiv.org:2611.25119v1"
image: ""
generated: "2026-11-21T19:04:16+05:30"
---

Learned weather models are experimentally accessible computational systems whose internal representations can be inspected and manipulated. Using sparse autoencoder features from GraphCast, DeepMind's autoregressive weather forecasting model, we test whether causal relevance requires physical semantics, a question that matters for auditing whether AI forecasters used in high-assurance settings rely on reliable mechanisms. We also look at whether physically associated latent directions can be steered to improve extreme-event forecasts, where interventions are applied to the model's internal activations during the rollout. We find that ablating a feature locked to GraphCast's computational mesh increases global geopotential height error despite lacking conventional physical semantics. Second, suppressing convection- and low-level-vorticity-associated features weakens predicted tropical-cyclone deepening (the fall in central pressure during intensification), while amplifying them reduces intensity error, with amplification of convection features through feature scaling achieving a median of 51\% error reduction over seven storms. Together, these results separate interpretable, physical association from causal utility and establish sparse features as experimental coordinates for auditing and intervening on learned weather dynamics.
