---
title: "Searching the Space of Feed-Forward Neural-Network Weight-Update Rules with Fixed Depth Symbolic Regression"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.21855"
authors: ["Charles Brum, Edward Finkelstein"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.21855v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.21855v1 Announce Type: new Abstract: We investigate whether symbolic regression can discover explicit neural network weight-update rules that outperform standard hand-designed optimizers on small symbolic regression benchmarks. Candidate update rules are represented as fixed-depth symbolic expressions over operands derived from common optimizers, including gradient, momentum, adaptive-gradient, and moment-estimate quantities. Across 30 benchmark/neural network combinations, the symbolic regression procedure found an update rule outperforming the best hyperparameter-tuned established optimizer in 25 cases, with an aggregate MSE reduction of 44.47\% over the improved cases. The discovered rules do not all share a single common symbolic form, but many combine adaptive normalization, momentum-like quantities, nonlinear transformations, and rational expressions. These results suggest that symbolic regression can serve as a lightweight mechanism for discovering compact optimizer variants, while also highlighting the need for larger-scale validation.
