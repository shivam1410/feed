---
title: "Sample-Efficient Pareto Front Modeling for Energy-Aware Reinforcement Learning Using Bayesian Optimization"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03140"
authors: ["Georg Sch\\\"afer, Jakob Rehrl, Stefan Huber, Simon Hirlaender"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.03140v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03140v1 Announce Type: new Abstract: Industrial automation increasingly demands control strategies that balance operational performance with strict energy efficiency requirements. A common approach to solving this multi-objective problem, particularly within the framework of reinforcement learning (RL), is to formulate a single, scalar reward function that linearly combines the competing objectives. However, the manual weighting of these different objectives is heavily reliant on domain intuition, incredibly time-consuming, prone to human bias, and frequently fails to uncover optimal trade-off solutions. This work addresses the critical challenge of automating the weight selection process to systematically and efficiently discover the Pareto front of optimal trade-off policies. We formulate the weight selection process as a multi-objective Bayesian optimization (MOBO) problem and evaluate its sample efficiency against a standard uniform grid search baseline. Using a physical Quanser Aero 2 testbed configured for 1-DoF pitch control, our results demonstrate that the MOBO approach, utilizing the expected hypervolume improvement (qEHVI) acquisition function, consistently outperforms uniform grid sampling. MOBO achieves superior hypervolume and maximum spread, successfully identifying high-quality, diverse trade-off policies with a reduced evaluation budget, thereby enabling highly efficient energy-aware control in complex mechatronic systems.
