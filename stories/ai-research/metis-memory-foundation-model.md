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
generated: "2026-08-01T19:05:30+05:30"
---

Most language model agents implement memory externally, but Metis introduces memory foundation models with native, integrated memory capabilities. The architecture features persistent memory state within the backbone and memory attention mechanisms for information retrieval. Training employs memory-specific data and optimization objectives at mid-training scale. Inference requires no gradient updates—only forward passes—making online maintenance gradient-free. Metis provides advantages in architecture fit, end-to-end optimization, and efficiency. This prototype demonstrates foundation models can internalize memory as first-class architectural component rather than relegating it to external modules, opening new design directions for stateful language models.
