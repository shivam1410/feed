---
title: "MemOnce: A Scalable Memory Architecture for Large Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.27973"
authors: ["Chang Nie", "Chaoyou Fu", "Songlin Liu", "Yiqing Hu", "Caifeng Shan"]
date: "2026-11-19T19:00:00.000Z"
score: 66
guid: "2611.27973"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.27973.png"
generated: "2026-11-23T19:04:08+05:30"
---

Deploying large language models (LLMs) in long-horizon and continual interactions requires maintaining reusable memory states for future inference, posing challenges for existing architectures. Standard Transformers accumulate layer-wise, token-level KV caches, incurring linear GPU memory growth and quadratic computational complexity as the context expands. In contrast, linear-time architectures compress history into fixed-size states, but struggle to retain fine-grained details. We introduce MemOnce, a foundation architecture that learns scalable memory states for language models. MemOnce is based on two core designs: (a) Memory encoder-decoder: it caches only a small subset of final-layer hidden states as compact memory representations and dynamically decodes them back into KV caches for attention layers; (b) Memory sparse attention: for each continual input, MemOnce adaptively retrieves relevant memory representations, with the sparse indices computed only once across layers. Coupling these two designs enables efficient on-the-fly memory loading and KV cache decoding, drastically reducing the GPU memory footprint and achieving linear-time complexity. We conduct extensive experiments to show that MemOnce outperforms Transformers and other architectures across varying model sizes, context lengths, and training paradigms (pretraining and post-training adaptation). In particular, adapting Qwen3.5-4B with MemOnce reduces memory state cache by 1313times and prefill latency by 6.9times at 1M context, and improves throughput by 3.5times and overall memory performance by +5.77%. Finally, MemOnce generalizes zero-shot to downstream representation tasks, achieving competitive results against specialized models.
