---
title: "Grounding Investor Views: Neural Predicates in the Black-Litterman Model"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20533"
authors: ["Marcos Florencio"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.20533v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20533v1 Announce Type: new Abstract: Portfolio construction under the Black-Litterman model requires investors to specify views on asset returns alongside explicit uncertainty estimates -- a process that remains largely subjective and difficult to scale. We propose a formal approach in which neural predicates serve as a structured, probabilistic mechanism for view generation. In our formulation, structured financial analysis data is processed through a compositional hierarchy of neural predicates whose outputs -- probability distributions over market stances -- are mapped to the pick matrix $\mathbf{P}$, the view return vector $\mathbf{q}$, and the view uncertainty matrix $\boldsymbol{\Omega}$ of the Black-Litterman model. View confidence is derived from predicate output distributions, providing a data-driven alternative to subjective uncertainty elicitation. The resulting approach is interpretable, in the sense that any portfolio weight can be traced back through the predicate's logical chain to the underlying data, and fully differentiable, enabling end-to-end learning.
