---
title: "Information Lattice Learning as Probabilistic Graphical Model Structure Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19366"
authors: ["Haizi Yu, Lav R. Varshney"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.19366v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19366v1 Announce Type: new Abstract: Information lattice learning (ILL) learns interpretable rules of a signal by alternately projecting the signal onto a partition lattice that encodes a hierarchy of abstractions and lifting selected rules back to the signal domain. When the signal is a probability mass function, we show the probabilistic rules learned by ILL admit a natural probabilistic graphical model (PGM) interpretation and develop this interpretation in detail. A partition in ILL induces a deterministic quotient variable, and a rule is the marginal law of that quotient variable. A rule set is therefore a collection of marginal constraints over interpretable abstractions. General lifting is the feasible family of all joint distributions satisfying those constraints, while special lifting chooses a maximum-ignorance reconstruction, implemented in ILL by an L2 uniformity principle closely related to maximum entropy. Under a Shannon-entropy lifting, the same constraints yield a log-linear factor graph whose factors are indexed by learned abstractions. The information lattice itself, however, is not a Bayesian network: its edges encode refinement and coarsening of abstractions, not conditional dependence. Thus ILL is best viewed as structure learning for interpretable constraint-based factor graphs over quotient variables. This view clarifies how ILL relates to graphical models and maximum entropy models, while suggesting new directions for inference, identifiability, and hybrid symbolic-probabilistic learning.
