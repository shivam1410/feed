---
title: "Systematic Evaluation of TabPFN-TS for Zero-Shot Probabilistic Heat Load Forecasting in District Heating Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20024"
authors: ["Ben Spoek, Karim K. Ben Hicham, Kai Derzsi, Philipp Althaus, Alexander Mitsos, Dirk M\\\"uller"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.20024v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.20024v1 Announce Type: new Abstract: District heating energy hubs require reliable heat load forecasts for efficient operational scheduling. Conventional forecasting workflows train system-specific models on historical data, which can become burdensome when networks change through new consumers, retrofits, or changing operating regimes. Zero-shot time-series foundation models and in-context forecasting offer a promising alternative: they can adapt at inference time from recent observations rather than by repeated retraining. This study systematically evaluates TabPFN-TS against time-series foundation models and trained machine-learning baselines for probabilistic heat load forecasting in district heating networks. Unlike foundation models pretrained on large collections of real time series, TabPFN-TS relies on synthetic pretraining data, which avoids direct pretraining-test overlap but raises the question of whether the learned prior captures district heating dynamics. We analyze covariate choice, context length, temporal resolution, and prediction horizon on representative operating weeks, validate the selected configuration over a full year, and test transferability on a second network. The results identify hourly 24-hour forecasting with a 12-week rolling context and ambient temperature as a parsimonious high-performing configuration; longer context windows do not improve accuracy. TabPFN-TS remains close to Chronos-2 in deterministic accuracy, reaching CVRMSE values of 13.06% versus 12.48% on the main dataset, and lies within the critical-difference threshold in the daily-rank comparison. Although Chronos-2 achieves the lowest aggregate full-year error, TabPFN-TS shows better empirical calibration. Finally, the diagnostic findings motivate a Multi-Resolution Residual-Correction Forecaster that combines a low-frequency Base Forecaster with a short-horizon Residual Forecaster to improve longer-horizon planning accuracy.
