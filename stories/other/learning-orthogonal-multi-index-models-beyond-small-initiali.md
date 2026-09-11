---
title: "Learning Orthogonal Multi-Index Models Beyond Small Initialization: Incremental Learning, Competitive Dynamics and Symmetry"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.10879"
authors: ["Mo Zhou, Weihang Xu, Simon S. Du, Maryam Fazel"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.10879v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.10879v1 Announce Type: new Abstract: Recent work has identified incremental learning in shallow networks trained on single-index and multi-index models. However, existing analyses often rely on simplifying settings, such as small initialization, correlation loss, or layer-wise training. These choices reduce neuron interactions and leave some feature learning dynamics under standard initialization unexplored. We study training dynamics for polynomial-width two-layer networks learning orthogonal multi-index targets under standard initialization using polynomially many samples. We first prove that incremental learning still occurs: the loss decreases sequentially according to the Hermite expansion of the target, with lower-order components learned before higher-order components recover the individual target directions. In this standard initialization regime, training also shows a competitive reallocation of parameter mass: after the total mass fits the target mean and stabilizes, mass shifts into the target subspace and then concentrates on aligned neurons. Our theoretical analysis uses slightly modified gradient flow, while vanilla gradient descent empirically exhibits the same qualitative dynamics. Technically, we introduce a symmetry-based finite-width approximation via symmetrized networks, rather than comparing directly with an infinite-width limit. This yields better control of approximation errors and may be of independent interest.
