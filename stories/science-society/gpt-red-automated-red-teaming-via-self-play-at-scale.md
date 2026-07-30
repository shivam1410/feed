---
title: "GPT-Red: Automated Red Teaming via Self-Play at Scale"
category: "Science & Society"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.26115"
authors: ["Eric Wallace", "Christopher A. Choquette-Choo", "Nikhil Kandpal", "Sam Toyer", "Dylan Hunn", "Stephanie Lin", "Yuxin Wen", "Xiangyu Qi", "Christopher Wolff", "Zizhao Wang", "Milad Nasr", "Sicheng Zhu", "Chuan Guo", "Juan Felipe Cerón Uribe", "Kaiwen Wang", "Aiden Low", "Kai Xiao", "Kai Chen"]
date: "2026-07-27T20:00:00.000Z"
score: 70
guid: "2607.26115"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.26115.png"
generated: "2026-07-30T19:07:10+05:30"
---

OpenAI researchers introduced GPT-Red, an automated red-teaming agent trained via self-play to discover prompt injection attacks against frontier LLMs. Deployed at the scale of their largest RL post-training runs, GPT-Red reliably breaks past models up to GPT-5.5, discovers more successful attacks than human red-teamers, and generalizes to new environments and defender models. The system was used to adversarially train GPT-5.6, described as their most robust model to prompt injections to date. Researchers propose this creates a self-improvement flywheel: as each new GPT model becomes more robust, it provides better learning signal for stronger red-teamer agents.
