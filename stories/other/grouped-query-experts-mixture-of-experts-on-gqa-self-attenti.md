---
title: "Grouped Query Experts: Mixture-of-Experts on GQA Self-Attention"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20945"
authors: ["Vishesh Tripathi, Abhay Kumar"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20945v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20945v1 Announce Type: new Abstract: Self-attention is central to Transformer performance and is often the most expensive part of the Transformer at long context lengths because its pairwise token interactions scale quadratically with sequence length. Standard dense attention also applies the same set of attention heads to every token regardless of token difficulty or information content. This uniform activation can waste compute, especially as sequences grow longer and attention cost increases rapidly. We propose Grouped Query Experts (GQE), a mixture-of-experts layer on top of grouped-query attention (GQA). Within each GQA group, a router selects k query-head experts per token while all key-value (KV) heads remain dense and unchanged. Thus, GQE keeps the KV cache benefits of GQA and reduces only the active query-head computation. On a fixed 30B token budget at the 250M parameter scale, GQE matches the all-active GQA baseline in downstream accuracy while activating half the query heads per token.
