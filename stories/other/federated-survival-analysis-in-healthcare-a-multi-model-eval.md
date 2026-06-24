---
title: "Federated Survival Analysis in Healthcare: A Multi-Model Evaluation on Cross-Institutional Heterogeneous Breast Cancer Data"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23871"
authors: ["Natalia Moreno-Blasco, Anusha Ihalapathirana, Pekka Siirtola, Miguel Fernandez-de-Retana"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23871v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23871v1 Announce Type: new Abstract: Survival analysis is central to clinical decision-making, yet reliable time-to-event models require large, diverse cohorts that are rarely available at a single institution, while privacy regulations restrict the centralization of patient data. Federated learning (FL) offers a privacy-preserving alternative by training shared models without exchanging raw data, but its effectiveness for survival modeling under realistic, heterogeneous conditions remains insufficiently understood. This paper presents a systematic, multi-model evaluation of federated survival analysis on a cross-institutional breast cancer cohort with naturally heterogeneous distributed clients. Three representative survival models, the Cox Proportional Hazards model, DeepSurv, and Random Survival Forest (RSF), are compared across centralized, local, and federated training, and three federated optimization strategies (FedAvg, FedProx, and FedAdam) are assessed for the gradient-based models. Results show that FL consistently outperforms local training and approaches, and occasionally exceeds, centralized performance, while RSF offers the best overall balance of discrimination, calibration, and robustness across heterogeneous clients. We further find that performance depends on the diversity of client distributions, and that FedAvg and FedProx are stronger and more stable than FedAdam. Based on these findings, we derive practical, decision-oriented guidelines mapping data, privacy, interpretability, and resource constraints to recommended model and training-paradigm choices for federated survival modeling in healthcare.
