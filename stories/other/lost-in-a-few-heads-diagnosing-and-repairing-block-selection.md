---
title: "Lost in a Few Heads: Diagnosing and Repairing Block Selection in Sparse Attention"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21917"
authors: ["Wenhe Zhang, Boxing Chen"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21917v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Sparse attention models read a few blocks of keys for every query at a fixed budget and can lose much of their long-context retrieval accuracy at that budget. We ask where this loss is made. Using exact attention mass selection at the shipped budget as an oracle, we show that the selector under-ranks the needle rather than running out of budget. We find attention heads that miss the needle by running a calibration probe that teacher-forces the answer and reads two quantities in every head. The first is the needle attention that the selector forfeits, and the second is the share of the answer's log-probability that fixing the head's selection restores, integrated along the path from the shipped selector to full attention. Four checkpoints of the InfLLM-V2 family and NOSA-8B lose multi-key retrieval in the same three blind heads, which attend to the needle while a mean-pooled key summary dilutes its single decisive token. Full attention in those heads or a 4-bit scorer that keeps the shipped budget recovers most of the loss without training. On MiniCPM4.1-8B at 64K, either fix lifts multi-key retrieval accuracy from 54.1 to 97.5%, level with full attention in every head. In production serving engines, full attention in those heads keeps 84 to 89% of the time to first token (TTFT) that sparse attention saves at 32K to 128K context length. Beyond the InfLLM-V2 selector lineage, one unified rule flags attention heads above a threshold swept on each checkpoint until they close most of the gap to full attention on calibration prompts. A similar small set of blind attention heads carry the loss for the SeerAttention-R gates, NSA, and DashAttention, whereas many such heads exist in MoBA. On Qwen3-8B with the SeerAttention-R gates, full attention in 18 of 288 key-value heads lifts multi-key retrieval accuracy from 29.8 to 97.7%.
