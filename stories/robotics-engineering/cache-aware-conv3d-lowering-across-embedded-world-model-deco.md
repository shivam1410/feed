---
title: "Cache-Aware Conv3D Lowering Across Embedded World-Model Decoders"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31938"
authors: ["Jiaming Zhang, Wu Yang, Shuai Tao, Wulong Liu"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.31938v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

Generative world models can provide visual rollouts for embodied planning, yet their feasibility on edge devices depends not only on the learned model but also on how the execution runtime represents its operations. We introduce a cache-aware lowering that expresses supported causal Conv3D calls as batched spatial Conv2D operations while preserving pretrained weights, temporal-cache semantics, convolution parameters, bias placement, and output layout. Across the complete Cosmos3-Edge image-to-video pipeline on a 64-GB NVIDIA Jetson AGX Orin, the proposed route accelerates VAE decoding by approximately $7\times$ and reduces complete-generation latency by more than $2\times$, while repeated decoder evaluations maintain complete fast-path coverage without fallbacks. The unchanged lowering also improves Cosmos3-Nano and transfers to LingBot-World's architecturally distinct Wan2.1 VAE. A clean-device comparison against fully specialized TensorRT shows that TensorRT provides a further $1.36\times$ steady-state improvement, but requires substantially greater per-module and per-runtime-state AOT specialization. Same-latent BF16 and FP32 evaluations characterize the finite-precision differences introduced by the alternative execution order. Together, these results position cache-aware lowering as a lightweight runtime optimization that recovers most of the available decoder acceleration without modifying the learned models themselves.
