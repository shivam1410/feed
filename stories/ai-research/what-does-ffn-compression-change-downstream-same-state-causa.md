---
title: "What does FFN compression change downstream? Same-state causal restoration in diffusion language models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31685"
authors: ["Shaurya Omar"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.31685v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Diffusion language models (DLMs) enable flexible, parallel generation, but their iterative denoising remains computationally expensive, motivating increasingly aggressive compression. Existing compression objectives largely measure how well compressed computation approximates the original locally, but local error does not reveal which removed computations actually matter to the downstream denoising trajectory. We introduce Same-State Causal Restoration (SSR), which restores the original FFN on the exact current input reached by the compressed model and measures how the resulting trajectory changes. To our knowledge, this is the first direct measurement of the same-current-input closed-loop effect of removed FFN computation in DLM compression. Across LLaDA-8B-Instruct and Dream-v0-Instruct-7B, compressed-side state ranks this downstream effect substantially better than local NMSE at fixed denoising phase, while controlled interventions show that correction structure matters beyond magnitude. Using task-label-free calibration, SSR freezes a single restoration window for held-out inference. Under aggressive LLaDA compression, restoring only four transitions recovers 89.9% of the lost accuracy while retaining an estimated 36.8% whole-model MAC saving and outperforming an equal-budget local-error baseline. Dream further shows that restoring dense behavior and repairing the final task are distinct outcomes.
