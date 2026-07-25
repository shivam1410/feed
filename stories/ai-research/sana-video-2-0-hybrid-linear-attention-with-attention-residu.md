---
title: "SANA-Video 2.0: Hybrid Linear Attention with Attention Residuals for Efficient Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21553"
authors: ["Junsong Chen", "Jincheng Yu", "Yitong Li", "Shuchen Xue", "Haozhe Liu", "Jingyu Xin", "Yuyang Zhao", "Tian Ye", "Zhangjie Wu", "Zian Wang", "Daquan Zhou", "Ping Luo", "Song Han", "Enze Xie"]
date: "2026-07-22T20:00:00.000Z"
score: 77
guid: "2607.21553"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21553.png"
generated: "2026-07-25T21:42:33+05:30"
---

SANA-Video 2.0 generates high-quality 720p video on a single GPU using 5B and 14B hybrid diffusion transformers. Hybrid Linear-Softmax Attention combines linear attention (75%) with gated-softmax anchors (25%), avoiding quadratic scaling while maintaining token interactions. On a single H100, it achieves VBench score 84.30 at 480p in 13.2 seconds with 40-step sampling, matching larger models. The compiled forward pass runs 3.2x faster than full-softmax baselines at 720p/60 seconds. Block Attention Residuals boost representation depth by ~12%. From-scratch training enables effective hybrid learning without linearizing existing models.
