---
title: "USAD: Uncertainty-aware Statistical Adversarial Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27832"
authors: ["Zhijian Zhou, Xunye Tian, Jiacheng Zhang, Zesheng Ye, Yiyi Guo, Donghao Zhang, Liuhua Peng, Feng Liu"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2606.27832v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27832v1 Announce Type: new Abstract: Statistical adversarial detection (SAD) treats detection as a two-sample test. Given a reference set of clean examples (CEs) and a batch of queries, potentially containing an unknown mixture of CEs and adversarial examples (AEs), SAD decides whether the query distribution drifts away from the CE distribution while controlling the false-alarm rate. Existing SAD-based methods mainly use maximum mean discrepancy (MMD) to measure the distributional discrepancy. However, MMD's distributional properties limit its ability to capture characteristic uncertainty patterns of AEs that are crucial for detection: AEs typically exhibit abnormal feature spread (i.e., global uncertainty) and instability under perturbations (i.e., local uncertainty). To close the gap, we propose Uncertainty-aware Statistical Adversarial Detection (USAD), which explicitly captures these uncertainty patterns with two new statistics: (1) Variance Discrepancy (VD), which measures the difference in feature spread between AEs and CEs to capture global uncertainty differences. (2) Perturbation-based Covariance Discrepancy (PCD), which compares feature covariance under Gaussian perturbations to capture local uncertainty differences. By aggregating VD and PCD, USAD achieves superior detection performances over baseline methods against various adversarial attacks, highlighting the importance of considering characteristic behaviors of AEs for effective SAD. Our code is available at: https://anonymous.4open.science/r/USAD.
