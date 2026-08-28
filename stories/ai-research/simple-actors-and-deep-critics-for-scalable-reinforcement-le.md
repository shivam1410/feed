---
title: "Simple Actors and Deep Critics for Scalable Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26659"
authors: ["Guhyeon Kang, Jaehwi Lee, Minhae Kwon"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.26659v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26659v1 Announce Type: new Abstract: Recent progress in offline reinforcement learning (RL) has been driven by expressive generative actors such as diffusion and flow-matching policies, which capture multimodal behavior in offline datasets. However, these actors require multiple denoising or integration steps per action and thus incur substantial overhead at every decision in deployment. In this work, we revisit where capacity should be invested in an offline actor--critic method. Since the critic is used only during training and is discarded at deployment while the actor runs at every decision step, allocating capacity to the critic rather than the actor is more favorable for inference-time efficiency. However, scaling MLP critics in offline RL is known to introduce several distinct instabilities that have, in practice, kept critics shallow. We identify three distinct failure modes that arise when critics are deepened in offline RL---optimization, bootstrap-noise amplification, and value-range drift---and address each with a corresponding ingredient: a residual MLP backbone, n-step bootstrap targets, and a categorical cross-entropy loss. Combining these ingredients with a lightweight deterministic actor, we propose LAC (Light Actor, deep Critic). On OGBench, LAC matches the strongest diffusion- and flow-matching baselines while achieving up to 4x lower inference latency, comparable to one-step distilled policies without distillation. Its critic recipe also transfers across actor parametrizations.
