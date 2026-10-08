---
title: "Multi-Label Topic Assignment via LLM Distillation: A Comparative Analysis of Generative vs. Discriminative Student Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09063"
authors: ["Sourabh Kasliwal, Shubhranshu Singh"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2610.09063v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Multi-label topic assignment for user-generated content (UGC) -- including product reviews and buyer-seller conversations -- poses unique scalability challenges in large-scale e-commerce due to informal language, extreme label sparsity, and rapidly evolving taxonomies. While utilizing Large Language Models (LLMs) as labeling oracles to distill ground-truth data has emerged as an industry standard to bypass prohibitive manual annotation costs, determining the optimal, low-latency architecture for the resulting student models remains an open challenge. To address this, we conduct a comprehensive evaluation across Small Language Model (SLM) parameter scales (1B, 4B, and 8B) and architectural paradigms (causal generative versus bidirectional discriminative). Comparing generative text-to-label classifiers against discriminative baselines (DeBERTa-V3 and ModernBERT), our analysis reveals a crucial data-dependent trade-off: while discriminative models outperform ultra-lightweight generative models on structured product reviews, even the smallest 1B generative model surpasses discriminative baselines on complex, multi-turn conversational data. Furthermore, generative models maintain robust performance under massive label-set expansion (up to 112 topics) and severe long-tail distributions, whereas discriminative baselines suffer a 35% drop in Macro-F1 at scale. Finally, we detail the successful production deployment of these optimized models across both product review and conversational domains, demonstrating strict latency compliance and tangible business impact at a global marketplace scale.
