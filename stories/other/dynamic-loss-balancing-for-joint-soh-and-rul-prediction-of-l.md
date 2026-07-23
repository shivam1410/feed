---
title: "Dynamic Loss Balancing for Joint SOH and RUL Prediction of Lithium-Ion Batteries via a Rotary SOH-Injected Prior Battery Transformer"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18329"
authors: ["Shuhao Chen, Tianyu Shi, Yiwen Huang, Chengyi Tu"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18329v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18329v1 Announce Type: new Abstract: The deployment of reliable lithium-ion battery management systems is crucial for accelerating electrification, yet the joint prognosis of State of Health (SOH) and Remaining Useful Life (RUL) remains severely hindered by task heteroscedasticity. Conventional multi-task learning frameworks fail to balance the bounded, low-variance noise of SOH estimation with the unbounded, nonlinearly expanding uncertainty of long-term RUL predictions. Here, we present the Rotary SOH-Injected Prior Battery Transformer (RoSIP-Batt), a unified co-estimation framework that resolves these optimization conflicts. By formulating joint prediction as a Bayesian multi-task objective, RoSIP-Batt introduces a homoscedastic uncertainty weighting mechanism to dynamically scale task-specific gradients based on learned residual noise levels. The architecture leverages decoupled dual classification tokens and a per-dimension gated fusion mechanism, secured by a gradient-detachment operator to prevent high-variance RUL updates from corrupting the stable SOH representation space. To capture electrochemical degradation patterns without relying on absolute cycle steps, Rotary Position Embedding (RoPE) is incorporated into a shared Transformer backbone to model translation-invariant relative temporal profiles. Crucially, the intermediate SOH estimate is directly injected into the RUL regression head as a physical degradation prior. Evaluations across the NASA, MIT-Stanford, and HUST datasets show that RoSIP-Batt significantly outperforms state-of-the-art baselines, reducing SOH estimation error to 1.994% MAE on NASA and restricting RUL prediction error to 62.85 cycles on Stanford. These findings establish RoSIP-Batt as a highly generalizable, computationally efficient solution suitable for real-time embedded BMS deployment.
