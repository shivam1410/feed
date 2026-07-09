---
title: "Dual Attention Heads for Personalized Federated Learning in ECG Classification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06653"
authors: ["Kien Le, Joseph Lindley, Quoc Bao Phan, Tuy Tan Nguyen"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.06653v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06653v1 Announce Type: new Abstract: Federated learning (FL) enables collaborative model training across institutions without sharing sensitive patient data. However, the inherent heterogeneity of electrocardiogram (ECG) data across healthcare providers presents significant technical challenges for robust classification. We propose FedDualAtt, a personalized federated learning approach that splits transformer attention heads into global and local branches. Global heads are aggregated via FedAvg to capture shared cross-site patterns, while local heads remain client-specific to adapt to institution-level recording characteristics. Experiments on FedCVD, an FL benchmark for cardiovascular disease detection, demonstrate that FedDualAtt outperforms existing FL and personalized FL methods in ECG classification tasks. Analysis of global-local head ratios reveals that different clients benefit from varying levels of architectural personalization.
