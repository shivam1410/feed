---
title: "MoME: Mixture-of-Memory Embeddings for Context-Aware Sparse Lookup"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.15126"
authors: ["Muchen Li", "Leonid Sigal", "Renjie Liao"]
date: "2026-09-13T20:00:00.000Z"
score: 60
guid: "2609.15126"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.15126.png"
generated: "2026-09-21T19:05:57+05:30"
---

Scaling large language models efficiently has motivated sparse capacity mechanisms such as Mixture-of-Experts and, more recently, conditional memory: token-indexed embedding tables that augment the backbone with cheap parametric lookups. Existing memory-embedding methods retrieve via a deterministic function of the surface form, which collapses different contextual senses of the same token (e.g., python the language vs. the animal) into a single fixed entry. We introduce Mixture of Memory Embeddings (MoME), a context-aware memory mechanism that replaces each token's single memory row with a mixture of M slots and uses a learned gate over the hidden state to choose which slots to read at each position. In controlled pretraining experiments across nanochat, Llama-3/MobileLLM, and Qwen3 backbones, MoME improves over Value Embedding, Bigram, and STEM baselines in iso-parameter and iso-training-FLOP settings, shows a more promising memory-size scaling trend at sub-billion scale, and remains efficient in training and inference. Qualitative routing analyses on polysemous tokens further suggest that the learned mixture exhibits a degree of semantic interpretability, dispatching the same surface token to distinct memory slots under different senses.
