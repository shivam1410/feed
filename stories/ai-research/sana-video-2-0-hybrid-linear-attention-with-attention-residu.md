---
title: "SANA-Video 2.0: Hybrid Linear Attention with Attention Residuals for Efficient Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21553"
authors: ["Junsong Chen", "Jincheng Yu", "Yitong Li", "Shuchen Xue", "Haozhe Liu", "Jingyu Xin", "Yuyang Zhao", "Tian Ye", "Zhangjie Wu", "Zian Wang", "Daquan Zhou", "Ping Luo", "Song Han", "Enze Xie"]
date: "2026-07-22T20:00:00.000Z"
score: 80
guid: "2607.21553"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21553.png"
generated: "2026-07-24T19:06:17+05:30"
---

SANA-Video 2.0 generates high-quality 720p video on a single GPU using hybrid attention combining gated linear attention with periodic softmax anchors at a 3:1 ratio. Models at 5B and 14B parameters achieved a VBench score of 84.30 at 480p in 13.2 seconds, with the forward pass 3.2x faster than full-softmax baselines at 720p. Block Attention Residuals boost deep-layer token interactions by 12%, enabling practical video generation without massive compute.
