---
title: "Trust the Mass: Forced Weights in KV-Cache Eviction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25230"
authors: ["Jack Shi, Jerry Gu"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2608.25230v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25230v1 Announce Type: new Abstract: Every deployed sparse-attention or KV-cache-eviction rule keeps a subset of the keys, discards the rest, and renormalizes the attention weights over the kept set. Enumerating the exact best subset under that constraint on $168{,}192$ attention rows from five models shows that keeping the largest weights is already near-optimal, since the best subset closes only a median $2$ to $5\%$ of the remaining gap to full attention. If selection closes this little, published margins between eviction methods must come from elsewhere, so we measure the bytes each method holds. In the shared evaluation pipeline, the strongest query-agnostic methods hold the full cache because their per-head selections are stored as masks, and only ragged per-head storage frees that memory. Enforcing a nominal budget on one fixed selection costs $14$ to $62$ benchmark points. We trace an $87.6$-point retrieval margin to rankings computed while the question is visible. ContourKV, a training-free allocator built from the dropped-mass statistic, wins $93$ of $160$ paired comparisons against that state of the art and loses $22$ at the byte count of the budget-enforcing baselines, and it ties the strongest of them.
