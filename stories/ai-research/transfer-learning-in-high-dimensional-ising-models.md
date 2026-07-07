---
title: "Transfer Learning in High-dimensional Ising Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03005"
authors: ["Joonho Kim, Seyoung Park"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.03005v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03005v1 Announce Type: new Abstract: In high-dimensional Ising model estimation, target sample sizes are often limited, and effectively using auxiliary binary datasets of unknown relevance remains challenging. To address this, we propose Trans-Ising, a transfer learning method that combines a loss-based source screening rule with a two-stage estimation procedure. The method first identifies informative auxiliary sources using held-out target pseudolikelihood to prevent negative transfer. It then computes an initial estimator via pooled nodewise $\ell_1$-regularized logistic regression, followed by a target-only correction step using a folded-concave penalty. Theoretically, we establish fixed-node $\ell_2$ and $\ell_1$ error bounds, exact graph selection consistency, and the conditional consistency of the screening rule. Through extensive simulations and real-data analyses, we demonstrate that Trans-Ising achieves lower estimation errors than both target-only estimation and naive data pooling.
