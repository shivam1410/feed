---
title: "Does RoPE Prevent or Degrade Retrieval Heads? A Mechanistic Analysis Across Model Families"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21249"
authors: ["Cengizhan Bayram"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21249v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21249v1 Announce Type: new Abstract: Retrieval heads, attention heads that copy information from earlier context to the current position, have been proposed as the mechanistic substrate for long-context recall. Rotary position embeddings (RoPE) rotate queries and keys by frequencies decaying with a base hyperparameter theta, and a natural hypothesis is that this rotation either prevents retrieval heads from forming or degrades their function. We test both across four open-weight 7-8B models spanning multi-head and grouped-query attention and a 100x range of theta, using paired-seed needle-in-a-haystack tests, layer-clustered permutation, and causal head-masking. (i) Retrieval heads are causally necessary: masking the 87 detected heads in OLMo-2 collapses recall from 1.00 to 0.00, while masking matched random heads has no effect; this replicates in Qwen. (ii) Higher theta does not reduce retrieval-head count (LLaMA-3.1 at theta=500K has 47 heads vs LLaMA-2 at theta=10K with 42), refuting the prevention hypothesis. (iii) The norm-utility relation is family-specific and significant in opposite directions (Qwen d=-0.49, OLMo d=+0.50, both significant; LLaMA null); since OLMo and LLaMA-3.1 share theta=500K yet differ, the effect is not theta-driven. (iv) Building on Chiang and Yogatama (2025), a controlled patch shows that zeroing the lowest-frequency RoPE dimensions of retrieval heads degrades recall dose-dependently (1.00 to 0.18 when 32 of 128 dimensions are zeroed, vs 0.98 for random dimensions); the effect is head-specific and task-specific. The causal variable is RoPE frequency, not norm-utility. The direction holds in all five models patched (OLMo-2, Qwen2.5-7B/14B, Gemma-2, Mistral) across four lineages and two scales. We do not claim cross-model magnitude. Code and a paired-seed harness are released.
