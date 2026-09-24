---
title: "A Leakage-Aware Multimodal Evaluation Framework for Early Intraoperative Acute Kidney Injury Prediction"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.26848"
authors: ["Quang Minh Nguyen, Duc Minh Le, Ho Nhat Minh Nguyen, Thuy Quynh Nguyen, Trong Nghia Nguyen"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.26848v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.26848v1 Announce Type: new Abstract: Postoperative acute kidney injury (AKI) after major non-cardiac surgery carries substantial morbidity, yet early intraoperative risk stratification remains difficult. In this retrospective cohort study, we propose SynerT, a waveform-only hybrid temporal backbone that combines a causal dilated TCN with a hierarchy of dilated recurrent layers to encode early intraoperative physiologic trajectories for AKI risk prediction. Building on SynerT, we further design two model variants that extend the backbone with structured clinical context: SynerT-MM, a late-fusion multimodal extension that integrates hemodynamic burden summaries and preoperative covariates, and SynerTStack, a leakage-safe stacked ensemble that combines cross-validated predictions from SynerT-MM with strong tabular baselines at the meta-learning stage. All models are evaluated under a strict leakage-aware framework on VitalDB, a high-fidelity perioperative database, with prediction restricted to information available within the first 60 intraoperative minutes. Among 2,413 waveform-usable cases (180 AKI-positive; 7.46% prevalence), SynerT fell well below strong structured-data baselines, demonstrating that waveform-only temporal modeling is insufficient under strict early constraints. SynerTMM recovered discrimination by incorporating hemodynamic burden summaries and preoperative covariates, and SynerT-Stack achieved the best overall performance across AUROC, AUPRC, and F1-max. Cross-fitted Platt recalibration substantially corrected calibration defects in both multimodal variants, and decision-curve analysis confirmed the recalibrated stacked model delivered the strongest net clinical benefit across low-to-intermediate thresholds.
