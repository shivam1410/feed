---
title: "Multi-Level Modeling of Large Language Model Inference Latency and Energy via Hybrid Analytical--Machine-Learning Predictors"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06723"
authors: ["Saeid Shokoufa, Mohammad Erfan Sadeghi, Mehdi Kamal, Massoud Pedram"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2608.06723v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

arXiv:2608.06723v1 Announce Type: new Abstract: The rapid scaling of Large Language Models (LLMs) has significantly increased computational cost, energy consumption, and inference latency, making accurate estimation essential for sustainable artificial intelligence deployment and hardware-aware design. In this work, we introduce Hybrid Modeling for Energy and Latency of LLMs (HYMELL), a hybrid three-level framework for estimating LLM inference latency and energy by combining analytical modeling with machine learning (ML). HYMELL models LLM execution through a three-level hierarchy: analytical estimation of primitive operations, ML prediction of higher-level components, and an end-to-end model that captures system-level overheads across both prefill and decode phases. The framework supports diverse architectures, including dense and mixture-of-experts (MoE) feed-forward networks (FFNs), as well as multi-head attention (MHA) and grouped-query attention (GQA) mechanisms. Evaluated on an NVIDIA H100 graphics processing unit (GPU), HYMELL achieves high predictive accuracy; notably, for LLaMA 3 8B, it attains less than 5% error for both prefill and decode phases. By predicting execution costs directly from architectural parameters, it enables fast, hardware-free design space exploration and energy-efficient optimization.
