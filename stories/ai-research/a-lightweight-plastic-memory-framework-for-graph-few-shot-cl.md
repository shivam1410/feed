---
title: "A Lightweight Plastic-Memory Framework for Graph Few-Shot Class-Incremental Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25781"
authors: ["Zihan Mei, Zhili Qin, Tongze Zhang, Hongyuan Liu, Junming Shao, Qinli Yang"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.25781v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25781v1 Announce Type: new Abstract: Graph Incremental Learning has garnered increasing attention as dynamic graph data continues to emerge across diverse fields. Conventional approaches primarily address catastrophic forgetting by preserving node-related knowledge through replay or distillation techniques; however, they often incur high computational costs and inefficiency. This issue is further exacerbated in real-world scenarios where labeled data for new classes is scarce. In this paper, we propose a novel lightweight plastic-memory framework specifically designed for few-shot incremental learning on graphs. The core idea of our framework is the construction of a plastic-memory module that evolves over time, continuously updating and expanding its memory to accommodate new classes while retaining previously learned knowledge. In contrast to existing techniques, our memory module is both lightweight and effective, featuring an innovative evolving micro-clustering structure that dynamically updates representations of class prototypes, sub-prototypes, and their interaction weights. Building on this memory module, we introduce a memory-driven meta-learning framework that enhances adaptability to new tasks in its inner loop while maintaining stability for earlier tasks in the outer loop. Extensive experiments on four benchmark datasets demonstrate the framework's superior performance in balancing stability for old knowledge and adaptability to new knowledge.
