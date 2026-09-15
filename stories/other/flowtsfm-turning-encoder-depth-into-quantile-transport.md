---
title: "FlowTSFM: Turning Encoder Depth into Quantile Transport"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13640"
authors: ["Bahaeddine Abdessalem, Shifeng Xie, Zehao Xiao, Youssef Attia El Hili, Ambroise Odonnat, Jianfeng Zhang, Lujia Pan, Keli Zhang, Malik Tiomoko"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13640v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13640v1 Announce Type: new Abstract: Encoder-based time series foundation models (TSFMs) typically rely on deep stacks of independently parameterized Transformer layers, where only the final forecast is supervised and intermediate representations have no explicit predictive role. We introduce FlowTSFM, an encoder architecture that interprets depth as a recurrent transport process: a single Transformer block is iteratively applied with shared parameters, while a quantile-flow objective supervises intermediate states along a prescribed trajectory from a prior distribution toward the final forecast. The objective combines pinball forecasting loss with path-level position matching. With only 38.8M parameters, FlowTSFM achieves competitive performance on GIFT-Eval and TIME, remaining within 1.8-4.6% MASE of stronger baselines while using approximately $3\times$ fewer parameters than a 12-layer Chronos-2 model (119.5M). Beyond accuracy, we introduce CosMean, a scale-free diagnostic measuring whether recurrent updates consistently align toward the final prediction. Under a matched intermediate-state probing protocol, FlowTSFM achieves a CosMean score of 0.919 compared with 0.350 for Chronos-2, suggesting that recurrent parameter sharing combined with path supervision is associated with substantially more structured predictive trajectories at a favorable accuracy-efficiency trade-off.
