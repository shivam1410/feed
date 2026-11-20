---
title: "Intelligent Embedding Pruning for Large-Scale Recommendation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25288"
authors: ["Anish Khazane, Alex Saad-Falcon, Guanchu Wu, Marcio Porto, Jasper Shan, Fei Yu, Eugene Shulga, Intaik Park, Yongzhe Zhang, Xiaoyu Deng, Sheng Luo, Xiaoya Wang"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 20
guid: "oai:arXiv.org:2611.25288v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Modern recommendation systems face substantial memory pressure, largely from the sparse embedding layer that maps high-cardinality categorical features into dense vectors. In-training embedding pruning (ITEP) removes less important embedding rows during training, yielding end-to-end memory savings but sometimes degrading accuracy because per-table pruning ratios are set by size-based heuristics. We use feature importance (FI) to guide these ratios (FI-ITEP), assigning higher pruning to tables tied to less important features. Across three large-scale recommendation models, FI-ITEP achieves 20--40% total memory reduction while matching or improving accuracy relative to percentile-based ITEP. Because the feature-importance signal requires minimal resources to compute, these memory savings translate into concrete systems benefits: the same models train on fewer GPU trainers (e.g., 112 to 80) with higher per-GPU throughput, saving 1,000+ GPU-hours per model launch. We reproduce these trends on the open-source DLRM (Criteo 1TB) and quantify the end-to-end training-time and GPU-cost tradeoff---including the burden of computing FI---offering practical guidance for embedding pruning in real-world systems.
