---
title: "Meta-Frieren: Beyond Single Level Online Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07169"
authors: ["Vahan Arsenyan, Arnak Dalalyan"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07169v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

We study a two-stage online optimization problem: at each round, a meta-learner first selects an agent-environment pair, then the chosen agent interacts with the environment, and receives a reward. We introduce Meta-Frieren, a general framework for maximizing cumulative reward in this setting. Our analysis yields a simple UCB-style criterion for meta-level selection and recovers prior guarantees as special cases while extending them to broader settings. We instantiate Meta-Frieren with GP-UCB under Bayesian and frequentist assumptions. We also derive, to our knowledge, the first high-probability regret bound for Feel-Good Thompson Sampling, specialize it to finite and parametric function classes, and integrate it into Meta-Frieren. Experiments support our theoretical results and demonstrate that Meta-Frieren can be successfully applied to hyperparameter optimization across multiple model classes.
