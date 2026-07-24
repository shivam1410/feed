---
title: "Codec-Gauge: Learning Compression-Friendly Gauges for Transformer KV Caches"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20538"
authors: ["Yitao Jiang, Yaoqing Yang, Luyang Zhao, Muhao Chen, Devin Balkcom"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2607.20538v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20538v1 Announce Type: new Abstract: Long-context Transformer inference increasingly relies on KV-cache compression or quantization. Prior rotation and transform-coding results suggest that the channel basis of each key/value vector affects how faithfully a fixed backend preserves model behavior. We introduce Codec-Gauge, a post-training cache-coordinate layer that learns small orthogonal channel transforms around existing compression and quantization backends. Its frequency-distribution objective combines a token-channel DCT spectral-centroid loss with a smooth rate proxy to concentrate KV energy in low-frequency codec-facing layouts. We evaluate actual compression and decompression using measured bytes and rolling compressed-history scoring. Across six models at $3$, $4$, and $6$ bits/value, learned gauges reduce zfp KL divergence by $44.0\%$ on average relative to raw coordinates and outperform random, Hadamard, DCT, and PCA/KLT controls. The same gauges improve quality preservation for block-uniform and KIVI-style quantization. Experiments on a 27B model and long-context task prompts reproduce the quality trend, while serial storage and timing measurements validate the implemented compressed-cache paths. These results establish cache-coordinate geometry as a practical post-training variable for improving compression fidelity without changing model weights, attention semantics, or backend coding rules.
