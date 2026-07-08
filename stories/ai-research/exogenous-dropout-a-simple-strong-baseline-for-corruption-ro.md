---
title: "Exogenous Dropout: A Simple, Strong Baseline for Corruption-Robust Time Series Forecasting with Covariates"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05452"
authors: ["Hao Hu, Xue-shan Ai"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 54
guid: "oai:arXiv.org:2607.05452v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05452v1 Announce Type: new Abstract: Time series forecasters that use exogenous covariates are fragile in deployment: when those covariates are noised, temporally misaligned, or missing, strong exogenous-fusion and exogenous-adapted models can degrade far above the endogenous-only floor. We study whether such robustness requires specialized architectures, or whether it can be obtained through a simple training intervention. We propose exogenous dropout, a model-agnostic method that randomly zeros whole exogenous channels during training. Across electricity-price forecasting, reservoir hydrology, and meteorology, exogenous dropout substantially improves robustness under Gaussian noise, temporal misalignment, and fully missing channels, while preserving clean accuracy. Applied to a dual-correlation network, it yields the most robust model in our experiments, outperforming a deliberately strong bounded architectural foil, BoundEx, which combines a learnable gate, a fallback residual to the endogenous backbone, and per-channel exogenous FiLM modulation. Architecture-by-dropout ablations, gate-behavior diagnostics, and a representation-level bound show that explicit architectural boundedness is not necessary for this robustness: an unbounded model trained with exogenous dropout is more robust than the bounded model in every domain. We release a corruption-robustness benchmark and recommend exogenous dropout as a simple, strong baseline for future work on time series forecasting with covariates.
