---
title: "A Predict-then-Correct Loop Based on Few-Shot Continuous Contextual Bandit for Demand Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16354"
authors: ["Zhiwei Lei, Benedict Jun Ma, Ilya Jackson"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2607.16354v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16354v1 Announce Type: new Abstract: Retail demand forecasting remains difficult when demand shifts faster than static forecasting models can be retrained, especially in early demand cycles where newly observed labels are sparse. To address this, this study aims to improve adaptive retail forecasting by proposing a predict-then-correct (PtC) framework that retains a first-stage machine learning (ML) forecast and applies a few-shot continuous contextual bandit correction policy with similar-SKUs augmentation and top-p masked updating. Across Walmart retail data and an exclusive beverage dataset, PtC delivers statistically significant reductions in MAPE, MAE, and RMSE across stable & high volume, stable & low volume, and erratic & intermittent demand patterns, improves average RMSE by 9.52% over the ML-only baseline in the ablation study, and yields lower inventory costs than base-stock, proximal policy optimization, and soft actor-critic policies under the tested lead-time settings. These findings show that online forecast correction can bridge offline demand learning and real-time retail decision-making by adapting to sparse feedback without fully retraining the base forecasting model.
