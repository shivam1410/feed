---
title: "Online Learning for Minimizing Maximum Tardiness in Single-Machine Scheduling"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27067"
authors: ["Yiyang Chen, Kohei Hatano, Eiji Takimoto"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.27067v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

We study online learning for minimizing maximum tardiness (\OMMT) in single-machine scheduling. In each round, the learner selects a permutation of \(n\) fixed jobs, representing a schedule. The environment then reveals a processing time and a due date for each job, and the learner incurs a vector-valued loss whose components correspond to the tardiness of the individual jobs. The goal of the learner is to minimize \(\alpha\)-regret, the difference between the learner's maximum cumulative tardiness and \(\alpha\) times that of the best fixed permutation in hindsight, for as small \(\alpha\) as possible. We investigate OMMT under both stochastic and adversarial environments. In the stochastic setting, we prove that the expected \(1\)-regret of the Follow-the-Leader (FTL) algorithm is \( O\!\left(\frac{n\log n}{\Delta^2}\right) \), together with a corresponding high-probability bound, where \(\Delta\) is a distribution-dependent gap parameter. At round \(t \in \{1,\dots,T\}\), FTL runs in \(O(tn^2)\) time and \(O(tn)\) space. In the adversarial setting, we prove that, for any \(0<c<\log_2 n/16\), the \(\alpha\)-regret is \(\Omega(T)\) whenever \(\alpha<\log_2 n/16-c\). We then reduce OMMT to a surrogate online learning problem and apply Follow-the-Perturbed-Leader (FTPL), obtaining an expected \(\alpha\)-regret bound of \(O(n^2\sqrt{T})\) for \(\alpha=O(\log n)\). Thus, the logarithmic dependence of \(\alpha\) on \(n\) is tight up to constant factors. Each FTPL update admits a mixed-integer programming formulation whose size is polynomial in \(n\) and \(t\).
