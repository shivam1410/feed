---
title: "Learning to Restart: Differentiable Restart Policies for Optimization Dynamics"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08883"
authors: ["Yiman Fong, Zhonglin Xie, Zaiwen Wen"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08883v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Adaptive restart mechanisms, which reset the momentum or other auxiliary state of an iterative optimizer, play a central role in the empirical performance of accelerated first-order methods, yet existing restart rules remain almost entirely hand-designed. The obstruction to learning restart policies is that, unlike the typical Learning to Optimize (L2O) setting, the discrete restart events make the resulting trajectory non-differentiable in the algorithm parameters and thus block gradient-based optimization of the restart policy. We resolve this obstruction by developing a differentiable framework for restart policies through their continuous-time limit. We introduce surrogate gradients for the restart events and optimization trajectories that are efficient to compute and provably converge to their continuous-time counterparts. We validate the effectiveness of our surrogate gradients in L2O settings, training restart policies that improve upon standard handcrafted adaptive restart criteria on quadratic and linear programs, and that transfer zero-shot from synthetic quadratics to logistic regression on real datasets.
