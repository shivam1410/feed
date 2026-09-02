---
title: "REAL-Q: E2E LLM Quantization via Dynamic Gradient Descent"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00049"
authors: ["Qian Zhang, Yaoming Li, Zhewen Tan, Yanshu Wang, Heng Lu, Kun Su, Zongwei Lv, Wenhan Yu, Yongge Ma, Yinjun Han, Ruikuang Liu, Tong Yang"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.00049v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00049v1 Announce Type: new Abstract: Post-training quantization (PTQ) is essential for deploying large language models (LLMs) under strict resource constraints. State-of-the-art PTQ methods quantize each layer with a single closed-form second-order solver: to remain analytically tractable, they heavily approximate the global loss (dropping cross-channel coupling, pooling output rows into groups), and they then freeze the resulting Hessian across the entire layer, with no way to refresh it as the loss landscape shifts column by column--a phenomenon we call information misalignment. We propose REAL-Q (Real-time E2E-loss Aligned LLM Quantization), a novel PTQ paradigm that breaks this compromise: instead of diluting the objective for the sake of analytic tractability, REAL-Q targets an end-to-end-aligned surrogate of the global loss and refines it via fine-grained, dynamic Block-wise Gradient Descent applied after every column block (128 columns). By coupling this fine-grained correction with a sliding window mechanism for smooth cross-layer transitions, REAL-Q effectively mitigates error propagation across the network. On LLaMA-3.1 (8B and 70B) and Qwen3 (0.6B-32B) at W4A16, REAL-Q reduces end-to-end KL divergence by up to ~49% relative to state-of-the-art globally-guided methods.
