---
title: "K-IPO: Kendall-constrained Importance Preserving Oversampling for Imbalanced Tabular Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16478"
authors: ["Marios Tyrovolas, Argiris Sofotasios, Dimitris Metaxakis, Georgios Mermigkis, George Georgoulas, Panagiotis Hadjidoukas, Chrysostomos Stylios"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2607.16478v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16478v1 Announce Type: new Abstract: Oversampling is widely used to address class imbalance in tabular classification, but existing methods can distort the feature importance ranking underlying model explanations. Although recent studies have quantified this distortion by comparing real and synthetic data, none have actively sought to prevent it. In this paper, we introduce Kendall-constrained Importance-Preserving Oversampling (K-IPO), a generator-agnostic, "generate-then-select" framework that preserves the original data's feature importance ranking during augmentation. K-IPO iteratively generates minority-class candidates and accepts them only if their inclusion maintains a user-defined minimum Kendall's tau ({\tau}) correlation with the reference ranking. Optionally, stricter constraints can be applied to the highest-ranked features. We evaluated K-IPO on 20 imbalanced binary classification datasets using three classifiers and multiple explanation methods. In most cases, K-IPO achieved the best or tied-best results in feature importance preservation, explanation consistency, and class separability. It also generally improved predictive performance while maintaining competitive computational overhead.
