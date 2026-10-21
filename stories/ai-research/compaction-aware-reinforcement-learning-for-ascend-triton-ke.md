---
title: "Compaction-Aware Reinforcement Learning For Ascend Triton Kernel Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23950"
authors: ["Chuansai Zhou, Yanlin Liu, Bingning Huang, Shidi Xi, Chao Huang, Boxing Chen, Mingming Zhu, Guanghuan Fang, Ben Feng, Zongzuo Wang"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.23950v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Automatically generating high-performance kernels with LLM-based agents promises substantial gains in development efficiency, but two obstacles remain. First, while increasing multi-turn interaction with execution environments is crucial for refining generation quality, continuous context accumulation rapidly exceeds the model's effective context window. Second, training long-horizon tasks via GRPO inherently incurs sparse rewards due to its reliance on terminal outcome evaluation, severely hindering step-level credit assignment; To address these obstacles, we propose ATRL (Ascend Triton Reinforcement Learning), a post-training method that refines GRPO into a compaction-aware, segment-level objective for long-horizon kernel generation. We also design a lightweight agent harness providing cascaded compilation, correctness, and profiling feedback, alongside an Ascend-specific knowledge base injected during agentic RL training and evaluation to compensate for the base model's missing platform expertise. Evaluations on NPUKernelBench and KernelBench, both executed on Ascend hardware, show that ATRL consistently surpasses all baselines, including GRPO, in both correctness and speedup.
