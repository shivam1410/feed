---
title: "Stacking-Based Weighting for Large Language Bayes in M-Open Settings"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03966"
authors: ["Anant Bhide, Akarsh Gupta, Edmond Cunningham, Justin Domke"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03966v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Large Language Bayes (LLB) transforms a natural language problem description into a collection of candidate probabilistic programs and performs inference within each model, combining their predictions using Bayesian model averaging. While this provides a flexible framework for probabilistic inference without manual model specification, the resulting candidate model set is often misspecified in practice, and likelihood-based aggregation can concentrate on a single model, under-representing uncertainty across the sampled models. We propose a stacking-based aggregation method for LLB that selects model weights by optimizing predictive performance rather than marginal likelihood, while preserving the original language-model-driven model generation and within-model inference pipeline. Because leave-one-out predictive quantities are intractable in latent-variable models, we derive a variational lower bound that yields a tractable ELBO-based stacking objective. Across real-world probabilistic inference tasks, our method achieves comparable predictive performance to Bayesian model averaging while yielding more dispersed model weights, reducing concentration on a single candidate model under misspecification.
