---
title: "Reversal Q-Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17551"
authors: ["Aditya Oberai, Seohong Park, Sergey Levine"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.17551v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17551v1 Announce Type: new Abstract: Iterative generative modeling techniques, such as flow matching, provide powerful tools to model complex behaviors for effective offline reinforcement learning (RL). In this work, we propose a new off-policy RL algorithm that trains a flow policy based on prior data. Our idea starts from the "expanded" Markov decision process (MDP) framework, which treats individual flow refinement steps as separate actions in an MDP. To enable off-policy RL within this framework, we apply two techniques: we generate virtual on-policy trajectories (by "reversing" flows) to make this framework compatible with prior data, and we apply a bias-and-variance reduction technique to mitigate the curse of horizon in off-policy RL. We call the resulting algorithm Reversal Q-learning (RQL). RQL has several advantages over previous flow-based RL methods: it does not suffer from backpropagation through time, makes better use of the learned value function, and directly trains the full, expressive flow policy. Through our experiments on 50 challenging simulated robotic tasks, we show that RQL leads to the best average offline RL performance compared to state-of-the-art flow-based offline RL algorithms.
