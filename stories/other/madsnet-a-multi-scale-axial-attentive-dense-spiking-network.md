---
title: "MADSNet: A Multi-Scale Axial-Attentive Dense Spiking Network for Spike Camera Image Reconstruction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.12980"
authors: ["Sirui Li, Rui Zhao, Siqi Cai, Haizhou Li, Tiejun Huang, Yajing Zheng"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.12980v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Spike cameras encode dynamic scenes into high-temporal-resolution binary spike streams for efficient high-speed vision. Although spiking neural networks (SNNs) can process such signals with sparse and accumulate-only computation, existing SNN-based reconstruction methods are typically shallow and still lag behind ANN-based models in reconstruction fidelity. This paper proposes MADSNet, a Multi-scale Axial-attentive Dense Spiking Network for spike camera image reconstruction. MADSNet adopts a hierarchical spiking encoder--decoder, where a multi-scale spike stem extracts early features, axial spike attention captures long-range dependencies, a dense spiking bottleneck enhances feature reuse, and a spike-to-continuous decoder reconstructs continuous intensity images from spike-domain representations. Experiments on gray-scale and color spike reconstruction show that MADSNet outperforms SSIR by 4.3 dB PSNR and Spk2ImgNet by 1.94 dB on SREDS. Compared with Spk2ImgNet, it achieves about 15$\times$ lower latency and uses only about 1/40 of the estimated energy, demonstrating that carefully designed SNN architectures can improve reconstruction quality while preserving computational efficiency.
