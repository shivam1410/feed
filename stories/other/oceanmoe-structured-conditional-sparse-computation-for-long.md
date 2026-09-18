---
title: "OceanMoE: Structured Conditional Sparse Computation for Long-Horizon Multivariate Ocean Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19768"
authors: ["Yishun Zhu, Jian Wang"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19768v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19768v1 Announce Type: new Abstract: Multivariate ocean forecasting must exploit shared evolution in a coupled ocean system while adapting to the heterogeneous statistical and dynamical characteristics of different prediction variables and locations. Fully shared models may lack the flexibility to handle this heterogeneity, whereas fully independent models discard the common ocean context shared across variables. The key question is how to retain shared context in a unified model while allowing computation to specialize according to the prediction target and local state. We propose OceanMoE, a structured conditional sparse Mixture-of-Experts framework that combines sharing and specialization for multivariate ocean forecasting. OceanMoE fuses cross-variable information to construct target-specific local representations and uses them to perform content-conditioned sparse routing at each spatial location, with the number of active experts adapted to router confidence. In the decoder, routing is augmented with a learned geographic bias parameterized by spherical-harmonic spatial bases, while shared residual and seasonal pathways provide common cross-variable and month-dependent context. Experiments on long-horizon autoregressive ORAS5 forecasting show that OceanMoE lowers aggregate forecasting error in both evaluated settings and maintains lower geometric-mean normalized RMSE than the corresponding baselines over most later rollout months. Routing analyses further show that expert allocation varies with prediction targets and spatial locations. These results support structured conditional computation as a modeling strategy for balancing shared ocean context with adaptive specialization.
