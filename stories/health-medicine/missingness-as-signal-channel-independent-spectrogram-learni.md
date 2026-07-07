---
title: "Missingness as Signal: Channel-Independent Spectrogram Learning for Clinical Time Series Prediction"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02938"
authors: ["Soyeon Park, Charmgil Hong"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.02938v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02938v1 Announce Type: new Abstract: Clinical time series prediction in intensive care units remains challenging due to heterogeneous physiological variables and informative missingness. The presence or absence of a measurement can reflect clinical decisions and patient severity, and thus missingness can serve as a predictive signal rather than a simple data artifact. This work presents CISM, a Channel-Independent Spectrogram framework with a Missingness stream for clinical multivariate time series prediction. CISM converts each clinical variable into a variable-wise time-frequency spectrogram, preserves variable identity through variable-aligned encoding, and aligns an explicit missingness stream with the spectrogram representation. Experiments on an in-hospital mortality task derived from MIMIC-IV show that CISM achieves the highest mean AUROC (0.7225), AUPRC (0.3308), and F1 (0.3808) among the compared time series, missingness-aware, vision, and time-frequency baselines. Ablation studies further show that observation patterns provide a meaningful informative signal. Pixel-level mask injection improves performance over plain spectrogram inputs and recovers much of this predictive value. The aligned missingness stream contributes a further, complementary gain in both AUROC and AUPRC. These results highlight the importance of modeling observation patterns as structured signals in clinical time series prediction.
