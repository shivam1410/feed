---
title: "Which Successes Make Good References? Action-Sequence Alignment for Multi-Turn On-Policy Distillation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13135"
authors: ["Mufei Li, Nikki Lijing Kuang, Zhuoer Wang, Samson Koelle, Jie Yuan, Manqing Mao, Hong Wang, Yanjun Lin, James Feng, Daniel Edmiston, Pan Li, Wei Niu"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13135v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

On-policy distillation (OPD) reduces train-inference distribution mismatch by supervising a student on its own trajectories. For multi-turn tool-use agents, conditioning the teacher on a validated same-task successful trajectory as a reference can provide useful hindsight, but different successes may reach incompatible interaction states and offer misleading supervision. We cast successful-reference selection as a free-target optimal transport problem, which reduces to assigning each failed trajectory its most compatible successful reference. Because latent state paths are hidden, we use action-sequence alignment as an observable proxy for compatibility and instantiate it with longest common subsequence (LCS), which identifies a shared ordered backbone of actions while allowing recoverable detours. This perspective makes trajectory compatibility the central criterion for reference selection in multi-turn OPD. Experiments on ALFWorld and the airline domain of $\tau^3$-bench show that LCS is the only evaluated reference selector to improve over reference-free OPD on both ALFWorld overall scores and all three airline metrics. Without further optimization, the airline-trained models also transfer to the retail domain, where LCS improves all three metrics.
