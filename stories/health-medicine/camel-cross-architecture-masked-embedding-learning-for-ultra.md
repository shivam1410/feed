---
title: "CAMEL: Cross-Architecture Masked Embedding Learning for Ultra-Lightweight Retinal Foundation Models"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.40954"
authors: ["Andre Guarnier De Mitri, Giovani Decico Lucafo, Miller Matheus Lima Anacleto Rocha, Diego Furtado Silva"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2610.40954v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Recent progress in deep learning has substantially advanced automated grading of ophthalmologic pathologies, supported by large annotated datasets and improved representation learning. However, a significant gap remains between state-of-the-art performance and clinical scalability. In particular, foundation models have reshaped image-based medical screening and diagnosis. These large-scale architectures trained on extensive datasets learn rich, generalizable feature representations that can be adapted to a wide range of downstream tasks. In ophthalmology, RETFound, one of the most relevant foundation models for retinal images, performs strongly across classification, segmentation, and risk prediction tasks. Despite their effectiveness, foundation models are often computationally prohibitive, hindering their deployment in real-world clinical environments where hardware constraints and latency are critical. To bridge this gap, we introduce CAMEL (Cross-Architecture Masked Embedding Learning), a novel cross-architecture distillation framework that uses an asymmetric masking strategy during embedding learning to effectively transfer knowledge from massive teacher foundation models to compact, lightweight student models. Our experimental evaluation across four datasets shows that CAMEL preserves accuracy while drastically reducing computational complexity, enabling lightweight yet highly accurate models suitable for resource-limited clinical settings.
