---
title: "MiniWorld: Democratizing the Training of Video World Models from Scratch"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.01127"
authors: ["Yian Zhao", "Ruochong Zheng", "Hongcan Guo", "Yu Yan", "Jian Zhang", "Jie Chen"]
date: "2026-08-01T20:00:00.000Z"
score: 70
guid: "2608.01127"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.01127.png"
generated: "2026-08-06T19:05:18+05:30"
---

Video world models predict future observations conditioned on historical observations and control signals, enabling long-horizon generation through autoregressive state transitions. Unlike conventional video generation models that primarily capture visual appearance and motion, video world models learn the underlying dynamics governing environment evolution under agent actions, providing a foundation for embodied AI and interactive simulation. Recent progress has largely relied on adapting pretrained video generation models through post-training or distillation. Although effective, these approaches often require complex training pipelines, substantial computational resources, and suffer from the mismatch between bidirectional pretraining and causal streaming inference. Recent studies have shown that training autoregressive video world models from scratch is feasible and scalable. However, the community still lacks a lightweight, transparent, and fully reproducible baseline trainable end-to-end with modest computational resources. We present MiniWorld, a reproducible framework for training streaming video world models from scratch. MiniWorld employs a block-causal Video Diffusion Transformer trained with Flow Matching in the latent space of a pretrained Video VAE. Building on Diffusion Forcing, it adopts a chunk-wise non-decreasing noise schedule and two-stage continued training to improve temporal modeling and stability. During inference, MiniWorld combines a rolling KV cache with pipelined asynchronous denoising for efficient streaming generation under bounded computation. The entire model can be trained within several days on a single 8-GPU server. By releasing the training and inference codebase and pretrained checkpoints, we hope MiniWorld will facilitate future research on video world modeling.
