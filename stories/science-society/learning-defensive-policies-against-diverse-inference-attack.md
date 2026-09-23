---
title: "Learning Defensive Policies against Diverse Inference Attacks for Smart Meter Privacy"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25484"
authors: ["Ruichang Zhang, Mustafa A. Mustafa"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.25484v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25484v1 Announce Type: new Abstract: Smart meter (SM) data provides fine-grained visibility into household energy consumption, but also exposes users to privacy risks. Inference attacks, known as non-intrusive load monitoring (NILM), can perform appliance-level inference from aggregate signals and recover sensitive behavioral patterns. In practice, attacker models are unknown and heterogeneous, making robust defense challenging. We formulate SM privacy protection as a black-box inference defense problem, aiming to reduce the recoverability of appliance-level information while generalizing across diverse and unseen attackers. We propose a proxy-guided hierarchical reinforcement learning framework that learns battery-based load-shaping policies to inject realistic but misleading appliance-level signatures into the aggregate signal, thereby disrupting the structured patterns exploited by NILM. A self-supervised aggregate-structure privacy probe provides a reconstruction-error-based surrogate reward for disrupting recoverable load structure, while a signature library makes the perturbations appliance-relevant and physically realizable through battery control. We provide theoretical rationale showing that proxy-guided optimization improves inference robustness under attacker diversity. Experiments on real-world datasets UK-DALE and REDD demonstrate strong cross-model and cross-appliance generalization. Across six unseen NILM attackers, covering four appliances on UK-DALE and five on REDD, our proposed defense increases average appliance-level RMSE by 107% and 166%, respectively, while reducing F1 score by 79% and 80%.
