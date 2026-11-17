---
title: "Actuarial-Informed Neural Networks: Constrained Deep Learning for Sex-Specific Multi-Population Longevity Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18802"
authors: ["Davide Rindori"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18802v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

We introduce Actuarial-Informed Neural Networks (AINN), a constrained deep learning framework for sex-specific multi-population longevity forecasting that embeds actuarial knowledge into LSTM training through differentiable penalty terms. Applied to a high-longevity 6-country cluster (Switzerland, Sweden, Norway, West Germany, Netherlands, Japan; 1956-2020), the framework is a challenger to the Li-Lee benchmark and unconstrained neural approaches. Our central finding is that monotonicity constraint intensity lambda functions as a continuous governance dial with a quantifiable accuracy-stability trade-off. At lambda = 0.01, 30-year forecast confidence intervals narrow by 6.5% at zero RMSE cost. At lambda = 0.1, they narrow by 25% at only +0.84% RMSE cost. This trade-off is invisible to standard hyperparameter optimizers, which select lambda by minimizing one-step RMSE, the wrong metric for structural constraints in recursive forecasting. The framework adds three contributions: (i) residual-calibrated process noise that eliminates double-counting in the dual uncertainty framework, reducing confidence intervals by 53-60%; (ii) a 5-seed model ensemble with a coefficient of variation of 1.06%; and (iii) a time-varying credibility weight Z(t) = exp(-alpha t) connecting to Buhlmann credibility theory for blending neural and actuarial predictions. A 10-year out-of-sample backtest (trained on 1956-2010, validated against observed HMD life expectancy for 2011-2020) yields a mean absolute error of 0.38 years, with 11 of 12 country x sex combinations within the 90% confidence interval. The model produces regulatory-grade outputs including Solvency Capital Requirements under the Swiss Solvency Test (ES 99.0%: +1.91 years, CHE Male) and Solvency II, reverse stress testing, and model-based stability verification (amplification ratio 1.02x).
