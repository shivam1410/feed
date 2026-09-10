---
title: "Literati: Towards Anytime Optimal Shape Generalized Trees via AO*"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09299"
authors: ["Nakul Upadhya, Eldan Cohen"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.09299v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09299v1 Announce Type: new Abstract: Decision trees are prized for their interpretability and strong performance on tabular data, but popular greedy top-down induction algorithms can yield suboptimal and unnecessarily complex structures. Optimal decision tree methods address this through global optimization, yet remain restricted to axis-aligned threshold splits, which limit the expressivity of each node and often force deep, complex trees to capture non-linear feature effects. Shape Generalized Trees (SGTs) generalize threshold splits to learnable univariate shape functions, improving expressivity and enabling more compact trees. However, existing SGT induction algorithms are greedy and offer no optimality guarantees. In this work, we introduce Literati, the first algorithm for optimal SGT induction. We propose a novel AND/OR graph formulation of the problem that jointly optimizes tree structure and shape function complexity. To solve this AND/OR graph, we develop an AO*-based algorithm with two enhancements that improve anytime performance while preserving optimality: a secondary heuristic for OR-node selection and a round-robin policy for AND-node exploration. Across 24 real-world datasets, Literati achieves higher training and test accuracy than state-of-the-art tree approaches.
