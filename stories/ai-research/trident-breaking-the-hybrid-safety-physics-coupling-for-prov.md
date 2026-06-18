---
title: "TRIDENT: Breaking the Hybrid-Safety-Physics Coupling for Provably Safe Multi-Agent Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18308"
authors: ["Zijie Meng, Ziwei Li, Yufei Liu, Zhiyu Li, Jiyuan Liu, Wenhua Nie, Bingcai Wei, Miao Zhang"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 74
guid: "oai:arXiv.org:2606.18308v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18308v1 Announce Type: new Abstract: Safe coordination in networked cyber-physical systems forces learning algorithms to simultaneously handle hybrid discrete-continuous actions, hard training-time safety constraints, and physics-governed dynamics. We show that these three features form a directed cycle of biases that defeats any naive composition of off-the-shelf modules, and formalize this as a three-way coupling lemma. We then introduce TRIDENT, the first MARL framework whose three components are co-designed to cancel each leak: a Richardson-Romberg gradient correction reducing Gumbel-Softmax bias from O(tau) to O(tau^2), a Lyapunov-constrained sequential trust-region update enforcing per-iterate feasibility, and a physics-informed residual critic that decomposes value rather than reward. We prove an O~(1/sqrt(K)) convergence rate to a constrained Nash equilibrium and an O(sqrt(K)) cumulative-violation bound. On multi-UAV mobile-edge computing, autonomous intersection management, and a hybrid SMAC variant, TRIDENT cuts training-time violations by 95.5% over MADDPG and 76.3% over MACPO, while improving reward by 13.5% over the strongest unconstrained baseline.
