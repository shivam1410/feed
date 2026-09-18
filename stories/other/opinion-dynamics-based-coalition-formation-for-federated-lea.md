---
title: "Opinion Dynamics-based Coalition Formation for Federated Learning in Heterogeneous IoT Systems"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19695"
authors: ["Mohammed El Hanjri, Anas Abouaomar, Hamidou Tembine, Abdellatif Kobbane"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19695v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19695v1 Announce Type: new Abstract: Federated learning (FL) enables privacy-preserving, on-device training across heterogeneous Internet-of-Things (IoT) deployments such as smart-city water-metering networks, where each smart meter observes a household-specific consumption time series. Under such statistical heterogeneity, the standard Federated Averaging (FedAvg) aggregation averages dissimilar local models into a single global model that may fail to capture client-specific patterns. We address this by forming client coalitions directly in the local-weight space and aggregating at the coalition level. Extending a prior weight-driven coalition-formation scheme, we model coalition formation as a Hegselmann-Krause (HK) bounded-confidence opinion-dynamics process acting on the local weights, and develop variants of the HK interaction based on Euclidean-distance and cosine-similarity confidence criteria. The framework is applied to short-term water-consumption forecasting with local Long Short-Term Memory (LSTM) models and evaluated against FedAvg, Per-FedAvg, FedProx, and FedAvg with Euclidean-distance or cosine-similarity coalition formation. Experiments on a real smart-metering dataset of water consumption show that the proposed HK-based coalition formation produces stable, endogenous coalition structures within at most ten inner iterations, incurs no additional client-side computation or communication compared to FedAvg, and reduces the average MAE by up to 54% relative to FedAvg, 39% relative to FedProx, and 24% relative to Per-FedAvg, while achieving the highest global accuracy (83-85%).
