---
title: "Congruence Decomposition with Neural Block Solvers for Large-Scale PCI Assignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21485"
authors: ["Yeqing Qiu, Chengpiao Huang, Ye Xue, Akang Wang, Fan Xu, Zhipeng Jiang, Dong Zhang, Ruoyu Sun, Qingjiang Shi, Zhi-Quan Luo"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.21485v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21485v1 Announce Type: new Abstract: Physical Cell Identity (PCI) assignment is essential for interference management in dense 5G networks. As cellular networks scale, PCI reuse becomes unavoidable, which may cause collisions, confusions, and multiple forms of modular interference. Jointly mitigating these effects gives rise to a large-scale, multi-objective combinatorial optimization problem that is difficult to solve efficiently at practical network scales. In this work, we propose a congruence decomposition framework with neural block solvers for large-scale PCI assignment. The proposed decomposition exploits the arithmetic structure of PCI values to decouple multiple modular interference objectives into a collection of blockwise Min-$k$-Partition subproblems, followed by a graph coloring procedure to resolve PCI conflicts. For the resulting NP-hard Min-$k$-Partition subproblems, we develop neural block solvers by parameterizing their relaxed quadratic formulations with graph neural networks, enabling efficient optimization at large scales. Discrete assignments are recovered through conditional expectation rounding with theoretical guarantees. Experiments on synthetic cellular graphs and real-world 5G networks show that the proposed method consistently outperforms existing modular-interference-aware baselines in modular interference reduction, conflict elimination, and computational efficiency.
