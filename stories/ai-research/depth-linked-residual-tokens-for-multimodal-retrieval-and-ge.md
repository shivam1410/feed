---
title: "Depth-Linked Residual Tokens for Multimodal Retrieval and Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.26752"
authors: ["Jiangfan Zhang, Wentao Bao, Xian Wu, Xiangjun Fan, Jianpeng Cheng, Jun Xiao"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.26752v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Iterative architectures such as looped language models improve parameter efficiency and reasoning capacity of transformers, yet their sequential backbone iterations introduce substantial computational latency. Conversely, parallelizable learnable special tokens (such as the register tokens in Vision Transformer) enable efficient single-pass inference, but often suffer from the absence of sequential refinement and exhibit redundant representations across tokens. To address these challenges, we introduce Depth-Linked Residual Tokens (DepThink), an efficient framework designed for multimodal retrieval and generation. Operating within a single pre-filling forward pass, DepThink appends a sequence of K learnable residual tokens whose hidden states are coupled through a lightweight, learnable residual recurrence. This mechanism enables each residual token to progressively capture complementary information missed by preceding tokens. Theoretically, we prove that DepThink provides strictly expanded geometric directional reachability over standard learnable tokens and guarantees a provable one-step descent advantage. We evaluate DepThink across multimodal retrieval and generation tasks. DepThink consistently outperforms learnable-token baselines and matches or exceeds looped architectures across dense (2B, 8B) and sparse mixture-of-experts (30B-A3B) backbones under both LoRA and full-parameter fine-tuning, while accelerating training by up to 11.9 and inference by 4.3 over looped architectures.
