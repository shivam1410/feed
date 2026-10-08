---
title: "A Self-Pruning Transformer: Extreme KV-Cache Compression with Universal Attention"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09051"
authors: ["Davis Wertheimer, Haochen Shen, Ahan Gupta, Derrick Liu, Yu Chin Fabian Lim, Mudhakar Srivatsa, Raghu K. Ganti, Minjia Zhang, Naigang Wang"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2610.09051v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

The large KV-cache size of modern LLMs creates a barrier to efficient deployment. Recent work has explored replacing attention layers' RoPE positional embeddings with alternative decay-based mechanisms, which can then be used to prune KV-cache during inference. However, these decay functions have limited expressivity, and in practice devolve into sliding-window-like eviction patterns. In this work, we propose a unifying framework for complementary and novel decay mechanisms, capturing complex key statistics and interactions while preserving expressive RoPE embeddings and Softmax attention. The resulting Universal Attention is a highly expressive and end-to-end trainable architecture, whose composite decay mechanism acts as a natural, $\textit{adaptive}$ pruning criterion, removing tokens that contribute least to attention computation. Experimentally, Universal Attention achieves state-of-the-art $10\times$ compression on natural language and synthetic task data, while $\textit{improving}$ downstream performance compared to both state-of-the-art baselines and unpruned oracles. It further demonstrates superior long-context generalization with unprecedented $25\times$ compression at length 16k.
