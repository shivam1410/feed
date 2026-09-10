---
title: "Physics-informed neural networks by Gradient-Guided Gaussian Adaptive Sampling (3GAS-PINNs)"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09162"
authors: ["Yousen Wang, Wei Zhao"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.09162v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09162v1 Announce Type: new Abstract: Physics-informed neural networks (PINNs) provide a mesh-free framework for solving partial differential equations, yet their performance in nonlinear problems is often limited by slow convergence, gradient imbalance, and insufficient resolution to capture localized intermittent structures such as shock waves[1]. These issues arise primarily from the use of fixed weights of loss and uniform collocation point distributions, which cannot adapt to the evolving complexity of the solution field during training. To address these challenges, Gradient-Guided Gaussian Adaptive Sampling Physics-Informed Neural Networks (3GAS-PINNs) is proposed in this paper, which combines uniform probability distribution and Gaussian-smoothed probability distribution derived from the spatial gradients of solution, to maintain global constraint satisfaction as well as concentrating collocation points in regions of high gradient. Thus, intermittency structures like shock wave and solitons can be accurately captured. The method is evaluated on three benchmark nonlinear problems, including one-dimensional forced Burgers equation, Korteweg-de Vries (KdV) equation and nonlinear Schrodinger equation, all of which exhibit steep gradients or strong nonlinearity. In comparison with baseline PINNs, 3GAS-PINNs can effectively promote the physical consistency in intermittent regions. The accuracy of the numerical simulation can be improved by a factor of up to 14.
