---
title: "Stochastic learning flow: moment equations for stochastic gradient descent at finite step size"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00473"
authors: ["Christian Schmid, James M Murray"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 38
guid: "oai:arXiv.org:2611.00473v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Analytical theories of learning in deep networks often assume gradient flow, discarding the finite step size and batch noise of stochastic gradient descent (SGD). Starting from the discrete update, we derive continuous-time equations for the mean and covariance of the parameter distribution under a Gaussian closure for a general stochastic learning, to first order in the learning rate $\eta$. Applying these stochastic learning flow (SLF) equations to SGD, we show that the mean descends an effective loss regularized by the covariance and loss curvature, while the covariance, unlike in stochastic differential equation approximations, becomes unstable at curvature $2/\eta$. In SGD ensembles of linear and nonlinear networks, SLF predicts learning curves and mean trajectories more accurately than gradient flow and captures the covariance dynamics, failing where the parameter distribution becomes strongly non-Gaussian. In the full-batch limit, the edge of stability corresponds to a stationary point of the coupled sharpness-covariance dynamics, recovering self-stabilization and central flow, and batch-to-batch curvature fluctuations lower this threshold under SGD.
