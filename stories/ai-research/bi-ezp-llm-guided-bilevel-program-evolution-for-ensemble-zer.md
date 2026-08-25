---
title: "Bi-EZP: LLM-Guided Bilevel Program Evolution for Ensemble Zero-Cost Proxy Discovery"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21927"
authors: ["Yutao Lai, Kezhao Lai, Hai-Lin Liu"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.21927v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21927v1 Announce Type: new Abstract: Zero-cost proxies enable neural architecture search (NAS) to rank candidate networks from statistics computed at initialization, avoiding repeated training. However, different proxies capture different properties and often produce inconsistent rankings across search spaces. Ensemble proxies can combine complementary signals, but automated discovery must optimize both discrete aggregation structures and their continuous coefficients, making structural quality difficult to separate from parameter calibration. We propose Bi-EZP, a bilevel framework that decouples these decisions. At the upper level, a large language model generates executable aggregation programs over four complementary base proxies with program-specific parameter bounds. At the lower level, covariance matrix adaptation evolution strategy (CMA-ES) optimizes the continuous parameters of each fixed program on an inner training split. The calibrated programs are then evaluated using Kendall's rank correlation on a disjoint validation split, enabling evolutionary selection to favor structures that generalize beyond their calibration data. Experiments on NATS-Bench and Network Design Spaces evaluate ranking performance across heterogeneous search spaces, and DARTS experiments assess downstream architecture search. Results show that separating program discovery from numerical calibration provides an effective approach to automated ensemble zero-cost proxy construction. The source code is available at: https://anonymous.4open.science/r/Bi-EZP-318D
