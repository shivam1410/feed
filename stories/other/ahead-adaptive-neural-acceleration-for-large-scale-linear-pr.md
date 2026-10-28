---
title: "AHEAD: Adaptive Neural Acceleration for Large-Scale Linear Programming"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36321"
authors: ["Sihao Liu, Zhichao Hou, Huayue Gu, Raiyan Rahman, Liang Wu, Ruozhou Yu, Xiaorui Liu"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36321v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Large-scale linear programs with millions of variables and constraints strain time and memory budgets. First-order methods such as the primal-dual hybrid gradient scale to this regime because they avoid matrix factorizations, but they require many iterations. Learned accelerators can reduce these iterations, yet fewer iterations do not guarantee a shorter solve. Learning inference also takes time, and running the accelerator longer trades solver time for inference time. Existing unrolled accelerators handle this trade-off poorly: each layer processes every variable and constraint, the predicted iterates still need solver refinement, and every instance runs the same layers. We therefore ask: What neural accelerator design achieves end-to-end speedups on large-scale linear programs across sizes and target accuracies? We introduce AHEAD, an accelerator that predicts step sizes for first-order linear programming solvers while keeping their update rules. Its weight-shared predictor reads compact solver statistics and rescales the primal and dual step sizes, so each warm-start iteration stays inexpensive and a short warm-start phase hands the solver a warm start. A learned handoff policy sets the number of warm-start iterations for each instance and target accuracy, after which the solver finishes under its own termination criterion. On packing linear programs with up to $10^7$ variables, AHEAD achieves $6.5$--$11.6\times$ end-to-end speedups over Gurobi's first-order solver from a cold start, including on instances of unseen sizes and distributions. The gains extend to PageRank linear programs and hold across difficulty levels and target accuracies.
