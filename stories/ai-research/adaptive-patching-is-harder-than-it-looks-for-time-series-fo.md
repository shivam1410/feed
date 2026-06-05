---
title: "Adaptive Patching Is Harder Than It Looks For Time-Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04074"
authors: ["Federico Zucchi, Yi Xie, Chao Zhang, Keyuan Luo, Thomas Lampert, Ziyue Li"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.04074v1"
image: ""
generated: "2026-06-05T13:37:27+05:30"
---

arXiv:2606.04074v1 Announce Type: new Abstract: Adaptive patching is a recent and compelling proposal for time-series Transformers: allocate finer patches where the sequence looks locally informative. This paper asks under what conditions a content-adaptive patching operator should outperform a tuned uniform one. Local heterogeneity alone is not enough: under pointwise forecasting losses, a complex-looking region is not automatically one where finer patching reduces the loss. We model patching as a budgeted bitrate allocation and derive an explicit threshold that a dynamic patching rule must satisfy to beat a well-tuned uniform baseline, then bound the achievable improvement both locally (a quadratic surrogate) and globally (a strong-convexity bound under the model's assumptions). Two structural results follow: without a coupling constraint, scalar local complexity cannot produce a non-uniform optimum under a common loss landscape; and once the backbone is trained to its representation-aware optimum, the alignment gain collapses around a well-tuned uniform patch size. To test these predictions, we run a controlled isolation study on three representative architectures, replacing each adaptive mechanism with a uniform patch-size sweep while keeping the backbone, data, and training protocol fixed. On standard long-horizon forecasting benchmarks, the validation-selected uniform baseline is competitive with the dynamic counterpart, with per-setting effects concentrated near zero and no consistent directional advantage once results are aggregated by dataset. The larger gains we do observe are method- and dataset-specific. Adaptive patching should therefore be evaluated against a tuned uniform baseline; its value depends on whether a cheap and reliable routing signal can identify where finer patches actually reduce forecasting loss.
