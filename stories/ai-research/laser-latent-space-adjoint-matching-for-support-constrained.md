---
title: "LASER: Latent Space Adjoint Matching for Support-Constrained Entropy-Regularized Offline RL"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08989"
authors: ["Songyuan Zhang, Oswin So, Eric Yang Yu, Matthew Cleaveland, Peter Crowley-Dolen, Chuchu Fan"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2610.08989v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

While offline reinforcement learning (RL) enables policy optimization from static datasets without costly online interaction, it remains bottlenecked by the risk of executing out-of-distribution (OOD) actions. Recent approaches mitigate this by learning a behavior-cloning policy through flow matching and then performing RL within its constrained latent space. However, naively optimizing the latent policy can easily cause the policy to collapse into a brittle mode or exploit sharp artifacts of the learned critic. In this work, we find that entropy regularization is essential in latent-space RL for addressing these challenges. We introduce LASER, a novel offline RL algorithm that applies latent-space adjoint matching to achieve entropy-regularized latent-space RL with expressive flow policies while avoiding backpropagation through time. Through comprehensive experiments on 40 challenging OGBench tasks with varying dataset qualities, we show that LASER achieves state-of-the-art performance. Notably, LASER uses fixed method-specific hyperparameters across all tasks and outperforms the evaluated baselines, including those with task- and dataset-specific tuning, which highlights the robust applicability of LASER. Project website: https://mit-realm.github.io/laser/.
