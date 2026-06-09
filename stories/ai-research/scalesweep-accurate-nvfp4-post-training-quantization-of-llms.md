---
title: "ScaleSweep: Accurate NVFP4 Post-Training Quantization of LLMs via Block Scale Initialization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07618"
authors: ["Li Lin, Xiaojun Wan"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.07618v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07618v1 Announce Type: new Abstract: NVFP4 is a recently introduced hardware-supported FP4 format that improves the fidelity of 4-bit quantization through fine-grained block scales. However, existing NVFP4 scale initialization methods still primarily rely on AbsMax initialization, which leaves a noticeable gap to the optimal solution. To address this, we propose ScaleSweep, a simple and efficient scale optimization method that sweeps over feasible block scale candidates and selects the candidate that minimizes a target objective. We further provide a theoretical analysis of NVFP4 quantization and derive both lower and upper bounds for the required sweep range under mean square error (MSE) and weighted mean square error (WMSE) between the original tensor and the quantized reconstructed tensor. The proposed bounds substantially reduce the sweep space while preserving the optimal candidate, enabling negligible overhead compared with the baseline quantization operators. Experiments on Llama and Qwen models demonstrate that ScaleSweep consistently improves quantization performance over existing initialization methods and further narrows the gap to full precision. In particular, under aggressive end-to-end quantization of weights, activations, KV cache, and query states, ScaleSweep preserves more than 93% of the full-precision performance.
