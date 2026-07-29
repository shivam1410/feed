---
title: "A Unified Algorithmic Framework for Hybrid Reinforcement Learning in Tabular MDPs with Shifted Transition Dynamics"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25207"
authors: ["Zheshun Wu, Renjie Zheng, Jinhang Zuo, Zenglin Xu, Fang Kong"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.25207v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25207v1 Announce Type: new Abstract: This paper investigates a hybrid reinforcement learning setting in tabular Markov Decision Processes (MDPs), where an agent aims to learn an optimal policy by combining online interactions with a target environment and offline data from a source environment. A central challenge is that offline data may be collected from outdated environments with shifted transition dynamics, making naive integration of historical data ineffective. To address this, we propose a unified algorithmic framework featuring two algorithms: MIN-UCB-VI for regret minimization and MAX-LCB-VI for best policy identification. Both algorithms leverage fine-grained bias information to more effectively exploit offline data under general transition shifts. We provide theoretical guarantees for our framework, including both instance-dependent and independent upper bounds on regret and sub-optimality gap. Furthermore, we establish matching lower bounds to demonstrate the optimality of our approach and validate our theoretical findings through extensive experiments.
