---
title: "Tail-Likelihood Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.02987"
authors: ["Shrinivas Ramasubramanian, Daman Arora, Fahim Tajwar, Guanning Zeng, Qingyang Wu, Zhongzhu Zhou, Chenfeng Xu, Haiwen Feng, Yuda Song, Aarti Singh, Ruslan Salakhutdinov, J. Andrew Bagnell, Jeff Schneider, Andrea Zanette"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.02987v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.02987v1 Announce Type: new Abstract: Reinforcement learning typically optimizes average reward. For generative policies, the average can hide an important distinction: two policies can achieve the same mean reward while having very different chances of producing a rare but high-reward rollout. This matters as sampling increases during training and inference, since its benefit depends on retaining probability mass on high-reward outcomes. We propose to optimize this coverage directly. Rather than considering only expected reward, we consider all of its upper tails: for each reward threshold, how likely is the policy to exceed it? This turns a continuous reward into a family of binary success events. We introduce Tail-Likelihood Reinforcement Learning (TailRL), which maximizes the log-probability of exceeding a randomly chosen reward threshold. Its gradient gives more weight to rare, high-reward rollouts and can be interpreted as a mixture of Best-of-(k) gradients. TailRL requires only a simple modification to the advantage function, making it compatible with existing reinforcement learning pipelines. Across object localization, maze navigation, GUI grounding, and code optimization, TailRL leverages rare high-reward training samples to avoid suboptimal solutions and yields models that benefit more from additional samples at inference time.
