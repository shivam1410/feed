---
title: "COMPASS: Cross-modal Observation with Multi-Path Adaptive Stopping and Selection for Early Time Series Classification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27065"
authors: ["Cheng-En Chung, Yujia Wu, Oscar Tai-Yuan Chen, Vincent S. Tseng"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 22
guid: "oai:arXiv.org:2611.27065v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Early time-series classification (ETSC) balances predictive performance against the amount of observed data. In multimodal settings, modality-associated and fused branches may differ in predictive ability at the same observed prefix, motivating joint decisions about when to stop and which branch should provide the final prediction. We propose COMPASS, a two-stage framework that preserves two modality-associated temporal branches and one fusion branch. The first stage combines cross-modal feature exchange and gated fusion with branch-wise supervision at every prefix. The second stage optimizes a shared four-action controller to continue observation or terminate through one of the frozen branches. Experiments on six physiological and wearable datasets compare COMPASS with multimodal adaptations of five ETSC baselines. COMPASS achieves the best average ranks in accuracy-earliness harmonic mean, AUROC, and earliness within this comparison set. At identical learned stopping times, branch selection improves mean accuracy over fusion readout on five of the six datasets, with gains of 2.35 and 2.16 percentage points on ISRUC-Sleep and UCDDB, respectively. To the best of our knowledge, this is the first work on joint stopping and branch selection for multimodal early time series classification.
