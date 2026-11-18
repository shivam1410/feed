---
title: "Cancellation-Free Constrained SquareCB for Safe Controller Selection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21880"
authors: ["Kartik Pandit, Sourav Ganguly, Arnob Ghosh"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21880v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

We study constrained contextual bandits, in which a learner chooses one of $K$ actions in each round to minimize loss while keeping the expected cost of its play below a budget. Existing reductions to online regression weight the cost by a Lagrange multiplier learned from past constraint residuals, so slack in some rounds can offset violations in others. We instead run SquareCB proposed in \citep{foster2020beyond} with a rectified weight on the cost: it is zero when the estimated cost is within the budget, and otherwise just large enough to bring it back to the budget. Under realizability and Slater's condition with margin $\delta$, the algorithm attains regret $O(\sqrt{KT\,\mathrm{Reg}_{\mathsf{Sq}}(T)}/\delta)$ and cancellation-free violation $\sum_t(V_c^{p_t}-b)^+=O(\sqrt{KT\,\mathrm{Reg}_{\mathsf{Sq}}(T)})$, where $\mathrm{Reg}_{\mathsf{Sq}}$ is the error of the regression oracle. The same bounds hold when the budget must be met in every context, potentially adversarially chosen contexts. In controller selection for a safe-control-gym quadrotor and a BOPTEST building, the violation is 6 to 9 times lower than that of primal-dual and virtual-queue baselines, with a lower or comparable regret.
