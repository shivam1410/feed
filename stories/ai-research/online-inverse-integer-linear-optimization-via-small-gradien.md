---
title: "Online Inverse Integer Linear Optimization via Small-Gradient Skipping: Constant Regret and Finite Mistakes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09809"
authors: ["Akira Kitaoka"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.09809v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09809v1 Announce Type: new Abstract: In online inverse linear optimization, the learner predicts a weight at each round, observes the optimal action of the agent, and updates its prediction. In the general setting, the gap of $\log T$ between the regret upper bound $O(d \log T)$ and the lower bound $\Omega(d)$ is unresolved (here $T$ is the total number of rounds and $d$ is the dimension). When the action set is M-convex, the regret is known to be bounded by $O(d \log d)$, but the method attaining it computes a center of gravity at every round. This paper therefore proposes Small-Gradient Skipping (SGS), a mechanism that skips the update at rounds without a mistake in the case where the correct action is uniformly separated from the other candidates, and applies it to online gradient descent, the online Newton step, and MetaGrad. The number of mistakes is then bounded, for all three, by a quantity independent of $T$; and for the online Newton step and for MetaGrad with SGS, the dimension dependence of the regret becomes $O(d^2)$ when the forward problem is an integer linear program, that is, the factor $\log T$ is removed. Moreover, when the action set is M-convex, the regret is bounded efficiently without computing a center of gravity.
