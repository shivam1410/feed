---
title: "SCCM : Stream Cruise Control Method for Automated Drift Detection and Adaptation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09432"
authors: ["Mohammad Abu-Shaira, Weishi Shi"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.09432v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09432v1 Announce Type: new Abstract: Real-world datasets often exhibit evolving distributions, known as concept drift. Ignoring drift degrades predictive performance, while reliance on fixed hyperparameters further limits model adaptability under changing conditions. Adaptive learning addresses this challenge by continuously updating models online, allowing them to incrementally adjust and remain effective as data distributions evolve. This paper presents the Stream Cruise Control Method (SCCM), a comprehensive framework for drift detection and adaptation in online regression. SCCM enables automated adaptation through early-response, pre-update drift detection, drift magnitude quantification, KPI-window-based thresholding for local false-alarm mitigation, dynamic hyperparameter tuning, and model recalibration. SCCM also adopts an in-memory design for real-time adaptability, unlike purely reactive methods that typically activate adaptation only after performance degradation is observed. By using dynamic thresholding and remaining agnostic to data distributions, SCCM supports KPI-based monitoring across varying data streams, including high-dimensional and large-scale settings. SCCM is integrated with four online regression models and evaluated on 18 synthetic datasets covering abrupt, incremental, and alternating gradual drift, together with eight real-world datasets. The evaluation uses both R2 and MSE and compares against eight detector--adaptation baselines. Results show improved predictive performance and effective drift handling across the evaluated online regression settings.
