---
title: "PatchSTG: Scalable Spatiotemporal Graph Transformers for Traffic Forecasting on Irregular Sensor Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09872"
authors: ["Jichao Li, Xuanming Shi"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.09872v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09872v1 Announce Type: new Abstract: Traffic forecasting is a fundamental component of intelligent transportation systems, yet remains challenging in real-world settings due to irregular sensor distributions and the high computational cost of modeling large-scale spatiotemporal dependencies. In practical traffic networks, sensors are unevenly distributed across regions, leading to non-uniform spatial structures that limit the effectiveness and scalability of existing graph-based and attention-based models. To address these challenges, we propose PatchSTG, a patch-based spatiotemporal graph Transformer designed for efficient forecasting on irregular sensor networks. The key idea is to introduce a hierarchical spatial representation that partitions sensors into balanced, locality-preserving patches based on geographic information. On top of this structure, a dual attention encoder alternates between intra-patch attention for capturing local interactions and inter-patch attention for modeling global dependencies, reducing computational complexity from quadratic to near-linear scaling. We evaluate PatchSTG on real-world traffic data from Rhode Island and additional large-scale datasets. Experimental results demonstrate that the proposed model achieves stable and competitive forecasting performance across multiple horizons, while significantly improving computational efficiency. Ablation studies further validate the effectiveness of spatial partitioning and dual attention in capturing both local and long-range traffic dynamics. These results suggest that patch-based spatiotemporal modeling provides a scalable and effective framework for traffic forecasting under irregular spatial settings.
