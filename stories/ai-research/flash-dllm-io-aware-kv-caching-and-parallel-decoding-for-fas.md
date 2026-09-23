---
title: "Flash-dLLM: IO-Aware KV Caching and Parallel Decoding for Fast, Memory-Efficient Diffusion LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.26796"
authors: ["Quan Nguyen-Tri", "Mukul Ranjan", "Zhiqiang Shen"]
date: "2026-09-21T20:00:00.000Z"
score: 65
guid: "2609.26796"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.26796.png"
generated: "2026-09-23T19:07:00+05:30"
---

Diffusion Large Language Models (dLLMs) have recently emerged as a promising alternative to autoregressive LLMs by enabling non-autoregressive text generation. However, their practical deployment remains limited by inefficient inference, largely due to the absence of effective Key-Value (KV) caching and scalable parallel decoding mechanisms. Existing acceleration methods typically study KV caching and parallel decoding in isolation, overlooking the I/O bottlenecks that arise when cache reuse and parallel token verification are jointly applied. In this work, we introduce Flash-dLLM, a training-free inference acceleration framework for fast and memory-efficient dLLMs. Flash-dLLM first identifies GPU memory I/O as a dominant bottleneck in KV-cache-enabled dLLM inference and addresses it with an I/O-aware fused KV-cache kernel that reduces redundant memory movement. Building on this optimized cache mechanism, Flash-dLLM further proposes an efficient KV-cache-driven draft-and-verify decoding strategy, where the dLLM itself serves as both drafter and verifier without requiring an auxiliary model. This unified design enables faster decoding while preserving generation quality and improving scalability to longer sequences and larger batch size. Extensive experiments on mathematical reasoning and code-generation benchmarks demonstrate that Flash-dLLM consistently outperforms existing state-of-the-art dLLM acceleration methods in both inference speed and memory efficiency. In particular, it achieves 5.1times and 11.0times speedups over prior strongest baseline Elastic-Cache on GSM8K and HumanEval, respectively.
