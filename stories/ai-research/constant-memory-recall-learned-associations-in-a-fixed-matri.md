---
title: "Constant-Memory Recall: Learned Associations in a Fixed Matrix State"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00232"
authors: ["Samuel Larson"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.00232v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Fixed-size recurrent memory limits storage growth during inference, but successful recall depends on the task and training. We study a small DeltaNet variant with fixed token-specific key biases, trained to remember 32 new key-value pairings per sequence. With 32 KiB of recurrent matrix state, it achieves 99.95% mean accuracy across three training seeds when choosing among the sequence's values. Recall remains near perfect when filler extends the pre-query context to 1,798 tokens without adding pairings. Zeroing the first memory block removes this recall. An exploratory 48-pair test remains near chance after one quarter of the primary training budget and does not locate a capacity limit. Parameter-matched vector and Transformer baselines remain near chance, including the Transformer after additional training searches. This unresolved baseline failure prevents a memory-efficiency comparison.
