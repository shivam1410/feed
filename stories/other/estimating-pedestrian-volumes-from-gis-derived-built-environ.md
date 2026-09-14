---
title: "Estimating Pedestrian Volumes from GIS-Derived Built-Environment Features: A Machine Learning Framework"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12173"
authors: ["Bahareh Golchin, Banafsheh Rekabdar, Sirisha Kothuri, Joseph Broach"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12173v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12173v1 Announce Type: new Abstract: Transportation agencies need pedestrian volume estimates across entire road networks to prioritize safety investments, yet manual counts are expensive and cover only a small share of intersections. We present a machine learning pipeline that predicts 2-hour PM peak pedestrian volume at 101 urban intersections in Portland, Oregon, from built-environment, land-use, and street-network features drawn from open GIS data. Starting from the Negative Binomial GLM used in practice, we add feature selection, count-aware gradient boosting, and repeated cross-validation, selecting one configuration by a combined rank over RMSE, MAPE, and SMAPE across four cross-validation strategies. The winner, a histogram-based gradient boosting model with Poisson loss and L1 Lasso feature selection, reduces cross-validated RMSE by 12% over the GLM baseline (89.8 to 78.7) and holdout RMSE by 19% (108.0 to 87.9). Code is released on GitHub.
