---
title: "Federated and Balanced $k$-means: Communication Efficiency, Privacy, and Heterogeneity"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27114"
authors: ["Feiteng Nie, Shengkun Zhu, Sheng Wang, Yuan Sun, Feiping Nie, Wei Song, Zhiyong Peng"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.27114v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Collaborating on data across organizations in healthcare and finance demands methods that preserve privacy while enabling effective analysis. Vertical Federated Learning (VFL) facilitates clustering across data where different parties hold different features of the same entities without sharing raw data. However, existing VFL clustering methods suffer from two key limitations: vulnerability to information leakage and the creation of imbalanced clusters. To address these limitations, we propose Fabric, a balanced and privacy-preserving federated $k$-means algorithm. Our method decomposes the balanced clustering problem into independent subproblems for each client, using the Alternating Direction Method of Multipliers (ADMM) to efficiently handle the balance constraints. Under the semi-honest model, Fabric provides provable privacy guarantees by injecting calibrated noise into local objective evaluations. Extensive evaluations on ten real-world datasets show that Fabric achieves a superior utility-privacy trade-off compared with state-of-the-art methods and converges faster. Specifically, Fabric reduces SSE by 29.1\% on average and improves balance performance by 1.41$\times$, while being 26$\times$ faster on average.
