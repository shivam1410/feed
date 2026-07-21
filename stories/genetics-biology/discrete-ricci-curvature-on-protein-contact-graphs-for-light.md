---
title: "Discrete Ricci Curvature on Protein Contact Graphs for Lightweight Fold Classification"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16553"
authors: ["Jianru Shen"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.16553v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16553v1 Announce Type: new Abstract: Protein fold classification can be approached via sequence-based representations or structural descriptors, but direct comparisons between lightweight handcrafted descriptors and pretrained protein language model embeddings remain limited. We investigate discrete Ricci curvature on Calpha contact graphs as a lightweight structural descriptor for fold classification. Each protein domain is represented by a 22-dimensional fixed-length feature derived from summary statistics and quantiles of Ollivier-Ricci and Forman-Ricci edge curvature distributions. We evaluate on CATH top-10 Topology classification and on the ASTRAL 40%-identity SCOPe top-10 Fold benchmark, comparing against geometry, contact-graph statistics, persistent homology, and mean-pooled ESM-2 (150M) baselines. On both datasets, lightweight structural descriptors substantially outperform mean-pooled ESM-2 embeddings, with a larger performance gap on the ASTRAL 40% SCOPe benchmark. Ricci alone uses 22 dimensions, or 3.4% of the ESM-2 baseline dimensionality, and already outperforms mean-pooled ESM-2 on both datasets. Combining Ricci with persistent homology yields the strongest performance, achieving macro-F1 of 0.71 on CATH and 0.68 on SCOPe with a 112-dimensional feature vector. These results identify a regime where lightweight interpretable graph descriptors offer a practical alternative to pretrained protein language model embeddings.
