---
title: "Continuous-time Optimal Stopping through Deep Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17545"
authors: ["Cosmin Borsa, Michael Ludkovski"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.17545v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17545v1 Announce Type: new Abstract: Simulation based solvers for optimal stopping problems must discretize the stopping decision. Under classical dynamic programming, a coarse exercise grid with only a few stopping opportunities can materially undervalue the optimal expected reward, whereas on a very fine grid, approximation errors accumulate through the backward recursion. To remove this limitation, we develop a new reinforcement-learning inspired algorithm that enables us to learn the exercise rule at arbitrarily fine time resolution. Our CARLOS (Continuous-time Adaptive Reinforcement Learning for Optimal Stopping) algorithm utilizes an aggregate deep neural network (ADNN) to learn a joint space-time decision boundary. Starting from a coarse time grid, we progressively increase the frequency of stopping opportunities, while in parallel training the ADNN to refine its timing-value estimates. We moreover design an adaptive sampling strategy that gradually concentrates training effort near the stopping boundary. Benchmarked results show that CARLOS delivers higher prices than existing Bermudan solvers, approaching the American upper bound, and achieves high computational efficiency relative to non-RL comparators.
