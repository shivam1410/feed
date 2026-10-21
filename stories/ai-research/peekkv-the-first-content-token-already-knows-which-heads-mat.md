---
title: "PeekKV: The First Content Token Already Knows Which Heads Matter"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23939"
authors: ["Minyoung Go, Yongjun Park"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.23939v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

The size of the KV cache grows linearly with context length, making it a major memory bottleneck in LLM serving. Motivated by recent progress in identifying the functional roles of attention heads, a growing body of work compresses the KV cache non-uniformly across heads. Existing methods either fix the important heads via offline profiling or select them using attention signals from the prefill stage. In both cases, however, accuracy fluctuates substantially across workloads. While investigating the cause of this instability, we find that the active heads shift between the prefill and decode stages even within a single input. Along the decode path, by contrast, the activehead composition remains stable across content tokens once format tokens are filtered out. Based on this observation, we propose PeekKV. PeekKV observes a single content token immediately after prefill - a one-token peek - to jointly obtain head-group scores and token-importance scores. Guided by these scores, PeekKV allocates KV cache budgets to head groups in proportion to their group scores and retains only the top-scoring tokens within each budget. PeekKV requires no offline profiling or training and thus applies directly to unseen workloads and new models. Across four public benchmarks, PeekKV achieves the highest accuracy in more than half of the per-model comparisons against state-of-the-art methods, and stays closest to the full-cache accuracy on RULER and LongBench. On Llama-3.1-8B-Instruct, PeekKV retains 95.7% of the full-cache accuracy at a 10% memory budget on RULER with 16K contexts and 95.9% at a 1.5% budget on LongBench.
