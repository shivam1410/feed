---
title: "One Spectrum, Two Resources: Data-Memory Scaling in Autoregressive Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13500"
authors: ["Chiwun Yang, Xiaoyu Li"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13500v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13500v1 Announce Type: new Abstract: How much learned memory is needed to benefit from more data? We show that the two resources are governed by one predictive-energy spectrum in a positive-entropy autoregressive retrieval source. Each coordinate contributes its query probability times the squared radius of its unknown logit. Writing $\mu$ for the resulting energy spectrum, we prove the minimax law $\mathfrak R^*_{\rm value}(n,B)\asymp_R \Phi_\mu(n^{-1})+\Phi_\mu(\tau_B), \Phi_\mu(t)=\int\min\{x,t\}\,\mu(\mathrm dx),$ for $n$ prediction blocks and a learned state with at most $2^B$ values. Data set the resolution $1/n$; memory sets the level $\tau_B$ reached by optimal bit allocation. The complete curve also recovers the positive spectrum. Energy-dimension pairing is essential: two causal sources with identical block-energy and block-dimension marginals have different data and memory exponents. A masked query-key attention head learns the route and values, realizing the law with explicit routing, format, and arithmetic errors. Further results give exponent-adaptive allocation, finite-precision realization, and compute-precision laws under two-sided arithmetic assumptions. Experiments recover the data-memory collapse and coupling exponents, explain the routing and allocation mechanisms, and examine weight-only quantization across six pretrained-model scales.
