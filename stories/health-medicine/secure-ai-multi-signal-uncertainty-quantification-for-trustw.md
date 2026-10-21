---
title: "SECURE-AI: Multi-Signal Uncertainty Quantification for Trustworthy Acoustic Cough Detection"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23937"
authors: ["Sejal Solkhan, Feiya Xiang, Mayur Sanap, Geet Khatri, Edgar Lobaton"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.23937v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Acoustic models for cough detection achieve high accuracy on curated benchmarks but fail silently in deployment, where speech, environmental noise, and audio unlike the training data induce confident misclassifications. In health monitoring, a confidently wrong prediction is worse than no answer at all. We present SECURE-AI (Self-aware Estimation of Cough Uncertainty for Reliable Evaluation of AI), a multi-signal uncertainty quantification framework that wraps a frozen MobileNetV3 cough classifier and estimates when its predictions should not be trusted, combining Monte Carlo Dropout, Temperature Scaling, and Mahalanobis distance in the embedding space. On a held-out split of 12,161 Coswara recordings, the probability-space methods are individually insufficient: Monte Carlo Dropout assigns lower uncertainty to incorrect than to correct predictions, and temperature scaling improves calibration but not discrimination. The strongest signal is embedding-space distance: Mahalanobis distance separates true positives from false positives (means 44.7 versus 63.4; Cohen's $d = 0.94$; AUROC 0.86) and, among predicted non-coughs, false negatives from true negatives (AUROC 0.82), so the same signal can flag both false alarms and missed coughs. At a descriptive operating point selected from labeled test data, retaining 90 percent of true-positive detections removes about two-thirds of false positives and raises precision from 59.9 to roughly 80 percent. A rejection threshold tuned on one split does not transfer to another (validation F1 of 82 percent falls to 34 percent on test), so we report threshold-independent AUROC as the main measure. An error taxonomy shows that failures are systematic, with most false positives related to speech. The pipeline runs on Raspberry Pi hardware costing 30 to 90 US dollars. Probabilistic calibration alone is thus inadequate for reliable cough detection.
