---
title: "BER-PEF: Unified Human Mobility Predictability Evaluation via Bayes Error Rate Estimation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04292"
authors: ["En Xu, Jingtao Ding, Zhiwen Yu, Yong Li"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.04292v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04292v1 Announce Type: new Abstract: Human mobility predictability concerns the best prediction performance attainable from a given target and input information, but its ground truth is not directly observable on real mobility data. We present BER-PEF, a Bayes-error-rate-based framework that converts BER estimation into mobility predictability estimation and provides a unified protocol for comparing estimators without observable ground truth. The framework maps symbolic sequences, numeric trajectories, contextual features, and learned representations into a common feature--label space, then evaluates estimator outputs along controlled perturbation curves against a shared predictability reference interval by measuring deviations below the interval, above the interval, and across the full interval. Experiments on Foursquare NYC and TKY, GeoLife, and T-Drive show that several BER-based estimators achieve lower reference discrepancy than existing predictability methods on symbolic sequences and numeric trajectories, while their estimates track changes in empirical prediction performance under perturbation. Additional analyses show that contextual inputs and multiple structured representations can be evaluated under the same protocol, and that aggregating evidence across multiple perturbation levels provides a more reliable basis for estimator selection than relying on a single unperturbed observation. BER-PEF therefore offers a unified and verifiable path for evaluating predictability estimators on heterogeneous mobility data when ground-truth predictability is unavailable.
