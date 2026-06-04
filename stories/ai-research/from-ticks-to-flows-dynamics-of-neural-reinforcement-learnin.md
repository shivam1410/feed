---
title: "From Ticks to Flows: Dynamics of Neural Reinforcement Learning in Continuous Environments"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04275"
authors: ["Saket Tiwari, Tejas Kotwal, George Konidaris"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.04275v1"
image: ""
generated: "2026-06-05T02:55:12+05:30"
---

arXiv:2606.04275v1 Announce Type: new Abstract: We present a novel theoretical framework for deep reinforcement learning (RL) in continuous environments by modeling the problem as a continuous-time stochastic process, drawing on insights from stochastic control. Building on previous work, we introduce a viable model of actor-critic algorithm that incorporates both exploration and stochastic transitions. For single-hidden-layer neural networks, we show that the state of the environment can be formulated as a two time scale process: the environment time and the gradient time. Within this formulation, we characterize how the time-dependent random variables that represent the environment's state and estimate of the cumulative discounted return evolve over gradient steps in the infinite width limit of two-layer networks. Using the theory of stochastic differential equations, we derive, for the first time in continuous RL, an equation describing the infinitesimal change in the state distribution at each gradient step, under a vanishingly small learning rate. Overall, our work provides a novel nonparametric formulation for studying overparametrized neural actor-critic algorithms. We empirically corroborate our theoretical result using a toy continuous control task.
