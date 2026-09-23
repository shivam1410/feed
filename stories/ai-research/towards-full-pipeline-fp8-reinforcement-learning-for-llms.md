---
title: "Towards Full Pipeline FP8 Reinforcement Learning for LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.22870"
authors: ["Fanchao Chen", "Ziheng Jiang", "Ziyun Wei", "Zheng Zhong", "Du Li", "Chi Zhang", "Haibin Lin", "Shivaram Venkataraman"]
date: "2026-09-18T20:00:00.000Z"
score: 60
guid: "2609.22870"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.22870.png"
generated: "2026-09-23T19:07:00+05:30"
---

Reinforcement learning (RL) has become a key technique for improving the reasoning and agentic abilities of large language models (LLMs). Although FP8 quantization can accelerate RL training, maintaining stability throughout an FP8 RL pipeline remains challenging. While previous works have focused on resolving train-inference mismatches using correction techniques like TIS, we reveal that full-pipeline FP8 RL still suffers from severe training instability, manifesting as anomalous mid-training entropy surges and garbled outputs. We trace this instability to a previously overlooked cause: compounded FP8 quantization noise distorts the importance ratio, disproportionately pushing negative-advantage tokens outside the trust region and erroneously zeroing out their gradients. As a result, pathological outputs are not properly penalized and accumulate over the course of training. To address this, we propose Calibrated Clipping, a dynamic method that aligns the FP8 clipping bounds with high-precision BF16 distributions by matching the lower-bound clipping quantile and rebalancing the upper bound accordingly. Extensive experiments across GRPO and DAPO algorithms, model scales from 8B to 32B, and multiple FP8 scaling granularities demonstrate that our approach successfully eliminates entropy surges and restores performance comparable to the BF16 baseline.
