---
title: "Fermat ProbCover: Coverage-Based Active Learning on Fermat Distance Graphs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13448"
authors: ["Gokul Bhusal, Delanna Do, Kevin Miller, Ekaterina Merkurjev, Stephan Wojtowytsch"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13448v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Active learning aims to reduce annotation cost by selecting the most informative examples for labeling. In the low-budget regime, where uncertainty-based methods often fail, coverage-based active learning methods such as ProbCover have been shown to be effective. However, these methods typically rely on Euclidean distance, which may not adequately capture the underlying geometry of data. In this article, we propose PC-Fermat, a coverage-based active learning method that replaces Euclidean coverage neighborhoods with neighborhoods defined by a Fermat distance, i.e., a data-adaptive distance that reflects the underlying distribution of the data points. To facilitate computation, we construct a weighted Euclidean neighborhood graph and use a truncated shortest-path algorithm to compute the Fermat coverage graph. We also establish sufficient conditions under which this construction exactly preserves the Fermat coverage computed on the complete graph. Finally, we evaluate PC-Fermat on eight classification datasets across varying labeling budgets, with particular emphasis on the very low-budget regime. Our experimental results demonstrate that PC-Fermat outperforms several existing active learning methods on the majority of the datasets.
