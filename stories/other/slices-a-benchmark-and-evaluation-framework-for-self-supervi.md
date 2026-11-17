---
title: "SLICES: A Benchmark and Evaluation Framework for Self-Supervised Learning on Sparse ICU Time Series"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18868"
authors: ["Hannes Ill, Dimitrios Proios, Leo Anthony Celi, Peter J. Sch\\\"uffler"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18868v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Self-supervised learning (SSL) results for intensive care unit (ICU) time series are hard to compare when data processing, encoders, and adaptation vary together. We present SLICES, a benchmark and evaluation framework for comparing and extending SSL methods under a shared clinical setup. It fixes 24-hour value and observation-mask inputs, a Transformer encoder, patient-level splits, four endpoints, two adaptation protocols, and five matched seeds across MIMIC-IV, eICU-CRD, and their pooled union. Masked autoencoding (MAE), joint-embedding prediction (JEPA), and contrastive learning provide reference implementations. Among these objectives, MAE leads mean AUPRC in all nine frozen classification comparisons, also under converged probes, and in seven of nine fine-tuning comparisons. Fine-tuned MAE leads hospital mortality at full labels and scores higher than a supervised Transformer of the same architecture at every label fraction, and SSL fine-tuning gives the lowest length-of-stay error. Supervised baselines remain strong elsewhere: GRU-D leads 24-hour mortality and XGBoost leads acute kidney injury in all three regimes. Rankings depend on the adaptation protocol, the comparator set, and whether the probe loss matches the metric. A two-seed MIMIC-IV rerun with the maintained code stays within two across-seed SDs of the reference in all 48 downstream runs. The code repository supports new objectives, shared downstream evaluation, and regeneration of the reference results, so new SSL methods can be compared with these references under the same conditions. Generalization to unseen hospitals is not tested here and is the natural next extension.
