---
title: "Primal-Dual Representation Learning for Low-Rank Constrained MDPs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30756"
authors: ["Chenhao Zhou, Chao Zhang, Wensong Bai, Hanbin Zhao, Hui Qian"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 15
guid: "oai:arXiv.org:2610.30756v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Representation learning has substantially improved the efficiency of unconstrained continuous-state Markov Decision Processes (MDPs), but its extension to Constrained MDPs (CMDPs) is difficult because the transition representation must be learned while constraint violation is controlled. In this paper, we study representation learning for low-rank CMDPs with continuous state spaces, and propose REP-PD-TEG for the soft cumulative-violation setting. In the feature learning period, the algorithm interacts with the environment using a decaying-$\epsilon$-greedy mixture execution policy, and uses the collected samples to learn transition features by maximum likelihood. Based on the learned features, it constructs uncertainty bonuses and plans with an optimistic Lagrangian objective to obtain the return policy. We prove regret and soft-violation guarantees for the return policies, and quantify the influence of the decaying-$\epsilon$-greedy exploration. In particular, REP-PD-TEG achieves the optimal $\widetilde O(\sqrt K)$ return policy bound, and gives a $\widetilde O(K^{3/4})$ overall sample bound when exploratory actions are charged. For the stricter hard cumulative violation, where feasibility must be verified episode by episode, we propose REP-PD-H-TEG. It plans under a bonus-corrected lower-confidence utility certificate with the learned representation, and performs a stabilized dual search to obtain the return policy, yielding regret and hard-violation bounds. Together, these results give the first theoretically guaranteed representation-learning method for low-rank continuous-state CMDPs with both soft cumulative guarantees and certified hard-violation control.
