---
title: "SplitReAlign: Partition-Aware Representation Realignment for Split Federated Unlearning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25301"
authors: ["Jia Chen, Yecheng Lv, Xinrong Hu, Jun Bai"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.25301v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Split federated learning (SFL) distributes neural networks across clients and a server, coupling class-specific knowledge across their representations. This coupling complicates split federated unlearning (SFU), where class-wise forgetting must remove target knowledge while preserving retained utility under heterogeneous representation spaces and asymmetric update constraints. We propose SplitReAlign, a partition-aware representation realignment framework for class-wise SFU. It constructs endpoint-specific discriminative subspaces coordinated through a shared semantic anchor, selectively realigning forgotten representations while penalizing changes outside the active subspaces. To accommodate asymmetric update constraints, SplitReAlign leverages gradients through frozen servers for Client-only updates and fixed client-feature statistics for Server-only guidance, while Joint updates optimize both partitions. Experiments on CIFAR-10 and CIFAR-100 under heterogeneous client distributions demonstrate that SplitReAlign achieves the lowest average gap to retraining among all compared methods across six settings. Notably, Server-only achieves the closest agreement with retraining on both datasets, highlighting the effectiveness of partition-aware guidance under restricted updates.
