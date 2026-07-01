---
title: "Revisiting the Volume Hypothesis"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31282"
authors: ["Ari Pakman, Lior Kreimer, Yakir Berchenko"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.31282v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31282v1 Announce Type: new Abstract: Modern deep neural networks often contain far more parameters than needed to fit their training data, yet they achieve impressive generalization. A common explanation for this success is the implicit bias of stochastic gradient descent (SGD). An alternative volume hypothesis posits that, within low training-loss regions, loss-landscape basins leading to strong generalization occupy much larger regions of weight space than basins that generalize poorly, and therefore SGD is simply more likely to land in the former. Recent experimental explorations of this idea present seemingly contradictory results. While in one set of experiments randomly sampling the network weights until achieving zero training error yielded poor generalization, molecular dynamics density estimates supported the volume hypothesis. We observe that these experiments were performed at different dataset size regimes, and explore an intermediate regime using the Replica Exchange Wang-Landau algorithm to estimate the joint density of states over training and test accuracies in binary networks. Across several architectures and datasets, we show that the generalization advantage of gradient learning over random sampling training generally diminishes as the training data size grows, suggesting a resolution of the paradox.
