---
title: "Stability Analysis of Signed Graphs under Structural Perturbations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30444"
authors: ["Ning Zhang, Li Zhang"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 15
guid: "oai:arXiv.org:2610.30444v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Signed graph learning has emerged as a powerful framework for modeling networks with both positive and negative interactions. While graph-filter-based methods have achieved promising empirical performance on signed networks, their stability under edge perturbations remains less well understood. Existing stability analyses primarily focus on unsigned graphs and do not account for sign-flip perturbations. In this paper, we study the stability of signed graph filters under edge additions, deletions, and sign flips. Our theoretical analysis reveals how signed edge perturbations and node feature correlations jointly determine the learned representation stability. Based on this analysis, we propose a theory-guided perturbation strategy that selects structurally influential signed-edge modifications. Experiments on synthetic and real signed graphs show that the proposed method consistently induces larger embedding drift, polarity change, and downstream link prediction degradation than baselines. These results highlight the importance of \textit{sign-aware} and \textit{distribution-aware} stability analysis for signed graph learning.
