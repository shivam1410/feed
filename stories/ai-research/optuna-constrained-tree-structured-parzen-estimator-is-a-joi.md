---
title: "Optuna Constrained Tree-Structured Parzen Estimator Is a Joint Density Generalization of c-TPE"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09889"
authors: ["Shuhei Watanabe, Kaichi Irie"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2606.09889v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09889v1 Announce Type: new Abstract: Constrained hyperparameter optimization (HPO) is common in practice, yet Optuna's widely used constrained TPE lacks algorithmic analysis. While c-TPE proposes an expected constrained improvement (ECI) approach assuming independence between the objective and constraints, Optuna uses a single joint density over both. We show that Optuna's constrained TPE is joint c-TPE -- the same ECI acquisition function using a joint likelihood. We demonstrate joint c-TPE is invariant to constraint duplication whereas independent c-TPE degrades as the product accumulates duplicated factors. We outline practical tradeoffs between the formulations and directions for future study.
