---
title: "Structural Dual Adaptation for Safe Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00636"
authors: ["Runsheng Yu, Zhuoyang Song, Zengde Deng, Qixin Zhang, Li Shen, Jiaxing Zhang"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 38
guid: "oai:arXiv.org:2611.00636v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Primal-dual methods enforce safety constraints in reinforcement learning through Lagrangian relaxation. For a fixed policy, the exact bounded multiplier response exhibits bang-bang switching at the constraint boundary. Practical gradient updates can oscillate through coupling with policy optimization. We propose Structural DuaL Adaptation (SDLA), which replaces this bang-bang response with a unique continuous response through current-cost centering, trajectory weighting, and quadratic regularization. We characterize activation thresholds and response sensitivity. Ternary search computes multipliers without a dual gradient stepsize. For entropy-regularized tabular policies, we bound equilibrium constraint violations alongside reward gaps. We establish convergence of delayed updates under mild assumptions. Neural PPO/SAC experiments on OmniSafe and HASARD demonstrate competitive rewards with improved constraint tracking. On HASARD, PPO-SDLA achieves higher reported mean reward than the human baseline in six of eighteen settings while meeting the respective mean-cost budgets, including four with lower mean cost. To the best of our knowledge, this is the first report of higher mean reward at lower mean cost than the human baseline across multiple HASARD settings.
