---
title: "AtlasULP: Domain-aware Universal Link Prediction via Relation Atlas"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07347"
authors: ["Yujing Liu, Yixin Liu, Yu Zheng, Lianhua Chi, Alan Wee-Chung Liew, Heng Tao Shen, Shirui Pan"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07347v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Link prediction (LP) is a widely applied task in graph learning. Conventional LP approaches typically follow a dataset-specific paradigm, requiring independent training for each graph and incurring high computational and maintenance costs in large-scale applications. Motivated by these limitations, recent work explores Universal Link Prediction (ULP), aiming to enable training-free inference on arbitrary unseen graphs. However, existing methods primarily rely on subgraph sampling strategies to construct universal representations, which are unable to capture higher-order information due to the exponential growth of higher-order neighborhoods. As a result, they often under-perform on graphs where long-range signals are essential, such as biological networks. Moreover, their prediction models are typically domain-agnostic and lack the ability to adapt to different graph domains, leading to limited generalization. To address these challenges, we propose an Atlas-based Universal Link Prediction framework (AtlasULP), which introduces the relation atlas to capture structural associations between node pairs from both global and local perspectives, enabling a comprehensive characterization of connectivity signals across diverse graph domains. Building upon this representation, we develop a domain-guided prompting ULP model, which generates domain-aware prompt tokens from contextual structures and performs prompt-guided in-context prediction for adaptive link inference. Extensive experiments demonstrate that AtlasULP consistently outperforms state-of-the-art methods across diverse graph domains.
