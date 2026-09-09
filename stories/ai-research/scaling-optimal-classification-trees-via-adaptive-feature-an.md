---
title: "Scaling Optimal Classification Trees via Adaptive Feature and Sample Reduction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05826"
authors: ["Jiancheng Tu, Wenqi Fan"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.05826v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05826v1 Announce Type: new Abstract: Dynamic programming for optimal classification trees becomes computationally expensive as the numbers of features and training samples increase. We develop a joint feature- and sample-space reduction framework based on STreeD. Weighted STreeD merges duplicate records created after projection onto a fixed candidate set into weighted representatives. This reduces sample-dependent computation without changing the fixed-candidate optimization problem. Adaptive STreeD repeatedly refines a bounded candidate set, retains features used by the incumbent tree, rebuilds the weighted representation, and solves the resulting reduced problems. Each certified Weighted STreeD solution is optimal for its current candidate set, while the outer feature search remains heuristic over the full feature space. Experiments on five data sets show that Weighted STreeD achieves speedups of up to 121.41 times over standard STreeD. Adaptive STreeD reduces runtime in matched comparisons at depths 2 to 4 and continues to return feasible trees at greater depths where full-feature methods are limited by time or memory. Under the same computational budget, its predictive performance remains comparable to the evaluated optimal classification tree baselines and is higher in some comparisons. These results show how joint feature- and sample-space reduction can scale dynamic-programming-based optimal-tree learning to more demanding instances.
