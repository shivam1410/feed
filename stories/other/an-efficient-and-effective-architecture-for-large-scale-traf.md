---
title: "An Efficient and Effective Architecture for Large-Scale Traffic Prediction via Geometry-Adaptive Square Partitioning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21072"
authors: ["Yongfeng Su, Hongwen Li, Zijian Zhang, Ziquan Fang, Lu Chen, Christian S. Jensen"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21072v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21072v1 Announce Type: new Abstract: Traffic prediction is a core task in intelligent transportation systems and urban-scale decision making. Despite the effectiveness of mainstream neural-network based methods, their deployment in real-world settings with thousands of traffic sensors is jeopardized severely by their poor computational scalability. To address this, the community has attempted to incorporate spatial database partitioning techniques (e.g., Grid, Quadtree, and K-D Tree) to improve model scalability. However, these approaches rely on handcrafted geometric heuristics and often produce irregular or imbalanced data partitions, leading to boundary fragmentation, excessive padding overheads, and degraded model accuracy. In this paper, we propose SqLinear, an efficient and effective architecture for large-scale traffic prediction. First, we design Square Partition, a geometry-adaptive algorithm that partitions massive traffic sensors into balanced, non-overlapping, and near-square spatial regions. Unlike existing heuristic-based designs, Square Partition is theoretically grounded and provides provable guarantees on aspect ratio, balance, and partition utilization, establishing a high-quality foundation for downstream spatiotemporal modeling. Next, we propose a Hierarchical Linear Interaction (HLI) module that abandons the costly attention mechanisms commonly used in Transformer-based spatio-temporal models. HLI efficiently captures both local intra-region dynamics and global inter-region dependencies through a lightweight linear interaction scheme, enabling effective spatiotemporal modeling with linear computational complexity. Extensive experiments on four large-scale traffic datasets and 10 baselines show that SqLinear reduces MAE by 2.30% on average under standard setting and by 5.81% under extreme scalability settings, while reducing training runtime by 13.27%--30.84% in spatial- and horizon-scaling scenarios.
