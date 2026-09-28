---
title: "Moment-guided edge sampling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30472"
authors: ["Weibin Cai, Reza Zafarani"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2609.30472v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Edge sampling makes local decisions to achieve graph-level objectives, such as preserving structural properties. This creates a fundamental challenge: \textit{how can the effect of a local edge edit (i.e., edge addition or removal) on global graph structure be quantified and controlled?} We address this challenge with a \textit{moment-guided edge sampling framework} based on spectral moments of the random-walk transition matrix. We compute exact moment changes through two complementary methods: a combinatorial method with closed-form updates for low-order moments, and a low-rank method that exploits \textit{locality} and \textit{cyclic trace invariance} to compress computations to edited endpoints, supporting arbitrary moment orders and batched edits. For single-edge edits at fixed moment orders, the low-rank method reduces the cost from $O(mn)$ to $O(m)$, while the combinatorial method evaluates low-order changes in constant time given maintained local statistics. These moment changes provide \textbf{interpretable structural signatures} of local edge motifs that aggregate into graph-level fingerprints. This structural meaning motivates us to ask whether preserving moments also preserves the graph properties. We further derive and validate that moment-preserving sampling can \textbf{retain related structural properties}, including triangle-weighted clustering coefficient. These structural insights enable \textbf{analysis and improvement of graph learning}: different edge structures have distinct effects on supervised node classification, while moment-guided augmentation is competitive for graph contrastive learning. Together, these findings establish moments as an interpretable and controllable bridge from local edge edits to global graph structure and learning.
