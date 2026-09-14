---
title: "Certified Safety Curation: Distribution-Free Guarantees for Safe Offline Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12014"
authors: ["Adam Haroon, Cody Fleming"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12014v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12014v1 Announce Type: new Abstract: Safe offline reinforcement learning assumes a cost function on every transition. We ask what remains possible when safety can be judged only by comparing short clips and occasionally asking whether an episode exceeded its budget. Certified safety curation answers with a filter-then-clone pipeline: a state-only value trained from segment comparisons scores whole trajectories, Learn-then-Test calibration certifies a selection threshold under a distribution-free $(\alpha, \delta)$ bound on the unsafe fraction of the selection, and behavior cloning follows. We are not aware of prior work certifying the composition of a training set for offline RL or imitation. Oracle controls justify the design: reweighting individual transitions fails even with an exact value, so the value selects whole trajectories. The policies satisfy the cost budget on eleven of fifteen DSRL tasks, one short of cloning the ground-truth safe subset, which needs a label on every trajectory; the uncertified variant reaches twelve. Retrained on the certified selection, the strongest full-label method becomes safe where no setting of its own cost target rescues it. Refusal is predictable: the certificate's probability has a closed form in the purity the pool attains, which the calibration sample estimates and the scorer enters only through.
