---
title: "EFQ-Softmax: Exp-Free Quantization for Softmax"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09721"
authors: ["Haohui Han (Xi'an Jiaotong University), Yuming Wan (Huawei Technologies Co., Ltd), Hongni Wang (Shandong University of Finance and Economics), Pengcheng Xie (Huawei Technologies Co., Ltd), Xiaodong Yan (Xi'an Jiaotong University), Runqi You (Xi'an Jiaotong University), Wencong Zhang (Xi'an Jiaotong University)"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.09721v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09721v1 Announce Type: new Abstract: Low-bit attention accelerates Transformer inference by moving the $QK^\top$ and $PV$ matrix multiplications to FP8 or FP4 matrix engines. However, the softmax path often evaluates shifted-score exponentials in higher precision, forms a temporary probability block, and quantizes it before low-bit $PV$ multiplication. This exp-then-quantize path creates a mismatch between a high-precision probability producer and a low-bit matrix consumer. We propose EFQ-Softmax (Exp-Free Quantization for Softmax), a low-bit probability-generation method that directly maps shifted attention scores to block-scaled E2M1 operands. For each microscaling block, EFQ-Softmax selects an exponent-only scale from the local maximum, maps the shifted scores to a normalized residual domain, and generates nonnegative E2M1 probability codes using a single affine rule. The resulting operand is used consistently in both the $\widetilde{P}V$ numerator update and the $\widetilde{P}\mathbf{1}$ denominator update. The FlashAttention-style row-maximum update, historical rescaling, high-precision accumulation, and final normalization remain unchanged. We evaluate end-to-end quality on Qwen3-8B, Qwen3-VL-8B-Instruct, and WAN2.2-TI2V-5B, and separately measure kernel-level performance on the A5 vector unit. EFQ-Softmax improves the Qwen3-8B seven-task mean from 0.6749 with MXFP4 to 0.6773 and the Qwen3-VL nine-task mean from 0.7826 to 0.8000. On WAN2.2, it maintains temporal consistency and visual quality comparable to the FP16 and MXFP4 baselines under VBench. On the A5 vector unit, EFQ-Softmax reduces the vector-stage latency of the fused probability-generation kernel by 40.33% on average across sequence lengths from 16K to 128K. These results show that direct low-bit probability generation can replace the conventional exp-then-quantize path while preserving end-to-end model quality.
