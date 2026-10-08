---
title: "FedRSPO+: A Heterogeneity-aware Algorithm for Decision-focused Federated Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09091"
authors: ["Konstantinos Ziliaskopoulos, Alexander Vinel, Jiaqi Wang"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 42
guid: "oai:arXiv.org:2610.09091v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Decision-focused learning (DFL) trains predictive models for downstream optimization, but existing methods largely assume centralized data. In cross-silo settings, federated learning offers a natural alternative, yet standard federated methods optimize prediction over decision quality and do not address heterogeneity in downstream objectives or feasible sets. This heterogeneity is especially challenging for DFL because small perturbations in polyhedral problems can cause discontinuous changes in optimal decisions, destabilizing client updates and aggregation. We propose FedRSPO+, a heterogeneity-aware framework for decision-focused federated learning, built on RSPO+, a regularized predict-then-optimize surrogate that smooths the decision map through projection. We show that RSPO+ upper bounds decision error and regret for the regularized decision and, under exact regularization and consistent LP solution selection, for the original LP decision. We further derive cross-client heterogeneity bounds that depend on both objective and feasible-set heterogeneity, vanish at homogeneity, and require no strong convexity. FedRSPO+ uses an annealed, modular training procedure compatible with standard federated personalization and aggregation methods. Experiments on synthetic knapsack, shortest-path, and real-world energy pricing tasks compare against prediction-only federated learning and DFL baselines under varying heterogeneity and communication budgets. Results suggest that smoothing is a useful ingredient for stable collaborative decision learning and provide a heterogeneity-aware foundation for federated DFL.
