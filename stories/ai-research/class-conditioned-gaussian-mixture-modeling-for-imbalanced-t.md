---
title: "Class-Conditioned Gaussian Mixture Modeling for Imbalanced Time Series Quantification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21473"
authors: ["Md Shahriar Kabir, Mayesha Maliha R. Mithila, Anne H. H. Ngu, Myl\\`ene C. Q. Farias, Byron Gao"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.21473v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21473v1 Announce Type: new Abstract: Quantification, estimating class prevalences in bags of unlabeled instances is vital in domains where aggregate statistics are more important than individual instance labels, such as biosignal monitoring, fall detection, and activity recognition. We investigate this issue in the challenging setting of imbalanced time series data and develop CC-GMNet-TS, a class-conditioned Gaussian mixture quantifier that combines a Transformer-based feature extractor with per-class latent mixtures. Unlike previous mixture-based quantifiers, which use a single Gaussian mixture shared by all classes, CC-GMNet-TS assigns each class its own compact mixture in a bounded latent space and scores segment embeddings against these class-specific components to create bag-level representations that emphasize rare but informative patterns. Bags are constructed from labeled pools using the Artificial Prevalence Protocol (APP) and prior shift bag sampling (PShift) to cover a wide range of class prevalence scenarios, and the model is trained end-to-end with a quantification-oriented loss. Experiments on three benchmarks: EMG Data for Gestures, SmartFallMM, and UCI-HAR show that CC-GMNet-TS achieves lower error across the three benchmarks compared to traditional aggregators and recent deep quantifiers, while ablations confirm the contributions of both the Transformer backbone and class-conditioned mixtures during PShift.
