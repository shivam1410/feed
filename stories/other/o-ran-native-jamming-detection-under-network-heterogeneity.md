---
title: "O-RAN-Native Jamming Detection Under Network Heterogeneity"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20816"
authors: ["Sneihil Gopal, Fernando J. Cintr\\'{o}n, Richard A. Rouil"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20816v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Radio-frequency jamming threatens cellular network operations in contested environments. The Open Radio Access Network (O-RAN) architecture exposes per-User Equipment (UE) telemetry through the E2 interface, enabling Key Performance Indicator (KPI)-based jamming detection without proprietary hardware. However, operational deployment demands detection methods that generalize across heterogeneous networks. We propose a Statistical Ensemble Method (SEM) combining adaptive Median Absolute Deviation (MAD)-based baseline detection, count-based anomaly detection, and abrupt change detection through a weighted voting system. SEM operates in two modes: a cold-start mode requiring no labeled data for immediate deployment, and a supervised mode where parameters are refined offline via grid search as labeled data accumulates. We evaluate SEM against five machine learning (ML) classifiers and five deep learning (DL) sequence models using approximately 25 hours of testbed data comprising logs from eight heterogeneous 5G environments, employing both single-environment and multi-environment leave-one-out (LOO) validation. Our analysis indicates that under conditions not encountered during training (distribution shift), learning-based models tend to lose recall and miss jamming events, whereas SEM, even in cold-start mode, maintains detection capabilities at the cost of false alarms. Furthermore, SEM's parameter optimization can be mapped to O-RAN's Non-RT RIC as an rApp for continuous refinement, allowing operators to transition to learning-based alternatives once corpus coverage is sufficient.
