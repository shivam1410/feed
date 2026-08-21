---
title: "Unregularized Convergence of Single-Loop, Entropy-Regularized Natural Actor-Critic"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19587"
authors: ["Zhiqiang Tan"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19587v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19587v1 Announce Type: new Abstract: While entropy regularization is widely used to stabilize and accelerate Natural Policy Gradient methods, its ability to yield faster convergence rates for the unregularized objective remains underexplored. Existing analyses often rely on double-loop architectures and invoke a linear entropy penalty. To bridge the gap between theory and practice, we analyze a single-loop, entropy-regularized Natural Actor-Critic algorithm under compatible linear function approximation. By training an uncentered critic, our critic tracking can remain stable even as the training policy approaches determinism and the Fisher information matrix degenerates. We focus on two primary regimes for the optimization landscape: a Stochastic Regime, where we fuse coupled actor-critic updates into a joint Lyapunov recurrence, and a Deterministic Regime, where we pivot to a Policy Mirror Descent framework to circumvent the collapse of Euclidean geometry. By exploiting a positive Minimal Action Gap in the unregularized Markov decision process, we introduce an Exponential Translation mechanism that maps the regularized gap to the unregularized one up to an exponentially decaying tail. By tuning the fixed temperature, our algorithm achieves accelerated unregularized convergence rates, up to approximation-error terms: $\tilde{\mathcal{O}}(T_{total}^{-1})$ in the Stochastic Regime, and $\tilde{\mathcal{O}}(T_{total}^{-2/3})$ for the average iterate alongside $\tilde{\mathcal{O}}(T_{total}^{-1/3})$ for the last iterate in the Deterministic Regime. Here, $T_{total}$ denotes the total number of stochastic critic updates (or Monte Carlo rollouts). Furthermore, in the tabular setting, our positive-action-gap analysis yields a $\tilde{\mathcal{O}}(T_{total}^{-2/3})$ average-iterate rate, surpassing the $\mathcal{O}(T_{total}^{-1/2})$ worst-case statistical barrier that applies without a positive action margin.
