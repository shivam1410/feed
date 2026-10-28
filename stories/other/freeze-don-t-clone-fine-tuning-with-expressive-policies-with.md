---
title: "Freeze, Don't Clone: Fine-Tuning with Expressive Policies Without Retaining Offline Data"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36247"
authors: ["Sami Nur Islam, Johan Obando-Ceron, Doina Precup, Aaron Courville, Pablo Samuel Castro"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36247v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Offline-to-online reinforcement learning uses offline pretraining to accelerate subsequent online learning. While many methods assume the offline dataset remains available throughout fine-tuning, there are many settings where this is not the case. Prior work attributes failures in this setting primarily to critic recalibration under distribution shift. We identify a complementary actor-side failure: once the offline data disappears, continued behavioral cloning (BC) no longer preserves the offline behavior distribution and instead refits the behavioral model to the agent's limited, and nonstationary, online experience. We demonstrate that stopping online behavioral fitting while preserving the pretrained expressive prior substantially improves no-retention fine-tuning across implicit flow Q-learning (IFQL), flow Q-learning (FQL), and action-chunked RL (QC) on seven OGBench domains. We trace this failure to a behavioral feedback loop: continuing online behavioral cloning rapidly erases the pretrained prior, inducing representational collapse and action diversity loss that starves the critic of useful exploration. Freezing the prior breaks this cycle, preserving offline coverage while allowing value learning to drive continuous improvement.
