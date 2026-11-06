---
title: "Scenario Augmentation for Rare Financial Events via Multimodal Latent Diffusion"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07282"
authors: ["Mahdi Arab Loodaricheh, Anita Raja, Indranil SenGupta"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07282v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Extreme market movements are scarce, heterogeneous, and difficult to learn from imbalanced historical data. We study whether generative augmentation can improve the representation and classification of CVaR-labeled rare financial windows while retaining the complementary structure exposed by different financial representations. Each market window is expressed through three aligned modalities: structured market variables, a spatial image transformation, and a sequence of portfolio returns. Separate variational autoencoders map the modalities to compact latent codes, and a class-conditional diffusion model learns their joint latent distribution. Conditional Value-at-Risk (CVaR) provides a risk-aware definition of rare windows and directs generation toward the minority regime. Across four window lengths on U.S. technology equities, the resulting synthetic samples improve fidelity and support relative to tabular diffusion baselines. An XGBoost classifier trained with real and generated samples attains AUCs of 0.953 - 0.960, exceeding both tabular generators and the corresponding real-only baselines. These results show that multimodal latent generation can provide useful synthetic stress scenarios for data-scarce financial risk models.
