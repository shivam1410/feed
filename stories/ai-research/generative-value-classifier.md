---
title: "Generative Value Classifier"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22497"
authors: ["Alexander Swerdlow, Perry Dong, Chelsea Finn"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.22497v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Q-learning is premised on learning a function to predict the value of a state-action pair, with the goal of using such a function to guide policy improvement. Most approaches learn this function from scratch using scalar or distributional return targets. This discriminative approach leaves another source of supervision for learning representations unused: the actions themselves. Rather than directly predict the return of a state-action pair, we ask the reverse question: how likely is the action under each possible return? This perspective provides a critic whose generative component is a return-conditioned policy, which can share the actor's architecture. Training this policy supervises the critic with every action rather than with returns alone, and a squared-error loss anchors the critic's Q-value to the bootstrapped target. We evaluate our approach on both offline and online RL tasks and show gains over leading discriminative methods, including distributional RL methods.
