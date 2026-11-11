---
title: "Train High, Ship Low: Efficient LoRA Synchronization for Distributed On-Policy Post-Training"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13306"
authors: ["Shenghui Li, Li Ju, Thiemo Voigt"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13306v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Transmitting LoRA adapters to rollout workers can bottleneck distributed on-policy post-training over bandwidth-constrained networks. Lowering the training rank may limit the capacity a workload needs, while adaptive optimizer updates are difficult to compress. Rollout workers can instead reconstruct updates from gradients by maintaining replicated optimizer states. We introduce HiLo, a compressor-agnostic framework that replaces parameter transmission with compressed gradient dissemination and local optimizer replay. By applying the same decoded gradients, the learner and workers maintain consistent policy states at the same version under reproducible execution. We further develop Spar, a budget-aware gradient compressor that combines spectral truncation, adaptive rank allocation and error feedback to decouple training rank from communication cost. Experiments across on-policy distillation and reward-guided post-training show that HiLo with Spar maintains learning quality close to full synchronization while transmitting as little as 1.6% of the adapter bytes, and accelerates end-to-end updates by up to $2.2\times$ under bandwidth constraints.
