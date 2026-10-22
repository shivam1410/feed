---
title: "ArcFlow: Training Flow Policies for Multiple Solver Budgets"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28788"
authors: ["Hieu Tran, Hong Yu"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.28788v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Flow-matching policies adjust inference cost through the number of solver steps, but reinforcement learning at a single fixed solver budget can hide degradation at cheaper deployment budgets and even erase useful one-step behavior present in a pretrained policy. We introduce Action-Ratio-Clip Flow (ArcFlow), a deployment-aware algorithm for training one flow policy across a specified range of solver budgets. ArcFlow combines action-aligned supervision, budget exposure, and worst-budget checkpoint selection. For reconstruction objectives, its bridge aggregates temporal probes into one surrogate ratio and one PPO-style clip per action, with a boundary residual exactly equal to deployed one-step reconstruction error. Cycling exposes the shared field to the deployment range, and selection optimizes its performance floor. For native velocity objectives, multi-budget endpoint supervision applies the same principle without replacing the native update. Both realizations preserve the architecture and deployment-time cost. Across DM Control, manipulation, and locomotion, ArcFlow attains the highest mean one-step return among five flow-policy baselines on 25 of 30 tasks under each method's reported training settings. Component studies identify complementary improvements from boundary supervision, the fixed-grid bridge, budget exposure, and deployment selection. These results establish deployment-budget-aware training as an effective route to strong low-step control with one policy serving multiple inference costs.
