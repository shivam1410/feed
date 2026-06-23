---
title: "Reward-free Pretraining for Reinforcement Learning via Occupancy Coverage Maximization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21271"
authors: ["Marco Prattic\\`o, Pietro Novelli, Massimiliano Pontil, Carlo Ciliberto"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21271v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21271v1 Announce Type: new Abstract: Sparse rewards pose a central challenge in reinforcement learning, since agents receive no informative signal until they reach their goal. Intrinsic-reward methods address this issue by optimizing non-stationary objectives such as novelty, prediction error, or skill diversity, thereby injecting a supervision signal into the problem. While effective, these methods often require that the extrinsic (sparse) reward can be evaluated -- either online or during offline relabeling of the stored transitions. This limitation is particularly vexing for multi-task, meta-, and continual reinforcement learning, where agents' interactions with the environment are usually reward-free. In this work, we present a method to pre-train transferable exploration policies that rapidly adapt to sparse rewards at downstream task time. Our objective maximizes state-space covering for the occupancy measure, and can be framed in terms of entropy maximization. Its algorithmic implementation, ROVER, leverages recent advances on the operatorial formulation of RL to estimate occupancy with a learned resolvent world model, bypassing common hurdles associated with density and entropy estimation. ROVER further introduces a virtual "sink" state for unexplored regions, balancing coverage of known states with expansion into unseen ones and preventing cyclic expansion-collapse behavior during learning. In tabular and pixel-based sparse navigation tasks, ROVER produces more uniform aggregate coverage and stronger initializations for downstream tasks than standard reward-free baselines.
