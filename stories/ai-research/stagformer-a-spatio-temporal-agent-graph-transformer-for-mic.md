---
title: "STAGformer: A Spatio-temporal Agent Graph Transformer for Micro Mobility Demand Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06614"
authors: ["Ye Zihao"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2607.06614v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06614v1 Announce Type: new Abstract: Accurate station-level demand forecasting is essential for the efficient operation of bike-sharing systems, yet it remains challenging due to complex spatio-temporal dependencies and the large scale of urban networks. This paper presents STAGformer, a Spatio-Temporal Agent Graph Transformer that achieves efficient global modeling with linear computational complexity. The model introduces a two-step agent attention mechanism, where a small set of learnable spatial and temporal agent tokens first aggregate global information and then broadcast it back to individual stations and time steps, effectively capturing long-range interactions while reducing the quadratic cost of standard self-attention to O(NT). STAGformer integrates four core modules: a spatio-temporal encoder that fuses dynamic node features with external contextual factors (weather, time, points of interest), a graph propagation module for spatial neighbor aggregation, a temporal convolution module for local pattern extraction, and the agent attention module for global dependency modeling. Extensive experiments on two real-world datasets -- NYC Citi-Bike and Chicago Divvy-Bike -- demonstrate that STAGformer consistently outperforms state-of-the-art baselines across multiple prediction horizons, achieving significant improvements in both RMSE and MAE. Ablation studies validate the contribution of each component, with the agent attention mechanism proving critical for modeling global spatio-temporal dependencies.
