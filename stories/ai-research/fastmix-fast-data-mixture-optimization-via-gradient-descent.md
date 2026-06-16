---
title: "FastMix: Fast Data Mixture Optimization via Gradient Descent"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14971"
authors: ["Haoru Tan, Sitong Wu, Yanfeng Chen, Jun Xia, Ruobing Xie, Bin Xia, Xingwu Sun, Xiaojuan Qi"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.14971v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.14971v1 Announce Type: new Abstract: While large and diverse datasets have driven recent advances in large models, identifying the optimal data mixture for pre-training and post-training remains a significant open problem. We address this challenge with FASTMIX, a novel framework that automates data mixture discovery while training only a single proxy model. Instead of relying on predefined heuristics or resource-intensive simulations, FASTMIX jointly optimizes mixture coefficients and model parameters, substantially improving efficiency and scalability over prior approaches. At the core of FASTMIX is a reformulation of mixture selection as a bilevel optimization problem. Under this reformulation, we show that optimizing mixture ratios is mathematically equivalent to assigning per-source loss weights under uniform source sampling. This embeds the mixture coefficients directly into the differentiable iterative optimization objective, enabling efficient, gradient-based optimization of both mixture and model. To solve the optimization problem, FASTMIX implements an approximate iterative optimization procedure, alternating between (i) updating model parameters on data sampled according to current mixture ratios (inner loop) and (ii) updating mixture ratios based on validation feedback (outer loop). Across pre- and post-training, FASTMIX outperforms baselines while drastically reducing search cost. Code (https://github.com/hrtan/fastmix)
