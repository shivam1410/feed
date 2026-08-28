---
title: "SAGE: Variate-Wise Semantic Augmentation for Vision-Language Time Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26829"
authors: ["Haizhao Fan, Xinyi Le"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.26829v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26829v1 Announce Type: new Abstract: Time series forecasting models operate on raw numerical sequences, lacking the semantic knowledge that domain experts implicitly leverage, such as the physical meaning of each variable, its statistical behavior, and its temporal dynamics. Recent efforts to bridge this gap fall into two camps. Some rely on large language models at inference time, which is computationally expensive. Others apply uniform textual prompts at the dataset level, ignoring the heterogeneous semantics across individual variates. We propose SAGE (Seeing and Augmenting with Grounded Encoding), an end-to-end CLIP-based framework that jointly models temporal, cross-variable, textual, and visual information. The CLIP text encoder processes frequency-enhanced patches and variable tokens, while gated residual paths inject variable-specific descriptions and statistical descriptors. In parallel, the frozen CLIP vision encoder aligns rendered series with temporal representations through a training-only contrastive objective. This dual use of CLIP adds complementary semantic and visual supervision without placing an LLM in the forecasting loop. Across eight long-term benchmarks and M4, SAGE achieves state-of-the-art accuracy. Ablations confirm complementary gains from multimodal alignment and variable-level knowledge.
