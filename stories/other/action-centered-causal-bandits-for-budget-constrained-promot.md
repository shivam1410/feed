---
title: "Action-Centered Causal Bandits for Budget-Constrained Promotion Targeting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08990"
authors: ["Yifan Lin, Kaixu Yang, Di Mo"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08990v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Web platforms select among costly interventions for each user to maximize incremental outcomes under a global budget. We formulate this problem as a budget-constrained contextual bandit with heterogeneous treatment effects. Although an action-independent outcome baseline cancels from treatment comparisons, modeling a nonlinear baseline can increase statistical complexity. We propose DR-CATE-CBwK, an action-centered causal bandit that directly learns treatment contrasts. Its online update remains valid under baseline-model misspecification without inverse-propensity weighting. It combines an offline doubly robust learner to warm-start treatment-effect estimates, an online action-centered estimator for sequential contrast learning, and a primal-dual controller with an affordable-action rule to enforce the effective-cost budget pathwise. For linear conditional average treatment effects (CATEs) in a stationary i.i.d. setting, we prove a high-probability (\widetilde{O}(Kd\sqrt{T})) regret bound, where K is the number of priced actions, d the context dimension, and T the horizon. We benchmark against the fluid linear program (LP) under the coverage-guaranteed action rule. We further show that the action-centered estimating moment remains unbiased under any predictable baseline estimate, whereas a specified separate-arm reward regression can exhibit asymptotic contrast bias under action-dependent logging and shared-baseline misspecification. On a semi-synthetic job-marketplace benchmark with real logged features and simulated outcomes, our practical Thompson-restricted variant achieves the lowest regret among evaluated budget-feasible methods in the operating regime. It reduces regret by approximately 20% versus the strongest reward-based baseline, outperforming raw-reward contextual bandits, BwK baselines, and a static offline policy, while never exceeding the effective-cost budget.
