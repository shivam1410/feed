---
title: "Pattern-Based Matrix Analysis Under Permutations"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17674"
authors: ["Andrei Ermakov"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17674v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Low-rank approximation captures one important notion of matrix simplicity: a matrix is simple if it is well described by a low-dimensional linear model. This paper studies a complementary notion. We consider matrices that become structurally simple only after permuting rows and columns, so that their mass concentrates in a prescribed geometric pattern such as a band, block-diagonal, arrowhead, or related form. We introduce a pattern distance that measures how close a matrix is to a given pattern after optimal reordering, giving a common framework for structural problems such as latent ordering, community detection, and bandwidth minimization. The problem is NP-hard in general; we derive an alternating algorithm based on Linear Assignment subproblems. We further introduce a pattern-plus-low-rank decomposition that combines permutation-structured fitting with a low-rank residual, whose permutation step is pattern fitting on the residual; its gains across pattern families persist at a matched parameter budget and are substantially reduced under a density-matched random-mask control. We evaluate the framework on synthetic recovery tasks, real correlation and graph adjacency matrices, and transformer attention heads, showing that a single universal algorithm recovers qualitatively different forms of matrix structure.
