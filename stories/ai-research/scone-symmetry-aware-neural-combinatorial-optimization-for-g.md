---
title: "Scone: Symmetry-aware Neural Combinatorial Optimization for Graph Coloring"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25273"
authors: ["Paolo Pellizzoni, Melanie Weber"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.25273v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Graph coloring, which entails assigning colors to nodes such that no adjacent nodes have the same color, is a fundamental combinatorial optimization problem. In general, however, finding a node coloring with no monochromatic edges given a fixed palette is NP-hard. This motivates learning-based methods that can learn to exploit recurring structure across instances to efficiently produce high-quality colorings. Crucially, the validity of a coloring is invariant to permutations of the colors, and we show that exploiting this symmetry reduces the size of the effective state space over which the model has to learn its policy. At the same time, the coloring algorithm must be able to break some symmetries, for example to assign different colors to two adjacent nodes belonging to the same automorphism orbit. In this paper, we introduce Scone, a model that uses a color-equivariant graph neural network to construct colorings sequentially, allowing information from previous assignments to propagate and break node symmetries. Scone achieves perfect solution quality with low inference times across several graph coloring tasks, including on sudoku_extreme and register allocations, and showcases generalization to graph families not encountered during training.
