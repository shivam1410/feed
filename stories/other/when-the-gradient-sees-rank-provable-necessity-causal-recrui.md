---
title: "When the Gradient Sees Rank: Provable Necessity, Causal Recruitment, and Composition in Trained Matrix Memories"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17594"
authors: ["Samuel Larson"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17594v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17594v1 Announce Type: new Abstract: Can gradient-based training learn the rank needed to store and compose associations in a matrix memory? In our earlier study, we used a matrix-augmented reasoner on a task that admits a rank-1 solution, leaving this question open. We train matrix memories on $K$ fresh key-value bindings whose exact linear recovery requires $\mathrm{rank}(Z) \geq K$. A fixed linear readout queries a single matrix state without access to the original bindings. Experiments measure recovery by cosine similarity greater than 0.9, a threshold distinct from mathematical equality. Learned effective rank increases with $K$ across the tested grid (Spearman $\rho = 1.0$ at $d = 16$). Training-time rank caps produce a recovery transition near $k = K$: at $d = 8$, $K = 4$, rank 3 gives at most 0.0004 recovery and rank 4 gives 0.97. Four of five seeds retain at least 0.9996 recovery through 21-fold self-application of the trained operator. On the entity subspace, the learned operator has effective rank close to $K$ and approximates the ideal cycle. For the single converged seed capped below $K$, a calculation using the entity-subspace operator and ideal cycle predicts the measured cosine within 0.008 through seven applications. Extending training resolves several initial failures, but recovery still declines at larger matrix dimensions with encoder width fixed.
