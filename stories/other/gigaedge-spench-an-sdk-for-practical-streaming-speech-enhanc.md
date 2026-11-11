---
title: "GigaEdge Spench: An SDK for Practical Streaming Speech Enhancement"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13243"
authors: ["Artem Sokolov, Artem Khaidarov, Yana Lysova, Alexander Gladkikh, Vitaliy Yulis"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13243v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

We present GigaEdge Spench, an open-source SDK for streaming speech enhancement on CPU servers, mobile devices, and in browsers. Applications can build enhancement channels from neural denoising, normalization and dynamics blocks, sample-rate conversion, and acoustic echo cancellation where supported. These stages can be combined, while normalization can also run without a neural model. The release includes an 8 kHz INT8 denoiser and discriminative and hybrid 48 kHz FP32 models. A shared C++ core supports ONNX Runtime and TensorFlow Lite through native interfaces, Android and iOS SDKs, and WebAssembly integration. Independent stream contexts share model resources, and consecutive frames from one stream can be processed in a single inference call. We evaluate the released models on EARS-WHAM v2 and compare their quality and processing costs with RNNoise and DPDFNet2. All tested native and Web configurations process files faster than real time, although larger chunks require more time to collect input. We also measure how many streams a shared model can process on a CPU. Our contribution is a configurable deployment system and an experimental study of how model choice, chunk size, and execution environment affect its use. All reported SDK timing uses ONNX Runtime. Index Terms: speech enhancement, streaming inference, cross-platform deployment, temporal frame grouping, computational efficiency
