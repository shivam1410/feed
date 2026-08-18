---
title: "Forward Pass Domain Adaptation (Without Cross-Layer Backpropagation)"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14563"
authors: ["Rivaan Patil, Simon Dennis, Hao Guo, Kevin Shabahang"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2608.14563v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14563v1 Announce Type: new Abstract: Forward-Pass-Only MLP training (FPO) adapts large language models without a backward pass through the model body, achieving 2.7--3.2x the throughput of standard fine-tuning at ~40% less peak training memory, while leaving off-domain benchmarks within seed-noise of baseline, a property that full-network fine-tuning does not reliably reproduce. FPO rests on a single empirical observation: at late layers of a transformer, the output-layer prediction error approximates the true gradient with cosine similarity 0.47--0.59 across six public models we survey. We introduce a two-minute diagnostic that quantifies this approximation per layer for any model, identifying where late-layer adaptation is viable. Informed by the diagnostic, FPO computes a single error signal at the output and applies it to each target layer. No signal is propagated between layers, and no autograd graph is constructed at any point. We evaluate FPO on three model families (OLMo-2-7B, Qwen3-8B, Falcon3-7B). Across all three, FPO produces in-domain perplexity improvement and leaves MMLU, ARC-Challenge, HellaSwag, and Winogrande within seed-noise of baseline. Localizing SFT to FPO's target layers to enter this regime is also feasible, but at 2.2x the wall-clock cost of FPO.
