---
title: "Arrive and Survive: Scaling Safe Goal-Conditioned Policy Learning from One-Bit Failure Signals"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26571"
authors: ["Guopeng Li, Yiyang Duan, Yiru Jiao, Chengcheng Xu"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.26571v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26571v1 Announce Type: new Abstract: Contrastive reinforcement learning (CRL) scales effectively in goal-conditioned tasks by casting policy learning into a self-supervised contrastive objective. However, in a failure-terminated Markov decision process, established CRL considers pre-failure future goals only when constructing positive samples, without accounting for the probability mass removed by failure termination. Our theoretical analysis shows that this omission induces a systematic overestimation bias in goal-reaching values. Consequently, near-failure trajectories provide disproportionately strong supervision of success despite retaining little future occupancy. Unsafe actions can thereby be reinforced through catastrophic failure bootstrapping, leading to failed policy learning and unsustainable goal-reaching behaviours. To address this problem, we introduce two minimal yet strong corrections: mass-weighted InfoNCE corrects the overweighting of short surviving futures in critic learning, and a log-survival-mass score restores the missing survival mass in policy optimization. The resulting method, Safe Contrastive Reinforcement Learning (Safe-CRL), requires only the one-bit signal provided by failure termination to scale safe goal-conditioned policy learning. Across twelve failure-prone robot navigation and locomotion tasks, Safe-CRL consistently improves survival and substantially outperforms the Scaling-CRL baseline in goal-reaching performance. Additionally, deep Safe-CRL policies exhibit complex failure-avoidance behaviours. This study completes the CRL theory under failure termination and provides a scalable safe RL framework. The code is available via https://github.com/RomainLITUD/safe-crl.
