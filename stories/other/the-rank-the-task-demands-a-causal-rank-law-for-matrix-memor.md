---
title: "The Rank the Task Demands: A Causal Rank Law for Matrix Memories Trained on Group Composition"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12259"
authors: ["Samuel Larson"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12259v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12259v1 Announce Type: new Abstract: Matrix-valued memories make rank the natural budget of a learned representation: the number of independent directions a state spans bounds what it can bind, compose, and track. We report causal evidence, on a group-composition testbed trained under a hard single-state bottleneck with a fixed decoder that cannot launder rank, that gradient descent recruits precisely the rank the task's algebra demands. A companion paper [Larson, 2026a] establishes the analogous recruitment and causal necessity pattern on a $K$-pair associative-binding testbed, where exact recovery provably requires state rank at least $K$; this paper inherits that instrument and extends the rank law from a scalar capacity bound to a representation-theoretic one. We train toward chosen minimal faithful reference representations embedded in larger matrices. On group-composition state tracking over five finite groups spanning the solvable/non-solvable divide, the recruited rank equals the group's minimal faithful real representation dimension $d_{\min}$ (Spearman $\rho = 0.9747$, the design's tie-capped maximum), the dimension-matched solvable/non-solvable pair $S_4$/$A_5$ is statistically equivalent under a pre-registered test, and a pre-registered force-rank test separates a guaranteed similarity ceiling from empirical recovery at the target dimension: one rank below $d_{\min}$, cosine similarity is capped by the target's tied unit spectrum at $\sqrt{(d_{\min}{-}1)/d_{\min}} \le 0.894$, below the $0.9$ threshold in every group by construction, with observed cells at 86-95% (mean 91%) of that ceiling; at $d_{\min}$, not guaranteed a priori, recovery clears the pre-registered anchor-relative bar at four seeds per group in all five groups. Within this testbed, measured effective rank tracks representation dimension; the matched-dimension $S_4$/$A_5$ comparison establishes equivalence within the pre-registered tolerance.
