---
title: "Optimal Explicit and Implicit Regularization Strengths in High-Dimensional Continual Linear Regression"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20804"
authors: ["Gilad Karpel, Daniel Soudry"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20804v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

We study continual linear regression in a high-dimensional regime, where a learner observes a sequence of tasks and updates its parameters sequentially. In this setting, we derive an explicit closed-form expression for the generalization loss of a model trained with gradient descent for a fixed number of steps per task, which holds for arbitrary teachers. We prove that the optimal fixed step size decays nearly inversely with the number of tasks, specifically as $\ln T / T$, for a single teacher and, more generally, i.i.d. teachers. Under this scaling, we show that the resulting generalization loss is asymptotically equivalent to that achieved by optimally tuned L2 (isotropic) regularization. Furthermore, we extend our analysis to generalized ridge regression with diagonal regularization matrices, obtaining a closed-form characterization of the generalization loss and identifying necessary and sufficient conditions under which the optimal regularizer is isotropic. Finally, we identify a regime where the optimal step size remains finite even as the number of tasks tends to infinity, thus revealing a non-trivial tradeoff between task variability and implicit regularization, in contrast to the i.i.d. teacher scaling. Our theoretical predictions are corroborated by experiments on both linear models and neural networks, providing practical guidance for the design of continual learning systems.
