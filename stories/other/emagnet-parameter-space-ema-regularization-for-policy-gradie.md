---
title: "EMAgnet: Parameter-Space EMA Regularization for Policy Gradient Self-Play in Large Games"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23995"
authors: ["Tristan Maidment, JB Lanier, Chase McDonald, Nathan Tsang, Eugene Vinitsky, Roy Fox, Albert Wang, Wesley N. Kerr"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23995v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23995v1 Announce Type: new Abstract: Recent work has established that regularized policy gradient methods such as PPO, when used in self-play, can match or exceed specialized game-theoretic algorithms for solving two-player zero-sum imperfect-information games. The uniform distribution has emerged as a strong policy regularization target for this purpose, but it regularizes equally toward all actions regardless of their viability. We introduce EMAgnet, which instead regularizes toward an exponential moving average (EMA) of the last-iterate policy's parameters, providing an adaptive regularization target that evolves with the agent's improving strategy. We evaluate EMAgnet on both standard two-player zero-sum benchmarks and modified benchmarks with exploration challenges and large numbers of strictly dominated strategies. Relative to PPO self-play with uniform-magnet regularization under both linear and power-law annealing schedules, EMAgnet achieves lower exploitability in the majority of tested environments, with consistent performance gains across games containing strictly dominated strategies.
