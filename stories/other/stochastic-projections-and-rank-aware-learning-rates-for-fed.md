---
title: "Stochastic Projections and Rank-Aware Learning Rates for Federated LoRA"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13331"
authors: ["Saber Malekmohammadi, Kevin Kuo, Virginia Smith, Golnoosh Farnadi"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13331v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Fine-tuning large-scale foundation models across resource-constrained, distributed clients presents significant computational and communication challenges. While merging Low-Rank Adaptation (LoRA) with Federated Learning (FL) enables rank-based flexibility, the interdependence of the adaptation matrices ($\mathbf{A}$ and $\mathbf{B}$) often complicates optimization. In this work, we theoretically demonstrate that LoRA fine-tuning with Gaussian initialization and a frozen $\mathbf{A}$ matrix acts as a stochastic approximation of full fine-tuning, where batch gradients are subject to a random, rank-dependent perturbation. Motivated by this insight, we propose freezing and periodically resampling $\mathbf{A}$ matrices at the client level. This strategy decouples the $\mathbf{A}$ and $\mathbf{B}$ gradients, diminishes LoRA low-rank constraints and reduces both computational and uplink communication overheads by 50\%, allowing for the reallocation of resources toward higher adaptation ranks. Furthermore, we show that in this frozen-$\mathbf{A}$ regime, the adaptation rank $r$ directly governs the signal-to-noise ratio (SNR) of the perturbed gradients. Specifically, we find that the SNR increases linearly with $r$, implying that clients' learning rates must be dynamically scaled with their adaptation ranks for higher utility. Building on these foundations, we introduce SPRA-LoRA (Stochastic Projection Rank-Aware LoRA), a federated rank-aware fine-tuning strategy that utilizes frozen, resampled $\mathbf{A}$ matrices and rank-dependent learning rates for clients. We also prove its convergence with heterogeneous client resources. Our experiments across benchmark datasets demonstrate that SPRA-LoRA consistently outperforms state-of-the-art baselines with half the overhead on clients.
