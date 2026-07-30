---
title: "Emergent Sparsity in Frozen Random CNN Feature Extractors for Deep Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26059"
authors: ["Scott M. Norton"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2607.26059v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26059v1 Announce Type: new Abstract: We report a striking phenomenon: deep reinforcement learning agents trained with frozen, randomly initialized CNN feature extractors spontaneously develop extremely sparse fully-connected representations, without any sparsity-inducing objective. In the first fully-connected layer (FC1, $3{,}136 \to 64$), agents compress task-relevant information through as few as 1-3 neurons out of 64 for deterministic Pong (5-11 for stochastic Pong), while trainable CNNs activate 55-64 neurons under matched conditions. We establish four principal findings. First, FC1 sparsity scales with task complexity: 1-11 for Pong, 19-26 for Breakout, and $\sim$42 for Space Invaders. Width-scaling confirms this reflects task structure rather than a fixed capacity fraction. Second, within-game scaling emerges: three identical Pong seeds produce 5, 7, and 11 active neurons. The 5-neuron seed plateaus at $+14$ reward, while the others reach expert performance ($+18.4$, $+18.7$), suggesting the random projection's usable dimensionality bounds achievable performance. Third, ablation confirms necessity: removing these active neurons crashes performance across two PPO implementations and four games. Fourth, the information bottleneck commits early: a sweep shows the active set locks by 15-30M steps, while reward turns positive 35-105M steps later. A complementary finding in Breakout shows frozen and trainable CNNs reach competitive rewards via structurally different bottlenecks: frozen agents use 17-25 active neurons (participation ratio $\sim$10-14), while trainable agents use 51 (participation ratio $\sim$3.6). Finally, wherever input dimensionality dwarfs intrinsic task dimensionality, gradient descent on a frozen random projection may reveal the effective rank of the underlying problem without explicit sparsity machinery.
