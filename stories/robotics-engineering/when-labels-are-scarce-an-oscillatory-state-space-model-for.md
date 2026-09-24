---
title: "When Labels Are Scarce: An Oscillatory State Space Model for Vibration Diagnosis"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27411"
authors: ["Mainak Mallick, Seung-Kyum Choi"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.27411v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27411v1 Announce Type: new Abstract: Machine fault diagnosis from vibration requires learning from scarce labelled fault recordings while meeting the computational constraints of edge devices for local inference. We introduce DualRes, a compact oscillatory state-space model that combines two complementary spectral views of vibration, capturing rapid changes and fine frequency structure. Time-aligned views are processed by selective oscillatory memory, which learns how long to retain temporal patterns. The encoder contains 39,528 parameters. We evaluate supervised learning across six bearing datasets and a gearbox benchmark, with an additional gearbox pilot. Recording-level splits and explicit accounting of labelled duration distinguish data efficiency from repeated exposure to correlated samples. On the main gearbox benchmark, DualRes achieves state-of-the-art performance among the nine evaluated methods at six of seven label budgets. With about six labelled seconds per class, it improves macro-F1 by 16.1 percentage points over the next strongest comparator. On the same benchmark, DualRes achieves a 1.44-fold recording-level speedup and a 24.8-fold reduction in checkpoint storage relative to a selective state-space baseline under matched hardware and runtime conditions. Bearing results reveal task-dependent trade-offs. These findings support oscillatory memory as a compact approach to vibration diagnosis under limited labelled exposure.
