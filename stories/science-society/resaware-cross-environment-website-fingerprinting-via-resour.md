---
title: "ResAware: Cross-Environment Website Fingerprinting via Resource-Privileged Distillation"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17462"
authors: ["Chongru Fan, Wei Wang, Wentao Huang, Zhenquan Ding, Jinqiao Shi, Lei Cui, Zhiyu Hao, Xiaochun Yun"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.17462v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17462v1 Announce Type: new Abstract: While Website Fingerprinting (WF) attacks achieve high accuracy in controlled laboratory settings, they often degrade substantially in real-world environments due to spatio-temporal drift, browser heterogeneity, proxy obfuscation and etc. This limitation stems from their sole reliance on low-level traffic features that are noisy and highly sensitive to environmental perturbations. To address this problem, we propose \textbf{ResAware}, a cross-environment resource-aware distillation framework under a \textit{training-rich/inference-poor} asymmetric setting. Specifically, ResAware trains a teacher model on resource-level features, and then distills the resulting privileged knowledge into a student model through heterogeneous knowledge distillation. At deployment time, the student model performs inference using only encrypted traffic, incurring zero additional cost. We evaluate ResAware on a large-scale dataset collected over five months from six globally distributed vantage points, comprising more than $160{,}000$ paired samples. The results show that ResAware significantly enhances the cross-environment robustness of diverse WF baselines. Under a 150-day temporal drift, for example, ResAware improves the F1-score of Var-CNN from $72.77\%$ to $81.49\%$ and the open-world $TPR@1\%FPR$ from $22.40\%$ to $27.20\%$. Our results demonstrate that resource-level supervision improves WF robustness without expanding online observation capabilities.
