---
title: "scKDGM: KAN-guided Dynamic Graph Masked Learning for Single-Cell RNA-seq Clustering"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28459"
authors: ["Jun Tang, Pengwei Hu, Sicong Gao, Jie Guo, Lun Hu, Xin Luo"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.28459v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28459v1 Announce Type: new Abstract: Single-cell RNA sequencing (scRNA-seq) clustering is essential for identifying cell types, but high dimensionality, sparsity, dropout, and technical noise hinder robust expression representation and cell graph construction. Existing masked autoencoders mainly use expression recovery for feature reconstruction, while graph clustering methods usually depend on fixed KNN graphs and do not feed recovered expression back into graph optimization. We propose scKDGM, a KAN-guided dynamic graph masked learning framework for scRNA-seq clustering. scKDGM uses graph-aware distribution preserving gene masking (GDP-Mask) to perturb cell identity, a KAN-based TAKGCN encoder to learn masked-view representations, mask-guided expression recovery to construct a dynamic graph, and cross-view contrastive learning to transfer recovery signals into topology updates. A ZINB loss models overdispersion and zero inflation. Experiments on 12 real scRNA-seq datasets show that scKDGM outperforms 10 baselines in average NMI and ARI.
