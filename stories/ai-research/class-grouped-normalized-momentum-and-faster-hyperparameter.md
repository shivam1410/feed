---
title: "Class-Grouped Normalized Momentum and Faster Hyperparameter Exploration to Tackle Class Imbalance in Federated Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01474"
authors: ["Haemin Park, Diego Klabjan, Martin W. Braun, Xiuqi Li, Balakrishnan Ananthanarayanan"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.01474v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01474v1 Announce Type: new Abstract: Class imbalance poses a critical challenge in federated learning (FL), where underrepresented classes suffer from poor predictive performance yet cannot be addressed by standard centralized techniques due to privacy and heterogeneity constraints. We propose FedCGNM (Federated Class-Grouped Normalized Momentum), a client-side optimizer in FL that partitions classes into a small number of groups based on minimum within-group variance, maintains a momentum per group, normalizes each group momentum to unit length, and uses the summation of the normalized group momentums as an update direction. This design both equalizes gradient magnitude across majority and minority groups and mitigates the noise inherent in rare-class gradients. We further provide a theoretical convergence analysis explicitly accounting for time-varying resampling-rates. Additionally, to efficiently optimize these rates in small-client regimes, we introduce FedHOO, an X-armed-bandit (XAB) based algorithm that exploits federated parallelism that evaluates many combinations of two candidate rates per client at linear cost. Empirical evaluation on four public long-tailed benchmarks and a proprietary chip-defect dataset demonstrates that FedCGNM consistently outperforms baselines, with FedHOO yielding further gains in small-scale federations.
