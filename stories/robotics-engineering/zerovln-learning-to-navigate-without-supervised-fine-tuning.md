---
title: "ZeroVLN: Learning to Navigate without Supervised Fine-Tuning of the VLM Brain"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.26414"
authors: ["Zixuan Huang", "Yang Zhou", "Guli Zhang", "Sunzhu Li", "Hongyan Xie", "Zehao Chen", "Fuzhen Zhuang", "Kaixuan Wang", "Xiaozhi Chen", "Yikun Ban", "Deqing Wang"]
date: "2026-11-18T19:00:00.000Z"
score: 45
guid: "2611.26414"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.26414.png"
generated: "2026-11-20T19:04:50+05:30"
---

Navigation can be learned without retraining the vision-language model's core brain on navigation data. ZeroVLN pairs a slow language brain with a fast action expert. The brain calls tools through a semantic interface, and closed-loop reinforcement learning keeps the two coordinated. It improves results on VLN-CE, a navigation benchmark, while keeping the model's general visual skills intact. That matters because the model stays useful for other visual tasks.
