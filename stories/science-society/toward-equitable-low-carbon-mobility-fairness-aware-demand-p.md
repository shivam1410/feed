---
title: "Toward Equitable Low-Carbon Mobility: Fairness-Aware Demand Prediction for Expanding Bike-Sharing Systems"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26451"
authors: ["Man Luo, Yixuan Zhao"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.26451v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26451v1 Announce Type: new Abstract: Bike-sharing systems are an important component of low-carbon urban mobility, but continued expansion creates challenges in both cold-start prediction and equitable resource allocation. Newly deployed stations lack historical ridership records, causing a mismatch between training and inference for graph-based models on evolving networks. Historical demand may also encode structural inequalities, as lower ridership in low-income neighborhoods can reflect limited infrastructure access rather than weak latent demand. Models trained directly on such data may therefore reinforce existing mobility disparities. We propose FairGIN, a fairness-aware graph neural network for demand prediction in expanding bike-sharing systems. FairGIN integrates three components. Expansion-Simulated Increment Training stochastically simulates network expansion during training to reduce the cold-start distribution gap. Attention-Based Knowledge Transfer combines station-adaptive temperature scaling with orthogonal embedding alignment to transfer representations from data-rich existing stations to data-sparse new stations. Fairness-Aware Optimization introduces income-stratified regularization and an equity-calibrated deployment score to support more inclusive station placement. Experiments on NYC and Seattle demonstrate that FairGIN achieves state-of-the-art predictive accuracy across diverse expansion scenarios while substantially reducing income-based disparities without compromising overall system efficiency.
