---
title: "Metis: Memory Foundation Model"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.26760"
authors: ["Zeyu Zhang", "Ziliang Guo", "Yihang Sun", "Xichong Zhang", "Xixuan Hao", "Zehao Lin", "Yang Zhang", "Xiaoyan Zhao", "Tong Shen", "Bo Tang", "Zhi-Qin John Xu", "Junchi Yan", "Haofen Wang", "Xu Chen", "Feiyu Xiong", "Zhiyu Li", "Tat-Seng Chua"]
date: "2026-07-28T20:00:00.000Z"
score: 80
guid: "2607.26760"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.26760.png"
generated: "2026-07-31T19:06:14+05:30"
---

Native memory built into foundation models replaces external memory modules with integrated state and attention mechanisms. Metis introduces persistent, dynamically evolving memory state within the backbone updated via gradient-free forward passes. Architecture enables end-to-end optimization and inference-time efficiency—all learned weights freeze while native memory states autonomously maintain task context. This approach combines advantages of implicit (parameter integration) and explicit (separate state) memory.
