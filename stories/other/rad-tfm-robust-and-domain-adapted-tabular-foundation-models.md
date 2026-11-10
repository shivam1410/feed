---
title: "RAD-TFM: Robust and Domain-Adapted Tabular Foundation Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10230"
authors: ["Matthew Peroni, Franck Le, Vadim Sheinin"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10230v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

The development of tabular foundation models (TFMs) has accelerated in recent years, outperforming traditional ML methods on many tabular benchmarks. A key finding is that TFMs can be pretrained entirely on synthetic datasets, opening opportunities to design data generators that encourage desirable model properties. Prior work has mainly focused on crafting high-quality priors over generators to improve overall pretraining performance. Our key insight is that parameterizing the generator distribution enables an adversarial, distributional robustness perspective: during training, we can adapt the generator to emphasize datasets that are particularly challenging for the model, which we formalize by introducing an optimality gap measure. Further, we develop a method to align the synthetic data generation with real-world datasets from a given domain, constraining the adversary to generate realistic data. Together, these algorithms comprise the Robust and Domain-Adapted Tabular Foundation Models (RAD-TFM) pipeline, a model-agnostic adversarial training framework. Applied to the TabPFN V2 classifier, RAD-TFM improves performance across 6 diverse tabular benchmarks, with up to a 10.8 percentage-point improvement in mean normalized AUC over the strongest baseline, using fewer than 100k additional synthetic training datasets, less than 0.1% of the original pretraining data. Applying the same pipeline to TabICL V2 also improves performance across three major benchmarks, demonstrating the generality of the framework. These results highlight a promising new direction for targeted adversarial continued training of TFMs using synthetic data alone.
