---
title: "QUARTET: Quad-branch cross-Attention and Random-walk Traces for Enhancing Transformers on Relational Graphs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.26855"
authors: ["Kyaw Hpone Myint, Nan Jiang, Xiang Li, Zhe Wu, Alexandre G. R. Day, Pranab Mohanty, Giri Iyengar"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2609.26855v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.26855v1 Announce Type: new Abstract: Relational Deep Learning (RDL) models multi-table databases as heterogeneous temporal graphs, and graph transformers currently achieve state-of-the-art performance on benchmarks like RelBench. However, the current leading model, RelGT, suffers from two key limitations: its random local sampler yields loosely connected subgraphs that hinder message passing, and its global attention module relies on a single, seed-feature-based memory that ignores broader macro-level dynamics. To overcome these limitations, we introduce QUARTET, an expressive graph transformer architecture that applies full self-attention on local subgraphs while enriching global context through cross-attention branches. Specifically, QUARTET employs a Causal Random Walk (CRW) sampler based on recency-truncated Personalized PageRank (PPR) to extract compact, hub-robust, and densely connected local subgraphs without temporal leakage. Concurrently, a quad-branch cross-attention module integrates global context from four complementary perspectives: seed feature, seed topology, temporal dynamics, and collaborative dynamics. Across the RelBench v1 classification tasks, QUARTET consistently matches or outperforms the current state-of-the-art graph transformer baselines (HGT and RelGT). Ablation studies confirm that the CRW sampler significantly enriches local neighborhood quality, while the global branches provide essential, task-specific predictive gains.
