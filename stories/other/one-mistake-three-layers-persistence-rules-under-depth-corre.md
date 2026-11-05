---
title: "One Mistake, Three Layers: Persistence Rules Under Depth Correlation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03968"
authors: ["Maryam Rahimimovassagh, Michael Brown, Sanjeda Sara Jennifer, Niloofar Yousefi"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03968v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Probing frozen representations layer by layer is now standard practice, but reporting when a signal first becomes decodable requires a rule for reading a depth curve, and the obvious rule is wrong. On synthetic curves with known ground truth, requiring a probe score to exceed a null-calibrated threshold for three consecutive stages reports an onset nineteen stages early under transformer-like depth correlation, with every resample returning an onset. The failure follows from correlation between neighboring layers, a hazard known in neuroimaging but not, to our knowledge, checked for depth curves. We give an estimator whose error rate is calibrated rather than assumed. Null trajectories are built by permuting labels within each evaluation unit and holding each permutation fixed across depth, preserving the correlation structure the rule must survive; thresholds are per-layer order statistics; and the persistence requirement is calibrated rather than chosen. Applied to pocket information in a frozen co-folding trunk, stratifying 1,820 post-cutoff targets by protein-family and pocket familiarity, the five-stage rule fires on 4 to 7 per cent of null trajectories against a nominal 5 per cent and the three-stage rule on 12 to 17: the synthetic failure reproduces on real data. Pocket membership is decodable above threshold at all 48 blocks in all four regimes, so the onset cannot discriminate them; the pre-declared accumulation depth does, and is latest for familiar families with structurally novel pockets in every feature set. That regime is also the weakest, by a margin surviving controls for length, pocket measure and alignment depth. Separately, a widely used public co-folding checkpoint loads against its own code with 128 trunk parameters missing; those would be randomly initialized, and every representation extracted would be partly noise while appearing normal.
