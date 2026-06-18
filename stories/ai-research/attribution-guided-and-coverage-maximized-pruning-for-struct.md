---
title: "Attribution-Guided and Coverage-Maximized Pruning for Structural MoE Compression"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18304"
authors: ["Yifu Ding, Jiacheng Wang, Ge Yang, Yongcheng Jing, Jinyang Guo, Xianglong Liu, Dacheng Tao"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.18304v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18304v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) models scale compute efficiently, yet remain expensive to deploy due to their substantial memory footprint and inference overhead. Prior compression methods mainly operate at the expert level, either removing entire experts or ranking experts by coarse-grained importance scores. However, such expert-wise decisions are often too coarse to capture fine-grained redundancy, leading to misallocated pruning budgets and limited compression. To address this problem, we observe that information within MoE experts is highly concentrated in a small subset of channels, leaving substantial redundancy even in experts deemed important. Based on this observation, we propose a structural pruning framework tailored for MoE models. Our method reformulates prune-ratio allocation as a channel-score coverage maximization problem and solves it efficiently using an attribution-based approximation. Experiments on DeepSeek and Qwen MoE models show that our method preserves model accuracy under 50% or 25% structured pruning when combined with 4-bit quantization. On Qwen3-30B-A3B, our approach reduces memory footprint by 5.27$\times$ and consistently outperforms state-of-the-art baselines across diverse benchmarks.
