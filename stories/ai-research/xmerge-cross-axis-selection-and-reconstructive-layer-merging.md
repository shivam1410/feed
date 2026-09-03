---
title: "XMerge: Cross-Axis Selection and Reconstructive Layer Merging for LLM Depth Compression"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.02083"
authors: ["Jundong Hu, Shekar Ramachandran"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.02083v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.02083v1 Announce Type: new Abstract: Removing complete transformer layers preserves a standard serving architecture, but existing depth-compression methods can lose substantial quality, and the loss varies unpredictably across models. We introduce XMerge, a post-training method with two components. Cross-axis selection identifies a block with low relative-magnitude and angular hidden-state change, and local boundary reconstruction re-fits the adjacent surviving block to match the original two-block output. XMerge uses no task labels or end-to-end fine-tuning, and it introduces neither architectural changes nor additional inference-time parameters. Across seven Llama and Qwen backbones (0.5B-8B), five published baselines, and three layer-reduction levels, its advantage over baselines is largest at the most aggressive removal: at k=4 it ranks first on six of seven backbones on CORE (a 22-task aggregate) and, separately, on six of seven on MMLU (five of seven on both at once), while avoiding the large perplexity increases of several competing operators. In a task-level bootstrap, the 95% confidence intervals for the three largest CORE margins exclude zero; the remaining margins are consistent with ties. Across the 14 (model, regime) cells it is also the only evaluated operator that never collapses, ranking top-2 in both zero-shot and in-context regimes; on a first calibration probe (one backbone) it is the best-calibrated operator. Ablations show that local reconstruction provides most of the gain, while cross-axis fusion helps when the two selection axes disagree. The additional construction cost is recovered through per-token decode savings after roughly tens of thousands of requests.
