---
title: "MeltKV: Memory-Aligned KV Cache Compression via Variable-Bit Packed Vector Quantization for Long-Context LLMs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18652"
authors: ["Jiyun Han, Seongjoon Cho, Seungkyu Choi"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18652v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Large Language Models (LLMs) increasingly rely on long contexts, making Key-Value (KV) caches dominate memory usage and inference latency. Existing vector quantization (VQ) methods effectively compress KV caches to sub-4-bit levels but often overlook inefficiencies in memory alignment and decoding speed. This work introduces MeltKV, a memory-latency co-optimized KV cache quantization framework for long-context LLM serving. MeltKV employs a memory-aligned variable-bit index packing scheme that adaptively assigns bit-widths to grouped key channels and compactly stores indices within standard data-types, eliminating redundant bits. Additionally, head-wise codebook sharing reduces the total codebook size while maintaining accuracy. Experiments demonstrate that MeltKV effectively compresses KV representations to sub-4-bit levels down to 1 bit and, at comparable perplexity, achieves 48.1% lower memory usage and 52.9% lower latency than state-of-the-art VQ methods.
