---
title: "HiPPO Functional Memory: Coordinate-Queryable Attention for Irregular Time Series"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28465"
authors: ["Zhaodong Guo (Imperial College London), Haoyun Feng (Imperial College London)"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.28465v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Irregular time series are recorded at nonuniform times and are often queried at other times: between observations, after the last one, or on a regular grid. Continuous-time models answer such queries by integrating latent dynamics, and time-aware attention models answer them by revisiting the observation tokens. We introduce HiPPO Functional Memory (HiPPO-FM), an attention operator that writes an irregular history into a rank-M function space with explicit time coordinates. Masked self-attention first exchanges content among the observations; the updated values are then contracted against kernel-smoothed HiPPO-Legendre features and solved through a regularized Gram matrix, so the retained coefficients define a function that is read at any time through the same features. The write and read have the form of an interdomain sparse Gaussian-process mean: every readout lies in an M-dimensional reproducing-kernel subspace, and a pointwise bound separates the approximation error of this subspace from the error of the learned memory. Removing the functional memory from the encoder raises Spiral reconstruction RMSE 18-fold. The full model has the lowest error in 11 of 12 Spiral settings, the highest overall accuracy and best average rank on 20 irregular UEA datasets, the highest event-type accuracy on all five multi-type event benchmarks, and a 21% lower extrapolation MSE than CRU on PhysioNet. Because the memory has fixed rank, the state retained after encoding keeps a fixed size as the history grows and is 102 times smaller than a token cache at 1,024 observations.
