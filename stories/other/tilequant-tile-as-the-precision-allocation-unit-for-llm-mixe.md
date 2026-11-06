---
title: "TileQuant: Tile as the Precision-Allocation Unit for LLM Mixed-Precision Post-Training Quantization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07217"
authors: ["Hanzhi Zhang, Qiao Zhang, Qinglei Cao, Heng Fan, Yan Huang, Kewei Sha, Yunhe Feng"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07217v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Post-training quantization (PTQ) reduces large language model (LLM) deployment costs, but preserving quality requires accounting for uneven weight sensitivity. Uniform PTQ uses one weight bit-width, importance-aware PTQ adjusts scales or reconstructs weights within that width, and column-wise mixed precision retains selected columns at higher precision. However, sensitivity varies within columns, so whole-column retention also protects less sensitive weights, while runtime outlier detection adds decoding overhead. We therefore introduce TileQuant, a training-free framework that assigns precision to hardware-aligned 2D weight tiles. Offline calibration provides input-activation-aware scoring from forward statistics for lower calibration cost and gradient-informed scoring from loss sensitivity for stronger quality preservation. Within each projection's retention budget, the highest-scoring tiles remain at 16-bit and the rest use 8-bit. The resulting map guides reconstruction into compact weight buffers, which the kernel reuses for native integer and 16-bit computation with local accumulation to reduce memory traffic. Experiments show that TileQuant reaches 2.66x the original model's generation throughput. Across language modeling, reasoning, long-context retrieval, and question answering, it preserves quality and surpasses quantized and original models on multiple tasks. These results support selecting precision units that capture local sensitivity while enabling efficient hardware execution. The implementation is: https://github.com/HanzhiZhang-Ulrica/TileQuant
