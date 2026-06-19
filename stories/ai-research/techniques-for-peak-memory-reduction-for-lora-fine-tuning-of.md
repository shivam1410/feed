---
title: "Techniques for Peak Memory Reduction for LoRA Fine-tuning of LLMs on Edge Devices"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19528"
authors: ["Hassan Dbouk, Matthias Reisser, Prathamesh Mandke, Likhita Arun Navali, Christos Louizos"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.19528v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19528v1 Announce Type: new Abstract: Fine-tuning of Large Language Models (LLMs) using Low-Rank Adaptation (LoRA) on an end-user's data offers personalized experiences while keeping data private, but faces severe memory constraints on consumer hardware. Peak memory during fine-tuning often exceeds device limits, especially for models with billions of parameters and long-context training data. This paper introduces a suite of complementary techniques to reduce memory footprint without sacrificing model quality: (1) base model quantization with on-the-fly dequantization, (2) memory-efficient checkpointing combining selective activation caching and disk offloading, (3) softmax approximation using semantically relevant token subsets, and (4) logits masking. Experiments on Llama-3.2 3B and Qwen-2.5 3B demonstrate up to $26\times$ and $28\times$ reduction in peak memory, enabling fine-tuning on resource-constrained devices.
