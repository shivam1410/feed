---
title: "A Model-Free Continuous-Time RL Algorithm from Discrete-Time Off-Policy Data with End-to-End Guarantees"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28915"
authors: ["Chaorui Yao, Yuming Paul Zhang, Lin Yang, Yuhua Zhu"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 22
guid: "oai:arXiv.org:2610.28915v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

In this paper, we study continuous-time reinforcement learning, where the state follows an unknown stochastic differential equation but only a fixed off-policy batch of discrete-time transitions is available. Standard discrete-time Q-learning becomes problematic as the sampling interval shrinks, because differences between action values vanish. Continuous-time alternatives, such as Deep Advantage Updating and martingale q-learning, preserve the action signal but jointly learn a value function and an action-dependent critic. Building on the PhiBE-Q formulation (arXiv:2606.21925), we develop a model-free PhiBE policy iteration (PhiBE-PI) framework that uses a single state-action critic while preserving the continuous-time action-ranking scale. At each iteration, the framework learns the critic directly from sampled increments and uses it to improve the policy. The same batch is reused throughout, without explicitly estimating the drift or diffusion. We further develop an implementation under linear function approximation and establish a local end-to-end suboptimality guarantee for the learned policy. Our analysis quantifies how errors from time discretization, function approximation, and finite-sample policy evaluation propagate through policy iteration. It accounts for the dependence of successive policies on the reused data, so the guarantee does not require a fresh batch at each iteration. Moreover, we identify a bias-variance trade-off: smaller sampling intervals improve the approximation to the continuous-time problem but can increase statistical error at a fixed sample size. Thus, finer time discretization does not necessarily lead to better policy performance.
