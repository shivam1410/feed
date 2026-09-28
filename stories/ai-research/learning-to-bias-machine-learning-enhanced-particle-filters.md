---
title: "Learning to Bias: Machine Learning-Enhanced Particle Filters"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30498"
authors: ["Apoorv Srivastava, Eric Darve"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 42
guid: "oai:arXiv.org:2609.30498v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Sequential inference estimates latent states from noisy and incomplete observations. Particle Filters (PFs), a class of Monte Carlo methods based on importance sampling, provide a flexible framework for this task, but often suffer from poor sample efficiency and unfavorable scaling with dimension, partly due to suboptimal proposal distributions. We address these challenges by integrating learned proposals into the PF framework. We introduce Neural Optimal Particle Filters (NOPFs), which learn an amortized approximation to the optimal proposal from offline simulated one-step conditioning tuples. The learned proposal is used as a drop-in replacement in standard PF updates, with samples corrected by standard importance weights so that the method asymptotically targets the same filtering distribution under standard support and density-evaluation assumptions. Across stochastic nonlinear benchmarks of varying inference complexity, NOPFs improve sample efficiency and distributional accuracy over standard PF baselines with modest computational overhead. The approach integrates data-driven proposal learning into classical inference without altering the underlying filtering objective.
