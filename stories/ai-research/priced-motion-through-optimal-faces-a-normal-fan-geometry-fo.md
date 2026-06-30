---
title: "Priced Motion Through Optimal Faces: A Normal-Fan Geometry for Non-Stationary Adversarial MDPs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.29092"
authors: ["Kai Hidajat"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 36
guid: "oai:arXiv.org:2606.29092v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.29092v1 Announce Type: new Abstract: In a changing decision problem, standard dynamic-regret analyses have often equated the cost of non-stationarity to how far loss moves. However, it is simultaneously possible for a loss sequence to travel far and retain the same optimal policy, or for a small movement in loss to force the optimal policy to change completely. Thus, the size of the movement through loss variation, transition variation, or comparator path length describe the adversary's motion, but not the cost of that motion to the control problem. For a more faithful analytic interpretation, this paper develops a normal-fan geometry for finite-horizon adversarial MDPs with fixed transitions. Occupancy measures form a polytope, and each loss vector exposes an optimal face of that polytope. Non-stationarity in rewards is therefore a path through the normal fan, where motion inside one cone leaves the optimal face unchanged, while crossing a wall may carry regret. We pose the notion of a face-crossing price, which is the minimum regret incurred by remaining on the previous optimal face under the new loss. For any learner that tracks the previous face, dynamic regret decomposes exactly into intrinsic priced face motion plus within-face selection error. The resulting theory separates consequential from harmless non-stationarity, where loss variation can be arbitrarily large at zero price, and identical one-coordinate variation can hide horizon-scale differences in regret.
