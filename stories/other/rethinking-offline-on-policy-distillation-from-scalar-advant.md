---
title: "Rethinking Offline On-Policy Distillation: From Scalar Advantages to Distributional Supervision"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18648"
authors: ["Qi Sun, Siyue Zhang, Tingyu Song, Yilun Zhao, Chen Zhao"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18648v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

On-policy distillation (OPD) transfers teacher capabilities through token-level feedback on student-generated trajectories, but repeatedly evaluating fresh rollouts with the teacher is computationally expensive. Offline methods such as Lightning OPD reduce this cost by caching recorded tokens' teacher log-probabilities on fixed reference rollouts. By extending the idea to a multi-turn agentic search setup, we find that it consistently underperforms the SFT starting point trained by the same teacher. We empirically observe greater teacher--reference mismatch than in mathematical reasoning and post-training distributional flattening, and theoretically show that scalar advantage supervision on fixed rollouts admits solutions with flattened output distributions under suitable conditions. Motivated by these findings, we propose Distributional On-Policy Distillation (DistOPD), a simple yet effective offline OPD method that retains candidate-token probabilities from both reference and teacher at selected positions and aggregates the remaining parts into a residual token. On agentic search, DistOPD achieves performance comparable to online OPD while improving student--teacher alignment and using training GPU-hours comparable to Lightning OPD.
