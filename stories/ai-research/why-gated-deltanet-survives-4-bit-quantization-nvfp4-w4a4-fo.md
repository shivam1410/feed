---
title: "Why Gated DeltaNet Survives 4-Bit Quantization: NVFP4 W4A4 for the Recurrent Half of a Hybrid 27B LLM"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.04098"
authors: ["Sergii Kozyrev", "Davyd Maiboroda"]
date: "2026-09-02T20:00:00.000Z"
score: 85
guid: "2609.04098"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.04098.png"
generated: "2026-09-04T23:32:20+05:30"
---

Hybrid LLMs combining recurrent Gated DeltaNet layers with other components can be fully quantized to 4-bit NVFP4 format while maintaining accuracy on long-context and reasoning benchmarks. The key insight is that delta-rule dynamics in recurrent layers allow outliers to localize without widespread accuracy loss. This matters because aggressive quantization enables deployment of complex hybrid architectures on resource-constrained hardware without sacrificing performance.
