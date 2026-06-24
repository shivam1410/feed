---
title: "DREG: A Layer-Wise Jacobian Regularization as a General-Purpose Penalty"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23942"
authors: ["Rowan Martnishn"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23942v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23942v1 Announce Type: new Abstract: We present a large-scale empirical study isolating the contributions of the Derivative Regularization penalty (DREG). Across a fully-crossed factorial sweep of 960 experiments spanning 4 activations, 6 regularizers, 8 datasets, and 5 random seeds, we ask: when, where, and why does DREG work? Our results establish three principal findings. First, DREG achieves the highest overall and clean-regime accuracy among all regularizers evaluated (significantly so against the unregularized baseline, Weight Decay, and IGPen; Wilcoxon $p \leq 0.031$). It ranks second in noise robustness behind Spectral Normalization (SN) - the only two layer-wise regularizers in the study. Second, DREG is globally the best-performing regularizer under GELU, the default activation in modern transformer architectures, particularly on both messy vision and messy NLP benchmarks, suggesting direct applicability to frontier deep learning settings. Third, DREG's advantage over competing regularizers is most pronounced under data scarcity, consistent with its role as a geometric inductive bias that substitutes for the regularizing effect of data volume. Throughout, DREG is applied with a single fixed hyperparameter $\lambda = 10^{-2.5}$ and no per-dataset tuning, supporting its characterization as a plug-and-play regularizer for neural networks with nontrivial Jacobian structure. These findings are consistent with DREG's design: concentrating regularization pressure on layers where the activation derivative is largest, rather than constraining the network uniformly.
