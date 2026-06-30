---
title: "A Trainable-by-Parts Operator Learning Framework: Bridging DeepONet and Karhunen-Loeve Expansions for Large-Scale Applications"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28519"
authors: ["Christian Munoz, Alexandre Tartakovsky"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2606.28519v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28519v1 Announce Type: new Abstract: Training operator-learning models for large-scale problems governed by partial differential equations (PDEs) is challenging due to the curse of dimensionality, memory constraints, and limited training data. These challenges arise in many scientific and engineering applications, including subsurface flow, climate modeling, and geological carbon storage (GCS). In this work, we propose a scalable operator-learning framework based on the Karhunen-Loeve Deep Neural Network (KL-DNN) and demonstrate its performance for modeling GCS. The model is trained on a dataset comprising 100 samples of large-scale simulations in a three-dimensional domain with 1.7 million cells and 50 time steps. The KL-DNN method constructs latent spaces using low-rank singular value decomposition of static properties and a nested Karhunen-Loeve expansion for dynamic pressure fields, enabling full-resolution predictions without subsampling or spatial coarsening. The KL-DNN model achieves an average root mean square error (RMSE) of 1.1 psi for pressure (0.04% relative error with respect to the average pressure in the domain) and RMSE of 0.0146 for CO2 saturation (5% relative error with respect to the average saturation inside the plume). The model requires 20 minutes of training on a single GPU, representing a 19% reduction in the pressure errors, 7% reduction in the saturation error, and a two-order-of-magnitude speedup compared to DeepONet trained on the same dataset. These results, along with inference time of less than one minute, establish the proposed model as a practical and accurate solution for large-scale PDE problems, enabling rapid uncertainty quantification, history matching, and real-time decision support.
