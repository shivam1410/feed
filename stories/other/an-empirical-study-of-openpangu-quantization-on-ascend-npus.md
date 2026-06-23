---
title: "An Empirical Study of OpenPangu Quantization on Ascend NPUs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21257"
authors: ["Tong Shi, Jiacheng Wang, Hui Xie, Ying Li, Aishan Liu, Jinyang Guo, Xianglong Liu"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21257v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21257v1 Announce Type: new Abstract: OpenPangu models are attractive targets for private and domestic large-language-model deployment, yet their robustness under aggressive post-training quantization on Ascend NPUs has not been systematically characterized. This paper conducts a controlled empirical study of OpenPangu 1B and 7B models on Huawei Ascend 910B1 NPUs. We evaluate representative weight-only and weight-activation post-training quantization methods, including RTN, GPTQ, AWQ, SmoothQuant, GPTAQ, BiLLM, and SliM-LLM, under a unified calibration and evaluation protocol. Across 18 evaluation tasks, we find that 8-bit weight-only quantization is effectively lossless for both models, while 4-bit quantization remains practical for the 7B model but is visibly more harmful for the 1B model on reasoning, math, and code tasks. Ultra-low precision remains challenging: most 2-bit and binary settings collapse to near-random behavior, and W4A4 SmoothQuant produces non-finite perplexity in our evaluation. These results provide an NPU-oriented accuracy map for selecting OpenPangu quantization settings and highlight the persistent difficulty of extreme low-bit compression.
