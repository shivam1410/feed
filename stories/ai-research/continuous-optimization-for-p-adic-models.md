---
title: "Continuous Optimization for p-adic Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25501"
authors: ["Julian Salazar, Dimitri Kanevsky, Matt Harvey, Pascal Getreuer, Lucas Dixon"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2609.25501v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25501v1 Announce Type: new Abstract: We present the first method for native, continuous gradient descent for machine learning models with $p$-adic parameters. Existing native optimizers are discrete, mostly combinatorial searches, as the $p$-adic numbers $\mathbb{Q}_p$ are totally disconnected, with standard losses that are flat away from their minima. To enable continuous optimization, we propose working with $\mathbb{Q}_p$ via its Berkovich affine line: a canonical, path-connected expansion of $\mathbb{Q}_p$ that preserves its isometries and uniquely extends its analytic maps. This hull is a metric tree with interpretable points and local derivatives, which we show enables effective optimizers and backpropagation. We formulate gradient descent and show that its approximations efficiently learn linear models with coefficients in $\mathbb{Q}_p$ to do modular arithmetic, an XOR-like task not expressible by linear models in $\mathbb{R}$. We also demonstrate momentum and Adam variants, linear regression, and classification on binary-encoded hierarchies (Quillian semantic networks), addressing open problems posed by Martins (2025). Library at https://github.com/google-deepmind/padic-ml
