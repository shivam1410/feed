---
title: "Corroborative Learning: Mutual Enhancement through Task-Response Reconstruction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41222"
authors: ["Zexing Zhang, Jichao Li, Tianyang Lei, Yiyin Zhang, Kewei Yang"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 22
guid: "oai:arXiv.org:2610.41222v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

In pattern analysis, models trained independently for the same task often develop complementary capabilities through differences in architecture, data, and optimization. Exploiting complementarity while retaining independent deployment is central to collaborative learning. Most methods establish transfer by reducing differences in predictions, relations, or representations between target and collaborator, although these differences also underlie complementarity. This creates a structural trade-off between reducing differences for knowledge exchange and preserving them for complementarity. We therefore propose Corroborative Learning (CL). Each model forms task-driven responses, with cross-group support from its collaborator. Source-excluded reconstruction of response increments from collaborator representations separates fitting and evaluation across disjoint groups and selectively constrains directions by cross-group reconstructability. The process requires no direct output or feature matching or additional inference dependency. Furthermore, with linear reconstruction and fixed collaborator representations, the loss equals a positive semidefinite directional regularizer, constraining less reconstructable directions more strongly. Signal and noise conditions characterize when directional shrinkage reduces response-estimation error. Across six language tasks, 24 models, and 36 pairs, CL improves over capacity-matched independent adaptation on every task, with positive gains across most directed model combinations. Pairwise comparisons show broad advantages over transfer and mutual-learning methods and different gains from complementarity across collaboration rules. Low-label language and vision results support cross-domain applicability. Task-relevant differences can support mutual enhancement without eliminating disagreement.
