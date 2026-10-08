---
title: "STEPQuant: When and Where Errors Matter in Delta-Rule Recurrent State Quantization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.38169"
authors: ["Bingchen Yao", "Haobo Xu", "Haokun Lin", "Yichen Wu", "Ziyu Guo", "Renrui Zhang", "Zhichao Lu", "Zhenan Sun", "Ying Wei"]
date: "2026-09-28T20:00:00.000Z"
score: 62
guid: "2609.38169"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.38169.png"
generated: "2026-10-08T19:08:02+05:30"
---

Linear attention replaces growing KV caches with fixed-size recurrent states, yet these persistent states can become a substantial memory bottleneck under concurrent serving. Directly quantizing recurrent states to low precision often leads to severe accuracy degradation, as quantization errors propagate through successive state updates. We discover that the impact of these errors depends on two complementary dimensions: temporally, errors in long-lived memory can persist across many decoding steps; spatially, errors in different key rows affect model outputs differently, while state magnitudes vary substantially along both rows and columns. Motivated by these observations, we propose STEPQuant, a spatial-temporal post-training quantization framework for Delta-rule recurrent states. STEPQuant allocates precision according to error magnitude and memory lifetime, and jointly fits key-row and value-column scales based on state distributions and key-row impact on output error. Experiments on Qwen3.8-27B and Kimi-Linear-48B-A3B-Instruct across both long- and short-generation benchmarks show that STEPQuant closely matches FP32-state accuracy under a nominal 6-bit budget and outperforms uniform INT8 in its 4-bit configuration. Integrated into SGLang with optimized GPU kernels, 6-bit STEPQuant achieves over 5x recurrent-state compression and reduces total serving memory by up to 68.7%. Our code is available at https://github.com/Dreamer-Toby/STEPQuant.
