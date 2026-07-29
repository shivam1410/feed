---
title: "Emergent Latent-State Computation under Stochastic Volatility"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25459"
authors: ["Xiaoyu Huang, Lulu Wang"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.25459v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25459v1 Announce Type: new Abstract: Mechanistic interpretability has largely focused on language models and deterministic toy tasks. Much less is known about how sequence models internally represent latent stochastic dynamics under noisy, partially observed observations. We study this question in a controlled multivariate stochastic volatility setting, where models observe only returns while the ground-truth latent volatility state is known to the researcher. This setting provides a useful benchmark for mechanistic interpretability under partial observability: the latent state is hidden from the model but directly available for evaluation. Across architectures, losses, and output heads, we find evidence for a two-stage computation. Hidden representations encode substantial information about the next latent volatility state, and the output head maps this representation to squared return forecasts. Furthermore, in Transformers, latent-state decodability emerges at identifiable architectural stages whose location depends on the volatility period. In long-cycle regimes, this computation simplifies into an explicit latent-state filter consisting of a learned linear projection followed by $\ell^2$ normalization. Output-head replacement further shows that part of the degradation under noisy MSE training arises from readout misalignment rather than representation failure. These results suggest that stochastic volatility models provide a useful benchmark for mechanistic interpretability under noisy latent dynamics and partial observability.
