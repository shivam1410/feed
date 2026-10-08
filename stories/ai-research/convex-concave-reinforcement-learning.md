---
title: "Convex-Concave Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09108"
authors: ["Shripad V. Deshmukh, Yaswanth Chittepu, Dhawal Gupta, Philip Thomas, Scott Niekum"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 56
guid: "oai:arXiv.org:2610.09108v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Policy learning drives many of the most consequential and heavily-invested applications of reinforcement learning today. Yet the core optimization problem it rests on (maximizing expected return) is notoriously non-convex, even under a direct policy parameterization, and the field has largely responded by avoiding it: optimizing convex surrogate approximations of the return under trust-region constraints (NPG, TRPO, PPO, AWR). We show that this seemingly unstructured problem is not actually structureless. In log-density-ratio coordinates $y := \log[\pi/\pi_n]$, the exact per-iteration objective, computable via per-decision importance sampling (PDIS), is a difference-of-convex-constrained difference-of-convex (DC-constrained DC) program. This structure lets us move beyond surrogate approximations: it recovers CPI, NPG, TRPO, and AWR as special cases along interpretable axes, and it opens a multi-step axis $k$ that couples consecutive decisions. We solve the per-iteration program with sequential convex programming (SCP), the standard solver for difference-of-convex problems, and give convergence guarantees under mild conditions, bridging the difference-of-convex optimization and RL literatures. Empirically, multi-step Convex-Concave RL (CCRL) wins on diagnostic MDPs where credit must propagate across a horizon (its advantage growing with the dependency length), is competitive with a tuned PPO on classic control, and on a realistic, stochastic, mid-horizon healthcare domain converges markedly faster than tuned PPO to the same near-optimal survival, with an 11.3% higher area under the training curve.
