---
title: "Implicit Bias in State Space Models and Linear Autoregressive Training"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10237"
authors: ["Gal Katzhendler, Gilad Yehudai, Gal Vardi"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10237v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Linear State Space Models (SSMs) and linear autoregressive sequence models reuse the same parameters across a sample-dependent number of steps. As a result, different examples impose constraints through different predictors, even though all predictors share the same weights. We study this phenomenon through a general model of multiple non-homogeneous polynomial predictors with shared parameters, in a classification setting. Under standard interpolation and directional-convergence assumptions, together with a trajectory-dependent effective-degree condition, we show that gradient descent on the exponential loss converges in direction to a KKT point of an effective-degree max-margin problem. In this problem, only examples with minimal effective degree impose hard margin constraints; examples with faster-growing margins are asymptotically inactive except for feasibility. Our result provides a first-order characterization of the implicit bias in linear SSMs and linear autoregressive models. It exposes a mechanism of length bias: a longer input sequence or additional autoregressive steps may increase the example's effective degree, and the examples with the smallest effective degree dominate the limiting classifier. Our result highlights how non-homogeneity and parameter sharing alter classical homogeneous implicit-bias results.
