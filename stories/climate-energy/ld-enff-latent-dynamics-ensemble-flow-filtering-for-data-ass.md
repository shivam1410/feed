---
title: "LD-EnFF: Latent-Dynamics Ensemble Flow Filtering for Data Assimilation with Sparse Observations"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04034"
authors: ["Ziyu Tian, Kaichen Shen, Wenbo Hao, Phillip Si, Peng Chen, Wei Zhu"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.04034v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Data assimilation combines model forecasts with noisy, incomplete observations to estimate the evolving state of a dynamical system. Existing methods face two compounding challenges: high-dimensional nonlinear dynamics make repeated forward simulation computationally expensive, while sparse observations provide limited direct information about the full state. To address these challenges, we propose the Latent-Dynamics Ensemble Flow Filter (LD-EnFF), a sequential Bayesian filtering framework that performs both forecast propagation and filtering updates in a compact latent space. LD-EnFF combines a latent dynamics surrogate for ensemble propagation with a variational autoencoder (VAE)-based observation model that evaluates a state-dependent observation likelihood in latent space. At each assimilation step, an ensemble filtering update based on flow matching uses the forecast ensemble and this likelihood to generate posterior samples, jointly updating latent states and uncertain parameters. This design avoids repeated full-state simulation during forecasting and full-field reconstruction during likelihood evaluation. LD-EnFF substantially outperforms a broad range of data assimilation algorithms on benchmarks spanning Kolmogorov flow, tsunami propagation, and atmospheric modeling, all featuring complex dynamics and sparse, noisy observations.
