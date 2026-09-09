---
title: "DART: Distributional Adversarial Recurrent Training for Algorithm Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05988"
authors: ["Hieu Tran Bao, Phung Thanh Dang, Pham Quang Nhat Minh, Hoang Thanh Tung"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.05988v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05988v1 Announce Type: new Abstract: Recurrent reasoning models (RRMs) can solve structured problems, achieving easy-to-hard generalization through iterative computation in hidden space. These models are typically trained with instance-level supervision, which becomes increasingly problematic as task difficulty grows: valid solutions occupy a tiny region of the solution space, while invalid solutions proliferate rapidly. We propose Distributional Adversarial Recurrent Training (DART), a training framework that replaces single-point supervision with a local target distribution around the ground-truth solution and aligns model outputs with this distribution through an adversarial objective. DART provides a richer learning signal and encourages more stable iterative trajectories toward valid solutions. When evaluated on Maze, Chess, and masked Sudoku with multiple RRMs, including Deep Thinking Systems and Tiny Recursive Models, DART improves solution quality, stability, and robustness under the evaluated distribution shifts. Comparisons with label smoothing, Gaussian softened targets, and progressive training show that DART is not explained by target softening alone and is complementary to training schemes that stabilize long-horizon recurrence. These results identify DART as a promising approach for improving robustness across the evaluated recurrent reasoning models.
