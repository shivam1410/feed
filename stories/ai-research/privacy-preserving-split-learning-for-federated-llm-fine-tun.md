---
title: "Privacy-Preserving Split Learning for Federated LLM Fine-Tuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09794"
authors: ["Heng Jin, Chaoyu Zhang, Hexuan Yu, Wenjing Lou, Y. Thomas Hou"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.09794v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09794v1 Announce Type: new Abstract: Fine-tuning large language models (LLMs) on domain-specific data is essential for downstream adaptation. In many deployments, a participant cannot hold the complete model locally. This happens because the model owner keeps the full model proprietary, or because the participant lacks sufficient compute resources. Split Learning (SL) addresses this by partitioning the model between the participant and a server so that only a small portion runs locally. When the underlying data is additionally distributed across multiple institutions with privacy requirements, Federated Learning (FL) further enables collaborative training across participants by sharing only model updates instead of raw data. In this combined setting, each client transmits intermediate activations to the server, and for LLM fine-tuning, this exchange poses an inherent privacy paradox. The autoregressive nature of LLMs causes the transmitted activations to leak the input, and existing perturbation-based defenses are fundamentally ineffective in this setting. We address this leakage through a learned obfuscate-and-recover scheme that protects participants' private datasets while still allowing an independently deployable model to be trained on the server side. Experiments demonstrate that our approach achieves strong privacy protection with modest utility loss and system overhead, making split-based federated LLM fine-tuning practically viable.
