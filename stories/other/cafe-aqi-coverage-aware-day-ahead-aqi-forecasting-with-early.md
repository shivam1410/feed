---
title: "CAFE-AQI: Coverage-Aware Day-Ahead AQI Forecasting with Early Warning and Conformal Uncertainty in Bangladesh"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23815"
authors: ["Md Rafid Islam, Rafsan Jany, Rafid Bin Zaman, Mohammad Fahim Islam, Hafiz Abdur Rahman"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23815v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Next-day air quality forecasting often assumes city records are equally complete and independent. However, an audit of a large Bangladesh dataset revealed a sharp coverage expansion after August 2022 and showed that 103 city labels correspond to only 61 unique AQI trajectories. To address these issues, this paper presents CAFE-AQI, a coverage-aware framework for forecasting next-day maximum AQI. It also estimates the probability of Unhealthy-or-worse conditions (AQI >= 151). Data were divided chronologically into training (2022-2023), calibration (2024), and testing (2025). To prevent duplicate records from dominating training and evaluation, identical trajectories were weighted. The framework combines temporal and pollutant features with a five-neighbor spatial context. It also includes a class-balanced warning head and risk-conditional conformal calibration aimed at providing early warnings and prediction intervals. Evaluation on the duplicate-balanced 2025 data gave an MAE of 9.76, an RMSE of 15.04, and an R-squared value of 0.910 for CAFE-AQI. Its MAE was 3.63 AQI lower than persistence (95% CI: 3.49-3.76), with lower errors in each of the 61 trajectory groups. For unhealthy-air warnings, the F1-score was 0.908 and the AUROC was 0.982. The nominal 90% intervals covered 92.09% of observations. When an entire spatial block was excluded from training, the MAE remained 10.66, showing that the lightweight model transferred reasonably well to unseen locations.
