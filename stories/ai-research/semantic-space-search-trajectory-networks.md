---
title: "Semantic Space Search Trajectory Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25122"
authors: ["Julian Agudelo, Alberto Tonda, Gabriela Ochoa, Vincent Guigue, Cristina Manfredotti, Evelyne Lutton"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2607.25122v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25122v1 Announce Type: new Abstract: Search Trajectory Networks (STNs) are a graph-based tool for visualizing and characterizing the behavior of optimization algorithms. STNs' reliance on discretization of the search space has largely confined them to low-dimensional or combinatorial settings. We introduce a methodology for constructing STNs in semantic spaces, defined as the space of a model's predictions on a fixed sample set. Our approach discretizes semantic vectors and aggregates them into network nodes via agglomerative clustering with complete linkage under a normalized Hamming distance. Since any predictor can be summarized by its semantic vector, this method enables comparison of learning dynamics across otherwise incomparable algorithm families. We apply semantic space STNs to classification and regression tasks solved using different machine learning algorithms, recovering known qualitative differences between them. Additionally, we use semantic space STNs to study neural network generalization by contrasting standard training with the label randomization regime of Zhang et al. (2017). The resulting STNs exhibit consistent structural differences, training on real labels produces denser, more efficient and more centralized graphs than training on shuffled labels. Together, our results show that semantic space STNs capture functional training dynamics arising from the interaction between learning algorithms and data, providing a tool for analyzing and comparing learning dynamics across machine learning models and training regimes.
