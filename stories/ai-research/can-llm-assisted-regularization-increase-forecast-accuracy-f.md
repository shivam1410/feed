---
title: "Can LLM-assisted regularization increase forecast accuracy for migration flows in low data regimes?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07208"
authors: ["Nathaniel T. Hindman, Fabricio Murai"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.07208v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Predicting migration flows remains a significant challenge for traditional gravity-based forecasting models, which primarily rely on structured socio-economic indicators such as economic disparity, political stability, and geographic distance. This work investigates whether Large Language Models (LLMs) can improve migration forecasting by extracting contextual migration-related signals from news articles and incorporating them into a weighted Lasso forecasting framework through feature-specific regularization penalties. The proposed framework uses hierarchical LLM inference pipelines to classify migration-related push--pull signals from news data and evaluates the resulting forecasting performance across multiple migration corridors between November 2021 and November 2022, including Mexico--United States, Ukraine--Poland, and Syria--Turkey. Experimental results showed mixed performance across migration corridors and modeling strategies, and no single regularization approach consistently outperformed the others across all experiments. The best-performing Mexico configuration, which consisted of a gravity-based model augmented with the proposed push--pull ratios, achieved a Mean Absolute Percentage Error (MAPE) of 17.15%, while the strongest Syria configuration achieved a MAPE of 29.29% using Direct LLM-Lasso. For Ukraine, the best-performing configuration used LLM-Assisted Regularization (AR) and achieved a MAPE of 41.05%. Overall, the results suggest that contextual article-derived features and LLM-guided regularization can improve migration forecasting under certain conditions, although migration corridor characteristics, article volume, and hyperparameter configuration strongly influenced performance.
