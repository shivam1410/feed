---
title: "Self-Supervised Combinatorial Optimization with Constraints via Frank-Wolfe"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25728"
authors: ["Akbar Rafiey, Yifei Xu, Nikolaos Karalias"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.25728v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25728v1 Announce Type: new Abstract: Self-supervised learning for combinatorial optimization has emerged as a promising paradigm for solving discrete optimization problems with neural networks, but a central challenge remains: handling hard combinatorial constraints within continuous, gradient-based training. Continuously extending combinatorial objectives to convex domains is a powerful technique, yet existing approaches often require projection steps that constrain neural network outputs to lie inside the feasible polytope and rely on ad-hoc and problem-specific constructions. We propose a general framework in which the neural network is allowed to predict arbitrary continuous vectors that could potentially lie outside of the feasible polytope. These predictions are then approximated by sparse convex combinations of feasible solutions using a geometric decomposition algorithm based on Frank--Wolfe methods and approximate Caratheodory results. This decomposition induces an a.e.-differentiable, self-supervised loss defined as the expected value of the discrete objective. The same procedure provides an automatic rounding guarantee at inference time. We demonstrate strong empirical performance across multiple combinatorial problems, including the Quadratic Assignment Problem, Maximum Coverage, and the Traveling Salesperson Problem.
