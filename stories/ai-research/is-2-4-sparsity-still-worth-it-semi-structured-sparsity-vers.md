---
title: "Is 2:4 Sparsity Still Worth It? Semi-Structured Sparsity versus Quantization in LLM Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28947"
authors: ["Xiuyi Qin"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.28947v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

NVIDIA tensor cores have supported 2:4 semi-structured sparsity since Ampere, and the pattern composes with quantization. When the two are combined, the practical question is which step to take next: from a given precision, add 2:4 sparsity or drop to the next lower precision? We compare the two at equal bits, with sparsity metadata counted, and at equal nominal tensor-core tiers, over all six GEMM operands of a transformer layer, with kernels measured on three GPU generations and online pruning and quantization included. Our results show that as long as a lower precision is available, adding 2:4 is the worse step, both less accurate and slower, because the energy that 2:4 discards from each group of four along the hardware-forced axis does not shrink with bits, while quantization error does. Once quantization reaches the lowest precision the hardware supports, 2:4 still speeds up linear layers by 1.3--1.7\x{}, and on an H100 a retrained 2:4 model served in FP8 by vLLM reaches 27\% higher prefill throughput than the dense FP8 model, with GSM8K accuracy on par. Its quality has to be won back by retraining, however, which restores perplexity long before reasoning; on Blackwell, whose sparse FP4 uses a pairwise 4:8 pattern, the loss is larger and our retraining budget did not recover it.
