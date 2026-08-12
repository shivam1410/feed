---
title: "Critic-Free Pretraining for Efficient Online Reinforcement Learning Fine-Tuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10473"
authors: ["Daoyi Li, Yixian Zhang, Chao Yu, Wenbo Ding, Yu Wang"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.10473v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

arXiv:2608.10473v1 Announce Type: new Abstract: Offline-to-online (O2O) reinforcement learning aims to leverage policies pretrained on static datasets while improving them through online interaction. However, directly reusing an offline-trained critic can hinder online fine-tuning: as the policy and data distribution change rapidly, value estimates inherited from offline training may become misaligned with the online environment, leading to inaccurate policy improvement and inefficient exploration. To address this problem, we introduce \textbf{C}ritic-\textbf{F}ree \textbf{P}retraining: an efficient paradigm that completely abandons the approach of offline critic training, allowing a freshly initialized critic to adapt without inheriting biased estimates. CFP is compatible with various mainstream O2O algorithms and consistently matches or improves upon conventional O2O algorithms across a diverse set of tasks, with particularly pronounced gains on several challenging tasks.
