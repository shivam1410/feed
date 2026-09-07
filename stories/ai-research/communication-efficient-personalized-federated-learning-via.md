---
title: "Communication-Efficient Personalized Federated Learning via Layer-Wise Multi-Threshold Random Sketching"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04830"
authors: ["Xu Zhang, Xingyu Hou, Jiacheng Cheng, Kaiyuan Feng, Maoguo Gong"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.04830v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04830v1 Announce Type: new Abstract: Personalized federated learning (PFL) is a promising paradigm for collaborative learning over distributed devices, where edge nodes collaboratively train personalized models without sharing raw data. Although PFL addresses data heterogeneity by learning client-specific models, it still suffers from substantial uplink and downlink communication costs when exchanging high-dimensional parameters in bandwidth-constrained systems. Recent one-bit methods achieve extreme compression, but they usually rely on a single thresholding rule applied to the whole model. This design has two limitations. First, it overlooks layer-wise differences in parameter distributions and quantization sensitivities. Second, a single threshold provides only coarse binary information and cannot capture fine-grained variations in parameter distributions. To address these issues, we propose a communication-efficient PFL framework via layer-wise multi-threshold random sketching. In the proposed method, each layer is assigned its own set of quantization thresholds, so that the compressed representation can adapt to layer-specific statistics while using multiple intervals to provide a finer low-bit description of sketched parameters. The proposed method supports bidirectional communication using compact low-bit sketches and improves the communication-accuracy tradeoff compared with existing one-bit compression approaches.
