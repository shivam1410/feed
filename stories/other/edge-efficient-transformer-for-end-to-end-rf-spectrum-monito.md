---
title: "Edge-Efficient Transformer for End-to-End RF Spectrum Monitoring"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18285"
authors: ["Zhifan Song, Haralampos-G. Stratigopoulos, Hassan Aboushady"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18285v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18285v1 Announce Type: new Abstract: We present E-SpecFormer (Edge Spectrum monitoring Transformer) for end-to-end automatic modulation and covert channel (CC) recognition. We introduce LiTAN (Linear Tanh Attention Network), a Softmax- and LayerNorm-free attention mechanism that reduces complexity while increasing accuracy in RF tasks. E-SpecFormer is parameterized in four scalable variants (Nano, Small, Medium, Large) to accommodate diverse hardware constraints. Using the RadioML2018 dataset for modulation recognition, the Nano variant achieves 86.5% average accuracy for Signal-to-Noise Ratios (SNRs)>0 dB, and on the hardware Trojan (HT)-based CC dataset it reaches 94.2% accuracy, both with fewer than 10k parameters and up to speed of 92 {\mu}s per frame on FPGA/CPU co-execution, surpassing state-of-the-art edge models at a fraction of their cost. These results establish E-SpecFormer as an edge-efficient solution for real-time spectrum intelligence on Internet of Things (IoT) devices. GitHub link to the repository: https://github.com/zsniko/E-SpecFormer.
