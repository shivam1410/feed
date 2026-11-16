---
title: "Classification with Large-Step Gradient Descent: Unifying Self-Stabilization and Convergence Rates"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17459"
authors: ["Salma Tarmoun, Lachlan Ewen MacDonald, Konstantinos Emmanouilidis, Ziqing Xu, Ren\\'e Vidal"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17459v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Neural networks are often trained with gradient descent (GD) using step sizes that exceed classical stability thresholds, a regime where standard convergence theory no longer applies. Despite exhibiting non-monotonic loss and oscillatory dynamics, this regime frequently leads to faster convergence and better generalization. Existing theoretical perspectives offer complementary but incomplete insights: one identifies a self-stabilization mechanism that drives GD toward flat regions but does not yield convergence rates; another derives rigorous rates for specific losses but does not explain the underlying stabilization mechanism; and a third unifies these views for overparameterized least squares, but relies on the existence of a minimizer manifold, which is absent in classification settings. In this work, we extend this unified geometric perspective to exponential-tail losses, including logistic and cross-entropy losses in separable linear classification, where the loss infimum is not attained at any finite parameter. We identify a curvature-defined reference subspace that replaces the role of the minimizer manifold, yielding a coupled dynamical system in which orthogonal oscillations are damped by parallel progress along directions of decreasing sharpness. Under regularity conditions, which we verify for logistic and multiclass cross-entropy losses on symmetric data models, we derive explicit bounds for the iterates, not just the loss, covering both the unstable and stable regimes, and revealing a three-phase damping structure in the latter. Our analysis further uncovers a transient implicit bias induced by large step sizes: although GD converges asymptotically to the max-margin direction, large steps can leave persistent orthogonal residuals and, in certain geometries, amplify them, affecting finite-time alignment with the max-margin direction.
