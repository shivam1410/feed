---
title: "Generative models for simulation based filtering: Formulations and Empirical Comparisons"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16317"
authors: ["Mohammad Al-Jarrah, Wei Deng, Bamdad Hosseini, Amirhossein Taghvaei"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16317v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16317v1 Announce Type: new Abstract: This letter presents a unified formulation and a controlled numerical comparison of generative-model approaches to the nonlinear filtering problem. Under this formulation the analysis step is realized by a transport of the forecast distribution to the posterior, the approaches differing only in how that transport is selected and learned. We derive three new filters, based on stochastic interpolants, their deterministic flow-matching limit, and Schr\"odinger bridges realized through forward--backward SDEs. We develop a two-stage tuning procedure that separates the training of the generative model from its online refinement. The resulting methods are compared against the optimal transport filter (OTF), the Knothe--Rosenblatt filter (KRF), the sequential importance resampling (SIR) particle filter and the ensemble Kalman filter (EnKF), in terms of accuracy, computational time, and sensitivity to ensemble size and state dimension. The results indicate that every generative filter resolves multimodal posteriors that the EnKF and SIR do not, that no single generative framework dominates, the preferred method being set by the available online budget and ensemble size, and that the filters differ in the regularity of the particle trajectories they produce.
