---
title: "AttnFuse: A Composable DSL for Compiling Attentions to Fused GPU Kernels"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13612"
authors: ["Varun Kumar Dasoju, Tian Zhao"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13612v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13612v1 Announce Type: new Abstract: Modern AI systems are built on the Transformer architecture, whose core operation, attention, accounts for the majority of computation and memory cost. Researchers continually propose new attention variants to improve quality, efficiency, or context length, but each variant currently requires expert-written GPU code to run at usable speeds. PyTorch's recent flex\_attention lets researchers describe custom attention patterns in Python and compile them to fused kernels, but its design is limited to modifications applied after the central matrix multiplication, excluding Rotary Position Embedding (RoPE), the positional encoding used by every major LLM. We introduce AttnFuse, a small DSL for attention that makes pre-multiplication transformations like RoPE first-class operations. Researchers compose ten high-level building blocks to describe a variant, and AttnFuse's compiler emits a single fused GPU kernel for the entire computation. On an RTX 3090, AttnFuse achieves a 2.10$\times$ speedup over flex\_attention on the RoPE+causal pattern. On an H100, it runs a full Llama-3-8B training step within 5\% of PyTorch's hand-tuned backend. Our investigation reveals the Rotation Calculus: whether to fuse RoPE or apply it separately depends on the GPU's compute-to-bandwidth ratio, with a derived crossover that matches measurement. AttnFuse demonstrates that a small, attention-specific compiler can close the gap between flexible research code and production kernels.
