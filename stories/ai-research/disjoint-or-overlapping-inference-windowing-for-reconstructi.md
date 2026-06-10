---
title: "Disjoint or Overlapping? Inference Windowing for Reconstruction-Based Time Series Anomaly Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09874"
authors: ["Guillaume Coulaud (UM, IROKO), Reza Akbarinia (IROKO), Florent Masseglia (IROKO)"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.09874v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09874v1 Announce Type: new Abstract: Reconstruction-based methods are widely used for time series anomaly detection, where models are trained to reconstruct subsequences, and anomalies are identified through reconstruction errors. However, reported results are often hard to compare due to heterogeneous evaluation practices and underspecified inference procedures. In this paper, we revisit reconstruction-based anomaly detection in the univariate offline setting and study the role of the inference stride, which controls whether subsequences are processed as disjoint windows or with overlap. We propose a unified training, tuning, and multi-seed evaluation protocol on the curated TSB-AD benchmark, and study how overlapping inference affects anomaly detection performance for a range of reconstruction models, including PCA-based baselines, DLinear, an AutoEncoder, TimesNet, and Transformer variants. The results show that across all models, overlapping windows yield consistent improvements, with average relative gain up to +28%, and can alter method rankings. We further analyze variability across datasets, random seeds, and hyperparameter configurations. Finally, we complement the benchmark study with an evaluation on the full UCR archive using localization criteria aligned with sliding-window reconstruction. Overall, our results highlight that reconstruction-based anomaly detection performance depends not only on model architecture and training, but also on inference choices, motivating a clear and reproducible protocol. Our results show that reconstructionbased baselines achieve strong performance on both TSB-AD and UCR benchmarks, supporting them as competitive and practical approaches for univariate time series anomaly detection.
