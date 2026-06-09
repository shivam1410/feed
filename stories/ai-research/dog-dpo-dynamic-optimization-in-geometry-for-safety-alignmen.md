---
title: "DOG-DPO:Dynamic Optimization in Geometry for Safety Alignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07678"
authors: ["Yi Nian, Tiankai Yang, Yudi Zhang, Qi Pan, Zelong Xu, Shenzhe Zhu, Qingqing Luan, Yue Huang, Xiangliang Zhang, Yue Zhao"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 69
guid: "oai:arXiv.org:2606.07678v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07678v1 Announce Type: new Abstract: Safety alignment for large language models relies on preference data, but current pipelines often train on large, redundant datasets. Existing data selection methods typically score each preference pair independently, collapsing directional preference information into scalar quality or diversity scores. This sample-centric view is especially limiting in multi-dataset settings, where shared safety directions coexist with dataset-specific residual risks. We propose DOG-DPO, a training-free data selection framework that treats preference pairs as structured geometric signals. DOG-DPO first represents each preference pair as a direction in model representation space. It then decomposes multi-dataset preference geometry into a global anchor subspace and dataset-specific residual subspaces. Finally, it selects subsets by maximizing diversity-based coverage, encouraging broad, non-redundant coverage of alignment directions before DPO training. Across six safety benchmarks and two model backbones, DOG-DPO achieves a strong utility-robustness trade-off using only 11% of the preference pairs. It recovers most of the safety gains of full-data training while remaining entirely teacher-free, training-free, and substantially faster than representative selection baselines.
