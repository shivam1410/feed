---
title: "Radio-Frequency Convolutional Neural Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19279"
authors: ["Zhihui Gao, Shi-Yuan Ma, Yiran Chen, Dirk Englund, Tingjun Chen"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19279v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19279v1 Announce Type: new Abstract: Running artificial intelligence (AI) models directly on edge devices such as smartphones, wearables, and drones offers low latency, pervasive scalability, and data privacy, but these devices rarely carry the computing capability that modern neural networks demand. Edge accelerators have been developed in response, yet each adds computing hardware to devices already constrained in size, weight, power, and cost (SWaP-C). An alternative lies in what these devices already carry: the frequency mixer in every wireless radio multiplies signals in time, natively performing convolution in the frequency domain. Here we introduce radio-frequency convolutional neural networks (RF-CNNs), which repurpose existing communication hardware for CNN inference. Multi-channel convolutions are mapped onto frequency tones for a passive mixer to execute in a single pass. We experimentally demonstrate that RF-CNN runs deep CNNs up to 26.4 million parameters and nine layers from classification of wireless signals and images to controllable image generation, close to full-precision performance. Because the weights arrive over the air and the analog hardware is shared with communication, the edge device spends energy only on data preparation and readout-down to 0.72 femtojoules per multiply-accumulate, two orders of magnitude less than it would cost on an added digital processor. These results suggest that deployed wireless infrastructure can bring efficient, state-of-the-art AI inference to the billions of devices it already connects.
