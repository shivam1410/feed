---
title: "AttSVD:Prompt-Adaptive Low-Rank KV Cache Compression via Attention-Guided SVD"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.06927"
authors: ["Sara Abdali, Jongwoo Ko, Pashmina Cameron"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2610.06927v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

The key-value (KV) cache of autoregressive transformers grows linearly with context length and dominates memory at long context. Most training-free remedies evict low-importance tokens, an irreversible choice along the sequence axis. We instead keep every token and store it more cheaply along the "feature" axis. We therefore propose AttSVD, a new "interpretable" low-rank compression whose basis is derived from each prompt's own attention geometry: an online, per-prompt truncated SVD that keeps only the directions attention actually reads, cutting persistent per-head KV memory in proportion to the retained rank. We propose two decode-time caching strategies, accumulating and streaming, for short and long generation regimes. Furthermore, we propose two refinements that make compression adaptive. A per-matrix energy rule sizes the logit space and the attention mass independently. An attention-aware basis truncates only in the spaces attention actually reads, preserving both the attention logits and the attention output. The same factors also provide free, per-head interpretability insights into the effective rank and the geometry attention consumes. Across multiple models, on both an agentic benchmark and the full LongBench suite AttSVD stays on par with the dense cache while using up to 50% of the KV-cache memory.
