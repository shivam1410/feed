---
title: "Regularity-Aware Stochastic MGDA with Adaptive Conflict-Avoidant Update Direction Control"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15412"
authors: ["Chentong Huang, Lisha Chen"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.15412v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15412v1 Announce Type: new Abstract: Multi-objective learning (MOL) aims to optimize multiple objectives simultaneously. The multi-gradient descent algorithm (MGDA) is a workhorse that iteratively updates along a common descent or conflict-avoidant (CA) direction across objectives. In stochastic settings, however, the vanilla stochastic MGDA method, SMG, lacks a fast convergence rate because mini-batch sampling introduces noise in the gradients. This causes bias in the update direction, which is controlled by the CA direction continuity. In this paper, we show that the CA direction is $1/2$-Holder continuous with respect to the Jacobian matrix, and the exponent $1/2$ cannot be improved in the worst case. This leads to a suboptimal convergence rate for vanilla stochastic MGDA in prior works. Nevertheless, under additional regularity conditions, we show this can be improved to Lipschitz continuity. Based on this insight, we propose a stochastic multi-objective regularity-aware (MoRe) method that exploits the Lipschitz continuity of the CA direction when the subproblem is regular, and switches to a fixed scalarization weight otherwise. Intuitively, the proposed algorithm employs CA direction update when the gradient conflict is large, and linear scalarization update otherwise. Theoretically, our method improves the convergence rate of SMG in the nonconvex setting from $\widetilde{\mathcal O}(T^{-1/4})$ to $\widetilde{\mathcal O}(T^{-1/2})$, where $\widetilde{\mathcal O}(\cdot)$ hides logarithmic factors. Meanwhile, we also establish the per-iterate conflict-avoidance guarantees. Empirically, experiments demonstrate its effectiveness in multi-task performance and verify convergence behavior consistent with the established theoretical rate.
