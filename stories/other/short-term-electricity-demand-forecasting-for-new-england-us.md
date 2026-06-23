---
title: "Short-Term Electricity Demand Forecasting for New England Using a Hybrid Transformer-XGBoost Framework with Weather, Calendar, and COVID-19 Indicators"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20918"
authors: ["Reza Ghanavati, Behrooz Mosallaei"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20918v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20918v1 Announce Type: new Abstract: Accurate short-term electricity demand forecasting is critical for reliable power system operation, energy market planning, and infrastructure optimization. This paper presents a hybrid framework combining a Transformer encoder for temporal feature extraction with gradient-boosted decision trees (XGBoost) for daily electricity demand forecasting across New England. The framework integrates meteorological observations from six cities spanning all six New England states, calendar and holiday effects, autoregressive demand lags, and COVID-19 epidemiological variables. Hyperparameter optimization uses Optuna with a multivariate Tree-structured Parzen Estimator over 500 trials, with a leakage-free 70/15/15 chronological train-validation-test split. The hybrid model achieves a test RMSE of 8,876 MWh, MAPE of 2.05%, and R-squared of 0.906. A tabular-only XGBoost baseline achieves RMSE of 9,304 MWh, MAPE of 2.21%, and R-squared of 0.896. A Diebold-Mariano test (Harvey-Leybourne-Newbold correction) confirms the 427.7 MWh difference is statistically indistinguishable from noise (DM = -1.126, p = 0.262). An ablation study reveals COVID-19 features improved training accuracy but had asymmetric test effects: removal degraded hybrid RMSE by 3.2% while marginally improving XGBoost-only by 1.2%. A SHAP temporal analysis shows 5 of 8 COVID features rank higher on the post-acute test set than during pandemic-active training, indicating the model over-applies learned pandemic patterns. These findings establish temporal validity decay as a central mechanism: behavioral disruptions drove a strong COVID-demand signal during 2020-2021, but adaptation was complete by mid-2022, leaving epidemiological features as noise amplifying overfitting to stale pandemic patterns.
