---
title: "FAMPWQ: Fisher Information-based Adaptive Mixed Precision Weight Quantization for Effective LLM Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24945"
authors: ["Gongwei Lee, Ji Liu, Juncheng Jia, Ji Wu"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.24945v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.24945v1 Announce Type: new Abstract: Recent years have witnessed remarkable achievements of Large Language Models (LLMs) in multiple domains, while the excessive resource requirements of LLMs hinder the deployment on resource-constrained devices. Although model quantization stands out as an effective approach, conventional quantization approaches typically incur severe performance degradation due to uniform bit-width or simple heuristic sensitivity evaluation. In this paper, we propose a novel Fisher information-based Adaptive Mixed Precision Weight Quantization approach, i.e., FAMPWQ, which performs layer-adaptive weight quantization for effective LLM inference on commodity GPUs. First, we propose a system model with a novel Fisher information metric to measure the layer-wise sensitivity to quantization. Second, we propose a reinforcement learning-based bit-width allocator in FAMPWQ, which generates an adaptive bit-width allocation strategy based on the Fisher information sensitivity metric. Extensive experiments on 7 models and 5 benchmarks demonstrate that FAMPWQ significantly outperforms 7 baseline approaches in terms of PPL (up to 3.39 smaller), accuracy (up to 6.87% higher), and LLM-as-a-judge comparison (up to 76% win rate).
