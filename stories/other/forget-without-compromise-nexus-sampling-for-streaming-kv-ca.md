---
title: "Forget Without Compromise: Nexus Sampling for Streaming KV-Cache Eviction Under Fixed Budgets"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23961"
authors: ["Duc Duong, Hoang Anh Duy Le, Jianwen Xie, Anshumali Shrivastava, Zhaozhuo Xu"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23961v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23961v1 Announce Type: new Abstract: Long-context and agentic LLM workloads push the KV cache past any fixed memory budget, forcing the inference stack to permanently evict tokens at every step of a continuous-inference stream. Existing methods all share the same template, a per-step direct-attention score followed by deterministic top-$K$ selection, which converts a single below-cutoff step into an irreversible verdict and permanently erases any subtly important token that direct attention cannot single out from noise. To address this challenge, we propose Nexus Sampling, a training-free eviction method that pairs Nexus scoring, an iterative walk over direct attention that surfaces bridge tokens, with weighted reservoir sampling, which retains tokens with inclusion probability in place of deterministic top-$K$. Theoretically, we show that Nexus Sampling dominates deterministic top-$K$ in long-run survival of subtly important tokens. Empirically, at 80% KV cache eviction, Nexus Sampling matches dense attention within 1% on LongBench while outperforming top-$K$ baselines on retrieval-heavy tasks, with up to 10x smaller per-sequence cache memory.
