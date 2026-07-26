---
title: "SANA-Video 2.0: Hybrid Linear Attention with Attention Residuals for Efficient Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21553"
authors: ["Junsong Chen", "Jincheng Yu", "Yitong Li", "Shuchen Xue", "Haozhe Liu", "Jingyu Xin", "Yuyang Zhao", "Tian Ye", "Zhangjie Wu", "Zian Wang", "Daquan Zhou", "Ping Luo", "Song Han", "Enze Xie"]
date: "2026-07-22T20:00:00.000Z"
score: 85
guid: "2607.21553"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21553.png"
generated: "2026-07-26T22:35:53+05:30"
---

SANA-Video 2.0 is a hybrid video diffusion transformer (5B and 14B variants) that generates high-quality video up to 720p on a single GPU. It combines gated linear attention with periodic gated-softmax anchors (3:1 ratio) for efficient long-sequence processing matching full-softmax quality. Block Attention Residuals propagate refreshed representations across depth, boosting deep-layer rank by ~12%. With 40-step sampling, SANA-Video 2.0 achieves VBench score 84.30 in 13.2s at 480p on a single H100. Its compiled forward pass is 3.2x faster than matched full-softmax at 720p/60s, with expanding gains on longer videos.
