---
title: "Monte Carlo Random Walk Kernel"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.40956"
authors: ["Arslan Iamaletdinov, Elfat Sabitov, Konstantin Sorokin"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 15
guid: "oai:arXiv.org:2610.40956v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

We introduce the Monte Carlo Random Walk Kernel (MCRWK), an estimator whose per-pair cost is independent of graph size and derived directly from the random walk kernel (RWK) expansion. By normalizing the kernel coefficients, MCRWK samples a shared walk length and estimates its contribution using random walks on the input graphs. This gives a simple way to approximate RWK without constructing the product graph. For a fixed expected walk length and efficient neighbor sampling, each pairwise estimate takes $O(m)$ time for $m$ Monte Carlo samples, allowing the sample budget to control the trade-off between runtime and accuracy. We evaluate MCRWK against Graph Voyagers and classical RWK methods on synthetic and real graph datasets. In the reported experiments on large synthetic graphs, MCRWK is faster than Graph Voyagers and, at matched runtime, more accurate. It also has the lowest Gram-matrix runtime on the five real datasets studied. Code and experiments are available at https://github.com/arslan-yam/random_walk_kernels_computations
