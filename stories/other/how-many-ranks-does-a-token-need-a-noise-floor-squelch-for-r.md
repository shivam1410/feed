---
title: "How Many Ranks Does a Token Need? A Noise-Floor Squelch for Rank-One LoRA Experts"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19033"
authors: ["Mei Okonkwo, Owen Castellanos, Ingrid Solberg, Yusuf Demirel"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19033v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Low-rank adaptation (LoRA) applies every rank-one component of its update to every token, and mixture-of-experts variants replace this with a learned router that activates a fixed number of components. We argue that the number of components a token needs is a detection question with a classical answer. A token's responses to the rank-one components of a trained LoRA consist of a few large values on a Gaussian noise floor whose width matches that of an untrained adapter, and the floor carries cross-talk rather than adaptation. We introduce SQUELCH, a router-free mixture of rank-one experts that (i) soft-thresholds each token's responses at a multiple of its own robust noise level, so the active rank varies per token; (ii) chooses that multiple for each module by Stein's unbiased risk estimate, so no rank budget is specified; and (iii) replaces the resulting marginal keep-or-drop decisions by one explaining-away step on the value Gram matrix, which suppresses redundant co-active components and recruits complementary ones. SQUELCH adds no trainable parameters to LoRA. We prove that the squelch is within a logarithmic factor of the oracle input-dependent allocation, that the selected threshold is risk-consistent, and that explaining away is a descent step toward the joint sparse code whose error is controlled by the coherence of co-active components. On commonsense reasoning, knowledge, math, code, and GLUE with LLaMA-3.1-8B, Qwen3, and DeBERTaV3, SQUELCH improves over LoRA by 2.2--3.2 points and over the strongest mixture baseline by 0.8--1.2 points while activating 8.6 of 32 components per token on average.
