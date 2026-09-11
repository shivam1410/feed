---
title: "EMMI: Edge Multi-Modal Intelligence for Communication-Efficient MLLM Inference via Fused Representation Compression"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11058"
authors: ["Motahare Mounesan, Irfan Khan"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11058v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11058v1 Announce Type: new Abstract: Recent advances in multimodal large language mod- els (MLLMs) have opened new opportunities for edge intelligence by enabling reasoning across heterogeneous sensor modalities, such as vision, text, and telemetry data. However, deploying these capabilities on resource-constrained edge platforms remains challenging due to the substantial computational, memory, and communication demands of modern MLLMs. Rather than transmitting raw sensor observations or partitioning neural networks at intermediate layers, Edge Multi-Modal Intelligence (EMMI) communicates a compact representation between edge devices and server resources, enabling communication-efficient edge MLLM inference. To achieve this, EMMI performs modality-specific encoding, cross-modal representation fusion, and learned compression at the edge, transmitting only a compact latent representation to server-side resources for high-capacity MLLM reasoning. This representation-centric design reduces communication overhead, preserves local data privacy, and provides a fixed-size interface between heterogeneous edge devices and server-side MLLMs. Evaluation on a representative multimodal benchmark demonstrates that EMMI can reduce the communication payload by 32x while maintaining comparable downstream accuracy, resulting in up to a 3.4x reduction in estimated end-to-end inference latency under bandwidth-constrained edge conditions.
