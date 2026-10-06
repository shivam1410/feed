---
title: "Selective Backpropagation for Efficient Few-Shot Class-Incremental Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04003"
authors: ["Eeham Khan, Abdulmoumen Al-Atrash, Ali Ayub"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.04003v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Few-Shot Class-Incremental Learning (FSCIL) requires models to continuously learn new classes from limited samples while retaining prior knowledge, under strict constraints on compute and memory. Existing approaches lie along a difficult trade-off: simple fine-tuning is computationally efficient but suffers from catastrophic forgetting, replay-based methods mitigate forgetting at the cost of substantial compute and memory, and exemplar-free methods often reduce forgetting by freezing most of the backbone, improving efficiency at the expense of adaptability. We propose Selective Backpropagation (SBP), a deterministic parameter budgeting framework that bridges this gap. SBP restricts gradient updates to a pre-allocated subset of network parameters, freezing past knowledge and preserving unbiased capacity for future learning, enabling rapid adaptation without costly mask optimization. We show that SBP achieves strong performance across standard FSCIL benchmarks while requiring training time close to that of naive fine-tuning and substantially lower training time than prior SOTA methods. Crucially, our experiments expose a limitation of standard FSCIL evaluation: performance on short, distribution-consistent benchmarks does not necessarily predict behavior under distribution shift or over substantially longer learning horizons. We therefore evaluate FSCIL methods in cross-domain settings and over an 80-session ImageNet-1K stream. SBP remains strong across these regimes while maintaining low training cost, providing a favorable stability-plasticity-efficiency trade-off. Our code is available at https://github.com/PaInt-Lab/sbp-main-public.
