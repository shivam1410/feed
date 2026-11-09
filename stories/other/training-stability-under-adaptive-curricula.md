---
title: "Training Stability under Adaptive Curricula"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08787"
authors: ["Johan Obando-Ceron, Walter Mayor, Michael Dennis, Aaron Courville, Pablo Samuel Castro"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08787v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Unsupervised Environment Design (UED) approaches train reinforcement learning (RL) agents on diverse curricula that may evolve with their capabilities. While prior work has largely focused on how these curricula are constructed, we study whether their students remain trainable under the resulting distributions. Across multiple UED mechanisms, environment complexities, and extended training horizons, we identify recurring learner-side pathologies, including parameter growth, degraded value--outcome ordering, and loss of representational diversity, that accompany stagnation and performance degradation. These findings connect limitations in UED to optimization failures previously identified in conventional deep RL, while showing how adaptive curricula couple the learner's optimization state to its future training distribution. Controlled interventions show that mitigating selected pathologies improves learning. Stabilizing the learner improves long-horizon performance and zero-shot generalization without changing the curriculum rule or increasing environment interaction. Our results establish learner trainability as a complementary design principle for UED. Effective curricula require students that remain capable of learning from the distributions they produce.
