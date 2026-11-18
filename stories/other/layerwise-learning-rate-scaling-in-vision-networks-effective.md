---
title: "Layerwise Learning-Rate Scaling in Vision Networks: Effective-Rate Identification, Power-Mean Aggregation, and Budget Dependence"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21696"
authors: ["Chandini Vysyaraju, Raghuvir Duvvuri, Radu Timofte, Dmitry Ignatov"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21696v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Layerwise learning-rate scaling assigns different learning rates to different parts of a network. Although established in fine-tuning pretrained models, its effects in vision networks trained from scratch are commonly assessed by training each candidate recipe. We show that, in this setting, the rate-related component of a layerwise strategy is well summarized by an effective learning rate computable directly from its multiplier profile. Across matched-control comparisons, changes in test accuracy closely track changes in training loss (r = -0.996), which supports an optimization-progress explanation of the short-budget rate effect. Increasing the untuned base learning rate tenfold shifts the rate-matched contrast upward in all six tested architectures (p = 0.016) and increases the number of architectures in which a published discriminative schedule, excluded from model fitting, outperforms the uniform control from two to five of six (p = 0.031). Within the evaluated strategy space, a parameter-weighted power mean with exponent 0.35 (95% confidence interval [0.20, 0.50]) accounts for 42.6% of within-architecture variance, compared with 36.4% for the arithmetic mean. Ranking candidates by this scalar without training improves the selected candidate's mean percentile rank from the 26th to the 10th and reduces its mean accuracy shortfall relative to the best candidate from 3.70 to 1.12 points. The rate-related effect decays as the training budget increases; relative to tuned baselines, the overall strategy effect falls within the prespecified practical-equivalence margin in two of three architectures. A separate grouping-related contrast can persist at long budgets, although its direction and magnitude depend on the architecture.
