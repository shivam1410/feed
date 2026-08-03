---
title: "Toward Robust and 3D-Aware RGB-NIR Imaging in the Dark"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.29684"
authors: ["Muyao Niu", "Mingze Ma", "Yifan Zhan", "Qingtian Zhu", "Zhihang Zhong", "Wei Guo", "Chang Wen Chen", "Yinqiang Zheng"]
date: "2026-07-30T20:00:00.000Z"
score: 65
guid: "2607.29684"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.29684.png"
generated: "2026-08-03T19:06:42+05:30"
---

Robust low-light imaging remains challenging for the community. Recent studies have explored fusing Near-Infrared (NIR) with noisy RGB to achieve improved enhancement, yet most methods depend on carefully curated training data pairs, with limited robustness under different scenarios. This paper offers a new perspective for RGB-NIR low-light imaging by incorporating 3D-aware neural modeling. Without using clean RGB supervision, a powerful model can be optimized to implicitly fuse extremely noisy RGB observations with NIR cues in 3D space, effectively recovering clean RGB images. The proposed model obviates the requirement for clean RGB data collection, generalizes across different noise levels. Extensive evaluations on synthetic and real data demonstrate its superiority. Codes available: https://github.com/MyNiuuu/3DarkFusion
