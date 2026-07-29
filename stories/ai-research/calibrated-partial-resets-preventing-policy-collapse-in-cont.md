---
title: "Calibrated Partial Resets: Preventing Policy Collapse in Continual Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.24996"
authors: ["Luc McCutcheon, Evangelos Chatzaroulas, Saber Fallah"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.24996v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.24996v1 Announce Type: new Abstract: Neural networks are hindered by accumulating dormant neurons and loss of expressivity throughout training, particularly in non-stationary data settings, such as continual supervised and reinforcement learning. Recently, neuron resets have been used to maintain gradient flow and restore plasticity. However, full unit reinitialization often sacrifices peak performance and can destabilize training, leading to policy collapse. To preserve plasticity without destabilizing training, we propose Calibrated Partial Resets (CPR), an optimizer that periodically pulls low-utility neurons toward their initialization, with pull strength scaled by each neuron's utility. Unlike binary reset methods, partial resets avoid brittleness; unlike uniform decay, calibrated utility-scaling concentrates adjustment on the units that need it most. Among compared methods, only CPR avoids policy collapse over 400M training steps in SlipperyAnt, and it outperforms prior decay and reset-based methods on Continual MetaWorld and Continual MinAtar benchmarks. Ablations reveal a tunable trade-off between plasticity and peak performance, highlighting utility-scaled reinitialization as a promising direction for continual learning.
