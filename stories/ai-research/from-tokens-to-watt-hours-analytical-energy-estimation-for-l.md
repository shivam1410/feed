---
title: "From Tokens to Watt-hours: Analytical Energy Estimation for LLM Inference on Modern GPUs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26571"
authors: ["Tina Vartziotis, Rodopi Kosteli, Elli Vartziotis, George Dasoulas, Michael Keckeisen, Konstantinos Skianis, Sotirios Kotsopoulos, Francesca Dominici"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2607.26571v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26571v1 Announce Type: new Abstract: The operational energy consumption of large language model (LLM) inference is becoming an increasingly important component of the environmental footprint of deployed AI systems. However, direct measurement of inference energy often requires hardware telemetry, power instrumentation, or infrastructure-specific monitoring, limiting its applicability in comparative studies, early-stage system design, and sustainability reporting. This report presents an analytically structured, empirically calibrated, GPU-level methodology for estimating LLM inference energy on NVIDIA H100-class accelerators without direct runtime measurement. The proposed estimator combines parameter-scaled transformer FLOP accounting, calibrated memory-traffic factors, and hardware-specific energy coefficients for FP16/BF16 tensor-core computation and high-bandwidth-memory movement. It explicitly separates prompt prefill from autoregressive decoding, enabling energy estimates for input tokens, output tokens, and complete inference requests. The methodology further decomposes total energy into compute, parameter-access, key-value-cache write, and attention-read components, allowing the scaling behavior with model size, context length, and generated-token count to be analyzed. The resulting estimates are not intended to replace physical power measurements; rather, they provide transparent, reproducible, and assumption-explicit approximations suitable for model comparison, green-coding analysis, and design-time evaluation of LLM inference workloads.
