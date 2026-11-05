---
title: "Decomposing Rank Reversals under Temporal Nonstationarity: Alignment, Aggressiveness, and Instability"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.04116"
authors: ["Deying Song, Xueying Ding"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.04116v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Under temporal nonstationarity, model performance rankings reverse across training horizons due to heterogeneous sensitivities to memory. While existing literature addresses adaptive lookbacks, effective model complexity, and empirical forecast evaluation in isolation, no unified framework explains the structural mechanics driving these rank reversals. We bridge this gap by deriving a model-agnostic decomposition of out-of-sample $R^2$ into target alignment, miscalibrated aggressiveness, and predictive instability. Within this framework, we mathematically characterize complexity phase boundaries, establish closed-form optimal-memory equations for ridge regression under local drift, and extend these guarantees to complex model architectures via surrogate bounds. We validate these theoretical dynamics by benchmarking 14 linear, tree-based, and neural architectures across large-scale financial panels. In doing so, our framework demonstrates that empirical model rank reversals are driven by predictable surges in miscalibrated aggressiveness, providing a rigorous mechanistic diagnosis of generalization under temporal shift.
