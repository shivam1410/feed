---
title: "Staged Depth Training: A Representation Curriculum for PINNs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30299"
authors: ["Kejia Zhang, Youran Sun, Haizhao Yang"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2609.30299v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Representation quality is a central determinant of PINNs' performance, yet standard training leaves representations to emerge implicitly while fitting the final solution. We introduce \textbf{representation curriculum}, an ordered process in which representations are explicitly learned, transferred independently of their predictors, and progressively refined. We realize it with Staged Depth Training (SDT), which trains a shallow prefix under a temporary physics-informed head, discards the head, and freezes the learned prefix while adding depth, without equation-specific encodings or changes to the final architecture. Across the 20 default forward problems in PINNacle with three backbones, SDT improves 40 of 59 equal-budget problem--backbone cells by at least 5\% and remains within that band in the rest, with a 32.8\% geometric-mean error reduction on a PirateNet-style backbone. Mechanistic ablations suggest that the gain is not explained by optimizer restarts or shallow warm-starting alone. Representation visualizations and hyperparameter-basin analyses provide diagnostic evidence on representation geometry and local sensitivity to shared hyperparameters. On Poisson--Boltzmann 2D, SDT also more than doubles the fitted depth-scaling exponent for both backbones. These results support representation curriculum as a promising training strategy for improving PINNs while preserving the deployed architecture and inference cost.
