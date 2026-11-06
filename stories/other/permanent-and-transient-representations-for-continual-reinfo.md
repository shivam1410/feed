---
title: "Permanent and Transient Representations for Continual Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07327"
authors: ["Nishanth Anand, Doina Precup"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07327v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Continual Reinforcement Learning (CRL) agents struggle to adapt to new situations while retaining prior knowledge, leading to a stability-plasticity trade-off. One approach to solving this problem is by using complementary learning systems: one for slow, long-term learning and another for quick, transient adaptation. Anand & Precup (2023) instantiated this idea using permanent and transient value functions, but used the same features in both systems. Intuitively, long-term learning should rely more on parametric representations for broad generalization, while transient learning would be best served by non-parametric representations for situation-specific adaptation. In this paper, we explore this idea both theoretically and empirically. By introducing a novel non-parametric approximation for estimating the transient value function in complex tasks, we demonstrate that our method enables online learning and outperforms competitive baselines on image-based tasks and Craftax-Classic, underscoring the effectiveness of our system-level decomposition.
