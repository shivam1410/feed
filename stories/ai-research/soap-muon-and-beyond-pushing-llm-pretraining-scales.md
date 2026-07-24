---
title: "SOAP, Muon, and Beyond: Pushing LLM Pretraining Scales"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20548"
authors: ["Mikail Khona, Aditya Vavre, Boxiang Wang, Deyu Fu, Hao Wu, Mike Chrzanowski, Bryan Catanzaro, Dheevatsa Mudigere, Jeff Pool, Michael Lightstone, Mohammad Shoeybi, Mostofa Patwary, Nima Tajbakhsh, Tijmen Blankevoort"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2607.20548v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20548v1 Announce Type: new Abstract: Higher-order optimizers such as Muon and SOAP offer faster convergence than AdamW, but their computational cost and numerical stability challenges have limited adoption at scale. In this work, we adapt and enhance preconditioned gradient methods to overcome the practical challenges of large-scale LLM pretraining. We first identify instabilities in SOAP at large batch sizes and propose algorithmic modifications including per-step QR orthogonalization and improved preconditioning strategies that eliminate loss spikes and enable stable training in these regimes. We then present a unified empirical study of SOAP, Muon, and AdamW using update-RMS matching to ensure fair learning rate transfer across optimizers. As part of this analysis, we empirically evaluate the orthogonalization quality of Muon. Our experiments on multi-billion-parameter models trained on trillions of tokens reveal that SOAP and Muon consistently outperform AdamW at the scales we tested. Notably, at batch sizes of up to 100M tokens for next-token prediction, these optimizers maintain training stability and quality while AdamW degrades. To enable efficient training at large scale, we introduce a layer-wise distributed optimizer compatible with Megatron-LM. Our implementation balances memory and hides communication while avoiding approximations to the optimizer computations, thus retaining their convergence benefits. Additionally, we identify and build specific system-level improvements to further accelerate our layer-wise implementation. To support the research community, we release a codebase that contains emerging algorithms for optimization: https://github.com/NVIDIA-NeMo/Emerging-Optimizers
