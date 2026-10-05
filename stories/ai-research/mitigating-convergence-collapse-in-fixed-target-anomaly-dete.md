---
title: "Mitigating Convergence Collapse in Fixed-Target Anomaly Detectors via Kernel-Anchored Locality Regularization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02345"
authors: ["Jos\\'e Lucas De Melo Costa, Fabrice Popineau, Arpad Rimmel, Bich-Li\\^en Doan"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.02345v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

A family of tabular anomaly detectors trains a neural map toward a fixed target under squared-error loss and scores anomalies by the test-time residual; contraction matching, one-step rectified flow, and reconstruction autoencoders all fit this template. We characterize a convergence collapse: better optimization makes the detector worse. At convergence, the learned map tracks the target even off-distribution, so the residual signal vanishes on anomalies as well as on normal data. These detectors therefore rely on implicit non-convergence (early stopping, capacity caps) to retain signal. We argue this is structural: effective anomaly detection requires a locality constraint that blocks unconstrained extrapolation. Classical detectors (kNN, KDE, isolation forests, LOF) enforce locality explicitly; fixed-target neural detectors do not. We formalize the connection by showing that the kernel-regression analog of a fixed-target detector is a finite-bandwidth Nadaraya-Watson smoother, which we call Kernel Contraction Matching (KCM). KCM is closed-form, training-free, and CPU-efficient, yet matches established neural baselines on ADBench. Building on this bridge, we introduce the Kernel-Anchored Regularizer (KAR), which penalizes deviation of the neural prediction from a kernel-weighted average of training targets. Across collapse-prone ADBench datasets and three backbones, KAR mitigates collapse and improves AUROC under prolonged training.
