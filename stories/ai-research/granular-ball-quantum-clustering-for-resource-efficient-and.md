---
title: "Granular-Ball Quantum Clustering for Resource-Efficient and Robust Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.06016"
authors: ["Suzhen Yuan, Qilin Xie, Lifeng Shen, Shuyin Xia, Jermiah D. Deng, Guoying Wang"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.06016v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.06016v1 Announce Type: new Abstract: Quantum clustering aims to exploit quantum feature representations to uncover complex data structures beyond conventional Euclidean geometry. Yet this sample-level kernel construction requires O(n^2) quantum circuit executions for n data points, creating a major bottleneck under near-term quantum resource constraints. Prior solutions fail to resolve this efficiency-accuracy dilemma: classical granular-ball clustering reduces sample complexity but relies on Euclidean metrics that cannot capture quantum correlations, while existing quantum compression schemes prioritize efficiency over structural preservation, degrading performance on non-convex or noisy data. Here we propose Granular-Ball Quantum Clustering (GBQC), a framework that tightly couples granular-ball structural abstraction with quantum feature learning. GBQC first compresses raw data into compact, representative granular balls via a PCA-guided splitting strategy, reducing kernel evaluations by 80% compared to full-sample methods. A quantum cohesion mechanism then filters noisy granules in Hilbert space to improve clustering robustness. Extensive experiments on synthetic, noisy, overlapping, and real-world datasets demonstrate that GBQC consistently achieves superior clustering accuracy and robustness compared with representative classical and quantum clustering methods. Meanwhile, the proposed granular-ball compression significantly reduces quantum kernel evaluations and computational overhead, enabling quantum clustering experiments on larger datasets within parameterized quantum learning frameworks. These results suggest that granular-ball representations serve not only as a compression mechanism to reduce quantum computational costs but also as an effective structural abstraction mechanism that improves clustering quality by eliminating redundant and structurally ambiguous learning units.
