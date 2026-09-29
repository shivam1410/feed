---
title: "KernelZero: Co-Evolving Proposer and Coder for Continuously Improved GPU Kernel Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.33074"
authors: ["Changxin Ke", "Rui Zhang", "Zixiang Fang", "Zhenghong Li", "Yuanbo Wen", "Jiashuo Shen", "Shuo Wang", "Jiaming Guo", "Ling Li", "Qi Guo", "Yunji Chen"]
date: "2026-09-26T20:00:00.000Z"
score: 70
guid: "2609.33074"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.33074.png"
generated: "2026-09-29T19:09:35+05:30"
---

High-performance GPU kernels are essential to modern machine learning systems, yet automatically generating kernels that are both correct and efficient remains challenging. Existing LLM-based approaches face two major limitations: the scarcity of high-quality training data aligned with the model's current capabilities, and the inherent trade-off between kernel correctness and performance. To address these challenges, we propose KernelZero, a co-evolution framework that continuously improves GPU kernel generation through two specialized models: a Proposer that generates Torch modules from API sets and a Coder that translates them into CUDA or Triton kernels. KernelZero uses a frontier-driven module generation mechanism to continuously produce capability-aligned training modules based on the Coder's current weaknesses. It further introduces Correctness-Aware Group Relative Policy Optimization (CA-GRPO), which optimizes performance only after correctness becomes sufficiently reliable. By alternating the optimization of the Proposer and Coder, KernelZero forms an automatic curriculum that enables targeted and training-efficient capability improvement. Empirically, KernelZero-7B surpasses Claude-4.5-Sonnet on CUDA and DeepSeek-V4-Pro on Triton. On KernelBench Level 1 and 2, it achieves CUDA pass@1 scores of 75.8% and 69.6%, respectively, with pass@10 reaching 100% and 97%. On Triton, it achieves pass@1 scores of 77.2% and 72.5%, respectively.
