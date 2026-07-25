---
title: "Streaming Multi-Agent Autoregressive Diffusion Model with World State Registers"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21594"
authors: ["Sicheng Mo", "Yuheng Li", "Ziyang Leng", "Krishna Kumar Singh", "Bolei Zhou"]
date: "2026-07-22T20:00:00.000Z"
score: 76
guid: "2607.21594"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21594.png"
generated: "2026-07-25T21:42:33+05:30"
---

WorldWeaver (W²) is a streaming multi-agent video diffusion model maintaining consistent world states via learnable world-state registers. These registers store shared world information and individual agent status, updating dynamically after each generated chunk. Unlike prior pipelines relying solely on observation history, explicit world-state modeling preserves consistency across agents and viewpoints. Mixture-of-Transformers architecture uses separate weights for world-state and visual-frame modeling. Supervision signals span individual agent status, bird's-eye views, and scene text. Two-agent Minecraft experiments demonstrate explicit world-state modeling significantly improves logical consistency and generation quality.
