---
title: "IncentRL: The Trade-Off Between Preference Guidance and Task Performance"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21525"
authors: ["Xuening Wu, Yanlan Kang, Shenqin Yin"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.21525v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21525v1 Announce Type: new Abstract: Preference-based reward shaping can guide reinforcement learning, but adding preference signals to the reward may unintentionally change the task being optimized. We address this problem with IncentRL, a framework that introduces preference guidance while explicitly characterizing its effect on external-task performance. IncentRL adds a Kullback--Leibler (KL) penalty between a specified outcome distribution and a preferred distribution. For finite discounted Markov decision processes with bounded shaping costs, we derive an external-value perturbation bound, establish a sufficient strict-action-gap condition for preserving the original optimal policy, and characterize the large-weight regime through discounted cumulative preference cost. Exact examples clarify the limits of these guarantees, including tied optima and support mismatch. We study a practical implementation using a hand-designed, distance-based outcome proxy, a fixed preference distribution, and score-weighted coefficient search. On MiniGrid DoorKey-8x8, the reported three-seed mean success rate after two million training steps reaches 98\% with coefficient 0.01, compared with 90.5\% for the reported zero-coefficient baseline, while the search progressively shifts toward smaller coefficients. Together, these results provide a principled view of the central trade-off in preference-based RL: using additional guidance to improve learning without excessively distorting the original task objective. The current experiments remain descriptive and do not yet isolate KL shaping from simpler alternatives.
