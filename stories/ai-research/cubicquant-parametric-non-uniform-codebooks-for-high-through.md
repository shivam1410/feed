---
title: "CubicQuant: Parametric Non-Uniform Codebooks for High-Throughput LLM Inference with 1-8-Bit Weights"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06763"
authors: ["Xuetian Gao"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 76
guid: "oai:arXiv.org:2608.06763v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

CubicQuant introduces a parametric non-uniform scalar quantization format for efficient LLM inference that balances adaptive reconstruction with GPU execution efficiency. Using a monotonic cubic curve specified by two shape parameters and one scale, it maps uniformly spaced magnitude codes to non-uniform reconstruction levels while preserving dense integer code streams. The format spans 1-8-bit weight payloads and contains uniform quantization as a special case. For 4-bit weights with group size 128 across 15,360 samples per distribution, CubicQuant reduced reconstruction RMSE by 3.90% on uniform, 13.49% on Gaussian, and 28.14% on Laplace samples compared to optimal four-bit uniform quantization. Reduced error enables high-quality inference at lower compute cost.
