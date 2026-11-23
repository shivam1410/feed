---
title: "Action-Conditioned Spatio-Temporal Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27044"
authors: ["Yutong Xia, Yangyou Liu, Yuxuan Liang, Yuankai Wu, See-Kiong Ng, Roger Zimmermann"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 28
guid: "oai:arXiv.org:2611.27044v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

We study spatio-temporal forecasting in networked systems under specified actions. The challenge is to capture the action's effects without predicting spurious changes in unaffected regions. However, direct supervision and evaluation of these effects require paired futures with and without the action, whereas observational trajectories reveal only the realized future. We introduce PairST, a benchmark comprising six datasets across traffic, power transmission and water distribution, with paired reference and intervened futures simulated from the same system state. These pairs enable separate evaluation of affected-region forecast accuracy and quiet-region response error. We further propose ActionST, which forecasts the intervened future by writing an explicit response onto an intervention-independent reference forecast. Specifically, node-time addressing constructs a query for each response position, a state-conditioned response writer computes candidate responses, and a graph-aware locality gate controls their strength. Experiments on six datasets demonstrate the effectiveness of ActionST at new action targets, with the lowest mean absolute error on five datasets and the best average rank. Our source code and the PairST benchmark are available at https://github.com/yutong-xia/ActionST.
