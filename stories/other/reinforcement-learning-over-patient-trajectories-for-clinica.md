---
title: "Reinforcement Learning over Patient Trajectories for Clinical Reasoning in EHR Foundation Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12277"
authors: ["Yuxin Xiao, Sheng Zhang, Chandan Singh, Tristan Naumann, Hoifung Poon, Jianfeng Gao, Xiaodong Liu"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12277v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12277v1 Announce Type: new Abstract: Electronic health record (EHR) foundation models trained on longitudinal patient trajectories have demonstrated strong performance across diverse clinical prediction tasks. However, their clinical reasoning capabilities remain constrained by next-token prediction on limited and incomplete EHR data. To address this, we propose a reinforcement learning (RL) fine-tuning framework that treats EHR foundation models as generative policies over patient trajectories. We formulate common clinical prediction problems (e.g., hospital readmission) as event-conditioned, time-windowed reasoning tasks. We then design time-aware, rollout-sensitive rewards to account for finite rollout lengths and temporally inconclusive outcomes. We find that RL fine-tuning consistently improves over pre-trained backbones and strong baselines. Notably, it enables smaller models to surpass larger pre-trained models in data-limited regimes and induces positive transfer across tasks. Further analysis shows that RL fine-tuned models generate trajectories with stronger structural and semantic alignment to ground truth and greater downstream utility.
