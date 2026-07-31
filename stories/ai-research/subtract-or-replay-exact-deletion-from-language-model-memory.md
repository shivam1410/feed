---
title: "Subtract or Replay? Exact Deletion from Language-Model Memory"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27539"
authors: ["Vishwajith Ramesh"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.27539v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27539v1 Announce Type: new Abstract: Exact deletion from persistent language-model memory depends on how that memory represents a record. Addressable influence can be removed by algebraic decrement; influence transformed by later writes inside shared recurrent state requires rebuilding from before the write. We test this distinction in two pretrained models against explicit record-omitted references. First, we replace Gemma 3's global-attention layers with support-vector memory. After low-rank recovery at 1B, decrement and retained-key refit agree at the next-token output to median KL $5.4\times10^{-15}$ over 31 support-token deletions, with $+2.0\%$ perplexity relative to a matched fine-tune. A masked-refit proxy is indistinguishable from the never-ingested floor under elicitation, relearning, sampling, and LiRA attacks. At 4B and 12B, certificate ordering persists but utility cost rises to $11.2\%$ and $44.3\%$. Second, in a 48B Kimi Linear hybrid, additive writes admit a fixed decrement and diagonal decay a corrected one, whereas the delta rule makes $12$--$49\%$ of a record's contribution suffix-dependent. Checkpointed rewind-and-replay deletes real clinical records at contexts up to 18,842 tokens, matching never-ingested logits and all recurrent states bit for bit within a deterministic MLX implementation; replaying a correction provides exact amendment. Exact deletion is therefore a property of memory representation: subtract addressable records and replay entangled writes.
