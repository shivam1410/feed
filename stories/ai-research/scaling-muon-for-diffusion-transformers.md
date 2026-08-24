---
title: "Scaling Muon for Diffusion Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20818"
authors: ["Chenghao Li, Xiao Han, Xinxin Huang, Wei Liu, Boyang Li, Bing Xiao, Heran Zhang, Juanma Perez Rua, Ke Xu, Kangning Liu, Linjun Kuang, Na Li, Tan Wang, Tian Xie, Wei Peng, Yang Pei, Yifan Xu, Yuanhao Zhai, Yuwei Lin, Zhe Wang, Zihao He, Daniel Li, Junbiao Tang, Ziyang Jiang, Dake Chen"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 54
guid: "oai:arXiv.org:2608.20818v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.20818v1 Announce Type: new Abstract: The matrix-aware optimizer Muon improves large model training by balancing updates across singular directions, yet its scaling behavior and end-to-end efficiency on large Diffusion Transformers (DiTs) remain unclear. We first establish Muon's scaling behavior on DiTs from 1.3B to 15B parameters, showing that its optimization and generative quality advantages over AdamW persist across model scales. However, at scale, the 5-step Newton--Schulz iteration (NS5) performed at every optimization step, together with full-momentum materialization, introduces substantial computation and communication overhead that can offset Muon's step-efficiency advantage. We introduce \emph{Periodic Row-wise Muon}, which performs a full NS5 spectral update once every \(K\) steps and applies a low compute and communication cost row-wise constrained update based on the current momentum at the remaining steps. We further co-design a distributed implementation that operates directly on sharded momentum during non-refresh steps and accelerates spectral refreshes through bucketed all-gather and communication--computation overlap. Across all scales, Muon improves the best observed generative quality over AdamW by 12.9--19.1\%. Compared with vanilla Muon, Periodic Row-wise Muon remains within 0.5\% in best generative quality on the 1.3B--4B models and improves it by 4.5\% at 9B. It reduces optimizer time by 46.9--54.3\%, end-to-end step time by 15.7--24.3\%, and logical communication volume by 66.7\%, while reaching its respective best generative quality with 33.7--64.8\% less active training time. These results show that Periodic Row-wise Muon preserves Muon's generative quality advantage while translating it into end-to-end training efficiency for large DiTs.
