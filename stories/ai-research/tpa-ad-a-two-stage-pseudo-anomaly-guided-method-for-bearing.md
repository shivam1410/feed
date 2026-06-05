---
title: "TPA-AD: A Two-Stage Pseudo Anomaly-Guided Method for Bearing Time-Series Anomaly Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04073"
authors: ["Xiancheng Wang, Zhibo Zhang, Ran Li, Rui Wang, Minghang Zhao, Shisheng Zhong, Lin Wang"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.04073v1"
image: ""
generated: "2026-06-05T13:37:27+05:30"
---

arXiv:2606.04073v1 Announce Type: new Abstract: This paper proposes a two-stage pseudo anomaly-guided anomaly detection method (\textbf{T}wo-stage \textbf{P}seudo \textbf{A}nomaly-guided \textbf{A}nomaly \textbf{D}etection, \textbf{TPA-AD}) for axle-box bearing time-series anomaly detection (time series anomaly detection, TSAD) under the setting where only normal samples are available for training. The method first generates pseudo-anomalous windows near the normal boundary using a reconstruction model and per-feature target-error control. It then learns anomaly-sensitive representations through contrastive learning between normal and pseudo-anomalous windows, and finally produces window-level and point-level anomaly scores using k-nearest neighbors (KNN). Compared with existing methods that rely on known fault categories, real anomaly priors, or random anomaly injection, TPA-AD improves the separability of the normal boundary by constructing pseudo-anomalies in boundary neighborhoods and can jointly handle continuous and discrete features in mixed-variable scenarios. The main experiments are conducted on bearing fault detection datasets and degradation-process datasets, with an additional exploratory extension on $13$ public TSAD datasets. The results show that the proposed method yields relatively stable anomaly responses, is sensitive to degradation evolution, and demonstrates a certain degree of broader applicability on public TSAD benchmarks and real high-speed-train-related bearing data.
