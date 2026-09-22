---
title: "Gaussian Process Decorrelation for Spatiotemporal Deep Learning-Based Snow Water Equivalent Prediction"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22182"
authors: ["Colin Fenster, Adrienne Marshall, Soutir Bandyopadhyay, Daniel McKenzie"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.22182v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22182v1 Announce Type: new Abstract: In the Western United States, snowmelt is essential to the agricultural industry in addition to being a key source of municipal drinking water. Consequently, accurate snowpack forecasting is critical for water policy and management. Automated Snow Telemetry (SNOTEL) stations provide accurate daily measurements of snow water equivalent (SWE) that exhibit strong correlations in space and in time. We tackle the problem of predicting future SWE values across the SNOTEL network. Specifically, we use a Gaussian Process-based linear transformation to remove spatial correlations before training a long short-term memory (LSTM) neural network on the decorrelated SWE data. This approach allows the LSTM to learn a clean temporal signal at each station. We show that this separation of spatial and temporal components yields better predictive success than multiple baseline models. Furthermore, we incorporate conformal prediction to quantify uncertainty in the resulting SWE forecasts, providing a distribution-free approach to illustrate a potential framework for establishing predictive intervals for spatiotemporal data. Together, accurate point forecasts and distribution-free uncertainty quantification provide a framework for SWE accumulation forecasting on subseasonal scales or projecting SWE with future data while motivating and supporting future work in predicting a large-scale, spatiotemporally complete SWE map.
