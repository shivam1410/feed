---
title: "Algorithmic Scratchpads and Curriculum Staging for Arithmetic Reasoning in Tiny Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09003"
authors: ["Sourabh Kasliwal"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2610.09003v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Autoregressive Large Language Models (LLMs) frequently struggle with deterministic multi-step algorithmic tasks such as multi-digit multiplication and long division. In this paper, we investigate the mechanics of multi-step arithmetic in compact "Tiny" Transformers (~10.6M non-embedding parameters, 49.3M total) trained on synthetic data across four basic operations (+, -, *, /) unrolled as step-by-step scratchpads. First, we establish the necessary training foundations: (1) dataloader sequence padding creates an 83% gradient starvation artifact that collapses accuracy from 40% to 1%, remediated via continuous sequence packing; (2) linguistic pretraining is an essential prerequisite (<= 2.0% without it); and (3) modern architectural primitives (RoPE, RMSNorm, SwiGLU) and Sparse Mixture of Experts (MoE) substantially improve additive reasoning over baseline GPT-2. Second, we demonstrate that algorithmic scratchpad formulation directly dictates success. Introducing a deterministic Digit-by-Digit Long Division scratchpad within a 4-stage Hierarchical Developmental Curriculum dramatically elevates single-digit division from 4.0% to 86.7% accuracy on a 4,000-problem held-out benchmark. In contrast, multi-digit multiplication remained challenging: detailed error analysis revealed that while the model correctly computed single-digit sub-products and place-value zeros, our FOIL scratchpad failed because it forced a simultaneous summation of up to nine multi-digit terms in a single step without pairwise intermediate accumulation. Finally, we identify two key boundaries: performance collapses to 0.00% on unseen 4-digit operands, and unbuffered training induces catastrophic forgetting, collapsing division accuracy from 86.7% down to 0.00%.
