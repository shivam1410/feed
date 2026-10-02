---
title: "Fast Polynomial Transcendentals for LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00049"
authors: ["Robert Hu"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2610.00049v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Graphics processing unit (GPU) generations scale matrix, special-function, and memory pipelines at different rates, so kernel bottlenecks move as hardware evolves. FlashAttention-4 exposed this imbalance inside attention on NVIDIA Blackwell. We test whether short polynomial programs can accelerate other special-function-unit (SFU) operations in large language models (LLMs). We first compare native PyTorch evaluation with packed fused multiply--add (FMA) programs in an isolated IEEE binary16 (FP16) sweep spanning L2-resident and high-bandwidth-memory (HBM)-resident working sets. We then replace native sigmoid, tanh, and sigmoid linear unit (SiLU) with degree-3 or degree-4 bfloat16 (BF16) programs in four GB200 integration tasks: dense SiLU, tanh-softcapped attention, sigmoid attention, and routed-expert Swish-gated linear unit (SwiGLU). The programs combine analytical symmetry, target-format rounding, and packed arithmetic inside consuming kernels. The isolated paths improve by 1.19--2.19x in L2 and 1.00--1.70x in HBM. The dense-SiLU, tanh-softcapped-attention, and routed-expert substitutions improve complete training-step throughput by 2.7\%, 2.9\%, and 8.0\%, respectively. The sigmoid-attention substitution improves complete-attention forward by 7.4\% and the complete GPU step by 0.3\%. Same-checkpoint open-weight ablations and one paired pre-training comparison per task extend the evaluation to model behavior. At common horizons near 100 billion tokens, the final smoothed training-loss differences (polynomial minus native) range from $-0.107$ to $+0.079$ across the four tasks.
