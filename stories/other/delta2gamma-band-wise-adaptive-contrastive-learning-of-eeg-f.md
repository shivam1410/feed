---
title: "Delta2Gamma: Band-Wise Adaptive Contrastive Learning of EEG for Alzheimer's Disease Detection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.17231"
authors: ["Chanwoo Park, Chanwoo Kim"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.17231v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.17231v1 Announce Type: new Abstract: Low-cost, scalable screening for dementia remains an open problem. Imaging-based diagnosis is costly and hard to deploy widely. Electroencephalography (EEG) is portable and inexpensive, but its recordings are noisy, vary widely across subjects, and carry few clinical labels. We tackle this with Delta2Gamma, a self-supervised framework that learns EEG representations from unlabeled data by contrasting augmented views of each signal. Rather than treat EEG as a single stream, Delta2Gamma decomposes every recording into the five canonical neural rhythms (delta, theta, alpha, beta, gamma). Each band gets its own encoder and projection head. Each also gets a temperature that is predicted adaptively during contrastive training, so bands with different signal statistics are balanced automatically. On the ADFTD cohort under a strict leave-one-subject-out protocol, Delta2Gamma separates Alzheimer's disease from cognitively normal controls with 92.4\% accuracy. This exceeds both supervised backbones and recent dedicated EEG methods.
