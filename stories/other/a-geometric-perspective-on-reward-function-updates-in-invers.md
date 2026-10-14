---
title: "A Geometric Perspective on Reward Function Updates in Inverse Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14041"
authors: ["Anish Diwan, Jan Peters, Oleg Arenz"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14041v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Inverse Reinforcement Learning (IRL) is classically solved using Lagrangian optimisation, by jointly optimising a primal-dual problem with gradient descent to obtain the optimal reward function parameters and corresponding optimal policy. While this algorithmic view of IRL has been highly influential, gradient-based reward updates only paint a partial picture, largely ignoring the geometry of the problem in occupancy space. In this paper, we present an occupancy-space view of reward updates in IRL. We leverage the insight that both the optimal solution and its geometry in occupancy space are known, and show that the geometry along the e-geodesic (straight line in occupancy space) toward the optimal occupancy directly affects the gradient of the IRL dual problem in reward parameter space. This perspective naturally suggests preconditioning the dual gradient with the average Fisher information along the occupancy trajectory. We show that this preconditioned gradient is just a convex interpolation of the old reward and a new target reward, yielding efficient natural-gradient-style updates with little additional computational overhead. We then analyse these occupancy-space reward updates from a Mirror Descent (MD) perspective, and show that policy search over the resulting rewards induces approximate entropic MD on the policy. Finally, we conclude with convergence results of such geometry-aware IRL algorithms.
