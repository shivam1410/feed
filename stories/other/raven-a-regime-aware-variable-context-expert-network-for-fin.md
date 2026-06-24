---
title: "RAVEN: A Regime-Aware Variable-context Expert Network for Financial Time Series Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24062"
authors: ["Cheng He, Zhenyu Guan, Xijie Liang, Defu Lian, Jiajia Li, Enhong Chen, Patrick P. C. Lee, Geng Hu, Zehao Chen"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24062v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24062v1 Announce Type: new Abstract: Financial time series forecasting presents structural challenges absent from standard benchmarks. Log-returns are non-stationary, exhibit exceptionally low signal-to-noise (SNR) ratios, and are governed by regime-dependent temporal dependencies. We identify a key limitation of state-of-the-art (SOTA) time series models in financial settings. A fixed context window is mismatched to the time-varying optimal look-back of non-stationary price processes. We propose the Regime-Aware Variable-context Expert Network (RAVEN), a Mixture-of-Experts framework designed to adaptively determine the temporal context for each input sample. Instead of relying on a fixed look-back horizon, RAVEN constructs a hierarchy of nested contiguous windows whose lengths are determined by the data itself. Specifically, RAVEN scores patches by learned importance in reverse chronological order and applies the Cumulative Importance Thresholding (CIT) mechanism to derive nested prefix windows, each routed to a scale-specialized expert. A Global Compressed Representation (GCR) branch runs in parallel over the full context, preserving global temporal coherence that local experts cannot guarantee. Because the nested routing induces structured overlap among expert inputs, we introduce a Correlation-Aware Weighting (CAW) to align variable-length expert outputs and penalize pairwise cosine similarity prior to aggregation. Experiments on cumulative log-return prediction (HS300, S&P500) and fund sales forecasting demonstrate that RAVEN achieves SOTA performances, improves Pearson correlation by 9.2% on HS300 and 20.2% on S&P500, and reduces MSE by 18.2% on fund sales forecasting, while achieving the best results in 14 of 16 metrics on four PEMS traffic benchmarks.
