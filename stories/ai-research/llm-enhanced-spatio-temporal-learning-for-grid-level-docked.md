---
title: "LLM-enhanced spatio-temporal learning for grid-level docked bike sharing demand prediction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.03834"
authors: ["Xuxilu Zhang, Francesc Soriguera"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.03834v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Short-term bike-sharing demand forecasting is complicated by spatial-temporal non-stationarity and the practical difficulty of incorporating unstructured external text into numerical pipelines. Conventional approaches rely on historical flow sequences and fixed graph structures, thereby constraining their accuracy when anomalous social events perturb normal travel patterns. We propose a forecasting framework in which a Large Language Model (LLM) drives a semantic shockwave mechanism that converts free-form urban text, such as municipal event schedules, local news, and transit bulletins, into quantified spatial-temporal perturbation fields. The LLM extracts three physically interpretable parameters per event (intensity, spatial reach, and temporal lag), from which Gaussian decay fields are constructed and injected into a Zero-Inflated Adaptive Spatio-Temporal Graph Convolutional Network (ZI-ASTGCN). To handle the pronounced sparsity of grid-level measurements, the model couples a dual-branch output head with a multi-task zero-inflated loss that jointly trains a gating probability and a conditional flow intensity. Experiments on the operational Barcelona Bicing dataset show that ZI-ASTGCN outperforms established neural baselines, with particularly strong gains during high-demand periods, validating the utility of physics-grounded semantic signals in spatial-temporal mobility forecasting.
