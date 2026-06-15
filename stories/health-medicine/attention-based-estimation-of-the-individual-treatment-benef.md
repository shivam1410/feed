---
title: "Attention-Based Estimation of the Individual Treatment Benefit Probability under Dose Variation"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13821"
authors: ["Lev V. Utkin, Andrei V. Konstantinov, Stanislav K. Kogan, Natalya M. Verbova, Maksim I. Goriunov"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.13821v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13821v1 Announce Type: new Abstract: Estimating the probability that a treatment outperforms a control for an individual patient, called the Individual Probability of Treatment Benefit (IPTB), offers a clinically intuitive alternative to population-average metrics. However, existing methods for IPTB estimation are largely confined to binary treatment settings, despite the prevalence of dose-varying interventions in clinical practice. We propose a general framework for IPTB estimation with ordinal outcomes under discrete dose assignments, called Dose-AIPTB (Dose Attention-based IPTB). Our approach recasts the problem as binary classification over the unobserved sign of the individual treatment effect, constructing pseudo-labels from covariate-similar pairwise comparisons and aggregating them via attention mechanisms or Nadaraya-Watson kernel regression. This formulation naturally accommodates multiple discrete dose levels, extending beyond the binary treatment paradigm. Through numerical experiments on real-world and synthetic data under covariate shift, varying sample sizes, and heterogeneous outcomes, we demonstrate that attention-based aggregation consistently outperforms kernel alternatives. The framework provides a foundation for personalized dose selection grounded in individual-level benefit probabilities. Codes implementing the model are publicly available at https://github.com/NTAILab/AIPTBDose.
