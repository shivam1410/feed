---
title: "Chimera: Designing and Chinchilla-Scaling Hybrid Visual Diffusion Transformers"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.28611"
authors: ["Chongjian Ge", "Hanwen Jiang", "Tianyu Wang", "Jiuxiang Gu", "Yiran Xu", "Ziwen Chen", "Shaoteng Liu", "Jing Shi", "Yicong Hong", "Zefan Cai", "Hailin Jin", "Hao Tan"]
date: "2026-07-29T20:00:00.000Z"
score: 80
guid: "2607.28611"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.28611.png"
generated: "2026-08-01T19:05:30+05:30"
---

High-resolution images and long videos require avoiding quadratic computation cost of full attention. Chimera combines Kimi Delta Attention (linear O(N) complexity), Multi-head Latent Attention for global interaction, and modality-aware convolutions in 11-billion-parameter architecture with only 2 billion activated parameters. Innovative scaling scheme HeteroP transfers hyperparameters across heterogeneous modules using functional fan-in and depth, fitting Chinchilla-style compute-optimal laws. Results show dense backbone achieves 1.7× compute efficiency versus matched full-attention baseline; complete system reaches 7.3× efficiency. Without length-specific fine-tuning, Chimera extrapolates zero-shot from 5-second training clips to 30-second videos.
