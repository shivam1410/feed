---
title: "Prescribed Bayesian Efficiency under Lifetime Adjustment Costs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25311"
authors: ["Viet Bac Nguyen"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 15
guid: "oai:arXiv.org:2611.25311v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

A Bayesian learner may retain an issued action while updating its posterior, trading predictive loss against adjustment charges. We assume population curvature, boundary control, an order-$1/n$ lower bound on expected posterior uncertainty about the optimal action, and an observable unbiased gradient witness whose squared norms are uniformly integrable. Sample losses may be unbounded or nonconvex. Cumulative expected excess measures the loss increase relative to current predictive Bayes actions. For bounded nonnegative nondecreasing charges $c$ with $c(0)=0$ and nondecreasing profiles $G: \mathbb{N} \to [1,\infty)$ with $G(J)=o(J)$, we characterize joint attainability of cumulative expected excess $O(G(J))$ at horizons $T=2^J$ and finite expected lifetime charge. Here $J$ indexes logarithmic time. The criterion is finiteness of a prefix-constrained allocation of tracking-error allowances across action-distance scales, equivalently its decreasing-weight dual. Adaptive timing and private randomization do not enlarge the attainable region. For each feasible pair, a horizon-independent deterministic checkpoint policy attains the profile with lifetime-cost moments of every positive order. For excess $O((\log T)^r)$, $0<r<1$, every policy needs $\Omega((\log T)^{2-r})$ revisions in expectation, and a charge-independent schedule achieves a matching pathwise upper bound for every feasible charge. We verify the assumptions for logistic decision models with nondegenerate covariates, finite second moments and a locally positive smooth prior density, including fixed-ridge models with unbounded parameter priors.
