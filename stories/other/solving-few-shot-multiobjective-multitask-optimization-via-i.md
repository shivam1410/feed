---
title: "Solving Few-Shot Multiobjective Multitask Optimization via Iterative Sequential Transfer"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11228"
authors: ["Tingyang Wei, Haofeng Wu, Ananda Phan Iman, Zhao Wei, Jiao Liu, Yew-Soon Ong"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11228v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11228v1 Announce Type: new Abstract: Applying knowledge transfer across multiple optimization tasks, multitask optimization (MTO) emerges as a promising approach to solving synergistic optimization tasks simultaneously. However, the development of effective knowledge transfer mechanisms in MTO fundamentally relies on aligning elite solution distributions across tasks. This dependency creates a critical bottleneck in few-shot optimization regimes, as restricted evaluation budgets impede the identification of elite solution distributions required for beneficial transfer. This challenge is exacerbated in multiobjective multitask problems, where each optimizer must approximate a continuous Pareto manifold rather than a single optimal point. This paper introduces Iterative Sequential Transfer (IST) to circumvent this bottleneck. We model MTO as a sequence of sequential transfer optimization problems, concentrating evaluations on a single target per iteration. We propose a likelihood-informed task prioritization mechanism to maximize transfer utility by identifying the task most likely ready for knowledge integration. Empirical results on benchmark and real-world problems verify the effectiveness of the proposed method under tight budgets.
