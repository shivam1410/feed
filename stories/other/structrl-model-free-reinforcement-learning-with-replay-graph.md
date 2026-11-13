---
title: "StructRL: Model-Free Reinforcement Learning with Replay Graphs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.14599"
authors: ["Ivo Nowak"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.14599v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

StructRL turns the experience collected during reinforcement learning into an explicit replay graph. Once the graph contains a path to the task goal, dynamic programming selects actions on the observed part of the state space; these actions form a graph policy that is defined only where the required transitions have been observed. StructRL transfers these actions to model-free learners: as action preferences for a DQN Q-model and as target directions along shortest observed paths for a SAC actor. For DQN on three sparse-reward MiniGrid tasks, final success rises from 0.10 to 0.90 (DoorKey), 0.10 to 0.80 (KeyCorridor) and 0 to 0.50 (ObstructedMaze); plain DQN does not catch up with three times the budget. For SAC on continuous PointMaze, graph-derived direction labels raise final success from 0.17 to 1.0 on seven matched runs that reached the goal. Distilling the graph policy into a fresh Q-model gives a DoorKey 6x6 controller that reaches the goal from 91% of reachable states, against 38% for plain DQN. Scaling experiments identify three bottlenecks: incomplete graph support, structural aliasing, and loss of graph information in high-dimensional inputs.
