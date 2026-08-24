---
title: "Fuzzy-MoE: Interpretable Regime-Conditioned Expert Routing for Non-Stationary Multivariate Time Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20761"
authors: ["Lan Guo, Jie Xiao, Zhao Su, Jun Shen, Haoran Li, Weixia Ma, Qingguo Zhou, Binbin Yong"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 56
guid: "oai:arXiv.org:2608.20761v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.20761v1 Announce Type: new Abstract: In non-stationary multivariate time series, different variables and samples often exhibit heterogeneous latent dynamic states, while existing deep forecasting models usually compress them into a unified end-to-end mapping, leading to suboptimal modeling of time-varying dynamics and limited interpretability regarding which forecasting mechanism is activated under different latent states. To overcome these limitations, we reformulate time series forecasting as a unified framework of latent temporal state identification and interpretable expert routing, and propose Fuzzy-MoE, a fuzzy logic-based dynamic Mixture-of-Experts model. Fuzzy-MoE consists of multiple parallel expert mapping networks and a dual-view fuzzy router. By jointly exploiting local convolutional dynamics and global segmented statistics, the router infers latent temporal states and computes expert activation strengths through learnable Gaussian membership functions, enabling explicit IF-THEN rule-based expert selection. This fine-grained routing strategy allows different variables within the same sequence to activate different experts, effectively capturing heterogeneous temporal dynamics while improving model interpretability. Experimental results on multiple public time series benchmark datasets show that Fuzzy-MoE significantly outperforms mainstream forecasting methods in forecasting accuracy. Moreover, fuzzy memberships and rule activations provide interpretable routing diagnostics, demonstrating the effectiveness of the proposed framework in both forecasting performance and mechanism transparency. Unlike traditional MoE models that use black-box routing, Fuzzy-MoE`s routing is based on clear, interpretable fuzzy rules. This makes the expert selection transparent and traceable.
