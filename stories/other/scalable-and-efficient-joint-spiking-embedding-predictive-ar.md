---
title: "Scalable and Efficient Joint Spiking Embedding Predictive Architecture for Large-Scale Dynamic Graphs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18412"
authors: ["Huizhe Zhang, Yuchang Zhu, Huazhen Zhong, Liang Chen, Zibin Zheng"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18412v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18412v1 Announce Type: new Abstract: Dynamic graph learning aims to capture evolving structural and semantic patterns in real-world systems, such as fraud detection and recommender systems. Due to the scarcity of labeled data in real-world dynamic graphs, recent studies have introduced generative or contrastive paradigms (e.g., masked graph autoencoders or graph contrastive learning) to generate task-agnostic graph embeddings. However, these methods typically rely on complex edge-level reconstruction objectives and tailored graph augmentation strategies. This incurs substantial computational overhead when scaling to large-scale dynamic graphs. In this paper, we propose SG-JEPA, a joint spiking embedding predictive architecture for large-scale dynamic graphs. In contrast to existing self-supervised methods, SG-JEPA partitions nodes into context and target sets along the temporal dimension to learn embeddings that are predictive of each other via additional spatial-temporal information. Furthermore, through encoding sequential inputs into coarse-to-fine spike count embeddings, spiking neurons enable SG-JEPA to adapt to the varying computational constraints of downstream tasks. Extensive experiments demonstrate that SG-JEPA achieves competitive or even superior performance over discriminative baselines on node classification, while effectively scaling to the dynamic graph with 13 million edges. SG-JEPA avoids the complex machinery (negative sampling, graph augmentations, edge-level reconstruction, etc.), resulting in superior training efficiency and memory scalability compared with prior self-supervised dynamic graph baselines.
