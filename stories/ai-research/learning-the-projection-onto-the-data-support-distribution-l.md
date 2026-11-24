---
title: "Learning the Projection onto the Data Support: Distribution Learning that Avoids Memorization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28234"
authors: ["Lin Chen, Dejan Slep\\v{c}ev"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.28234v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

We introduce a framework for learning distributions supported on manifolds based on estimating the nearest-point projection onto the data support. Specifically, we define an objective functional over a class of functions whose minimizer recovers this projection. The proposed framework automatically adapts to the intrinsic dimension and allows for data supported on unions of manifolds with varying dimensions. The resulting objective can be optimized using standard neural network architectures. We present population-level results establishing recovery of the manifold projection and prove finite-sample Wasserstein generalization bounds. Furthermore, we validate the approach empirically across a range of settings. In contrast to widely used generative models such as diffusion models, whose objectives can be minimized by memorizing training samples, our formulation excludes such behavior. We also introduce a direct memorization metric to verify that the learned projection generates new samples rather than reproducing the training set.
