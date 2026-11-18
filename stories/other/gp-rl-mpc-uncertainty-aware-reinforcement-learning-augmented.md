---
title: "GP--RL--MPC: Uncertainty-Aware Reinforcement Learning-Augmented Model Predictive Control with Gaussian Process Postdecision State-Value Functions"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.22038"
authors: ["Jon Li, Jay H. Lee"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.22038v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

We propose Gaussian Process Reinforcement Learning-Augmented Model Predictive Control (GP--RL--MPC), which uses a learned critic as the MPC terminal penalty to account for costs beyond the prediction horizon. Gaussian process regression (GPR) enables data-efficient critic learning from limited, noisy rollouts within optimistic approximate policy iteration (OAPI), with soft updates mitigating policy chattering. A tunable risk coefficient weights GP epistemic uncertainty in the terminal cost, regulating sensitivity to uncertain critic predictions. The postdecision state formulation shifts disturbance averaging offline to account for aleatoric uncertainty from the terminal transition onward. Under matching objectives and admissible actions, a one-step horizon recovers greedy value-space RL. After fitting GP hyperparameters by exact marginal likelihood, we construct a sparse deterministic training conditional (DTC) posterior using inducing points selected by pivoted Cholesky (PC), reducing online evaluation costs as the training dataset grows. In a continuous stirred-tank reactor (CSTR) subject to exogenous disturbances, GP--RL--MPC with an appropriately selected risk coefficient and policy screening reduces the sum of squared errors (SSE) by an average of 80.52% relative to an otherwise matched baseline MPC across five random seeds (sample standard deviation: 3.48%).
