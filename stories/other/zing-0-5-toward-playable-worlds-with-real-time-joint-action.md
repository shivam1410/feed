---
title: "Zing-0.5: Toward Playable Worlds with Real-Time Joint Action and Text Control"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.17909"
authors: ["Mingyang Chen", "Shengdong Chen", "Xiaoxiao Fu", "Bosheng Gong", "Haoyuan Guo", "Bowen Li", "Jiawen Li", "Kejun Li", "Tianpeng Li", "Yin Liu", "Haoze Sun", "Zeyang Tian", "Meng Wang", "Xinmiao Wu", "Jiangqiao Yan", "Zining Zhao"]
date: "2026-09-14T20:00:00.000Z"
score: ""
guid: "2609.17909"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.17909.png"
generated: "2026-09-17T19:00:24+05:30"
---

We introduce Zing-0.5, a 5B autoregressive world model designed for playability: users can explore generated worlds, influence unfolding events, and respond to the resulting feedback through joint keyboard and online text control. Our approach brings together three technical contributions: (1) Unified action and text conditioning, combining magnitude-aware keyboard inputs with temporally aligned text instructions and jointly annotated videos to learn navigation and event control within the same sequence; (2) Event-scale supervision for incremental generation, using a segment-level teacher trained on connected multi-prompt videos to supervise a block-level causal student through distribution-matching distillation; and (3) Low-cost real-time interaction, combining four-step generation with context-preserving streaming to support 832 x 480 inference at 24 FPS at an estimated server rental cost of approximately USD 0.009 per stream-minute. Zing-0.5 achieves an overall score of 81.0 and a consistency score of 88.5 across 158 WBench Navigation cases. A joint-control demonstration shows a text-directed event change during continued navigation without restarting generation. We release the model weights, inference code, and Zing-SGLang serving implementation to support further work on playable generated worlds.
