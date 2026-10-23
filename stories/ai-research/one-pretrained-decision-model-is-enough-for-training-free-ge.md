---
title: "One Pretrained Decision Model Is Enough for Training-Free Generalist Graph Anomaly Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30777"
authors: ["Xinyu Zhao, Qingyun Sun, Ziwei Zhang, Tianchen Zhu, Daqing Li, Jianxin Li"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 20
guid: "oai:arXiv.org:2610.30777v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Graph anomaly detection (GAD) aims to identify irregular entities in graph-structured data, yet heterogeneous anomaly patterns and distributional differences across graphs challenge generalizable detection. Existing training-free approaches avoid task-specific optimization but primarily rely on predefined numerical scoring rules, leaving the semantic interpretation of heterogeneous anomaly evidence largely unexplored. In this paper, we propose Jev-GAD, a training-free generalist graph anomaly detection framework that bridges heterogeneous numerical evidence and pretrained decision mechanisms. To address heterogeneous anomaly patterns, we construct complementary structural, attribute, and neighborhood evidence and transform heterogeneous statistics into graph-relative anomaly percentiles. To move beyond predefined numerical scoring rules, we leverage a single frozen pretrained language model for evidence-conditioned anomaly assessment. To bridge the semantic gap between numerical evidence and pretrained models, we design a semantic Graph-to-State (G2S) transformation that organizes graph context and semantically labeled node evidence into structured decision states for non-generative option-logit readout. The resulting decision scores are integrated with four complementary statistical scores through equal-weight rank-based fusion, without GAD-specific gradient-based optimization. Extensive experiments on seven graph anomaly detection benchmarks spanning citation, social, and co-review networks demonstrate the effectiveness of Jev-GAD, achieving average AUROC and AUPRC scores of 89.18\% and 52.40\%, respectively. Further analyses validate the contributions of pretrained decision readout and semantic evidence grounding.
