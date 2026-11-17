---
title: "Mechanistic Interpretability of Mambas Selective Gate in Financial Markets: A Leakage-Controlled Study"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18599"
authors: ["Dip Roy, Rajiv Misra, Sanjay Kumar Singh, Anisha Roy"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18599v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Selectively gated state-space models (SSMs), notably Mamba, are increasingly used for financial time series, yet how they internally represent market regimes (bull, bear, sideways) remains opaque. This paper applies Mechanistic Interpretability (MI) to a six-layer Mamba trained on approximately twenty-one years of daily data for a point-in-time set of S&P 500 constituents plus macroeconomic and Fama-French factors, decomposing per-layer hidden states with Top-K Sparse Autoencoders (SAEs). Our central contribution is methodological and cautionary. A prior, uncontrolled configuration recovered market regimes from SAE features at F1 = 1.00. Under a controlled protocol that (i) removes the three input features that overlap the HMM label definition, (ii) disables the auxiliary regime-classification head, (iii) uses a point-in-time constituent universe, and (iv) evaluates against labels disjoint from the inputs, the same regime label is recovered at only F1 = 0.398, indistinguishable from a logistic baseline on raw inputs (0.435) and from an SAE trained on a randomly initialized, untrained Mamba (0.364). A 2x2 attribution grid shows the near-perfect result is an interaction of auxiliary supervision and label-defining inputs: neither factor alone exceeds F1 ~ 0.40. Effect sizes with block-bootstrap inference show the residual selective-gate (Delta t) regime effect is statistically detectable but economically negligible and uniform across layers rather than layer-specialized; the apparent polysemanticity gradient disappears under continuous, theory-grounded measures. We contribute a reproducible leakage-control protocol for interpretability evaluation of financial SSMs, a quantified demonstration that previously reported regime structure is a label-contamination artifact, and a modest economically grounded feature subset that genuinely survives the controls.
