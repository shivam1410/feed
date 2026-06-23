---
title: "TF-SNO: Time-Frequency Gated Spectral Neural Operators for Learning Non-Stationary Partial Differential Equations"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21189"
authors: ["Yitian Zhou, Chaoning Zhang, Zhenzhen Huang, Haoxuan Yu, Jiaquan Zhang, Yiran Li, Fan Mo, Kuien Liu, Jie Zou, Caiyan Qin, Yang Yang"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21189v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21189v1 Announce Type: new Abstract: Non-stationary partial differential equations (PDEs) arise throughout scientific computing, where the dominant frequency content and energy distribution can drift over time. While efficient in PDE solving, many spectral neural operators apply a shared spectral response across rollout stages, leading to mismatch with time-varying spectra in non-stationary systems. To address this issue, we propose Time-Frequency Gated Spectral Neural Operator (TF-SNO), a state-adaptive framework with learnable time-frequency gating inside spectral blocks. TF-SNO extracts compact frequency-domain and physical-space statistics from the current state to generate modulation coefficients, enabling the spectral response to evolve with the dynamics. TF-SNO learns temporal variation implicitly from the evolving state without introducing an explicit time dimension or time embedding, keeping the modeling complexity low. We further embed the adaptive operator blocks to accurately capture the multi-scale features, thereby improving long-horizon stability. Experiments on six non-stationary PDE benchmarks in 1D and 2D demonstrate that TF-SNO significantly reduces prediction errors and improves robustness compared to strong baselines, with particularly clear gains in long rollout, suggesting the effectiveness of state-dependent spectral adaptation in modeling non-stationary physical systems.
