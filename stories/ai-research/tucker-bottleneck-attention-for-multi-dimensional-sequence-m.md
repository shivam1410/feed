---
title: "Tucker Bottleneck Attention for Multi-Dimensional Sequence Modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09090"
authors: ["Ryan Solgi, Parsa Madinei, Zheng Zhang"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2610.09090v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

The quadratic cost of self-attention limits scalability to long sequences from multidimensional data. We introduce Tucker bottleneck attention (TuBA), which exploits low-rank tensor structure for efficient global token mixing. TuBA projects hidden tensors into compact Tucker cores, performs multi-head self-attention and linear projections on the cores, and writes updates back to the ambient space, enabling subquadratic computation. Its autoregressive extension combines bidirectional interactions within cores with causal attention across cores. On video prediction and global weather forecasting, TuBA achieves favorable accuracy-efficiency trade-offs over standard and efficient attention and task-specific models. Compared to standard self-attention, TuBA reduces error and computation by up to 24.7% and 66.6% for video prediction and 37.1% and 85.1% for autoregressive weather forecasting, with speedups up to 4.27 times. Low-rank Tucker cores and multi-frame generation also outperform full-rank attention and frame-by-frame generation, respectively.
