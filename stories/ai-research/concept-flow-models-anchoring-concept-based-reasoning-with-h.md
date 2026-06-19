---
title: "Concept Flow Models: Anchoring Concept-Based Reasoning with Hierarchical Bottlenecks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19489"
authors: ["Ya Wang, Adrian Paschke"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.19489v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19489v1 Announce Type: new Abstract: Concept Bottleneck Models (CBMs) enhance interpretability by projecting learned features into a human-understandable concept space. Recent approaches leverage vision-language models to generate concept embeddings, reducing the need for manual concept annotations. However, these models suffer from a critical limitation: as the number of concepts approaches the embedding dimension, information leakage increases, enabling the model to exploit spurious or semantically irrelevant correlations and undermining interpretability. In this work, we propose Concept Flow Models (CFMs), which replace the flat bottleneck with a hierarchical, concept-driven decision tree. Each internal node in the hierarchy focuses on a localized subset of discriminative concepts, progressively narrowing the prediction scope. Our framework constructs decision hierarchies from visual embeddings, distributes semantic concepts at each hierarchy level, and trains differentiable concept weights through probabilistic tree traversal. Extensive experiments on diverse benchmarks demonstrate that CFMs match the predictive performance of flat CBMs, while substantially mitigating information leakage by reducing effective concept usage. Furthermore, CFMs yield stepwise decision flows that enable transparent and auditable model reasoning with hierarchical class structures.
