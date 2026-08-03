---
title: "HERO: History-Enriched Rollout Training for Long-Horizon Autoregressive Neural Operators"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.29135"
authors: ["Jiaquan Zhang, Shuxu Chen, Haifan Meng, Yi Lu, Zhihan Lyu, Fan Mo, Wei Dong, Yang Yang, Chaoning Zhang"]
date: "Mon, 03 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.29135v1"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

arXiv:2607.29135v1 Announce Type: new Abstract: Neural operators provide fast surrogates for time-dependent partial differential equations (PDEs) by applying a learned evolution operator recursively to its own predictions, but this autoregressive rollout feeds every prediction error back as input, so local errors accumulate. Existing rollout-training strategies reduce the mismatch between training inputs and self-generated states, yet their supervision still measures only the absolute discrepancy from the ground-truth trajectory. Such supervision is therefore uninformative about whether the operator has overcome the long-horizon failure behaviors it exhibited earlier during optimization. We propose history-enriched rollout training (HERO), which augments conventional absolute trajectory supervision with relative supervision derived from the model's optimization history. HERO ranks detached candidate rollouts from a periodically refreshed lagged operator, the current model, and a perturbed input by rollout error, spectral discrepancy, energy drift, and error growth, and selects the strongest failure trajectory as reference. This reference enters a margin-based objective as a fixed comparison baseline, inducing a bounded, sample-dependent reweighting of the ground-truth rollout gradient rather than an independent gradient direction, which we further analyze theoretically. Experiments on nine PDE benchmarks with spectral and attention-based backbones show that HERO consistently improves long-horizon accuracy, stable rollout length, and out-of-distribution robustness at no inference-time cost. These results indicate that history-enriched relative supervision is effective for stabilizing long-horizon autoregressive prediction.
