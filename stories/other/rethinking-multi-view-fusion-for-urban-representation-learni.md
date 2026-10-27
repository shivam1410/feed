---
title: "Rethinking Multi-View Fusion for Urban Representation Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31850"
authors: ["Sean Bin Yang, Zongyi Xu, Jilin Hu, Ying Sun, Kristian Torp, Bin Yang, Torben Bach Pedersen, Christian S. Jensen"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31850v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Urban region representation learning encodes heterogeneous urban signals, such as mobility flows, points of interest, and land-use patterns, into unified embeddings for downstream tasks, including check-in prediction, crime forecasting, and service demand estimation. Existing approaches rely on globally shared fusion and joint optimization, implicitly assuming uniform modality importance and naturally balanced multi-objective training. However, urban data is inherently heterogeneous. Our empirical analysis reveals two structural issues: (i) modality utility varies markedly across regions, causing static fusion to overemphasize signals from certain modalities; and (ii) heterogeneous objectives exhibit persistent gradient imbalance, causing representational bias and unstable training. We present PRISM, a self-adjusting framework for adaptive multi-view learning. PRISM adapts sparse MoE routing to learn region-specific view allocations, while a PID (Proportional Integral Derivative)-inspired regulation mechanism mitigates gradient conflicts during optimization. Experiments on three large-scale urban datasets show that PRISM achieves competitive performance compared with strong multi-view baselines, while providing more stable optimization behavior and more balanced region representations.
