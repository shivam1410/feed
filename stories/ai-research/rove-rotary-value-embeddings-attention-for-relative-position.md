---
title: "RoVE: Rotary Value Embeddings Attention for Relative Position-dependent Value Pathways"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11275"
authors: ["Alejandro Garc\\'ia-Castellanos, Maurice Weiler, Erik J Bekkers"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.11275v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11275v1 Announce Type: new Abstract: Rotary Position Embeddings (RoPE) make attention scores position-relative but leave the value pathway position-blind: the message sent by a value token is the same regardless of its distance from the query. We propose RoVE, a parameter-free modification that makes values position-sensitive by rotating them simultaneously with keys, and show that it turns RoPE attention into attentive convolution. This new perspective unifies several independent formulations of the same operation across computer vision, robotics, and modern LLM architectures. Trained 124M and 354M GPT-2 models show consistent empirical gains over RoPE on few-shot in-context learning, out-of-distribution perplexity, and long-context retrieval, with the clearest improvements on tasks that require long-range aggregation.
