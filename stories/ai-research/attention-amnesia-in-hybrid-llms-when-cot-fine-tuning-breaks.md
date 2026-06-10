---
title: "Attention Amnesia in Hybrid LLMs: When CoT Fine-Tuning Breaks Long-Range Recall, and How to Fix It"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.11052"
authors: ["Xinyu Zhou", "Boyu Zhu", "Yi Xu", "Zhiwei Li", "Yingfa Chen", "Huiming Wang", "Zhijiang Guo"]
date: "2026-06-08T20:00:00.000Z"
score: 75
guid: "2606.11052"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.11052.png"
generated: "2026-06-10T19:39:28+05:30"
---

Chain-of-thought supervised fine-tuning degrades long-context recall in hybrid linear-attention models by biasing attention gradients toward short-range patterns, but a training-free method called QK-Restore can restore long-context capabilities by reverting query-key projections while preserving reasoning performance.
