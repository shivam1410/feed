---
title: "GeoQ: Geometry-Aware Conditional Quantile Error Estimation for Scientific Surrogate Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21652"
authors: ["Khoa Nguyen, Daniel Serino, Aviral Prakash, Marc Klasky"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.21652v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21652v1 Announce Type: new Abstract: Neural-network surrogate models are increasingly used to accelerate scientific simulations, but their deployment in extrapolative and autoregressive settings requires input-dependent estimates of prediction error. In this work, we introduce GeoQ (Geometry-Aware Conditional Quantile Error Estimation), a non-intrusive calibration framework for estimating surrogate error at individual query points. GeoQ represents the error at a query point as an anchor-averaged calibration error plus a learned nonnegative correction. This correction is modeled as an upper conditional quantile of the anchor-relative error increment, using geometry-based features that encode representation-space displacement and local support density. A cross-fitting procedure generates approximately out-of-sample calibration tuples, while a feature-space k-nearest-neighbor support score identifies regions \textcolor{black}{where the learned error model is supported by calibration data}. We evaluate GeoQ on scalar regression, chaotic dynamics, medium-range weather forecasting, and Richtmyer-Meshkov instability prediction. The results demonstrate that geometry-aware conditional quantile modeling provides a practical and non-intrusive approach for validity-aware error estimation in scientific surrogate models.
