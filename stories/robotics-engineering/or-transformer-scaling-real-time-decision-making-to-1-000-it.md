---
title: "OR-Transformer: Scaling Real-Time Decision-Making to 1,000 Items"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01933"
authors: ["Shuze Daniel Liu, David Simchi-Levi, Claire Chen, Chutong Gao, Shangtong Zhang"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.01933v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01933v1 Announce Type: new Abstract: Modern supply chain operations can require coordinating replenishment across thousands of heterogeneous items under correlated stochastic demand, heterogeneous lead times, and shared fixed ordering costs, yielding observation spaces exceeding $10^4$ dimensions. At this scale, rolling-horizon stochastic mixed-integer linear programs (MILPs) become prohibitively slow, while standard reinforcement learning (RL) methods face increasingly challenging credit assignment in high-dimensional action spaces. We introduce OR-Transformer, a deep reinforcement learning framework for joint replenishment under stochastic demand, with an item-permutation-equivariant Transformer architecture and pathwise-gradient training through the inventory dynamics. Across problem sizes up to 1,024 inventory items, OR-Transformer increasingly outperforms learning-based and rolling-horizon MILP baselines as scale grows. It also reduces online decision-making time by over 4 million times relative to MILP solvers, enabling real-time, large-scale deep RL in supply chain operations.
