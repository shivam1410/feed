---
title: "Lightweight Transformer Models for On-Device Fault Detection: A Benchmark Study on Resource-Constrained Deployment"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24173"
authors: ["Disha Patel"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24173v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24173v1 Announce Type: new Abstract: On-device fault detection enables real-time diagnostics without cloud dependency, but deploying machine learning models on resource-constrained hardware demands careful tradeoffs between accuracy, latency, and model size. We present a benchmark comparing traditional ML methods (Random Forest, XGBoost, SVM, Logistic Regression) against lightweight transformer architectures (DistilBERT, TinyBERT-6L, TinyBERT-4L, MobileBERT) for binary fault detection across three public datasets: NASA C-MAPSS turbofan degradation, SECOM semiconductor manufacturing, and UCI AI4I 2020 predictive maintenance. We evaluate classification performance (F1-score, AUC), model size, and CPU inference latency, and further assess INT8 dynamic quantization and a two-stage adaptive inference pipeline. Our results reveal that on well-separated sensor data (C-MAPSS), lightweight transformers match traditional ML at 87.8% F1 but at 100x the model size and 9000x the latency. TinyBERT-4L emerges as the most deployment-friendly transformer at 55 MB and 18 ms CPU latency. INT8 quantization reduces size by 25% while preserving 86.9% F1. Our adaptive pipeline, routing 97.9% of predictions through a quantized triage model and only 2.1% to a larger expert, achieves 87.6% F1 at 19.5 ms average latency. On severely imbalanced datasets (SECOM, UCI-PM), both traditional and transformer methods struggle significantly, highlighting fundamental limitations of current approaches for extreme class imbalance in fault detection. All code is publicly available.
