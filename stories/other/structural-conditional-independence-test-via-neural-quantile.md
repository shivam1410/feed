---
title: "Structural Conditional Independence Test via Neural Quantile Resolution"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07165"
authors: ["Khoa Nguyen, Bao Duong, Thin Nguyen"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07165v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Conditional independence testing is difficult when dependence is weak, localized, or expressed through distributional changes rather than a global mean shift. Existing tests usually return a scalar statistic or p-value, which summarizes evidence against independence but does not describe where the conditional law changes. We propose QRCIT, a quantile-resolution conditional independence test that compares P(X|Z) and P(X|Y,Z) through a quantile deformation learned by a shared model. A lightweight residual quantile-flow model first learns the baseline conditional quantile law and then learns the additional deformation induced by Y, yielding a global predictive-gain statistic with conditional-randomization calibration and an inspectable deformation field over context and quantile level. We also introduce the Structural Dependency Benchmark (SDB), which evaluates dependence structures motivated by real applications, such as context-local, tail-only, sign-reversing, moving-ridge, and mean-neutral patterns. Across synthetic post-nonlinear (PNL) and SDB benchmarks, QRCIT improves detection of structured alternatives, with empirical Type-I behavior evaluated across settings. Higher quantile resolution improves merged-SDB power at moderate sample sizes, while diagnostics restricted to known affected regions improve detection of localized dependence. On Sachs, METABRIC breast cancer, and CCLE/PLX4720, QRCIT provides competitive real-data performance and interpretable deformation patterns. These results support quantile-resolved conditional-law deformation as a practical framework for testing and diagnosing structured conditional dependence.
