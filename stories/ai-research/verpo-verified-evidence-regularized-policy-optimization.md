---
title: "VERPO: Verified Evidence Regularized Policy Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.06100"
authors: ["Haijiang Li, Chengyu Lv, Yi Zhang, Zhibing Zhang, Rui Qian, Yuchen Zhang, Xiaofan Zhang, Mingshan Wang, Xiaofei Jing, Yu Tong, Cangqi Zhou"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.06100v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.06100v1 Announce Type: new Abstract: Verifiable outcome rewards guide language-model post-training, but sequence-level advantages do not identify which token-level decisions should be preserved or revised. Evidence-conditioned Teachers provide denser supervision by replaying sampled trajectories with privileged feedback. Yet indiscriminate imitation risks transferring formatting or reasoning-style shifts that do not support task success. We introduce VERPO, a Verified Evidence Regularized Policy Optimization framework that treats evidence as a proposal for policy correction while retaining the outcome objective. It separates evidence-free reference restoration from signed token-level evidence corrections. Fisher Evidence Contrast attenuates corrections along an estimated evidence-presence direction. A stopped token-wise ZPD controller scales acceptance according to local reward alignment and Fisher movement cost, while the reference channel remains independent of acceptance. Across five scientific-reasoning and tool-use tasks, the best variant on each backbone exceeds the strongest compared baseline in average score. The averages rise from 0.6826 to 0.6857 on Qwen3-4B, from 0.6895 to 0.7058 on Qwen3-8B, and from 0.4751 to 0.5657 on Llama-3.2-1B.
