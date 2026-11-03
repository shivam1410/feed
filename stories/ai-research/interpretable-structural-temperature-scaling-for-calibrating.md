---
title: "Interpretable structural temperature scaling for calibrating graph neural networks and point-cloud segmentation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00175"
authors: ["Chenyi Huang"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 38
guid: "oai:arXiv.org:2611.00175v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Graph-aware calibrators make graph neural networks (GNNs) more trustworthy by predicting a temperature for each node, usually with auxiliary networks whose decisions are hard to inspect. We propose Interpretable Structural Temperature Scaling (ISTS), a twelve-parameter linear model that sets each node's temperature from named descriptors of its confidence, neighbourhood and closeness to labelled nodes, so every temperature traces back to descriptor contributions. ISTS preserves predictions, and cross-validated regularisation lets the calibration data decide how far the model departs from temperature scaling (TS). Its explanations are faithful at the level of node groups: on test nodes, ISTS softens groups that a global temperature leaves over-confident and sharpens under-confident ones (Spearman correlation 0.67 over 246 groups). On seven graphs with two backbones and eleven baselines, ISTS has the best average rank in negative log-likelihood (NLL) and Brier score and lowers NLL relative to TS by 1.8%, more than twice the gain of an identically fitted entropy-based temperature. It ranked first again on four held-out graphs under a protocol fixed in advance. From about 100 calibration nodes on, ISTS is a cheap and inspectable choice, and on point-cloud segmentation it significantly improves NLL, Brier score and the ranking of points for rejection.
