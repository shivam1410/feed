---
title: "SpecLST: Spectral-Enhanced Long-Short Term Spatio-Temporal Multimodal Modeling for Traffic Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36393"
authors: ["Kenan Kang, Matthew M. Y. Kuo, Weihua Li"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36393v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Modeling multi-scale dynamics in urban road networks is essential for intelligent transportation systems but is often hindered by the computational cost of long-range historical context and the challenge of fusing heterogeneous modalities. Existing spatio-temporal frameworks face a trade-off between sequence length and memory overhead, while frequently neglecting the transient effects of exogenous factors such as road incidents and weather. To address these limitations, we propose SpecLST, a frequency-enhanced long-short-term spatio-temporal multimodal framework. SpecLST leverages a fast Fourier transform-based frequency-domain representation module to efficiently encode multi-week historical dependencies, bypassing the memory bottlenecks of standard attention mechanisms over raw long sequences. Heterogeneous context is integrated through attention-based fusion, followed by a sparse Mixture-of-Experts backbone with graph augmentation for spatio-temporal representation learning. Additionally, a frequency-enhanced residual head isolates high-frequency transients, improving sensitivity to abrupt traffic anomalies. At the 60-minute horizon, SpecLST achieves mean relative error reductions of 14.10% in MAE, 10.35% in RMSE, and 15.78% in MAPE across eight neural forecasting baselines and four datasets, with the dataset- and metric-specific average reductions ranging from 5.63% to 22.21%.
