---
title: "CausalGate: Causal Importance Distillation for Transformer Module Pruning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22720"
authors: ["Kiran Nair, Smriti Regmi, Rodrigue Rizk"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.22720v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22720v1 Announce Type: new Abstract: Existing adaptive inference methods for Large Language Models rely on observational heuristics, such as hidden-state similarity or activation magnitudes, to drop redundant modules. However, these correlation-based metrics often fail to capture subtle, non-linear structural computations vital for semantic accuracy. We introduce CausalGate, an intervention-guided framework for compute-efficient transformer inference. During a calibration phase, CausalGate isolates individual Attention and MLP sub-layers, zeros out their respective outputs, and measures the exact semantic damage via the Kullback-Leibler divergence of the final logit distribution. To eliminate runtime routing overhead, this structural importance hierarchy is distilled into a global set of static, lightweight scalar gates using an Exponential Moving Average smoothing objective paired with a differentiable pairwise ranking loss. Evaluated on TinyLlama-1.1B, Qwen2.5-3B, and Llama-3.1-8B across language modeling and commonsense reasoning benchmarks, CausalGate consistently outperforms prominent dynamic routing and layer-skipping baselines, translating theoretical compute savings into concrete hardware latency reductions with zero operational overhead.
