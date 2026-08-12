---
title: "CRHT: A Continuous Regression Hybrid Transformer for Vessel Trajectory Prediction with Online Cluster Sampling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10256"
authors: ["Alexander Schi{\\o}tz, Bertram Hage, Christian Rand, Felix Thomsen, Peder Heiselberg"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.10256v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

arXiv:2608.10256v1 Announce Type: new Abstract: Accurate vessel trajectory prediction is critical for maritime safety and anomaly detection, yet existing models often struggle with geographic bias and navigational realism. We propose the Continuous Regression Hybrid Transformer (CRHT), a deep learning framework designed to forecast vessel motion using Automatic Identification System (AIS) data. To mitigate spatial data imbalance, we introduce an online K-means cluster sampling strategy that ensures diverse exposure to rare maneuvers during training. Our hybrid architecture integrates 1D convolutional layers for local kinematic feature extraction with a multi-head attention mechanism for global temporal context. CRHT demonstrates superior performance in short-term forecasting, achieving the lowest errors at the 1-hour horizon. The results demonstrate that while discrete models provide high navigational stability over long horizons, CRHT offers an optimal balance of precision and maneuver tracking for real-time maritime surveillance.
