---
title: "Target-Aware State-Adaptive $p$-Dirichlet Graph Neural Regression for Non-Invasive Body-Composition Estimation"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29496"
authors: ["Nadejda Drenska, Matthew Lemoine, Gowri Priya Sunkara, Yu Wang, Sri Lakshmi Sravani Devarakonda, Steven B. Heymsfield"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.29496v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29496v1 Announce Type: new Abstract: Accurate estimation of body-composition outcomes, including body fat percentage (BFP), bone mineral density (BMD), and appendicular lean mass (ALM), is important for evaluating metabolic, skeletal, and muscular health. Direct assessment using dual-energy X-ray absorptiometry (DXA), however, requires specialized equipment and involves ionizing radiation. We propose a target-aware, state-adaptive $p$-Dirichlet energy-flow graph neural regression ($p$SADE-GNR) framework for estimating these outcomes from non-invasive anthropometric measurements. A neural encoder maps participant representations to hidden states that are propagated over an outcome-specific participant-similarity graph by a state-adaptive forward-Euler discretization of the graph $p$-Dirichlet energy flow. Graph distances weight each original or latent coordinate by its normalized absolute training-fold correlation with the outcome. Using clinical data from the Pennington Biomedical Research Center and five-fold cross-validation, the correlation-weighted model using the original standardized measurements achieved the lowest root mean squared error in all nine primary outcome-cohort combinations and outperformed previously reported support vector regression or least-squares support vector regression reference values in eight of nine comparisons. Autoencoder, variational-autoencoder, and Gaussian-mixture variational-autoencoder representations generally did not improve primary-outcome prediction or reduce computational cost. In an exploratory age-prediction analysis including ALM, BMD, and BFP as predictors, the correlation-weighted GMVAE model achieved the lowest mean error in all three cohorts. These results support target-aware, state-adaptive $p$-Dirichlet graph neural regression for non-invasive body-composition estimation.
