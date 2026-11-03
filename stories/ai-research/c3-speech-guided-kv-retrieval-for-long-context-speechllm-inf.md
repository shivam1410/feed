---
title: "C3: Speech-Guided KV Retrieval for Long-Context SpeechLLM Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00333"
authors: ["Dancheng Liu, Markus M\\\"uller, Rupak Vignesh Swaminathan, Jing Liu, Srikanth Ronanki, Aram Galstyan"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.00333v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Speech language models encode audio at a much higher rate than text, causing the KV cache to dominate the memory, bandwidth, and decoding cost of long-form generation. KV retrieval can reduce per-step access by attending to only a query-dependent subset of the cache, but existing methods are designed primarily for text and do not account for the structure of audio attention. We first show that retrieval errors may compound autoregressively into generation drift. We then analyze full audio attention during long-form generation and identify three properties relevant to retrieval: unequal attention concentration across query heads, non-contiguous audio support, and temporal continuity across decoding steps. Guided by these observations, we propose $C^3$(Cluster-Compete-Compete), which organizes audio KVs in a hierarchical key-space index, lets query heads sharing a KV head compete for a common retrieval budget, and adaptively reallocates retrieval resolution through paired split-merge updates. Across long-form speech recognition, translation, and summarization on four SpeechLLMs, $C^3$ achieves the strongest overall performance among retrieval methods under comparable final-KV access budgets, with particularly large gains in the tight-budget regime, while improving long-context decoding efficiency and accelerator-memory scaling.
