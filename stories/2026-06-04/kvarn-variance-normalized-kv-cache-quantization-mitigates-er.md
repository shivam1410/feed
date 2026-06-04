---
title: "KVarN: Variance-Normalized KV-Cache Quantization Mitigates Error Accumulation in Reasoning Tasks"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.03458"
authors: ["Lorenz K. Muller", "Philippe Bich", "Chiara Boretti", "Hyun-Min Chang", "Jiawei Zhuang", "Lukas Cavigelli"]
date: "2026-06-01T20:00:00.000Z"
score: 70
why: "Optimizes LLM memory for long-context reasoning"
guid: "2606.03458"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.03458.png"
generated: "2026-06-04T02:25:37+05:30"
---

KVarN addresses a critical bottleneck in running large language models: managing exploding memory demands during token-by-token generation. As LLMs produce long outputs, they accumulate a growing key-value cache that consumes GPU memory. KVarN applies variance-normalized quantization with Hadamard rotation, compressing this cache without requiring model-specific calibration—meaning it works immediately with any LLM. The dual-scaling approach prevents error accumulation that typically compounds over long reasoning chains, degrading output quality. This is especially valuable for LLM agents maintaining long context windows or executing extended chains of thought. KVarN enables deployment on memory-constrained hardware while preserving the reasoning quality essential for scientific and engineering tasks.

## From the source

KVarN is a calibration-free KV-cache quantizer that uses Hadamard rotation and dual-scaling variance normalization to reduce error accumulation during autoregressive decoding in large language models.
