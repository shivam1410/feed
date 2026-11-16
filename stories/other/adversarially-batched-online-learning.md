---
title: "Adversarially Batched Online Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17500"
authors: ["Mingda Qiao, Kerui Wu"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17500v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

We introduce adversarially batched online learning, where the learner may update its decision rule only at a restricted set of time steps. Equivalently, the time horizon is partitioned into batches, within which the learner must use a fixed policy. We study this model for four canonical problems: stochastic bandits, online convex optimization, prediction with expert advice, and adversarial bandits. For stochastic bandits, we identify a universal complexity measure based on relative batch growth and establish both gap-dependent and gap-independent regret bounds. We show that the multiplicative penalty relative to the standard gap-dependent complexity can grow superlinearly in batch hardness. For the remaining three, we show that the optimal regret is tightly characterized by the 2-norm of the batch-length sequence. The upper bound is achieved by a batch-oblivious learner who does not know the batch structure, via a generic adaptive doubling trick tailored to this complexity measure. In contrast, the lower bound holds even for batch-aware learners.
