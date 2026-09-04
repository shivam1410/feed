---
title: "Coupled Scaling: A Representational Accessibility Framework for Neural Scaling Laws"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03533"
authors: ["Jie Wang"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.03533v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03533v1 Announce Type: new Abstract: Existing theories derive neural scaling from data geometry or a specified data-model spectrum, but systems trained on the same data can scale differently when architecture or optimization changes the representations they can efficiently reach. We introduce Coupled Scaling, a task-conditioned framework in which finite-budget scaling depends on the relation between task structure and the geometry accessible to an architecture-optimization system. In a solvable mode-truncation model, loss separates into target energy outside architectural support and an unresolved supported tail. For an arbitrary priority order, the residual lies between the best-N supported tail and the tail beyond the largest completed high-value prefix. If the cumulative-tail and coverage log-rates are $\gamma_{A,T}$ and $\rho_{A,O,T}$, the residual exponent lies in $[\rho_{A,O,T}\gamma_{A,T},\gamma_{A,T}]$. Under bounded off-prefix gain, the completed prefix is rate-determining and $\alpha_{A,O,T}=\rho_{A,O,T}\gamma_{A,T}$; for $a_{A,T,j}\asymp j^{-b_{A,T}}$, this gives $\alpha_{A,O,T}=\rho_{A,O,T}(b_{A,T}-1)$. A fixed-kernel specialization derives the training-time exponent from the near-zero tail of a task-weighted spectral measure defined independently of the loss fit. The framework separates architectural support from finite-budget acquisition and motivates two tests: static task-relevant geometry should track loss at a common budget, while multiscale geometry should track coupling-specific exponent ordering, including reversal across contrasting tasks. An audit of released emergence trajectories identifies the controls needed for a direct factorial test that measures geometry separately from the scaling fit.
