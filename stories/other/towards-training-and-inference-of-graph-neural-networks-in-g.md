---
title: "Towards Training and Inference of Graph Neural Networks in Graph Databases"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19142"
authors: ["Victor Pekkari, Harry Wik, Alfred Clemedtson, Borun Shi, Xuan-Son Vu"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19142v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Graph Neural Networks on large graphs commonly rely on in-memory graph storage with ad hoc data processing pipelines for both training and inference. Graph databases provide scalable storage and efficient traversal for graphs that can evolve over time, but their applicability in GNN training and inference are rarely studied. We show that graph DBs can be used in GNN training and inference directly, executing sampling, feature retrieval, and even the full forward pass. We show different GNN training pipelines can perform on-the-fly sampling and retrieval in graph DBs using Cypher. We further provide optimisations that speed up the training process by \~2.5x while maintaining the same accuracy. We illustrate that fully in-DB inference is possible, independent of how the GNNs are trained. Our inference setup can be >10x faster than cold loading the graph into RAM with no extra memory overhead on real-world graphs. Our work lays the foundation for in-graph-DB GNN training and inference.
