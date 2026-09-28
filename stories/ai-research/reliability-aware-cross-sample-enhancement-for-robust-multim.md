---
title: "Reliability-aware Cross-sample Enhancement for Robust Multimodal Sentiment Analysis"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30470"
authors: ["Menghua Jiang, Haokai Gao, Xiangui Kang, Haifeng Hu, Sijie Mai"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 38
guid: "oai:arXiv.org:2609.30470v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Multimodal Sentiment Analysis (MSA) aims to infer human emotions from multiple modalities such as text, audio, and vision. In practice, inputs are often corrupted by noise and missing modalities, which degrades performance. Existing methods typically address these challenges in isolation, limiting their effectiveness in realistic settings. To address this limitation, we propose a Reliability-aware Cross-sample Enhancement (RCE) framework. Specifically, RCE first introduces an adaptive variational information bottleneck to model modality-wise uncertainty and perform quality-aware information compression, thereby suppressing redundant noise in unreliable modalities. Furthermore, we design a reliability-aware cross-sample enhancement strategy that retrieves high-confidence, semantically consistent neighbors from a large candidate pool to enrich and calibrate current representations, effectively alleviating information deficiency caused by missing modalities. Building upon this, RCE integrates cross-modal interactions with a multilevel reliability-aware fusion mechanism to adaptively aggregate information across modalities and enhancement stages, leading to more robust multimodal representations. Extensive experiments demonstrate that RCE consistently outperforms state-of-the-art methods across full, noisy, and missing-modality settings.
