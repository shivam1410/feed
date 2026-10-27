---
title: "Learning Structured Sparsity for Large Models: Bridging Model Compressibility and Efficient Inference"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31897"
authors: ["Tianxiang Xia, Kai Lion, Niao He, Michael Muehlebach, Melanie Zeilinger, Hao Ma"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31897v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Scaling laws continue to reward increases in model scale, while the resulting computational and memory demands drive greater reliance on cloud infrastructure for inference. Yet unreliable network connectivity, communication delays, and privacy requirements can make such reliance impractical, motivating local execution on edge devices. Local deployment requires models to fit within limited memory and execute efficiently with the available computational resources. Recent work has shown that learning sparse-plus-low-rank representations enables elastic compression of a single checkpoint to multiple memory budgets. However, fewer parameters do not necessarily translate into faster inference. Indexing overhead and irregular memory access in unstructured sparse components can offset computational savings. To address this critical deployment barrier, we introduce S-SALAAD, a unified framework that jointly learns the model weights and their low-rank and structured sparse components during training. The framework supports a family of hardware-compatible structured sparsity patterns. It couples this structure learning with budget-aware compression and dedicated CPU and GPU kernels that exploit the learned structure for acceleration, enabling efficient inference from a single checkpoint across memory budgets. Experiments on Llama2 and Qwen3 models, covering both pretraining and distillation, show that S-SALAAD advances the empirical Pareto frontier in perplexity, memory, and inference latency across multiple hardware platforms relative to the evaluated baselines. These results show that structured learning can translate elastic compressibility into reduced memory requirements and lower inference latency, enabling practical deployment of large models on edge devices.
