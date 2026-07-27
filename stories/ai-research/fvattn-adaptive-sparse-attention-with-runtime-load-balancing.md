---
title: "FVAttn: Adaptive Sparse Attention with Runtime Load Balancing for Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.16190"
authors: ["Hao Liu", "Chenghuan Huang", "Ye Huang", "Zhiying Wen", "Hao Liu", "Mohan Zhang", "Chen Li", "Ziyang Ma", "Jing Lyu", "Jiangsu Du"]
date: "2026-07-16T20:00:00.000Z"
score: 75
guid: "2607.16190"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.16190.png"
generated: "2026-07-27T19:07:27+05:30"
---

Video Diffusion Transformers process long spatio-temporal sequences, making self-attention the main bottleneck in high-resolution video generation. Training-free sparse attention reduces this cost, but adaptive Top-p routing creates uneven per-head workloads under multi-GPU sequence parallelism. The resulting workload heterogeneity turns sparse attention into a rank-level straggler problem. We present , a training-free sparse-attention system that improves the distributed execution efficiency of adaptive sparse attention under multi-GPU sequence parallelism.  uses Top-p routing, a Top-k safety floor, and video-aware block organization as the sparse-routing frontend, then repairs the materialized mask at runtime. Runtime Load Balancing migrates a small number of heavy heads via P2P communication to shorten the current critical path. Slack-Aware Sparse Augmentation fills residual non-critical-rank slack with additional high-value blocks, while overlap hides scheduling and migration overhead behind existing computation. On step-distilled Wan2.2 I2V,  reduces average load imbalance from 1.34 to 1.08 and delivers a 4.41times attention speedup over FlashAttention, while achieving a 2.02--2.11times DiT inference speedup with competitive video quality.
