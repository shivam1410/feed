---
title: "Dissimilarity-Based Markov Decision Processes for Stabilizing State Distributions"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.29024"
authors: ["Xun Shen, Yuepeng Wang, Daniyal Sajedi-Hosseini, Akifumi Wachi, Ken Kawano, Yoshihiko Fujisawa, Mehrshad Sadria, S\\'ebastien Gros, Katsuki Fujisawa"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 20
guid: "oai:arXiv.org:2610.29024v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Reinforcement learning for stochastic systems typically optimizes expected cumulative rewards, while reliable and repeatable behavior also depends on how the state distribution evolves over time. Optimizing expected return alone does not guarantee that this distribution converges to a desired target or remains stable. This paper develops a theoretical framework for learning policies that stabilize state distributions. We formulate the problem as a Dissimilarity-based Markov Decision Process (DMDP), in which the policy acts on the current state distribution and the objective measures its dissimilarity to a target distribution. We establish sufficient conditions under which the optimal policy makes the target distribution asymptotically stable. To support policy learning, we introduce a finite-dimensional representation of distributions and show how stability guarantees for its parameter dynamics extend to the underlying state distributions. We further develop certificates for the learned policies, including their deployment using estimated distribution parameters. These results quantify how learning and estimation errors affect the guarantees and identify conditions under which learned policies retain asymptotic stability. For practical implementation, we combine distribution estimates and target-dependent rewards with PPO and SAC. A computable example on a linear system illustrates the proposed theoretical certificates. Furthermore, experiments on a HalfCheetah task demonstrate the benefits of distribution feedback and explicit target matching for regulating the velocity distribution.
