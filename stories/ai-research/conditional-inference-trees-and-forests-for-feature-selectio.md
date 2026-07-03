---
title: "Conditional Inference Trees and Forests for Feature Selection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01417"
authors: ["Robert Milletich, Justin Downes, Steve Goley, Newel Hirst"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.01417v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01417v1 Announce Type: new Abstract: Conditional inference trees (CIT) and conditional inference forests (CIF) reduce split-selection bias by testing features before choosing split thresholds, but repeated permutation tests and threshold searches can make these methods computationally expensive. We study CIT and CIF as top-$k$ feature-ranking methods for downstream prediction using real-data benchmarks, runtime ablations, and synthetic feature-recovery experiments. At a fixed node, if the features and permutation budget do not depend on the node responses, Bonferroni-corrected $+1$ Monte Carlo permutation $p$-values control nodewise rejection under the complete permutation null. CIF ranks 4th among 17 classification methods on 22 datasets and 3rd among 18 regression methods on 8 datasets. With Bonferroni correction held fixed, the CIF runtime ablations indicate that adaptive stopping and the number of thresholds searched have the largest measured effect on runtime: turning off adaptive stopping and using exact threshold search increase fitting time by 4.0--8.4$\times$ and 1.9--10.8$\times$, respectively, while downstream score changes are at most 0.011. Sparse high-$p$ simulations indicate that forest feature sampling can leave informative features out of many split decisions. Overall, the results support CIF as a top-$k$ feature-ranking method in the evaluated downstream prediction benchmarks.
