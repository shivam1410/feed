---
title: "MintAct: A Unified Visual Agent for Digital Environments"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.22083"
authors: ["Mingfei Gao", "Rui Tian", "Haiming Gang", "Bohan Zhai", "Le Zhang", "Yuanzheng Gong", "Di Feng", "Ege Özsoy", "Kaixin Ma", "Vishwesh Kirthivasan", "Oğuzhan Fatih Kar", "Roman Bachmann", "Anders Boesen Lindbo Larsen", "Afshin Dehghan"]
date: "2026-09-17T20:00:00.000Z"
score: 70
guid: "2609.22083"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.22083.png"
generated: "2026-09-21T19:05:57+05:30"
---

We present MintAct, a family of vision-language models that unifies UI grounding, multi-step navigation across mobile, desktop, and web, and visual tool use, trained at 2B, 4B, and 8B scales. Through careful design of our environments, data, and training recipes, MintAct models match the performance of per-domain specialists across all of these capabilities. To enable this, we develop a scalable environment and reinforcement learning (RL) infrastructure. On the environment side, we host hundreds of concurrent instances across heterogeneous per-domain backends, serving both trajectory data collection and online RL. To enable efficient and scalable RL training, an asynchronous framework keeps explicit control over the cross-domain training distribution and remains stable under noisy environment feedback and off-policy drift. Experimental results show that MintAct achieves state-of-the-art performance (48.9 on OSWorld-Verified) across a wide range of benchmarks at comparable model sizes.
