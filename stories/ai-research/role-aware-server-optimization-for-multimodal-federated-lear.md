---
title: "Role-Aware Server Optimization for Multimodal Federated Learning with Missing Modalities"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41193"
authors: ["Liuyin Shi, Wenbo He"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 22
guid: "oai:arXiv.org:2610.41193v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Multimodal federated learning (MFL) trains a shared model by aggregating client updates without exchanging raw data. Under missing modalities, clients adapt active modality encoders and a shared prediction block (fusion and classifier) to different input subsets. This raises two server-side questions: which clients should contribute to each component, and how should their aggregates be incorporated across rounds? We observe that an absent-modality encoder can still adapt through missing-input handling. Availability- based aggregation can therefore omit its update while retaining jointly learned prediction-block updates. Contributor selection also shapes server momentum, a weighted history of aggregated updates. We observe that prediction-block momentum can improve or reduce performance depending on the encoder update policy. We therefore propose Role-Aware Server Optimization (RASO), which coordinates contributor selection with role-specific server updates. RASO selects contributors through prediction dependence and inclusion in local optimization, retains encoder momentum, and synchronizes the shared prediction block to its current aggregate. Experiments across datasets and fusion architectures demonstrate the effectiveness of RASO under missing modalities.
