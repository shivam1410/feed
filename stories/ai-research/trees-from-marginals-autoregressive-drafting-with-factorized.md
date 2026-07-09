---
title: "Trees from Marginals: Autoregressive drafting with factorized priors"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06763"
authors: ["Yuma Oda, Ryan Mathieu, Roman Knyazhitskiy, Artur Chakhvadze"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.06763v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06763v1 Announce Type: new Abstract: Speculative decoding greatly increases the interactivity of autoregressive language models by trading off computation for extra tokens generated in a single forward pass. Factorized draft models are especially efficient because they predict future-token marginals in parallel, but their independence assumption causes acceptance rates to degrade sharply as the speculative budget grows. We analyze this limitation and introduce Weaver, a lightweight autoregressive adapter that constructs proposal trees from the top-K marginals of a factorized drafter. Weaver restores conditional dependencies between proposed tokens while avoiding a full-vocabulary projection. To support fast verification for models with Gated Delta Net layers, we derive a rollback-free tree-verification algorithm and implement optimized CUDA kernels in SGLang. By combining these model and systems contributions we achieve a 4.37-fold speedup over autoregressive decoding, and outperform a highly optimized DFlash baseline by 24.7%.
