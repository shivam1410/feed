---
title: "FoundAna: A GNN-assisted Foundation Model for Graph Anomaly Detection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.18107"
authors: ["Suprim Nakarmi, Chahana Dahal, Yue Zhao, Junggab Son, Zuobin Xiong"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.18107v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.18107v1 Announce Type: new Abstract: Graph anomaly detection aims to identify graph structures (e.g., nodes, edges, or subgraphs) that deviate significantly from expected patterns, which supports critical applications in fraud detection, spam identification, network intrusion, etc. Despite the growing methods in the field, existing approaches follow a one-model-per-dataset paradigm, limiting their transferability across diverse real-world scenarios due to task heterogeneity, label scarcity, and domain variability. In this work, we introduce FoundAna, a GNN-assisted Foundation Model for Graph Anomaly Detection - the first foundation model framework designated for generalizable, cross-graph anomaly detection by combining GNNs and transformers. FoundAna integrates an anomaly detection-specific GNN component with a standard transformer encoder augmented by four complementary positional encodings, which enable the model to capture both local and global structural information. Specifically, the positional encoding enriched node representations are passed through attribute and adjacency decoders, and the reconstruction errors serve as the anomaly score. Extensive experiments on nine benchmark datasets spanning financial, social, and citation network domains demonstrate that FoundAna consistently outperforms state-of-the-art baselines. The code implementation and Supplementary materials are here: https://github.com/FoundAna331/FoundAna.
