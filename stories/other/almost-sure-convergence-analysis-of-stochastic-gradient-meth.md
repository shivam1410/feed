---
title: "Almost Sure Convergence Analysis of Stochastic Gradient Methods with Clipping and Additive Noise"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12119"
authors: ["Amartya Mukherjee, Jun Liu"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12119v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12119v1 Announce Type: new Abstract: Stochastic gradient descent (SGD) with gradient clipping and additive noise has become a standard technique for training machine learning models, particularly in applications requiring robustness or privacy guarantees. However, clipping introduces a bias in stochastic gradients, while additive noise introduces additional variance, making the long-run behaviour of individual optimization trajectories difficult to characterize. In this work, we prove that SGD with clipping and additive Gaussian noise (SGD-CN) converges almost surely (a.s.) under smoothness and uniformly bounded stochastic-gradient noise assumptions, provided the step sizes satisfy some standard decaying conditions. Our analysis extends to momentum variants such as the stochastic heavy ball and Nesterov's accelerated gradient, where we show that careful energy constructions yield similar guarantees. These results provide stronger theoretical foundations for understanding the pathwise behaviour of clipped stochastic gradient methods and suggest that, despite the bias and noise introduced by clipping and perturbation, the algorithm remains stable in both convex and nonconvex regimes.
