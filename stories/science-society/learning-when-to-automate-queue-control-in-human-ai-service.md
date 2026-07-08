---
title: "Learning When to Automate: Queue Control in Human-AI Service Systems"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06017"
authors: ["Giovanni Montanari, Marco Scarsini, Vianney Perchet"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2607.06017v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.06017v1 Announce Type: new Abstract: We study a human-AI service system in which tasks arrive sequentially and are processed through a two-stage architecture: an automated chatbot followed, when necessary, by a human agent. We consider $T$ sequentially arriving tasks, each belonging to one of $K$ heterogeneous types. For each task the decision maker chooses how many resources to allocate to the chatbot, whose type-dependent success probabilities are initially unknown. Tasks not resolved by the chatbot enter type-dependent human-service queues, where they are processed by a human agent with unknown service rates. This model captures a central tradeoff in hybrid service systems: relying more on automation reduces human congestion but increases chatbot costs, while insufficient automation may overload the human agent. We propose the UCB-DPP policy, which combines Upper Confidence Bounds with Drift-Plus-Penalty control to learn the unknown parameters of the system while making queue-aware decisions. We prove that UCB-DPP achieves regret $\widetilde{\mathcal{O}}(K\sqrt{T})$ and guarantees mean-rate stability of the human-service queues. Simulations on synthetic instances show that the proposed policy outperforms natural baselines.
