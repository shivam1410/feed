---
title: "MoRA: MoE Pruning via Router Bias Learning and Expert Approximation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00367"
authors: ["Yushuai Sun, Zikun Zhou, Lin Gao, Jun Yu, Wenjie Pei"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2610.00367v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Mixture-of-Experts (MoE) models enable parameter scaling with limited per-token computation by activating only a small subset of experts for each token, but deploying them still requires loading the complete expert pool into memory. Structured expert pruning can effectively reduce the memory usage by removing experts. However, existing pruning methods either use expert ranking criteria that are not well aligned with model performance or rely on effective expert subset searching that is computationally expensive. Moreover, these methods typically overlook the routing-behavior redundancy among the retained experts. In this paper, we propose MoE Pruning via Router Bias Learning and Expert Approximation (MoRA), a framework for structured MoE expert pruning. We introduce a learnable router bias for each expert and optimize these biases by minimizing the language-modeling loss and a routing-diversity regularizer. The learned router biases sharpen the routing probability distributions to identify experts critical to model performance while encouraging the selection of experts with diverse routing preferences. In addition, we introduce an expert approximation mechanism as a post-pruning enhancement. It leverages the remaining experts to approximate the outputs of pruned experts by affine transformation, further improving the performance of the pruned model. We evaluate MoRA on Qwen3-30B-A3B, DeepSeek-V2-Lite, and Moonlight-16B-A3B, removing 25\% and 50\% of the routed experts in each MoE layer. Extensive experiments on nine zero-shot benchmarks show that MoRA outperforms state-of-the-art pruning algorithms. Our code will be released.
