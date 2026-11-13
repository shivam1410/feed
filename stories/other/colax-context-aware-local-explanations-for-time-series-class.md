---
title: "CoLaX: Context-Aware Local Explanations for Time Series Classification"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15067"
authors: ["Kexuan Zhang, Paolo Frazzetto, Xiaobei Zou, Gustau Camps-Valls, Yang Tang"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15067v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Post-hoc explanations for time series classifiers usually score local patterns, such as subsequences or shapelets, without regard to the rest of the sequence. Yet the same motif can carry different predictive meaning under different global temporal conditions, such as trends or regimes. We propose CoLaX, a context-aware post-hoc explanation framework that builds on shapelet-driven Shapley attribution and conditions local-pattern relevance on a learned representation of the full sequence. Global context acts at two levels: it produces sample-specific prototype weights and a temporally resolved signal that reweights the local activation map. The resulting context-conditioned segments are the players of a Shapley attribution game whose values come only from the frozen black-box classifier. On synthetic benchmarks where identical motifs change relevance across contexts, CoLaX improves AUPRC over the strongest baseline by 30\% on average. On real-world data, it achieves the highest AUPRC on ECG. Additional ablations indicate that the gains come from input-dependent conditioning rather than from additional learnable weights. CoLaX is therefore most useful when recurring local motifs change relevance across sequence-level contexts.
