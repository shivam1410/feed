---
title: "DBCM: Dual-Branch Calibration Module for Test-Time Adaptation in Time Series Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.32071"
authors: ["Jaebyeong Jeon, Kunwoo Kang, Sang Yup Lee, Kibok Lee"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.32071v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Non-stationarity induces test-time distribution shifts in time series forecasting (TSF), resulting in forecast residuals between predictions and the corresponding ground truth. Recent works on test-time adaptation for TSF address this by introducing lightweight calibration modules around frozen forecasters, updated using observations that become incrementally available at test time. Existing approaches typically employ channel-wise adapters, implicitly assuming that forecast residuals are inherently channel-specific. However, we observe that forecast residuals often exhibit substantial shared structure across channels, suggesting that fully independent channel-wise parameterization may be redundant. Motivated by this observation, we propose the Dual-Branch Calibration Module (DBCM), which shares adaptation capacity across channels through a shared adapter while retaining limited channel-specific flexibility through a low-rank channel-wise adapter, further enhanced by channel mixing and nonlinear gated modulation. Extensive experiments show that DBCM consistently outperforms prior methods across diverse datasets, horizons, and backbones.
