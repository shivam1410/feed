---
title: "Stagewise Adaptive Boosting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18662"
authors: ["Valerie R. Fu, Brayden Lu, Lu Tian"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18662v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Stagewise algorithms and sparsity-inducing regularization are two influential approaches to high-dimensional modeling. Existing stagewise theory, however, largely centers on convex regularization, whereas stronger sparsity and other structural preferences are often pursued through fixed-level nonconvex optimization rather than generating an entire adaptive solution path. We develop stagewise adaptive boosting, a general framework that builds a monotone path by selecting the update consistent with structural preference. The framework can encourage sparsity along the path itself and also admits extensions that promote other properties of the solution, including group selection, similarity across models for multiple outcomes, and known priorities or prerequisite relations among predictors. We study its theoretical property as well as finite sample performance using simulations and real-data analyses. Across these studies, the proposed pathwise approach often achieves predictive performance comparable to commonly used baselines while selecting substantially smaller models. These results suggest that adaptive stagewise learning provides a practical route to stronger sparsity and richer structural control without repeatedly solving separate weighted or nonconvex optimization problems.
