---
title: "MiCoPro: End-to-End Mixed Precision HW/SW Co-design with HW-aware Proxy Model"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06916"
authors: ["Zijun Jiang, Yangdi Lyu"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 73
guid: "oai:arXiv.org:2608.06916v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

arXiv:2608.06916v1 Announce Type: new Abstract: Quantized Neural Networks~(QNN) with low-bitwidth data have proven promising in efficient storage and computation on edge devices. To mitigate accuracy degradation while maximizing speedup, layer-wise mixed-precision quantization~(MPQ) becomes a popular solution. However, existing algorithms for exploring MPQ schemes are limited in flexibility and efficiency. Comprehending the complex impacts of different MPQ schemes on post-training quantization and quantization-aware training results is a challenge for conventional methods. Furthermore, an end-to-end framework for the optimization and deployment of MPQ models is missing in existing work. To address these challenges, we propose the MiCo framework, a holistic MPQ exploration and deployment framework for edge AI applications. The framework adopts a novel optimization algorithm to search for accuracy-optimal quantization configurations under strict latency constraints. We further extended the framework to MiCoPro, which introduces a robust Hardware-Aware Proxy (HAP) model to enhance prediction accuracy and hardware versatility. By leveraging target-specific latency modeling, MiCoPro enables rapid exploration and direct deployment from PyTorch models to bare-metal C code. We demonstrate the versatility of our framework on both the BitFusion accelerator and SIMD-extended RISC-V processors, achieving up to 40\% of latency reduction with less than 3\% of accuracy drop.
