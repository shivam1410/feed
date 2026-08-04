---
title: "Stabilized Best-of-$K$ Training for Neural Combinatorial Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00296"
authors: ["Melveena Jolly, Midhun Xavier"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.00296v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00296v1 Announce Type: new Abstract: Leader Reward modifies POMO training to emphasize the best trajectory produced by repeated inference. We test a narrow extension: replace its binary leader/non-leader distinction with a stabilized rank signal indexed by a sampling budget $K$. With the POMO architecture, 3,050-epoch schedule, and TSP-100 test set held fixed, the Leader Reward reimplementation obtains $7.7662$ under 100-start, 8-augmentation greedy decoding, matching the reported $7.766$ at its displayed precision. Under independent sampling, the stabilized $K=8$ recipe lowers realized Best-of-8 cost in all three paired training seeds: $7.7944$ versus $7.8136$. This observation is estimation-only and decoder-specific: three seeds are below the six-seed testing floor, Leader Reward is better at sampled $K=1$, and it remains slightly better under its original augmented-greedy protocol. We make no unbiased-estimator, universal superiority, or state-of-the-art claim.
