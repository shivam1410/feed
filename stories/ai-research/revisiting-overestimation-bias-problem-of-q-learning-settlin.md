---
title: "Revisiting Overestimation Bias Problem of Q-learning: Settling Large Discrete Action Space via Action Intersection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.12912"
authors: ["Pu Li, Tao Tan, Hong Xie, Xiaoyu Shi, Mingsheng Shang"]
date: "Fri, 14 Aug 2026 00:00:00 -0400"
score: 61
guid: "oai:arXiv.org:2608.12912v1"
image: ""
generated: "2026-08-14T19:05:44+05:30"
---

arXiv:2608.12912v1 Announce Type: new Abstract: This paper considers the overestimation bias problem of Q-learning in the setting of a large action space, for the purpose of relieving the bottleneck of existing methods. We find that the large action space increases the randomness in Q-value estimation. The randomness makes two paradigms that drive the major literature on the overestimation problem have their own bottlenecks: the coupling paradigm, i.e., the optimal action and its Q-value are estimated with the same Q-function, always has a positive bias. This is because randomness leads to some actions having abnormally high estimated values than their true values, and the coupling methods prefer these actions. The decoupling paradigm, i.e., the optimal action and its Q-value are estimated with two independent Q-functions, always has a negative bias. This is because randomness increases the estimation gap between the two independent Q-tables for the same action. This paper shows that action intersection can be a simple yet powerful strategy to relieve these bottlenecks. The action intersection strategy enables semi-decoupling via two designs: (1) it allows two Q-functions to share a certain fraction of trajectory data; (2) if a data sample is shared, each Q-function is updated using the coupling paradigm; otherwise, using the decoupling paradigm. Two properties make the action intersection strategy powerful: (1) attaining a large bias range, i.e., varying the data sharing fraction, the estimation bias varies from underestimating to overestimating; (2) fine granularity: the action intersection size can be made arbitrarily finer to enable finer control. We consider two experiment settings, i.e., tabular and deep RL, deep RL experiments show that our method outperforms several SOTA baselines drastically; tabular experiments reveal why our method can achieve superior performance.
