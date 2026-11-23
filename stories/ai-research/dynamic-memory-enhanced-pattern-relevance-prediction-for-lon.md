---
title: "Dynamic Memory-enhanced Pattern Relevance Prediction for Long-tailed Graph Classification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27141"
authors: ["Jiawei Chen, Wenjun Wang, Wei Yu, Qiyao Peng"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 20
guid: "oai:arXiv.org:2611.27141v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Long-tailed graph classification (LTGC) is common in real-world graph datasets, where a few large head graphs provide rich structural information while many smaller tail graphs offer fewer structural cues, making it harder to learn discriminative representations for tail graphs. To address this size-based imbalance, we propose Dynamic Memory-enhanced Pattern Relevance Prediction (DMPRP), which transfers structural patterns from head graphs to tail graphs. Given a graph representation as a query, a dynamic expert memory module inspired by Knowledge-diverse Experts (KDEX) generates a residual vector that augments the original representation. We train the module using co-occurrence triplets sampled from head graphs at the node, rooted subgraph, and random-walk neighborhood levels. Experiments on five graph classification benchmarks show that DMPRP improves tail performance, and ablation studies show that both the expert module and random-walk supervision contribute to these gains. A controlled experiment on PTC further examines pattern transfer when smaller graphs are denser than larger ones. Our code is available at https://anonymous.4open.science/r/DMPRP-73A5.
