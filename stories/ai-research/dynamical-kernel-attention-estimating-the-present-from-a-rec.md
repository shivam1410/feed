---
title: "Dynamical Kernel Attention: Estimating the Present from a Record of the Past"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24026"
authors: ["Peter Racioppo"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.24026v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Standard self-attention compares tokens by similarity but does not account for how much of a past state survives to the present. We introduce Dynamical Kernel Attention (DKA), which derives attention from robust estimation of a latent state evolving under stochastic dynamics. As a past state decays toward equilibrium under the dynamics, the information it carries about the present vanishes, bounding the total evidence a head can draw. Unlike recency biases, DKA can abstain when relevant evidence is weak and guarantees a bounded error when old tokens are discarded. DKA preserves the parallel structure and computational cost of standard attention. We present the model and its theory; empirical evaluation is deferred to a subsequent version.
