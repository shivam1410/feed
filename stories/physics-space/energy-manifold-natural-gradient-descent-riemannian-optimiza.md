---
title: "Energy Manifold Natural Gradient Descent: Riemannian Optimization for Neural PDE Solvers"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22004"
authors: ["Zhangyong Liang, Huanhuan Gao"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.22004v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.22004v1 Announce Type: new Abstract: Energy natural gradient descent (ENGD) aligns parameter updates with the curvature of an underlying function-space energy, but existing formulations assume an unconstrained Euclidean parameter domain. We introduce \EMNGDfull{}, a manifold optimization framework for physics-informed and variational neural PDE solvers whose parameters lie on a Riemannian manifold. EMNGD restricts the energy-induced quadratic model to feasible tangent directions and uses retractions to preserve parameter constraints throughout optimization. Under coercivity, we prove that the push-forward of the undamped EMNGD direction is the best feasible approximation to the function-space Newton vector in the energy metric. We establish coordinate invariance, exact reduction to ENGD in Euclidean space, global first-order convergence with Armijo backtracking, and robustness to inexact tangent solves. For quadratic residual energies and generalized Gauss--Newton pullbacks, the Woodbury identity transfers the tangent system to sample space without changing the direction. Nystr\"om approximation provides scalable sample-space solves with controlled direction error and recovers the exact direction after iterative convergence. On the evaluated neural PDE benchmarks, EMNGD achieves higher accuracy and faster convergence than the compared state-of-the-art baselines. Woodbury preserves the EMNGD direction, while scalable-solver diagnostics quantify the accuracy--cost trade-off of preconditioning and residual subsampling.
