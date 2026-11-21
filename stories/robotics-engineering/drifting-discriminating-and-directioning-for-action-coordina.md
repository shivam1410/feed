---
title: "Drifting, Discriminating, and Directioning for Action Coordination in Higher-dimensional Action Space"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25385"
authors: ["Taisuke Kobayashi"]
date: "Sat, 21 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.25385v1"
image: ""
generated: "2026-11-21T19:04:16+05:30"
---

This paper proposes a lightweight policy model to mitigate the difficulty of handling higher-dimensional action spaces in reinforcement learning (RL), alongside an algorithm to effectively train it. To address this, we focus on drifting models, which can implicitly represent complex distributions and infer actions in a single forward pass. However, while drifting models can be straightforwardly trained via backpropagation of the Q-gradient, this alone cannot be expected to appropriately capture the desired action coordination. Therefore, this paper constructs a three-step learning algorithm to encourage the action coordination. First, the source distribution of the drifting model is co-optimized as a diagonal policy model. This conditions the drifting model to attach the coordination, which cannot be expressed by a diagonal distribution, as residuals. Second, a discriminator model before and after drifting is introduced with adversarial training for a regularization term. This actively promotes the extraction of the coordination that fundamentally separates the two distributions. Third, best-of-N sampling is applied for action selection during rollouts in order to give directionality toward/beyond the regions where the coordination is insufficiently extracted/sufficiently discovered. The proposed method consistently improves the sample efficiency and the final control performance over the conventional diagonal distribution modeling across three locomotion tasks with high-dimensional action spaces. Furthermore, the analysis indicates that this improvement is achieved by reducing variance in certain action dimensions, effectively coupling them with other actions as action coordination.
