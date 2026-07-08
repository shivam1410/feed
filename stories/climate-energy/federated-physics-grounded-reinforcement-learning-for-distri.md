---
title: "Federated Physics-Grounded Reinforcement Learning for Distributed Stability Control in Smart Grids"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05553"
authors: ["Omar Al-Refai, Ibrahim Shahbaz, Adam Ali Husseinat, Eman Hammad"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2607.05553v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05553v1 Announce Type: new Abstract: Transient stability control in smart grids requires rapid post-fault damping of generator frequency and rotor angle deviations to prevent cascading failures. This paper proposes FedPPO-PG, a Federated Multi-Agent Proximal Policy Optimization framework with Physics-Grounded neighborhoods, which reformulates transient stability control as a cooperative multi-agent reinforcement learning problem optimized directly against closed-loop stability objectives. Each generator hosts an independent local actor augmented with the frequency deviations of its two most strongly coupled electrical neighbors, identified from the post-fault Kron-reduced susceptance matrix. A guided policy initialization phase warm-starts all actors from the classical decentralized controller, while a centralized critic guides advantage estimation under the centralized training--decentralized execution (CTDE) paradigm. Evaluated on a simulation of the IEEE 39-bus benchmark system across five training and three unseen fault contingencies, FedPPO-PG achieves 100% stabilization in all 24 trials, reduces mean stability time by 72.4%, and cuts the control power by 7-14 times compared to the centralized baseline. Each actor executes independently with no central coordinator at deployment, and the per-actor inference latency satisfies the IEEE/IEC 60255-118-1-2018 real-time reporting requirements.
