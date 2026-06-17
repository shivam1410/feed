---
title: "Performance-Driven Environment Abstraction with Multi-Timescale Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17377"
authors: ["Yue Guan, Dipankar Maity, Panagiotis Tsiotras"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.17377v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17377v1 Announce Type: new Abstract: We study performance-driven environment abstraction for decision-making in large Markov decision processes. Rather than preserving geometric or topological structure, we seek abstractions that directly optimize decision quality. We model abstraction as a controlled approximation obtained by aggregating the state space and enforcing a shared action distribution within each aggregated state. For a fixed partition, we establish a performance guarantee that separates value-function approximation error from the loss introduced by action sharing. Guided by this analysis, we develop a multi-timescale reinforcement learning framework that jointly adapts the policy and a tree-structured environment abstraction. The resulting algorithm refines and coarsens regions of the state space based on Q-value discrepancies, balancing performance against abstraction size and complexity. Empirical results demonstrate substantial state compression, improved sample efficiency, and faster replanning compared to actor-critic baselines.
