---
title: "From Data Alignment to Parameter Generation: Few-Shot Cross-City Traffic Prediction with Conditional Diffusion"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25592"
authors: ["Shengchun Wang, Yuhang Lin, Tong Li, Pengyuan Zhou, Andy Chi Lok Tai, Wenjie Chen, Zhu Xiao, Zhu Han"]
date: "Sat, 21 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.25592v1"
image: ""
generated: "2026-11-21T19:04:16+05:30"
---

Accurate mobile traffic forecasting is crucial for network service management, supporting proactive capacity provisioning, congestion mitigation, and energy-efficient operation. However, many cities and regions are data-scarce (e.g., newly deployed or poorly instrumented areas), thus making traffic prediction a few-shot learning problem and limiting the practicality of standard data-driven models. Existing cross-city solutions primarily rely on data-space alignment to match traffic distributions between data-rich and data-scarce cities, but such alignment is often brittle under real-world distribution shifts, measurement noise, and city-specific bias. To address these limitations, we propose a Conditional Diffusion-based Parameter Generation (CDPG) framework. Instead of aligning raw data, CDPG learns the conditional distribution of high-performing predictor parameters for source cities and directly generates node-specific model parameters for the target city. To support reliable adaptation for network traffic prediction, CDPG conditions parameter generation on multi-modal spatio-temporal context. Specifically, CDPG captures spatial environment cues by combining satellite imagery with large language model (LLM)-derived semantic descriptions, and summarizes complex temporal behaviors via unsupervised pattern clustering. These contextual components guide CDPG in producing parameters tailored to each base station's operational context, thereby improving robustness under cross-city and cross-region shifts. Extensive experiments on three large-scale datasets show that CDPG consistently outperforms state-of-the-art cross-city few-shot baselines by up to 9.72% on standard forecasting metrics and remains robust for few-shot multi-step prediction. The code is available at https://github.com/LingoodBoy/CDPG.
