---
title: "Scaling Laws for Grid-Based Approximate Nearest Neighbor Search in High Dimensions"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01283"
authors: ["Matthew J Liu, Wei Hang Zheng, Vidhan Purohit, Siqi Xie, Chieh-En Li, Jerry Li, Noah Flynn"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.01283v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01283v1 Announce Type: new Abstract: Grid-based approaches to approximate nearest neighbor (ANN) search have been absent from modern scaling analyses. We present a systematic characterization of a multiprobe grid algorithm with respect to dataset size $N$ and dimensionality $d$. Our experiments reveal a previously unreported $d$-scaling crossover on the GloVe embedding family, in which multiprobe grid search maintains an approximately constant dimensional scaling exponent while other graph-, tree-, and partitioning-based methods exhibit degrading throughput. The advantage comes with near-linear query scaling in $N$, but also with lower indexing cost than competing ANN methods. Our results suggest that grid-based methods such as multiprobe grid may be competitive in rebuild-heavy or high-dimensional settings where indexing cost and dimensional robustness dictate performance. More broadly, recent work has formalized self-attention as an ANN operation. Thus, the $N$- and $d$-scaling properties of ANN algorithms may guide cost analysis of efficient transformer architectures. Code is available at: https://github.com/weiz345/MultiProbeANN.
