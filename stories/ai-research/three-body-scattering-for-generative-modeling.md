---
title: "Three-Body Scattering for Generative Modeling"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.18198"
authors: ["Peng Sun", "Zhenglin Cheng", "Deyuan Liu", "Jun Xie", "Xinyi Shang", "Tao Lin"]
date: "2026-07-19T20:00:00.000Z"
score: 76
guid: "2607.18198"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.18198.png"
generated: "2026-07-27T19:07:27+05:30"
---

Researchers introduce Three-Body Scattering Modeling (TBSM), a novel generative approach using physics-inspired energy-based supervision instead of adversarial critics or prescribed noise paths. Each data point is attracted to real examples and repelled from generated ones, creating O(B) sample-level losses. On ImageNet-256, TBSM achieves FID scores of 2.23 (pixel-space PixelDiT-XL) and 1.63 (latent-space DiT-XL) generating images in a single step. This matters because one-step generation dramatically reduces computational costs compared to iterative diffusion models while maintaining competitive quality.
