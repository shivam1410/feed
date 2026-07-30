---
title: "Collaborative Weighting with Pessimistic Critic for Mitigating Overestimation in Off-Policy Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26509"
authors: ["Gong Gao, Xiao Lai, Ziqi Xie, Guojie Chen, Xianhui Liu, Weidong Zhao"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 61
guid: "oai:arXiv.org:2607.26509v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26509v1 Announce Type: new Abstract: Deep off-policy reinforcement learning algorithms for continuous control typically rely on neural value function approximation to guide policy improvement. However, temporal-difference (TD) learning introduces noisy targets, resulting in non-stationary optimization, while greedy policy updates amplify early-stage estimation errors. The recursive propagation of such errors leads to persistent overestimation bias and degraded training stability in actor-critic methods. Existing approaches attempt to alleviate this issue via prioritized sampling or modified value learning objectives, but often overemphasize high-uncertainty transitions caused by limited data coverage or bootstrapping errors, thereby further amplifying bias.In this paper, we propose Collaborative Weighting Actor-Critic (CWAC), a unified framework that explicitly accounts for predictive uncertainty in value estimation. CWAC employs distributional critic to model return uncertainty and introduces a collaborative weighting mechanism that jointly reweights TD-errors and uncertainty, enabling robust learning from reliable samples while suppressing noisy updates. In addition, we incorporate a stochastic pessimistic value estimation scheme via sampling from the return distribution, which effectively mitigates error propagation during policy improvement. CWAC can be seamlessly integrated into existing off-policy algorithm frameworks such as SAC, TD3, and DDPG with minimal overhead. Empirical results demonstrate that our proposed method significantly enhances performance across a diverse range of simulated tasks. Our code is publicly available at https://anonymous.4open.science/r/CWAC-348E.
