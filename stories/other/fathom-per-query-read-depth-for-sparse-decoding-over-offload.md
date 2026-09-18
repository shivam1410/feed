---
title: "Fathom: Per-Query Read Depth for Sparse Decoding over Offloaded KV Caches"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.17652"
authors: ["Vivek Kalyanarangan"]
date: "2026-09-14T20:00:00.000Z"
score: ""
guid: "2609.17652"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.17652.png"
generated: "2026-09-18T20:52:59+05:30"
---

When agentic sessions run to a million tokens with many sessions resident at once, the KV cache and the index that ranks it live in host memory, and the scan that ranks all n keys for a top-k step becomes the traffic that bounds decoding. We present Fathom, a key scan in which each query decides how many bits of each key channel to read. The 4-bit K cache is stored channel-major as bit planes, so a prefix of t planes is exactly the channel's t-bit quantizer, and the query spends its bit budget by reverse water-filling over the variance-weighted importance of its channels. At one million tokens on Qwen3-8B a decode step is 1.67x faster in GPU time than with the 136-bit scans of Double Sparsity, Loki and SparQ r=32, and in the same GPU time as SparQ's 68-bit read (r=16) Fathom reads 18% fewer bytes with lower attention error on six of seven model and context settings. On RULER-style tasks every per-token scan matches exact top-k decoding, and on real coding-agent sessions Fathom reaches the step agreement of the most accurate 136-bit scan at 92 bits. The store is the 4-bit K copy a quantized serving stack already holds, and the method is not faster when the index is resident in GPU memory.
