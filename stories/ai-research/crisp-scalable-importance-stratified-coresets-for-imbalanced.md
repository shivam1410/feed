---
title: "CRISP: Scalable Importance-Stratified Coresets for Imbalanced Tabular Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.26962"
authors: ["Hardhik Mohanty, Indrayana Rustandi, Mohamadreza Sheibani"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 42
guid: "oai:arXiv.org:2609.26962v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.26962v1 Announce Type: new Abstract: Large imbalanced tabular datasets make repeated gradient-boosted tree training expensive. Existing coreset methods often lose accuracy when most majority examples are removed. We present CRISP (Coreset Reduction via Importance-Stratified Pruning), a linear-time method that allocates a negative-class budget across quantile strata of a proxy-model score. Sample weights account for unequal inclusion probabilities. At 95% negative-class reduction on a production fraud dataset, CRISP trains on approximately 1.70M of 25M rows and retains 99.7% of full-data Average Precision. This is a 93.2% reduction in total training rows. On public CriteoPrivateAds, CRISP has the highest mean Average Precision at each tested rate from 90% to 99.4% majority reduction. Sparkov results are mixed at lower rates, but CRISP has the highest mean at 99.2% and 99.4%. Ablations identify budget allocation and inverse-propensity weighting as the main sources of the production-dataset gain.
