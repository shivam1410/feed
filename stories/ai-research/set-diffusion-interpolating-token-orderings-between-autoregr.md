---
title: "Set Diffusion: Interpolating Token Orderings Between Autoregression and Diffusion for Fast and Flexible Decoding"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01775"
authors: ["Marianne Arriola, Volodymyr Kuleshov"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.01775v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01775v1 Announce Type: new Abstract: Discrete diffusion models have steadily improved in quality relative to autoregressive (AR) models. However, these models are normally constrained to fixed-length generation and do not support key-value (KV) caching. Block diffusion partially bridges diffusion and AR by generating token blocks left-to-right, but its fixed-size sequential blocks limit decoding flexibility and parallelism. Here, we present a new class of language models, set diffusion, comprised of (i) a likelihood parameterization that factorizes over flexible-position, flexible-length token sets and (ii) a set-causal diffusion architecture that supports KV cache updates after every inference step. By factorizing over token sets instead of fixed-size blocks, tokens can be decoded in arbitrarily-ordered sets, including sliding-window sets, enabling faster inference and support for any-order decoding. Set diffusion achieves better speed-quality tradeoffs on mathematical reasoning, summarization, and unconditional generation compared to prior diffusion language models while offering stronger infilling performance than block diffusion. We provide the code, along with the model weights and blog post on the project page: https://m-arriola.com/setdlms/
