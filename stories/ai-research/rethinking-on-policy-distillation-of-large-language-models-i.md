---
title: "Rethinking On-Policy Distillation of Large Language Models II: One Training Example"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.04172"
authors: ["Zixuan Fu", "Bingxiang He", "Yuxin Zuo", "Haohuan Huang", "Jinqian Zhang", "Ruhang Xiao", "Cheng Qian", "Qinyu Luo", "Huan-ang Gao", "Yudong Wang", "Zhiyuan Liu", "Ning Ding", "Chaojun Xiao"]
date: "2026-09-02T20:00:00.000Z"
score: 80
guid: "2609.04172"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.04172.png"
generated: "2026-09-04T23:32:20+05:30"
---

On-policy distillation—where a smaller student model learns from a larger teacher through repeated queries and iterative refinement—improves substantially over hundreds of training steps even when initialized from a single query. However, student model alignment with full teacher behavior remains slow relative to the amount of teacher data collected. The research concludes the training bottleneck is algorithmic in nature—fundamentally about how effectively the student learns from teacher samples—rather than raw data insufficiency. This analysis suggests that algorithmic innovations in knowledge transfer mechanisms could substantially accelerate model compression, enabling faster and more efficient distillation of large models.
