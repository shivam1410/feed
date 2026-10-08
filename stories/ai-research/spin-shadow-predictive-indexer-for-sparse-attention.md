---
title: "SPIN: Shadow Predictive Indexer for Sparse Attention"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09025"
authors: ["Yao Fu, Cyrus Chang, Ritchie Zhao, Bryce Long, Yueying Li, Mahdi Kamani, Samkit Jain, Rahul Raman, Tara Safavi, Shreya Gupta, Parsa Ashrafi Fashi, Minseok Lee, Julien Demouth, Bita Darvish Rouhani"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2610.09025v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Indexer-based sparse attention reduces the cost of core attention by passing only a fixed, small number of important tokens to it. However, the indexer must still score the entire KV cache at every decoding step. This scoring overhead becomes a major bottleneck as the context length grows. We propose SPIN (Shadow Predictive Indexer) to reduce this indexer overhead. SPIN uses lightweight, history-based prediction to identify important KV blocks, avoiding the need to score the full KV cache at every decoding step. SPIN treats KV blocks and speculative decoding as first-class design and implementation considerations. Across extensive evaluations on long-context and agentic benchmarks, SPIN achieves 30-40% sparsity while preserving task quality. In end-to-end vLLM serving, SPIN improves output throughput by up to 14.9% and reduces median inter-token latency by up to 13.2%.
