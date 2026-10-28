---
title: "Layerwise Repacking: Variable-Length Hybrid-Attention Training without an Extra Redistribution Pass"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.35989"
authors: ["Jiahao Zhang, Junwei Feng, Dongliang Huang, Xiaoling Zhou, Yiqiao Liao, Chengru Song"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.35989v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Variable-length training creates conflicting parallelism requirements across the layers of a hybrid-attention model. The longest samples require wide sequence-parallel (SP) groups of 16 or 32 ranks for full attention, whose cost grows quadratically with sequence length. Sparse-attention layers, dominated by near-linear MoE work, can instead balance most evaluated workloads within node-local SP8 groups. Reusing the wide groups for these layers pushes their all-to-all communication across nodes, where the observed effective rate is 7.0x lower. Yet switching to smaller groups changes which ranks own each sample; a separate redistribution at every full-sparse boundary would introduce another data transfer. Layerwise Repacking keeps each SP16/32 parent for full attention and repacks its samples into node-local sparse children at SP{1, 2, 4, 8}, where hidden states persist between full layers. The layout change rides on the two existing full-layer Ulysses sites: at each, one variable-size all-to-all performs both the head exchange and the sample repacking, so no redistribution pass is added. Because the balance the children can reach depends on which samples share a parent, an auxiliary parent solver rebalances parent membership before the children are formed. On all 22 steps with SP16/32 parents among the first 200 training steps of a 1F3S hybrid-attention model (one full-attention layer per three sparse-attention layers), repacking alone reduces the mean end-to-end time by 5.95% and raises model FLOPs utilization (MFU) by 3.75 percentage points over the baseline with repacking disabled; with the improved solver, end-to-end time falls by 7.61% and MFU rises by 4.83 percentage points.
