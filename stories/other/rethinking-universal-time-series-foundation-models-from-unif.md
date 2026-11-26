---
title: "Rethinking Universal Time Series Foundation Models from Unified Representations to Shared Dynamics (UniTFU)"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31921"
authors: ["Shuxin Li, Yingjie Zhou, Le Zhang, Jingyuan Xia, Shengxi Li, Ce Zhu, Anderson Rocha"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31921v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Time series foundation models (TSFMs) have attracted increasing attention in cross-domain forecasting. Existing works mainly rely on large-scale pre-training and general modeling paradigms. However, the former heavily relies on the diversity and domain coverage of pre-training data. Meanwhile, the latter learns unified representations across heterogeneous domains without explicitly identifying the temporal regularities shared among them, limiting robust cross-domain generalization. This work explores cross-domain generalization by characterizing commonalities in recurring local dynamics across domains, rather than relying solely on implicitly learned temporal representations. To capture such cross-domain commonalities, we propose Time Series Foundation Units (TFUs) as reusable building blocks discovered from multi-scale temporal segments, each characterizing a recurring local dynamic pattern shared across domains. Building on TFUs, we develop a unified time series foundation model (UniTFU) that explicitly reuses and composes shared temporal regularities across domains for forecasting. Experiments on seven public datasets show that UniTFU substantially outperforms existing TSFMs in cross-domain forecasting and can efficiently adapt to target-domain dynamics by updating its reusable components with limited target data. UniTFU also achieves strong forecasting performance compared with state-of-the-art methods.
