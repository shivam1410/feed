---
title: "LoGIC: Budgeted Context Construction for Node-Level Graph In-Context Learning with Tabular Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05955"
authors: ["Mingqi Yang, Zidong Guo, Jihui Yang, Wenming Zuo"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.05955v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05955v1 Announce Type: new Abstract: Tabular foundation models have become powerful graph learners. Systems such as G2T-FM and GraphPFN encode each node as a feature row and make predictions through in-context learning (ICL), with labeled rows serving as the prompt. Current protocols employ the complete training table as context, causing attention to scale quadratically with the labeled pool and introducing preprocessing and memory bottlenecks. We investigate context construction for node-level graph ICL: which labeled nodes and auxiliary unlabeled nodes should constitute the prompt for specified queries. We formulate this allocation in terms of two resources: a labeled-context budget for predictive evidence and an unlabeled-halo budget for adapter message passing without using label capacity. We present LoGIC, which retrieves labeled nodes via structural, feature-based, and coverage channels, shares each context across the queries in a graph-local cluster, incorporates an unlabeled halo for adapter backbones, and chooses the channel and context budget without test labels. Across three backbone configurations drawn from two model families on GraphLand, budgeted contexts maintain locally runnable full-context performance, stay competitive with published large-dataset results, and markedly lower peak memory requirements compared with full-context and whole-graph inference. They further permit frozen graph ICL on million-node graphs without retraining. Our analysis identifies when retrieval channels work best and connects their behavior with graph properties.
