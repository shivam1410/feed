---
title: "Process Mining-Enabled Federated Anomaly Detection for the Industrial IoT"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17869"
authors: ["Francesco Vitale, Salvatore Bramante, Francesco Flammini, Hangli Ge"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17869v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

While federated anomaly detection enables the integration of local data insights across diverse nodes to reduce false positives, it inherently struggles with non-IID data. In practice, industrial IoT plants often operate under varying conditions and experience diverse environmental phenomena, resulting in significant heterogeneity in the monitored time series. In such settings, standard federated learning approaches fail to perform nuanced aggregation that accounts for these cross-node differences, ultimately leading to increased false positive rates. In this paper, we propose a process mining approach to evaluate the similarity of local node data against a reference provided by a global node. The global node utilizes these similarity metrics to dynamically weight local models during aggregation, producing personalized updates distributed across the network. We evaluate our approach using industrial IoT time-series data collected from manufacturing plants operating under distinct conditions. Experimental results demonstrate that our process mining-enabled federated anomaly detection pipeline achieves superior performance, yielding a 46.52% and 11.99% relative improvement in F1-score compared to isolated local training baselines and standard FedAvg, respectively, alongside a 51.24% relative reduction in false positives over standard federated aggregation.
