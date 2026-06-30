---
title: "An Integrated Machine Learning and Hierarchical Variance Decomposition Pipeline for Student Performance Prediction and Metacognitive Calibration on Multi-Signal Telemetry"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28881"
authors: ["Gurdeep Singh Virdee"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2606.28881v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28881v1 Announce Type: new Abstract: Predicting student performance and characterizing metacognitive calibration are essential for personalization in intelligent tutoring systems. Prior research treats performance prediction, calibration error calculation, and variance decomposition as separate pipelines, preventing unified interpretation. I propose the Unified Behavioral Prediction and Calibration Analysis Pipeline (UBP-CAP), an integrated framework processing student pre-execution behavioral telemetry through three linked modules: (1) a LightGBM classifier with SHAP for binary correctness prediction, (2) formal calibration metrics (ECE, MCE, and Brier score decomposition) to evaluate metacognitive alignment, and (3) a crossed Generalized Linear Mixed-Effects Model (GLMM) for decomposing calibration deviations. I introduce the Predictive-Explanatory Divergence Index (PEDI), which quantifies structural divergence between predictive and explanatory feature profiles. Evaluated on 1,195 interaction records (27 students, 45 tasks), Logistic Regression achieves AUC-ROC = 0.903, outperforming LightGBM (0.878). Student naive ECE (0.109) significantly exceeds model ECE (0.068), confirming systematic miscalibration. The crossed GLMM yields ICCStudent = 0.123, showing calibration is situational rather than dispositional. PEDIcos = 0.081 (p = 0.327) indicates structural alignment between prediction and explanation on shared behavioral features.
