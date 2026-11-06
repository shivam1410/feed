---
title: "TriAttention: Unified Sparse Mixed-Precision Attention for Long-Context LLM Inference"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07256"
authors: ["Hanzhi Zhang, Qiao Zhang, Qinglei Cao, Heng Fan, Yan Huang, Kewei Sha, Yunhe Feng"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07256v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Sparsity and quantization reduce the cost of attention by skipping interactions and lowering the precision of those retained. However, useful interactions differ in their precision requirements: some tolerate low-precision scores while remaining sensitive to removal. We therefore introduce TriAttention, which assigns query-key (QK) tiles to skipping, 4-bit, or 8-bit computation, using 4-bit to retain quantization-tolerant interactions at lower cost. To represent compactly, we encode each head's computation regions with two diagonal-distance boundaries, keeping policy storage independent of context length. Offline calibration then evaluates candidate boundary pairs using normalized projected-output errors and complete-tile execution costs. Using these measurements, a model-wide allocator selects each head's boundaries to minimize calibration error under a shared computation budget. During prefill, the selected boundaries generate precision-grouped traversals for a fused kernel that skips omitted tiles and combines contributions from both QK precisions into one normalized attention output. The quantized keys and values prepared during prefill are then reused in a compressed key-value (KV) cache for decoding, reducing repeated reads of prompt data. Experiments show that TriAttention achieves end-to-end generation speedups of up to 7.88x over the Torch attention and 2.65x over the BF16 baseline. Meanwhile, TriAttention maintains quality comparable to the original models on general-purpose and long-context tasks. These results show how a compact retention-and-precision policy translates local sensitivities into attention computation and repeated KV-cache access. The implementation is https://github.com/HanzhiZhang-Ulrica/TriAttention.
