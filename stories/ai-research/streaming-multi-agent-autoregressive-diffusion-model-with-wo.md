---
title: "Streaming Multi-Agent Autoregressive Diffusion Model with World State Registers"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21594"
authors: ["Sicheng Mo", "Yuheng Li", "Ziyang Leng", "Krishna Kumar Singh", "Bolei Zhou"]
date: "2026-07-22T20:00:00.000Z"
score: 85
guid: "2607.21594"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21594.png"
generated: "2026-07-26T22:35:53+05:30"
---

WorldWeaver (W²) augments multi-agent video diffusion with learnable world-state registers—tokens that store shared world information, track individual agent status, and dynamically update after each generated chunk. A Mixture-of-Transformers design separates weights for world-state modeling from visual-frame modeling. Supervision signals span individual agent status, global views including bird's-eye perspectives, and scene text. In two-agent Minecraft video generation, explicit world-state modeling substantially improves logical consistency and generation quality by maintaining persistent shared state across agents and views—solving a fundamental problem where observation history alone cannot adequately preserve multi-agent coherence.
