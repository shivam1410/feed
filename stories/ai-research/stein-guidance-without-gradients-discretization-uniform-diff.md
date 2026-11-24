---
title: "Stein Guidance without Gradients: Discretization Uniform Diffusion Inference Time Scaling beyond Particle SMC"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28654"
authors: ["Youheng Zhu, Chenyang Wang, Minshuo Chen, Yiping Lu"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.28654v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Reward-guided diffusion requires effective steering and correction of the bias introduced by approximate value functions. A Brownian example shows that SMC with full multinomial resampling at every step can require particle counts to grow linearly with guidance depth to maintain accuracy. We propose Stein Guidance, which combines derivative-free guidance with whole-path independence Metropolis-Hastings correction. Value-weighted selection from centered Gaussian candidates approximates gradient guidance in expectation, using as few as two queries per step. Centering stabilizes the local normalizer estimates, and the same queries yield an explicit path weight for correction. Under uniform value and spatial regularity bounds, we prove superpolynomial decay of finite-grid total variation error in the number of MH updates, with constants that do not grow with guidance depth. The error prefactor tends to zero as the value functions approach exact Doob values and the time grid is refined.
