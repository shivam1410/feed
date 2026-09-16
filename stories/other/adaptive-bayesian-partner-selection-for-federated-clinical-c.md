---
title: "Adaptive Bayesian Partner Selection for Federated Clinical Centers"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16446"
authors: ["Navid Seidi, Satyaki Roy, Sajal K. Das"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16446v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16446v1 Announce Type: new Abstract: Federated learning (FL) in healthcare faces pronounced heterogeneity and temporal concept drift across clinical centers, where evolving patient populations and care practices shift data distributions. Existing approaches rely on persistent global communication, incurring substantial bandwidth overhead while risking negative transfer from poorly aligned peers. We propose Adaptive Bayesian Partner Selection (ABPS), a peer-to-peer framework that governs who collaborates, when, and at what cost. Each center maintains a Beta-Bernoulli posterior over prospective peers' Shapley marginal utility, ranks candidates with an Upper Confidence Bound (UCB) criterion, and forms collaborations through a lightweight propose-reject mechanism, with the option to abstain from communication when no mutually beneficial partner exists. The framework admits a stochastic decision interpretation, yielding finite-sample concentration guarantees and O(kappa log T) regret in partner selection, along with conditions under which intentional isolation is optimal under negative transfer. Lightweight extensions (head personalization, bfloat16 quantized communication, and a tunable active-set size) further improve efficiency, and a goal-aware metadata filter enables institution-specific collaboration strategies. On binary in-hospital mortality prediction over the first 24 hours of an ICU stay, with 230 non-IID clinical centers drawn from MIMIC-IV, the full ABPS-X variant matches the strongest federated baseline (FedDyn, AUROC 0.758) at 0.09x the communication cost of FedAvg, with reduced variability. A diversity-driven configuration activates intentional isolation for a substantial fraction of centers. These results show that adaptive, utility-aware collaboration reduces communication without sacrificing accuracy when centers are numerous and small, offering a scalable paradigm for healthcare FL.
