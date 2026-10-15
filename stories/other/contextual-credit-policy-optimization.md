---
title: "Contextual Credit Policy Optimization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19103"
authors: ["Huiwen Han, Ziyao Zeng, Zihao Zhu, Sisong Bei, Hao Wang, Hongyu Xu, Yan Han, Degui Zhi, Zhiwen Fan"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19103v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Group-based reinforcement learning enables large language model agents to learn from sparse outcome rewards in long-horizon tasks. Recent methods derive step-level credit by comparing observation-matched experiences across trajectories. However, identical observations can occur in different contexts, and matched peers are not equally informative for a given decision. Moreover, favorable terminal outcomes can obscure redundant actions or detours within successful trajectories. To address these two challenges, we propose Contextual Credit Policy Optimization (CCPO). For the first, CCPO weights observation-matched peers from other trajectories by contextual similarity, computed from frozen LLM representations and accumulated trajectory statistics, allowing peers from similar contexts to contribute more to a step's baseline. For the second, CCPO pairs historical credit, which compares the realized return against the weighted peer baseline, with future credit, which measures the change in contextual outcome value over a short realized continuation. A step is thus credited for the progress it makes, not only for its trajectory's eventual outcome. Both credits are computed in hindsight from rollouts already collected for training, enabling CCPO to address these challenges without an auxiliary value critic. Across two Qwen2.5-Instruct backbones (1.5B and 7B), CCPO achieves up to 97.4% success on ALFWorld and 79.4% on WebShop and outperforms GRPO by up to 21.6 and 18.5 points. Ablations show that contextual weighting outperforms uniform weighting, and that historical and future credit serve as complementary learning signals.
