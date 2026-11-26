---
title: "GHC:Expanding Residual Interfaces in Hyper-Connections"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31350"
authors: ["Tianyu Li, Hongtao Zhang, Dongchen Han, Jingshu Liu, Bojun Wang, Chen Jiang, Yulong Huang, Wei Chen, Tianyu He, Xiangyu Zhang, Gao Huang"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.31350v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Hyper-Connections expand residual capacity across parallel streams, yet restrict every branch to narrow read and write interfaces: each branch still reads a single stream mixture and writes scaled copies of one output vector to all streams. To lift this bottleneck, we propose Grouped Hyper-Connections (GHC). By partitioning each branch into parallel groups along attention heads or FFN channels, GHC supplies each group with a distinct stream mixture and aggregates their separate outputs into each stream with learned weights. Extensive experiments across dense and Mixture-of-Experts (MoE) models show that GHC consistently improves upon Identity Hyper-Connections (IHC) with negligible parameter and memory-access overhead, increasing training efficiency by 35% over Pre-Norm and 10% over IHC. Moreover, expanding residual interfaces overcomes the diminishing returns of adding streams, allowing wider residual states to yield further gains.
