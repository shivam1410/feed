---
title: "nCMD: Benign-Anchored Feature Selection for Imbalanced Network Intrusion Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09934"
authors: ["Abu Fuad Ahmad, Istiaque Ahmed"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2606.09934v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09934v1 Announce Type: new Abstract: Feature selection is critical for network intrusion detection systems (NIDS) operating under high-dimensional, highly imbalanced traffic, as found in operational and defense networks. Traditional filter methods rank features using global statistics computed symmetrically across classes and thus fail to capture the asymmetry of intrusion detection, where attacks are best characterized as deviations from dominant benign traffic. We propose benign-anchored Classwise Mean Deviation (nCMD), a lightweight and interpretable method that scores feature relevance based on the deviation of attack-class distributions from the benign-class mean, rather than a globally biased reference. This approach aligns feature selection with the operational semantics of NIDS at no additional computational cost. Across four benchmark datasets (CICIDS2017, CICDDoS2019, NSL-KDD, and UNSW-NB15), multiple feature budgets, and three downstream classifiers, nCMD matches or exceeds classical filter baselines in macro-averaged F1-score. It achieves the best result on three of the four datasets and under every classifier, with the strongest improvements observed under tight feature budgets and severe class imbalance. These results support benign-anchored ranking as a scalable and interpretable preprocessing component for resource-constrained NIDS.
