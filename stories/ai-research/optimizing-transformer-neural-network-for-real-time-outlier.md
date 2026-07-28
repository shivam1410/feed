---
title: "Optimizing Transformer Neural Network for Real-Time Outlier Detection on FPGAs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22786"
authors: ["Ilia Sobakinskikh, Paul Alexander Bilokon"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 54
guid: "oai:arXiv.org:2607.22786v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22786v1 Announce Type: new Abstract: In this work, we explore how the inference time of a Transformer Neural Network can be efficiently optimized with applications to real-time anomaly detection in financial time series. The financial time series are price series such as asset prices. Unfortunately, the data is often with errors or outliers that make the downstream data processing tasks useless, unstable or even harmful. Moreover, the amount of financial time-series data has been significantly increasing. Hence, there is a need for better data-cleaning methods in terms of accuracy and in terms of processing speed. Transformers as a neural network architecture have achieved superior performances in many tasks such as Natural Language Processing and Computer Vision. Time series modelling and especially anomaly detection tasks can benefit from the features of transformers architecture in multiple ways, including the capacity to capture long-range dependencies and interactions. Increasingly powerful hardware, such as field-programmable gate arrays (FPGAs), have seen increasing usage in recent years due to their reconfigurability and high performance. They can be efficiently utilized to speed up the computations of the Transformer architecture. We explore different Transformer architectures for time series modelling and how they can be efficiently implemented on an FPGA board (PYNQ-Z2). In particular, we examine the application of Transformers to detect anomalies in time series and we show how they can be efficiently implemented on an FPGA board to minimize latency. The code is available at https://github.com/thxi/icl_thesis
