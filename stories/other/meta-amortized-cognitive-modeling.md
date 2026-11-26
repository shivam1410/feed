---
title: "Meta-Amortized Cognitive Modeling"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31914"
authors: ["Jerry M. Huang, Lukas Schumacher, Niek Stevenson, Mischa von Krause, Stefan T. Radev"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31914v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Cognitive modeling is highly iterative. Researchers repeatedly revise model structures, parameterizations, covariates, and experimental designs as theories evolve and data accumulates. Amortized Bayesian inference with neural networks provides rapid estimation for individual models, but every revision requires new simulations and training. Here, we introduce CogFormerV2, a meta-amortized framework that enables researchers to specify, revise, and fit cognitive models with a single network, carrying amortization across an entire space of models all at once. Trained once in about a day on a single GPU, it delivers accurate, well-calibrated posteriors across more than 14.6 billion model configurations spanning binary, multi-alternative, and continuous decisions, with varying parameter sets, covariate structures, trial counts, and contamination levels. It can fit empirical data from distinct behavioral tasks and extends to new models through continual learning and representation transfer. Released as an open-source interactive application, CogFormerV2 provides a reusable infrastructure for meta-amortized inference in cognitive modeling, while carrying the potential to accelerate computational modeling workflows at large.
