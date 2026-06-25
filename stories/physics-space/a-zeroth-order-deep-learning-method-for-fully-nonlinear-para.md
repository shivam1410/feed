---
title: "A Zeroth-Order Deep Learning Method for Fully Nonlinear Parabolic Partial Differential Equations with Unknown Coefficients"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24999"
authors: ["Yanwei Jia, Du Ouyang, Huy\\^en Pham, Xun Yu Zhou"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.24999v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24999v1 Announce Type: new Abstract: High-dimensional partial differential equations (PDEs) with unknown coefficients arise widely in scientific machine learning, including continuous-time reinforcement learning, yet solving them efficiently in a data-driven way remains challenging. Existing deep learning solvers often rely on repeated automatic differentiation to evaluate differential operators, which can cause instability and amplify derivative errors in high dimensions, while probabilistic methods based on stochastic representations require explicit knowledge of the data-generating dynamics and therefore do not apply to black-box environments. We introduce two types of simulators as data-generating mechanisms, and take a ``representing-then-learning" approach that learns the solutions and their derivatives under settings where the underlying PDE operators are accessible only through simulations and pointwise evaluations. Our representation of derivatives relies on the zeroth-order derivative (ZOD) estimators derived from perturbed Monte Carlo trajectories. This fully model-free approach generates targets for the gradient and Hessian networks using only function evaluations. We provide a statistical learning analysis of the proposed approach, including a bias--variance tradeoff for ZODs. Assuming a standard contraction property of the underlying operator, we establish a non-asymptotic error bound that decomposes the total error into discretization error, approximation error, statistical error, and ZOD bias. Crucially, we derive the sample complexity of the learned representations in (weighted) Sobolev space, characterizing the error up to second-order derivatives. Numerical experiments illustrate the competitive performance of the method in moderate and high dimensions.
