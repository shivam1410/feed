---
title: "Margin Certificates for Voting Classifiers under Mixing Dependence"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24166"
authors: ["Adria Binte Habib, Ibne Farabi Shihab"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 18
guid: "oai:arXiv.org:2610.24166v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Margin bounds explain why weighted votes generalize after training error vanishes, but dependent observations require concentration arguments that keep the dependence model and failure budget explicit. We study stationary mixing streams without treating dependence as a formal substitution of an "effective sample size." For a finite base class, we combine independent-block Rademacher theory for stationary $\beta$-mixing processes with a clipped margin loss to obtain an explicit uniform voting-margin certificate, whose dependence penalty is set by the number of approximately independent blocks and the coupling budget $4(\mu-1)\beta(a)$. A black-box transfer theorem shows that any i.i.d. voting-margin guarantee remains valid on a regularly spaced subsequence, with only an additive $\beta$-mixing failure probability. For votes fixed independently of a stationary finite-state reversible Markov stream, spectral concentration gives the cleaner $\sqrt{t_{rel}/n}$ rate, and a sticky-refresh construction shows this exponent is unavoidable. The constant is statistic-specific: the effective sample size is $n/\tau_{int}(g)$, with $\tau_{int}(g) \le 2t_{rel}-1$. When the dependence scale is unknown, a batch-means Student-t interval is valid up to an explicit remainder vanishing in the number of batches, with width governed by $\tau_{int}(g)$ rather than the worst-case $t_{rel}$. Experiments show: the learned-vote certificate is nonvacuous once the block count is large; a two-timescale construction gives a batch-means interval 8.1x narrower than the worst-case interval at nominal coverage (0.945); block-bootstrap and batch-means intervals undercover under strong dependence while the certificate stays valid; and on real, ordered UCI HAR sensor data the dependence-agnostic certificate reaches 0.95 coverage where naive intervals reach only 0.38.
