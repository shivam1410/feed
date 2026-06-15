---
title: "Lyapunov-Based Sample Complexity Analysis for Weakly-Coupled MDPs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14095"
authors: ["Tianhao Wu, Matthew Zurek, Weina Wang, Qiaomin Xie"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2606.14095v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14095v1 Announce Type: new Abstract: We study the sample complexity of learning in average-reward weakly-coupled Markov decision processes (WCMDPs) and Restless Bandits (RBs) under a generative model. Naive reduction to a tabular MDP leads to high complexity bounds as the state-action space is exponentially large in the number of arms $N$. By exploiting the weakly coupled structure, we show that near-optimal policies can be learned with sample and computational complexities that are polynomial in $N$. Specifically, we analyze the plug-in approach, which applies an efficient planning algorithm to an empirical model estimated from data. For fully heterogeneous WCMDPs, we establish the first finite-sample PAC guarantee with polynomial complexity and an $O(1/\sqrt{N})$ optimality gap. For homogeneous RBs, we further prove that a smaller optimality gap is achievable under mild structural assumptions. A primary technical contribution of our work is a novel Lyapunov-based analysis framework. Unlike classical approaches that rely on the difficult-to-control bias function, our framework uses an explicitly constructed Lyapunov function along with a drift transfer technique between the true and empirical models. A key step of independent interest in our framework is a fine-grained perturbation analysis for the underlying linear programming (LP) relaxation, which provides a general tool for analyzing LP-based policies and weakly-coupled systems.
