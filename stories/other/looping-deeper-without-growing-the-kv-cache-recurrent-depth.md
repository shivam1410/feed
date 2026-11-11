---
title: "Looping Deeper Without Growing the KV Cache: Recurrent Depth for Causal Encoder-Decoders"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13378"
authors: ["Jiaqi Leng, Minshen Zhang, Zhaofeng Sun, Yu-Yang Qian, Peng Zhao, Hao Zhang"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13378v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Looped language models deepen computation without adding parameters, yet caching full-context key-value (KV) states across layers and rounds severely bounds serving batch size. We design a looped causal encoder-decoder (CED) that achieves recurrent depth with zero round-wise KV growth, addressing where and how to loop an asymmetric stack in which only sparse encoder layers generate global KV. We find that recurrence must be placed in the encoder to iteratively refine global KV representations rather than re-reading static decoder projections, which both drives language-modeling gains and preserves long-context scaling. Furthermore, training the encoder loop under stochastic recurrence depth induces a fixed-point equilibrium where every round losslessly shares the last round's KV cache. Compounding cross-layer and cross-round KV sharing, the resulting Looped CED matches an unlooped CED's minimal memory footprint and recovers 86-93% of a looped Transformer's gain with 1/6 of its global KV. To test serving at production scale, we loop the 552B-parameter DeepSeek-V4.1-Flash for 8 rounds on one 4xGB200 node: with per-layer and per-round KV the loop cannot fit a single 128K-token request, whereas Looped CED holds 36.8x less KV per token, fits 38 such requests (as many as the unlooped model), and serves 3.6x higher throughput on 8K-token prompts.
