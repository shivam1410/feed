---
title: "ResQAdam: Residual-Preserving Adaptive Optimization for Memory-Efficient Quantization Aware Training"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08924"
authors: ["Liqun Ma, Shengkun Tang, Liangyu Wang, Lin Zhao, Wei Luo, Xinjun Niu, Spandan Tiwari, Ashish Sirasao, Kun Zhang, Zhiqiang Shen"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08924v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Quantization-aware training (QAT) is the most reliable way to obtain accurate low-bit large language models (LLMs), but training with AdamW keeps two dense FP32 states for every weight matrix. We find that low-rank memory-efficient optimizers such as GaLore and LDAdam degrade substantially in QAT. A considerable part of the QAT momentum lies outside its top-r singular subspace, and projection-based methods discard this part at every step. We further observe that this residual remains useful when only its sign is kept. Based on these observations, we propose ResQAdam. It keeps a single BF16 momentum, applies Adam only to the r x r coordinates of the principal subspace, and adds a normalized sign update computed from the residual. We evaluate ResQAdam with two from-scratch QAT methods and three QAT fine-tuning pipelines, with weights quantized down to 2 bits. It reduces optimizer-state memory by 71% to 74% relative to AdamW, stays close to AdamW in most settings, and lowers training throughput by less than 2%.
