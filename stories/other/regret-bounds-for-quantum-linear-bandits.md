---
title: "Regret Bounds for Quantum Linear Bandits"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15237"
authors: ["Maoli Liu, Zhuohua Li, John C. S. Lui"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15237v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

We study $d$-dimensional quantum linear bandits with bounded rewards, where the learner selects an action and queries its quantum reward oracle or its inverse in each round. For general action sets, existing algorithms achieve regret $O(d^{3/2}\operatorname{polylog}(T))$ over $T$ rounds. Prior work established a lower bound of $\Omega(d\log(1+T/d))$, leaving open whether the $d^{3/2}$ dependence in the upper bound is necessary. We resolve this question by proving a minimax lower bound of $\Omega(d^{3/2}\log(1+T/d^{3/2}))$. To prove this result, we construct a family of hard instances in which the reward gap of each action is proportional to its squared distance from the optimal action. We establish a posterior Fisher information bound for adaptive quantum queries with quantum memory, relating the information acquired about the optimal direction to the regret incurred. Viewing each selected action as an estimate of the optimal direction, we use a matrix Cram\'er--Rao argument to derive a lower bound on expected regret. When the action set is fixed and has size $K$, we propose two phased elimination algorithms, Soft-G-Elim and QG-Elim. We adapt quantum phase estimation to construct SoftQME, a mean estimator with small bias and controlled tails. Soft-G-Elim estimates the mean reward of every surviving action from independent SoftQME outputs on the support of an experimental design. Controlling the bias and fluctuations of these estimates yields regret $O(d\log T\log(dT)\sqrt{\log(KT)})$, reducing the $\log(KT)\log\log(dT)$ factor in the previous regret bound to $\sqrt{\log(KT)}$. QG-Elim further reduces this factor to $\min\{\sqrt{\log(KT)},\sqrt d\}$.
