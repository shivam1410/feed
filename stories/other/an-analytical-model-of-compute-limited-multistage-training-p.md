---
title: "An Analytical Model of Compute-limited Multistage Training Pipelines"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13276"
authors: ["Nishil Patel, Jin Hwa Lee, Basile Confavreux, Andrew Saxe"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13276v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Modern foundation models are trained through multiple stages, yet how these stages interact and how compute should be allocated across them remain poorly understood. We introduce an analytically tractable high-dimensional model combining unsupervised pretraining with a linear autoencoder, supervised fine-tuning (SFT) with noisy stepwise labels, and reinforcement learning (RL) with sparse episodic rewards. Using random matrix theory and an operator-projection closure, we derive approximate low-dimensional learning dynamics that closely match simulations. We show that finite pretraining data imposes a representation-dependent performance limit, with Bayes classification error scaling as the inverse square root of the pretraining sample ratio, and observe the same exponent in asymptotic SFT and RL errors. Better pretraining also reduces sensitivity to noisy supervision. SFT initialization shortens the initial RL plateau induced by sparse rewards, an effect we also observe in OLMo-2 1B on GSM8K. Longer SFT warm starts additionally improve asymptotic RL performance. Optimizing compute across all three stages reveals that the optimal allocation depends on supervision quality and total budget, with a non-monotonic dependence of the RL compute share on budget. Finally, a complementary compositional model shows how RL selectively strengthens task-relevant pretrained skills while largely preserving unused skills. Together, these results identify mechanisms linking representation quality, feedback structure, and compute allocation in multistage training.
