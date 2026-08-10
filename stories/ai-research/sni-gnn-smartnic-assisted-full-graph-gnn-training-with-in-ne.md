---
title: "SNI-GNN: SmartNIC-Assisted Full-Graph GNN Training with In-Network Embedding Prediction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06441"
authors: ["Guofan Yu, Sitian Chen, Zhenheng Tang, Xiaowen Chu, Amelie Chi Zhou"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2608.06441v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

arXiv:2608.06441v1 Announce Type: new Abstract: Full-graph GNN training delivers high accuracy but scales poorly on multi-server clusters due to heavy, irregular inter-node embedding exchanges. We present SNI-GNN, a SmartNIC-assisted full-graph training system that reduces communication while preserving accuracy by predicting remote embeddings in-network. SNI-GNN deploys a lightweight linear-trend predictor on SmartNICs to refine cached historical embeddings, coupled with an importance-based boundary-node sampling policy and an asynchronous DPU--GPU data pipeline with intermediate-result reuse. We provide error and convergence bounds showing that predictor bias remains controlled under bounded second-order dynamics and yields standard non-convex convergence with inexact gradients. Implemented on NVIDIA BlueField-3, SNI-GNN integrates with state-of-the-art full-graph systems, cuts communication by 21--45\%, achieves 1.3--3.6$\times$ end-to-end speedups over BNS-GCN and up to 1.29$\times$ over baseline SANCUS, with accuracy loss $\leq 0.01$, and scales efficiently to 16 GPUs on graphs with up to tens of millions of edges. These results indicate SmartNIC-based in-network prediction is a practical complement to partitioning and compression techniques for communication-efficient full-graph GNN training at scale.
