---
title: "Cross-Trajectory Chimera Interventions Reveal Dissociable Roles of Weight Magnitude and Direction in Grokking"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06628"
authors: ["Truong Xuan Khanh"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.06628v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06628v1 Announce Type: new Abstract: Which properties of a partially trained network are causally portable to a different, independently trained network? Single-trajectory interventions show necessity within one run, not portability across runs. We introduce cross-trajectory chimera interventions: given two runs from different seeds, we split each weight vector into a norm and a unit direction, recombine one run's norm with the other's direction, and continue training. On two modular-arithmetic tasks that grok, the components dissociate. Direction carries a transferable, donor-specific circuit identity: implanting a donor's direction at the recipient's norm drives the run to the donor's circuit in 40/40 cases, while an angle-matched random control yields no shift. The transfer is threshold-like, and its location is predicted by the recipient's norm, separating perfectly by norm class over all 20 pairs (joint permutation probability 1.9e-4). Norm carries only a modest, distributed delay effect and no identity signal. An adaptive bisection procedure localizes the threshold to +/-1/64. Direction indexes which solution a trajectory approaches; norm governs how susceptible that identity is to being overwritten.
