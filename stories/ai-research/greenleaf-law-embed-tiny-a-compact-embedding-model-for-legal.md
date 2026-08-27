---
title: "GreenLeaf Law Embed Tiny: A Compact Embedding Model for Legal Domain Retrieval"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24936"
authors: ["Surya Saka"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 57
guid: "oai:arXiv.org:2608.24936v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.24936v1 Announce Type: new Abstract: We present GreenLeaf Law Embed Tiny, a 0.6B parameter embedding model for legal domain retrieval. GreenLeaf-Tiny achieves 75.11% on the Massive Legal Embedding Benchmark (MLEB) and 64.38% on MTEB(Law, v1),demonstrating competitive performance among models under 1B parameters. Our approach combines a two-stage training pipeline that first distills knowledge from a larger teacher model into a compact student architecture, then applies domain-specific fine-tuning with hard negative mining; a carefully curated dataset of 3.4 million query-passage pairs, including 150,000 human-curated samples across diverse legal jurisdictions; and an efficient inference architecture supporting multiple quantization levels (BF16, INT8, binary) enabling deployment in resource-constrained environments. We provide detailed analysis of our training methodology, architectural choices, and comprehensive evaluation across legal retrieval tasks. Our results demonstrate that domain-specific training with high-quality data can improve performance for specialized domain applications
