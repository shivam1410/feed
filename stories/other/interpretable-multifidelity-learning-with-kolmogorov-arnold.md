---
title: "Interpretable Multifidelity Learning with Kolmogorov-Arnold Networks for Spatiotemporal Nuclear Reactor Flow Modeling"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08512"
authors: ["Meredith Eaheart, Majdi I. Radaideh"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08512v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

High-fidelity computational fluid dynamics (CFD) simulations of nuclear reactor systems are computationally expensive, motivating machine learning methods that reduce cost while preserving accuracy. Multifidelity surrogate modeling addresses this by combining inexpensive low-fidelity data with limited high-fidelity data. This work investigates whether the high-fidelity data required to predict the spatiotemporal mass flow rate across all 193 fuel assemblies of a pressurized water reactor (PWR) core can be reduced, comparing black-box multifidelity feedforward neural networks (MFNNs) with interpretable multifidelity Kolmogorov-Arnold Networks (MFKANs). Cross-fidelity correlation across the core is weak, making this a challenging multifidelity problem, and neither architecture predicts the transient particularly well in absolute terms. MFKAN nonetheless performs comparably to MFNN for one-time-step-forward prediction while also providing closed-form symbolic equations unavailable with MFNN. To address the scarcity of CFD transients, with only one available per fidelity level, TabDDPM-generated synthetic data was used to augment cross-fidelity forecasting. KAN and FNN achieve comparable self-evaluation accuracy (Pearson correlation of roughly 0.73--0.81), but both perform poorly at true cross-fidelity forecasting (correlations of 0.03--0.06). Assembly-level analysis shows that each assembly's forecast correlation tracks its real cross-fidelity correlation for both architectures ($r=0.840$--$0.896$ for KAN, $r=0.804$--$0.903$ for FNN), confirming that forecasting accuracy is fundamentally limited by how correlated the fidelity levels already are. Overall, KAN-based multifidelity modeling achieves accuracy consistently comparable to MFNN across all settings, while additionally providing symbolic equations that match or exceed the spline representation's accuracy.
