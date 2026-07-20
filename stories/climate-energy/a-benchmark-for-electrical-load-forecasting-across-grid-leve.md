---
title: "A Benchmark for Electrical Load Forecasting Across Grid Levels: Time-Series Transformers Outperform Established Methods"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15705"
authors: ["Matthias Hertel, Sebastian P\\\"utz, Jonathan Kolar, Benjamin Sch\\\"afer, Ralf Mikut, Veit Hagenmeyer"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.15705v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15705v1 Announce Type: new Abstract: Accurate load forecasting at multiple grid levels is essential for future smart grids, ranging from aggregated control area forecasts for balancing supply and demand to forecasts of individual end-consumer loads for demand-side management and energy management systems. We present a comprehensive benchmark for load forecasting across grid levels, comprising three datasets that represent a transmission system operator control area, low-voltage grid feeders, and individual end consumers. We evaluate ten methods for short-term load forecasting and find that Transformer-based approaches consistently outperform established methods, reducing forecast error by 6.6-10.7 %. To analyze the impact of architectural design, we introduce YAformer, a flexible Transformer architecture that integrates modifications from prior work and is optimized via hyperparameter optimization. However, the standard Transformer achieves superior performance, suggesting that these architectural modifications are not required for accurate load forecasting. We further evaluate the Transformer-based time-series foundation model Chronos-2, which demonstrates competitive zero-shot performance on two datasets but fails to accurately capture special events in the TSO data. Detailed analyses reveal model-specific strengths and weaknesses, and ablation studies highlight the importance of long input contexts, covariates and continuous retraining - aspects that are often overlooked in the time-series forecasting literature.
