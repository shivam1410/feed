---
title: "LACE-SVD: Loss-Aware SVD with Cumulative Error Correction for LLM Compression"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03057"
authors: ["Zhuowen Liu, Longkun Hao, Shiyu Feng, Xiaowen Chang, Ruiqun Li, Changqun Li"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.03057v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03057v1 Announce Type: new Abstract: The rapid growth in the parameter scale of large language models (LLMs) has created a strong demand for efficient compression techniques. As a hardware-agnostic and highly compatible approach, low-rank compression has been widely adopted to reduce both memory footprint and computational cost. However, existing SVD-based methods are still largely driven by local reconstruction objectives, overlooking two critical limitations: rank budgets are often allocated without explicitly considering layer-wise loss sensitivity, and local approximation errors can propagate and accumulate through the residual stream, leading to amplified global deviations from the original model. To address these issues, we propose LACE-SVD, a Loss-Aware SVD framework with Cumulative Error correction for LLM compression. LACE-SVD first estimates the calibration negative-log-likelihood increase induced by candidate layer-wise compression ratios and solves a budget-constrained allocation problem to assign rank budgets. It then refines the compressed model with closed-form local updates and introduces a propagation-aware correction for residual-stream output modules, reducing layer-output discrepancy as a proxy for cumulative error propagation. Experimental results demonstrate that at a high compression ratio (0.6), the WikiText-2 PPL of our method on LLaMA-7B (32.57) is significantly better than that of Dobi-SVD (46.18).
