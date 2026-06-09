---
title: "Reachability and asymptotics of Gaussian Transformer dynamics"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07600"
authors: ["Albert Alcalde, Zhengping Ji, Enrique Zuazua"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 61
guid: "oai:arXiv.org:2606.07600v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07600v1 Announce Type: new Abstract: We formulate data propagation through the Transformer, the machine learning architecture powering large language models, as a nonlinear control system on the space of probability measures. For the mean-field Transformer model with self-attention and affine feed-forward layers, we prove that Gaussian distributions remain exactly Gaussian along the induced flow. This invariance reduces the infinite-dimensional measure dynamics to a finite-dimensional bilinear control system governing the evolution of the mean and covariance, reformulates the expressive capacity of Transformers as a reachability problem for prescribed Gaussian moments, and reveals a novel connection with Riccati-type equations from classical filtering and control. For time-varying controls, we prove exact finite-time reachability of any target Gaussian distribution whose covariance matrix has the same rank as the initial one, this rank constraint being an intrinsic invariant of the dynamics. For time-invariant parameters, we derive explicit spectral conditions leading either to asymptotic stability toward positive-definite equilibria or to finite-time blow-up of the covariance. Numerical experiments complement the theory by showing that practical Transformers with Gaussian inputs remain close to moment-matched Gaussian distributions through early and intermediate layers, while Transformers with prescribed attention matrices reproduce the predicted covariance regimes: bounded evolution in stabilizing configurations and blow-up in destabilizing ones.
