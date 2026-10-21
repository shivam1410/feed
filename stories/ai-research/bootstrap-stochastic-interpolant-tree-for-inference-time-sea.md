---
title: "Bootstrap Stochastic Interpolant Tree for Inference-time Search Under Sparse Reward"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24185"
authors: ["Binglin Ji, Anindya Sarkar, Yevgeniy Vorobeychik"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.24185v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Tree-based samplers offer a compelling alternative for scalable inference-time search, bypassing the per-step reward and gradient dependencies that introduce systematic bias into SMC-style frameworks. Despite this advantage, contemporary tree samplers fail to achieve broad exploration. Their reliance on learned, DDPM-like transitions inherently couples neighbor states in a trajectory, thereby restricting child-parent feature divergence in the tree sampler. Consequently, these samplers suffer from restricted coverage of the target marginal distribution, severely hindering the exploration critical for efficient search under sparse reward. To overcome these limitations, we introduce a simple yet effective Bootstrap Stochastic Interpolant Tree (BSIT) sampler that decouples child node generation from explicit parent dependencies. By expanding the degrees of freedom during child node sampling, BSIT encourages diverse trajectory rollouts and unlocks broader path-space diversity-the exact catalyst needed for efficient exploration. Crucially, we show that BSIT's improved exploration accelerates convergence to the target distribution while achieving broader distributional coverage than samplers that rely on DDPM-like transitions for child-node generation, all without incurring additional function evaluations or reward feedback, thereby providing a highly efficient basis for rare target search. Extensive experiments across diverse search settings, including rare-species discovery and target-aligned molecule generation tasks, demonstrate BSIT's superior search efficiency over the baselines.
