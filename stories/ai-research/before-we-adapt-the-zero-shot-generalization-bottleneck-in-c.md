---
title: "Before We Adapt: The Zero-Shot Generalization Bottleneck in Continual World Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41041"
authors: ["Amir Mesbah, Di Wu"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 28
guid: "oai:arXiv.org:2610.41041v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Continual reinforcement learning (CRL) requires agents to operate under environmental changes while reusing prior knowledge whenever possible. We argue that model-based reinforcement learning provides a promising framework for this setting because learned world models (WMs) can, in principle, support change detection, knowledge reuse, adaptation, and acquisition of new knowledge. However, such benefits depend heavily on whether the learned model can generalize beyond the contexts in which it was trained. In this work, we propose to formulate this problem with a contextual Markov decision process in which context is decomposed into behavioral and physical components. This view organizes continual WM learning into reuse, adaptation, and acquisition of new knowledge. As a first step, we study direct reuse when behavioral rules remain unchanged. Using Dyna-Q and TD-MPC in controlled FourRooms tasks, we find that zero-shot reuse can degrade substantially under physical-context changes and that this behavior depends strongly on the observation representation used by the WM. Additional ablation studies and latent-space diagnostics suggest that learned representations do not automatically provide the invariances needed for reuse. These results identify representation generalization as an important bottleneck for reliable world-model reuse in CRL.
