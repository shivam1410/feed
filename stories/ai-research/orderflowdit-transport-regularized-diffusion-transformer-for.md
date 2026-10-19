---
title: "OrderFlowDiT: Transport-Regularized Diffusion Transformer for Probabilistic Limit-Order Supply Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22727"
authors: ["Jung Hun Phee, Tucker Balch"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.22727v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

We study the conditional distribution of limit-order volume submitted over the next five minutes, given the current order book and recent order flow. The task requires capturing price placement, total volume, and predictive uncertainty jointly. Coordinate-wise diffusion losses do not explicitly account for price displacement, while normalizing fields to unit mass removes information about total volume. Agreement on selected summary statistics also does not establish fidelity to the joint field distribution. We introduce OrderFlowDiT, a conditional Diffusion Transformer for unnormalized bid and ask volume-at-price fields, trained with an unbalanced optimal-transport (UOT) auxiliary loss. We also develop a full-field evaluation framework that combines a transport cost sensitive to price placement and total volume with proper scoring rules and calibration diagnostics. In the primary comparison on 1950 validation conditions across 30 U.S. equities, adding UOT reduces full-field transport cost by 45.8% and the transport energy score by 26.1% relative to training with mean squared error alone. Both measures improve for every stock. These findings support incorporating price geometry and volume into generative modeling, with field accuracy and predictive uncertainty evaluated together.
