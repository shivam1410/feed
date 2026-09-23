---
title: "Multi-Term Fourier Graph Neural Network with Sample Relationship Learning for Enhanced Remaining Useful Life Prediction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25179"
authors: ["Ya Song, Laurens Bliek, Yaoxin Wu, Yingqian Zhang"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.25179v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25179v1 Announce Type: new Abstract: Predicting the remaining useful life (RUL) is essential for effective predictive maintenance. Spatio-Temporal Graph Neural Networks (ST-GNNs), which can model both temporal and spatial relationships by representing time series data as a sequence of graphs, have shown exceptional performance in RUL prediction. However, current ST-GNNs face several drawbacks. First, they require domain expertise or significant computational power to establish graph structures prior to deploying GNNs. Second, the models are restricted to capture temporal dependencies within a predefined fixed-size lookback window. This restriction ignores the common issue of varying time series lengths, leading the prediction model to miss short-term or long-term dependencies. Finally, conventional models often fail to capture the inherent relationships between samples generated from adjacent time windows, which are crucial for improving both the accuracy and robustness of predictions. To address the aforementioned issues, we introduce a novel framework called Multi-Term Fourier Graph Neural Network with Sample Relationship Learning (MTFGN-SRL). Rather than treating the sample as a sequence of graphs, we consider it as a single complete graph and utilize a Fourier Graph Neural Network (FGN) to capture the spatio-temporal information in the frequency domain. We propose a multi-term learning module that utilizes multiple lookback windows to generate samples with varying terms, which are then fed into the FGN to enhance the extraction of useful information from the data. Finally, we develop a sample relationship learning module by training a heterogeneous GNN to identify inter-sample relationships, resulting in enhanced accuracy and robustness in predictions. Evaluations on the CMAPSS dataset demonstrate MTFGN-SRL's superior performance over state-of-the-art methods in RUL prediction.
