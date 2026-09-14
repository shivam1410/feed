---
title: "Amortized Low-Rank Adaptation for Model-Based Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12278"
authors: ["Fernando Palafox, David Fridovich-Keil"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12278v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12278v1 Announce Type: new Abstract: World models let agents plan by predicting the consequences of their actions, but changes in the environment can make them inaccurate. We study the problem of adapting a world model to an unknown test-time environment, drawn from a known environment family, using only a few episodes of interaction. Existing approaches trade off computational cost against expressivity, i.e., the range of models a method can produce. For example, in-context learning is computationally cheap but limited in expressivity, and gradient-based adaptation is expressive but computationally expensive. We present CLAW (Context-conditioned Low-rank Adaptation of World models), which addresses this tradeoff by using a hypernetwork to generate low-rank (LoRA) adapters at test time. During pretraining, we simulate adaptation to a variety of environments and jointly train the hypernetwork and base world model. At test time, we freeze the base model and use a forward pass of the hypernetwork to generate adapters from a small batch of test-time transitions. We evaluate CLAW in locomotion and manipulation environment families that vary in dynamics, embodiment, and reward. We show that, using only seconds of test-time data, CLAW outperforms gradient-based adaptation and in-context learning during online adaptation. We also show that CLAW avoids overfitting in data-scarce regimes, that its advantage comes from the expressive adapters rather than context conditioning, and that pretraining the hypernetwork jointly with the base model outperforms training it post hoc.
