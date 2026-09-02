---
title: "RW-LoRA: Communication-Efficient Decentralized LoRA Fine-Tuning via Random Walks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00078"
authors: ["Xingran Chen, Rohit Bhagat, Ghadir Ayache, Rawad Bitar, Yanmin Gong, Salim El Rouayheb"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.00078v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00078v1 Announce Type: new Abstract: Parameter-efficient fine-tuning methods such as LoRA have become a standard approach for adapting large foundation models. Adopting fine-tuning to distributed settings faces several challenges. Most existing distributed LoRA methods rely on centralized aggregation, and gossip-based decentralized LoRA requires repeated synchronization among multiple model copies. Both methods incur significant communication overhead and introduce errors due to simultaneous aggregation of multiple model updates. In this paper, we take a different perspective and propose a random-walk-based LoRA fine-tuning scheme. Instead of maintaining multiple model replicas, a single model token traverses the network and is updated sequentially using local fine-tuning objectives. This design eliminates the need for global synchronization, substantially reduces communication and computation costs, and avoids aggregation errors. We provide rigorous convergence guarantees for non-convex objectives under standard assumptions. Through empirical results on multiple NLP tasks and graph topologies, we show that the proposed method achieves competitive task performance with substantially less communication and computation than gossip-based LoRA.
