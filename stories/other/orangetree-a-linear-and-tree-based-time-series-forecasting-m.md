---
title: "OrangeTree: A Linear and Tree-based Time Series Forecasting Model Supporting Multiple Input and Output Lengths"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31905"
authors: ["Yiqi Tang, Zhichen Lai, Yuxuan Yang, Dalin Zhang, Jinpeng Chen, Gang Chen, Huan Li"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31905v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Time series forecasting (TSF) models suffer from a critical rigidity: the inability to handle Multiple Input and Output Lengths (MIOL) within a single architecture. Current workarounds, such as padding or autoregression, often incur computational redundancy or suffer from error accumulation. We propose OrangeTree, a linear and tree-based architecture that decouples model parameters from sequence lengths. It employs a Segment Tree Encoder and an Inverse Tree Decoder to translate multi-length input history into multi-length output predictions within a unified framework. Crucially, a Range Weighter and a Feature Fuser bridge these components, dynamically selecting and fusing relevant ranges into optimal contexts for forecasting. Experiments on six benchmarks confirm OrangeTree achieves the SOTA performance. In MIOL settings, it matches the accuracy of length-fixed models without substantial accuracy degradation or a substantial increase in inference latency typical of heuristic methods. Code is available at https://github.com/Tang-Yiqi/OrangeTree.
