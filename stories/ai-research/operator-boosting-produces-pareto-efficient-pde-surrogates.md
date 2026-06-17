---
title: "Operator Boosting Produces Pareto-Efficient PDE Surrogates"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17460"
authors: ["Lennon J. Shikhman"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.17460v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17460v1 Announce Type: new Abstract: Neural operators are widely used as surrogate solution maps for partial differential equations (PDEs), but full-size models can be costly to store, deploy, and evaluate in many-query scientific workflows. This work introduces Operator Boosting, a stagewise residual-learning framework for constructing compact neural-operator surrogates directly, rather than training a large model and compressing it afterward. Starting from the empirical mean predictor in normalized output coordinates, the method trains a sequence of tiny same-family neural operators on residual fields and incorporates each correction through validation-selected shrinkage. We instantiate the framework with Fourier neural operators (FNOs), DeepONets, and convolutional neural operators (CNOs), and compare boosted tiny stacks against full-size monolithic baselines across one-, two-, and three-dimensional PDE benchmarks from PDEBench, APEBench, and The Well. Across 30 dataset-architecture pairs, 21 show positive mean accuracy gains and 17 have positive confidence intervals, while all boosted stacks reduce trainable parameter count by approximately 72-95%. Best-model comparisons show empirical Pareto improvements on 7 of 10 completed PDE benchmarks, including two-dimensional Navier-Stokes, shallow-water dynamics, Darcy flow, one-dimensional transport and reaction systems, and three-dimensional compressible Navier-Stokes. These results show that Operator Boosting often improves the empirical accuracy-parameter Pareto frontier of neural PDE surrogates, while also exposing PDE- and architecture-dependent regimes where residual boosting fails to offset compression.
