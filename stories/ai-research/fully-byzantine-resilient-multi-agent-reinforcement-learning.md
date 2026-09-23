---
title: "Fully Byzantine-Resilient Multi-Agent Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25701"
authors: ["Haejoon Lee, Dimitra Panagou"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.25701v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25701v1 Announce Type: new Abstract: We study distributed Byzantine-resilient actor-critic multi-agent reinforcement learning (AC-MARL), where agents collectively learn policies through local interactions. Existing methods guarantee convergence of the agents' parameters only to a neighborhood of the attack-free limit points, resulting in degraded performance. We propose Fully Resilient AC-MARL (FRAC-MARL), a decentralized method in which each agent leverages redundancy in two-hop messages to identify reliable messages. Under linear parameterizations of the value and team-reward functions and Byzantine edge attacks, where adversarial behavior is confined to the communication layer, we prove that agents' parameters converge almost surely to the same limit points as in the attack-free case over time-varying communication graphs. We introduce a novel topological condition for the convergence of our method, present a systematic method to construct such networks, and prove that this condition can be verified in polynomial time. Finally, we demonstrate our method on cooperative multi-robot formation control tasks.
