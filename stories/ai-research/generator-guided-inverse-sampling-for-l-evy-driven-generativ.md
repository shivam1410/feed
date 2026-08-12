---
title: "Generator-Guided Inverse Sampling for L\\'evy-Driven Generative Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10384"
authors: ["Tianfu Qi, Jun Wang, Jun Zhang"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.10384v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

arXiv:2608.10384v1 Announce Type: new Abstract: This paper studies inverse sampling for L\'evy-driven generative models from the perspective of Markov generators. Unlike conventional diffusion models, L\'evy-driven dynamics involve infinite jump activities, which makes their reverse process nonlocal and difficult to characterize using score information alone. We address this challenge by analyzing the forward and reversed generators. It is derived that the reversed jump component generally becomes a state-dependent Markov jump process governed by a nonlocal density ratio. This observation motivates a structured reverse sampler that decomposes the dynamics into diffusion, small jump, and large jump components. Based on this characterization, we develop a computationally tractable sampler for a class of isotropic linear L\'evy SDEs with symmetric $\alpha$-stable jump components. For the jump component, the neural network is used only to amortize the rate of large jump activities, while jump amplitudes are generated from analytically derived conditional distributions, which improves interpretability and controllability. Efficient implementation techniques are further introduced under this setting to avoid expensive high-dimensional integration and sampling. The sampler is further adapted to approximate observation-guided sampling and applied to OFDM-SISO channel estimation under mixed Gaussian and impulsive noise. Simulations show robust estimation performance with a favorable tradeoff between complexity and performance.
