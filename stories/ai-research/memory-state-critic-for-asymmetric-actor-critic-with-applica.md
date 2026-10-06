---
title: "Memory-State Critic for Asymmetric Actor-Critic with Application to Vision-Based Pursuit-Evasion"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.03830"
authors: ["Arthur Louette, Alejandro S\\'anchez Roncero, Gaspard Lambrechts, Pascal Leroy, Julien Hansen, Petter \\\"Ogren, Damien Ernst"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.03830v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

In partially observable Markov decision processes, the optimal policy generally depends on the history of observations and past actions. Asymmetric actor-critic methods have become popular to learn such policies when additional information, such as the true state of the environment, is available during training. The critic, which is not needed at execution, is given access to the state. A critic conditioned on the state alone is generally ill-defined and yields biased policy gradients. Conditioning on the state and the history, the history-state critic restores both. In this paper, we show that conditioning the critic on the state and the policy's own memory, i.e., the internal representation of the history through which the policy selects its actions, is already well-defined and gives unbiased policy gradients, removing the need for a second recurrent approximator of the history. We call it the memory state critic. It follows that a critic based on the policy's memory need not backpropagate its loss into that memory, even though the memory is a lossy encoding of the history. We evaluate the memory-state critic in a vision-based pursuit-evasion environment between two quadrotors across two arena types. The pursuer is the learning agent, and the evader is sampled per episode from a fixed pool of heuristic behaviours. The results show that the memory-state critic outperforms the history-state critic and converges faster. In addition to being unbiased compared to the state-only critic, it maintains a slight edge in the wall arena, where the actor's history carries information that the privileged state alone does not.
