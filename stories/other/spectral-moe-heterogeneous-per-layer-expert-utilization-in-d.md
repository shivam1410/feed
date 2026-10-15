---
title: "Spectral-MoE: Heterogeneous Per-Layer Expert Utilization in Dense-to-MoE Conversion"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19232"
authors: ["Zachary Broveak, Christian Kubicka, Thierry Tambe"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19232v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Large language models impose substantial memory demands and arithmetic costs during inference. Dense-to-mixture-of-experts (MoE) conversion is a model optimization technique that aims to reduce these arithmetic costs. Dense-to-MoE conversion partitions pretrained feed-forward network (FFN) neurons into experts and selects a subset for each token. Leading methods fall into two categories: analytic methods produce a converted model quickly using heuristics, while learning methods produce a model much more slowly by optimizing via gradients. Both approaches, however, fix the same active expert count, or "utilization," at every layer. We introduce Spectral-MoE, which learns to allocate a utilization budget heterogeneously across layers. Its name draws a metaphor between separating a dense FFN into experts and separating a light beam into its spectrum. Spectral-MoE consists of two distinct approaches: a static approach that uses a single per-layer scalar which is shared across tokens, and a dynamic approach which emits a per-token schedule. We demonstrate that both allocators improve performance over uniform on both the analytic-based and learning-based SOTA dense-to-MoE methods. At 25% FFN utilization, dynamic allocation reduces WikiText-2 perplexity relative to uniform by 1.04, 2.96, and 2.71 points on the learned base for Llama-2-7B, Llama-3-8B, and Qwen2.5-7B, respectively. The corresponding reductions on the analytic base are 2.45, 6.26, and 2.17 points. On the learned base, dynamic allocation improves six-task mean accuracy over uniform by an average of 1.5, 4.2, and 3.6 percentage points across the three models at FFN utilizations of 12.5%, 25%, and 50%, respectively. These results establish per-layer expert utilization as a novel optimization axis in dense-to-MoE conversion.
