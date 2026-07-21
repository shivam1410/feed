---
title: "From Outcomes to Actions: Leveraging Hindsight for Long-Horizon Language Agent Training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16257"
authors: ["Zishang Jiang, Tingyun Li, Jinyi Han, Xinyi Wang, Sihang Jiang, Yizhou Ying, Xiaojun Meng, Jiansheng Wei, Jiaqing Liang, Yanghua Xiao"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.16257v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16257v1 Announce Type: new Abstract: Reinforcement learning (RL) has become a widely adopted technique for improving large language models (LLMs) on complex tasks. Despite this progress, existing RL methods still face challenges in training agents with longer-horizon interactions. One major bottleneck is distinguishing the contribution of different actions in long-horizon interaction, leading to high optimization variance. To address this, we introduce a novel policy gradient method, Hindsight Policy Optimization (HPO), that projects both the current policy distribution and the hindsight distribution into an intent space and extracts low-variance learning signals from the Wasserstein distance between them. We theoretically and empirically show that aggregating semantically similar states and actions in the intent space yields a bounded-variance estimator and improves policy performance stably. Our code is available online.
