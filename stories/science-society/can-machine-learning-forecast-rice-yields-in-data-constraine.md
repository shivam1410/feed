---
title: "Can Machine Learning Forecast Rice Yields in Data-Constrained Settings? Satellite Climate Data, National Crop Statistics, and Lessons from Sierra Leone"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13959"
authors: ["Ibrahim Denis Fofanah"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2606.13959v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13959v1 Announce Type: new Abstract: Sierra Leone's agriculture operates with almost no data-driven decision support, and no published machine learning study has examined the country's crop yields. We ask whether rice yield can be forecast from data Sierra Leone currently has. Using 25 years of FAOSTAT production data (2000-2024) for nine major crops, we train XGBoost, Gradient Boosting, and Random Forest under a strict anti-leakage protocol with expanding-window walk-forward evaluation across seven held-out years, benchmarked against naive persistence. No model trained on crop statistics alone outperforms persistence. Augmenting with free satellite climate data (CHIRPS rainfall, NASA POWER temperature) reverses this result: a climate-only XGBoost reduces forecast error by one third (RMSE 284 vs 428 kg/ha), a gain that holds for a linear model and is robust to excluding the anomalous 2018 season. Early-season (May-June) rainfall is the dominant predictor, implying seasonal yield risk is observable months before harvest. No model anticipated the 2018 collapse, whose origins were institutional rather than climatic. We translate the findings into policy recommendations for Sierra Leone's Feed Salone Strategy, with a fully open-source pipeline.
