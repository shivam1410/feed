---
title: "Block Sparse Attention with Log-Linear Complexity"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.31093"
authors: ["Bohao Tang", "Zhen Qin", "Yuqi Pan", "Zheng Li", "Pengfei Liu"]
date: "2026-09-24T20:00:00.000Z"
score: 58
guid: "2609.31093"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.31093.png"
generated: "2026-09-28T20:49:59+05:30"
---

Scaling language models to long contexts is limited by the quadratic cost of self-attention. Block sparse attention offers an efficient alternative, but selecting the retained blocks remains a bottleneck. Conventional block selection requires scoring all query-block pairs and therefore remains quadratic in sequence length. To address this issue, we propose PISA, a block-sparse attention mechanism that employs a pyramid Top-K selection strategy. The main idea is to gradually narrow down the candidates across different levels, making it more efficient to find the most relevant keys. Specifically, we construct a coarse-to-fine hierarchy of keys and perform selection from the coarsest level. At each level, LogSumExp scoring is applied to a bounded candidate set to select candidates for the next finer level, continuing until the finest level is reached. Through pooling, we construct O(log N) levels of keys, yielding an overall complexity of O(Nlog N), where N denotes the sequence length. We develop hardware-aware Triton kernels for both training and inference, fusing hierarchical routing and LogSumExp scoring without materializing the query-key score matrix. We further evaluate our method on language modeling tasks. Compared with the baseline, our method achieves comparable performance on benchmarks such as commonsense reasoning while delivering better results on retrieval tasks.
