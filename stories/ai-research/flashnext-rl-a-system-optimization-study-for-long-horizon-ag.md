---
title: "FlashNext-RL: A System Optimization Study for Long-Horizon Agentic RL of Qwen3.8-Flash-Next"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28998"
authors: ["Zhewei Yao, Yuxiong He"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.28998v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Long-horizon agentic reinforcement learning (RL) requires both efficient rollout generation and training on long sequences. However, the memory requirements and model-specific operators of Qwen3.8-Flash-Next make this difficult with existing open-source implementations. To resolve these limitations, we introduce FlashNext-RL, a model-specific RL training optimization framework based on prime-rl, with vLLM for software engineering (SWE) rollout generation. Our main focus is BF16 training of the full 48-layer model on a single 8xB200 node, with the first two layers, the n-gram table, the sparse-attention indexer and the multi-token prediction head frozen. We optimize host offload, gradient accumulation and the kernels for mixture-of-experts, sparse attention and the gated residual stream. In the full-model development study, non-padding training throughput increases from approximately 395 tokens/s/GPU in the initial 32K-token configuration to 4,438 tokens/s/GPU in the optimized 131K-token configuration, with hardware matmul throughput (aka without considering the cost of attention components) increasing from approximately 20 to 213 TFLOPs/GPU. A controlled cumulative study on an 8-layer model further quantifies the contributions of individual optimizations. Together with three inference nodes, the system supports a live SWE RL run with a target batch of 1,024 trainable rollouts and a 131,072-token context limit. Over steps 5-15, an iteration takes 22.4 minutes on average, with bounded entropy and trainer-sampler mismatch KL. These results highlight the importance of tailoring RL training to the model's architecture, memory layout and kernel requirements, rather than relying only on general-purpose RL infrastructure.
