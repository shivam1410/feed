---
title: "$\\tilde{O}(\\sqrt{T})$ Regret and Polylogarithmic Constraint Violation for COCO"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.03983"
authors: ["Dhruv Sarkar, Abhishek Sinha"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.03983v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

We study constrained online convex optimization with adversarial convex losses and constraints ($\mathsf{COCO}$). At each round \(t\in[T]\), a learner selects \(x_t\) from a \(d\)-dimensional convex decision set \(\mathcal X\), after which an adaptive adversary reveals a convex cost function \(f_t\) and constraint function \(g_t\). Consequently, the learner incurs cost \(f_t(x_t)\) and constraint violation \(\max\{0,g_t(x_t)\}\), and aims to simultaneously minimize regret and cumulative constraint violation ($\mathsf{CCV}$) over the entire horizon. Existing algorithms achieve \(O(\sqrt{T})\) regret and \(\widetilde O(\sqrt{T})\) $\mathsf{CCV}$. We show that an online policy can achieve \(O(\sqrt{T\log T})\) regret and \(O(\log^2 T)\) $\mathsf{CCV}$, reducing the $\mathsf{CCV}$ from polynomial to polylogarithmic while retaining near-optimal regret. Our approach combines continuous Hedge with elimination on shrinking feasible sets. The key observation is that whenever the mean of the Hedge distribution violates a constraint, Gr\"unbaum's inequality guarantees that a constant fraction of the Hedge probability mass is eliminated. We use an adaptive learning-rate schedule and a potential function coupling the surviving volume with the learning rate to convert this probability-mass reduction into a bound of \(O(\log^2 T)\) on the $\mathsf{CCV}$.
