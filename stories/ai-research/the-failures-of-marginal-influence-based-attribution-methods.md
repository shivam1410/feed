---
title: "The Failures of Marginal Influence-Based Attribution Methods for Global Time Series Explanations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16236"
authors: ["Amadeo Tunyi"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2607.16236v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16236v1 Announce Type: new Abstract: Explainability methods for time series models predominantly produce flat attribution scores: they quantify the direct influence of a feature at a timestamp by a scalar. We prove that the dominant failure mode of such methods is not the scalar format itself but a fundamental computational mismatch: existing methods compute scores via marginal conditioning or off-manifold gradients, both of which conflate direct temporal dependencies with mediated ones under autocorrelation. We also define DAG-faithfulness: an explanation is DAG-faithful if the temporal dependency graph it encodes is Markov-equivalent to the temporal directed acyclic graph (DAG) implicitly learned by the model. Particularly, we observe that standard attribution methods, specifically SHAP, are not DAG-faithful in general, and that recent time-series-aware extensions inherit the same computational limitation.
