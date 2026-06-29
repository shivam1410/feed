---
title: "TA-SparseMG: Trend-Aware Sparse Forecasting via Multi-Scale Gating for Long-Term Time Series"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27908"
authors: ["Wenchao Liu, Hongbing Wang, Youji Zhu, Xiaodong Liu, Xiangguang Xiong"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2606.27908v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27908v1 Announce Type: new Abstract: Long-term time series forecasting finds extensive applications in domains such as power demand, traffic flow, meteorological observation, and renewable energy dispatch. Forecasting dynamically varying long-term time series poses inherent challenges, including statistical nonstationarity, local high-frequency disturbances, and coupled cross-period dependencies, which make it difficult for lightweight models to balance parameter efficiency and forecasting performance. To address this issue, this study presents TA-SparseMG, a lightweight cross-period forecasting model built on SparseTSF's sparse cross-period modeling framework. It incorporates three key modules: a trend-aware reversible instance normalization module, a scale-adaptive gated denoising module, and a multiscale gated-attention MLP forecasting module. The trend-aware normalization module captures input-window statistics and calibrates forecast-window distributions, effectively mitigating distribution shift. The scale-adaptive gated denoising module performs feature smoothing and residual suppression before period rearrangement, thereby reducing interference from high-frequency perturbations. The multiscale gated attention prediction module strengthens the prediction head's adaptive representational capacity via conditional gating and feature modulation. Extensive experiments across multiple LTSF benchmarks demonstrate that the proposed TA-SparseMG consistently achieves superior, stable performance. Ablation studies confirm that each module independently improves distribution adaptation, input robustness, and cross-period feature mapping capability.
