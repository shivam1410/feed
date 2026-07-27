---
title: "SANA-Video 2.0: Hybrid Linear Attention with Attention Residuals for Efficient Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21553"
authors: ["Junsong Chen", "Jincheng Yu", "Yitong Li", "Shuchen Xue", "Haozhe Liu", "Jingyu Xin", "Yuyang Zhao", "Tian Ye", "Zhangjie Wu", "Zian Wang", "Daquan Zhou", "Ping Luo", "Song Han", "Enze Xie"]
date: "2026-07-22T20:00:00.000Z"
score: 76
guid: "2607.21553"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21553.png"
generated: "2026-07-27T19:07:27+05:30"
---

SANA-Video 2.0 is a 5B and 14B parameter video diffusion transformer generating high-quality 720p video on a single GPU using hybrid linear-softmax attention. The architecture combines gated linear attention with periodic gated-softmax anchors (3:1 ratio) plus Block Attention Residuals that boost effective rank. On a single H100 at 480p with 40-step sampling, it achieves VBench score 84.30 in 13.2 seconds and runs 3.2x faster than full-softmax models at 720p. This matters because efficient architectures democratize high-quality video generation to resource-constrained settings.
