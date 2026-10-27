---
title: "Searching with Sparse Histories: Cross-Task Architecture Search from Incomplete Search Logs and Zero-Cost Proxies"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.32179"
authors: ["Yuefeng Xu, Jun Yu"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.32179v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Neural architecture search (NAS) is expensive, but cross-task transfer can reduce costs by reusing knowledge from previous tasks. However, existing methods struggle with sparse search histories and task-specific transfer failures. We propose a method, a risk-robust strategy that combines sparse source logs with zero-cost proxies through champion-based initialization and joint pairwise-ranker pretraining. On TransNAS-Bench-101, the proposal mitigates severe worst-case failures, reducing worst-10% ranks from 290 to 43 for Micro autoencoding and from 465 to 45 for Macro room layout. Across 13 cell-space targets, it outperforms a proxy-only ranker on 10 targets in both mean and worst-case performance, while maintaining competitive average performance.
