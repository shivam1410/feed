---
title: "Fast Construction of Inner Sphere Trees Using Machine Learning"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23940"
authors: ["Jianneng Huang, Wenjia Rao"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.23940v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Collision detection for complex non-convex objects is a bottleneck in physics simulation, virtual reality, and robotics. Inner sphere trees (ISTs) answer proximity and penetration queries efficiently, but their greedy leaf-sphere construction is sequential and computationally expensive, which limits both large-scale preprocessing and runtime use. In this work, we present ML-IST, a machine-learning-based method that reformulates leaf-sphere generation as a single-shot set-prediction problem: a network predicts a fixed set of inscribed sphere candidates from multichannel voxel geometry, differentiable coverage feedback corrects the coarse prediction and fills residual gaps at finer scales, and a lightweight geometric projection enforces validity. Averaged over the test set, a single-GPU implementation of ML-IST reduces mean leaf-generation time by a factor of $2.0$--$2.6$ over single-core CPU construction across target capacities of 64--512 spheres, and qualitative results on complex models show multiscale sphere distributions that follow principal volumes and slender features. We further integrate ML-IST into the Jolt Physics and Bullet engines; in an alpha-puzzle benchmark it reaches 55.89~FPS, the highest among the compared representations (conventional IST, GImpact, and convex decomposition). These results support learned leaf generation as a practical component for fast, runtime construction of detailed collision representations.
