---
title: "Do Time Series Foundation Model Benchmarks Hide Regime-Dependent Failures? Evidence from Traffic Speed Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18367"
authors: ["Yingshuo Wang, Xian Sun, Lingdong Kong, Wei Gao, Yanhang Li, Zhichao Fan, Zexin Zhuang"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.18367v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18367v1 Announce Type: new Abstract: Standard benchmarks evaluate time series foundation models (TSFMs) using aggregate metrics, but these can mask severe failures in critical operating regimes. We introduce regime-stratified evaluation and apply it to three TSFMs on two standard traffic speed benchmarks. Traffic exhibits abrupt regime switching between free-flow and congested states, producing bimodal speed distributions during transitions. When we stratify by traffic regime, both accuracy and prediction-interval coverage degrade sharply during transitions: transition-regime MAE reaches 11 mph (versus 3 mph overall), and empirical coverage of 90% prediction intervals drops as low as 55%. These failures are invisible in aggregate metrics because free-flow observations dominate the sample. A simple historical conditional baseline (sampling from per-sensor training distributions) achieves better transition coverage than any TSFM, but has far worse overall accuracy. We propose bimodal mixture augmentation (BMA), a post-hoc method that combines TSFM forecasts with historical distributional knowledge, approaching the historical baseline's transition coverage while preserving the TSFM's accuracy. Our results suggest that TSFM benchmarks should incorporate regime-aware evaluation to surface failures that aggregate metrics hide.
