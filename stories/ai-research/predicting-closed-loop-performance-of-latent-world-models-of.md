---
title: "Predicting Closed-Loop Performance of Latent World Models: Offline Checkpoint Selection for MPC and Model-Based RL Under Non-Markovian Rewards in LunarLander"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01736"
authors: ["Nikolai Smolyanskiy"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.01736v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01736v1 Announce Type: new Abstract: We study how to predict the downstream closed-loop performance of a learned latent world model from validation-time diagnostics alone. Choosing the right checkpoint from a world-model training run is difficult: validation loss and multi-step prediction RMSE keep improving long after closed-loop performance has collapsed. We present a suite of structural validation-time diagnostics drawn from optimal-control theory and apply them to Gymnasium's LunarLander v3, which features shaped rewards. We train an RSSM [5, 4] world model on it and treat per checkpoint CEM-MPC return as the oracle for closed-loop quality. By evaluating 40 metrics against this oracle, we find that the strongest single predictor is the Reward Observability Fraction (ROF), which measures the reward predictor's dependence on the observable subspace. We combine ROF with three structural regularizers into a single-number offline checkpoint selection score, the Composite Reward Observability Fraction (CROF). The CROF-selected world model trains a model-based A2C policy that beats a fairly evaluated model-free A2C baseline by ~24.5 return points while using ~65x fewer real-environment interactions, and the same world model also drives a strong zero-shot CEM-MPC policy. Code and data: https://github.com/nsmoly/LunarLander_RSSM.
