---
title: "Beyond Sparse Weights: When Is Attention Compressible?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21541"
authors: ["Chiwun Yang, Xiaoyu Li"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.21541v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21541v1 Announce Type: new Abstract: KV-cache compression is often justified by attention maps with a few large weights. This is incomplete: large weights may not contain most of the mass, omitted values can cancel, and preserving the attention output may not preserve the task. We separate these questions. Global score gaps -- not threshold counts -- determine how many tokens are needed to retain a target mass. For a realized row, the weighted sum of omitted values is the exact missing statistic. A controlled retrieval--aggregation model explains when truncation helps and when it hurts. These results motivate CertKV, a training-free compressor that reserves one tail-summary slot per head and allocates the rest by value dispersion. Under matched budgets, CertKV is top-two in seven of nine LongBench-v2 settings, remains in the leading compressed tier on 128K RULER, and realizes a ten-fold cache budget in a packed Llama prototype. Compressibility depends on the mass, values, future queries, and task -- not on a sparse-looking map alone.
