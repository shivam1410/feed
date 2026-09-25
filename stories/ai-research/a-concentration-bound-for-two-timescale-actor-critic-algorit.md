---
title: "A Concentration Bound for Two-Timescale Actor-Critic Algorithm"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.29117"
authors: ["Prashansa Panda, Shalabh Bhatnagar"]
date: "Fri, 25 Sep 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2609.29117v1"
image: ""
generated: "2026-09-25T22:38:54+05:30"
---

Significant research effort has been directed in recent years towards establishing both asymptotic and non-asymptotic convergence guarantees for two-timescale actor--critic algorithms, where the actor recursion is run on a slower timescale than the critic recursion. This work derives a uniform all-time concentration bound for the actor--critic algorithm with function approximation in the long-run average-reward setting. This bound helps us analyze the behavior of the actor parameter with high probability. We show that, after some finite time, the actor parameter enters a safe region and remains within it thereafter with high probability. Specifically, with probability at least $1-\epsilon_1-\epsilon_2$, the actor error $\Vert \theta_k-\theta^{*}\Vert$ is $O\left(\frac{n_0^{3/4}}{k}\frac{1}{\sqrt{\epsilon_2}}+\left(\frac{1}{n_0}\right)^{1/4}\log^{1/4}\left(\frac{1}{\epsilon_1}\right)+\left(\frac{1}{n_0}\right)^{1/4}\right)$ for all $k\geq n_0$ and sufficiently large $n_0$. We also present experimental results demonstrating that the aforementioned actor error diminishes with the number of actor-parameter updates.
