---
title: "SHAPE: Coalition-Aware Expert Pruning for Sparse Mixture-of-Experts LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09886"
authors: ["Yuhao Zhang"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.09886v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09886v1 Announce Type: new Abstract: Sparse Mixture-of-Experts (MoE) large language models achieve strong quality with low per-token compute, yet their deployment is often limited by the memory wall: the full expert pool must remain resident to support token-dependent routing. Expert pruning is a direct remedy, but prior criteria typically score experts independently and overlook that MoE inference is inherently \emph{coalitional}, where outputs arise from routed top-$k$ expert combinations. We propose \textbf{SHAPE}, a task-driven pruning framework that explicitly models \emph{intra-layer} expert cooperation. SHAPE formulates routing traces on a small calibration set as an empirical cooperative game and assigns interaction-aware expert values via a Shapley-style attribution over observed top-$k$ coalitions, enabling the identification of experts that are essential for high-utility collaborations rather than merely frequent. To preserve MoE topology under a global pruning budget, SHAPE further introduces a \emph{quality-coverage} selection rule that retains, in each layer, the minimal expert subset covering an $\alpha$ fraction of non-negative Shapley mass, while using bisection to match a target keep rate. Experiments on three modern MoE backbones (Qwen3-30B-A3B, GPT-OSS-20B, and DeepSeek-V2-Lite) across diverse benchmarks show that SHAPE consistently improves robustness over global and layer-wise pruning variants, maintaining competitive accuracy under 20\% and 40\% expert pruning without additional training and delivering clear reductions in peak GPU memory footprint. The open-source code is available at https://github.com/Alizen-1009/Shapley-Moe.
