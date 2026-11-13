---
title: "A Transferable Pretrained 3D Model for Impedance Inversion with Sparse-Well Prior Conditioning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.14922"
authors: ["Gen Li, Zhaoyun Zong, Diqiong Jiang, Man Tang"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.14922v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Deep-learning-based seismic impedance inversion commonly requires retraining for each target survey, which may generalize poorly beyond the conditioning locations when well control is extremely sparse. We propose a transferable three-dimensional inversion framework that separates offline learning from target-survey deployment. A masked autoencoder first learns seismic structural representations from unlabeled multi-survey data, after which the frozen encoder is incorporated into an inversion network trained on synthetic geological models with sparse-well-derived low-frequency priors. During deployment, the complete inversion network remains fixed; the available conditioning well is used only to construct the low-frequency prior and align the global impedance range. Experiments on the Overthrust model show that the proposed method achieves the lowest full-volume NRMSE and reduces the P95 trace-wise NRMSE from 0.1310 to 0.1074 relative to the best target-trained baseline, indicating fewer localized large errors under different well locations. In a field survey with one conditioning well and three blind wells, it reduces the mean blind-well NRMSE by 20.95% relative to the target-trained U-Net while maintaining the highest correlation. These results demonstrate that the proposed framework transfers useful impedance information beyond the conditioning location with low deployment cost and without retraining the inversion network.
