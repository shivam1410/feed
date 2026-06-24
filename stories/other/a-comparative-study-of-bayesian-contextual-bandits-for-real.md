---
title: "A Comparative Study of Bayesian Contextual Bandits for Real-Time Warehouse Sorter Optimization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23977"
authors: ["Tina Dongxu Li, Mouhacine Benosman, Ken Meszaros, Trevor Dardik"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23977v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23977v1 Announce Type: new Abstract: Efficient sorter diversion control of automated material handling systems (MHS) is critical for optimizing operational efficiency in large-scale warehouse environments. In this study, we use an inbound receiving sorter at a high-volume e-commerce warehouse as our primary use case, where the sorter diversion system relies on cost functions with static weight configurations that fail to adapt to highly dynamic system contexts, such as volume mode, congestion level, equipment physical status, and upstream/downstream dependencies. To address this real-time sorter diversion optimization challenge, we conducted a comparative study of three candidate hybrid machine learning frameworks: Linear Regression with Gradient Descent Optimization (LR+GDO), XGBoost with Bayesian Optimization (XGB+BO), and Bayesian Contextual Bandits (BCB). Model training and evaluation were enabled by leveraging a high-fidelity physics-aware emulator to overcome the cold-start problem and allow a safe transition from offline to online learning. We performed comprehensive evaluations including reward model predictive accuracy, contextual sensitivity, action distribution, and projected reward uplift. Our results demonstrate that while tree-based reward models offer slightly better predictive power, the BCB framework achieved overall higher performance with 2.03% reward uplift over the heuristic baseline. Furthermore, BCB exhibits several superior characteristics, such as its decisive time-optimal policy backed by Bang-Bang control theory, continuous online learning capability, strategic balance between exploration and exploitation, and significantly shorter inference latency. These results demonstrate the potential of the BCB framework for real-time control optimization in large-scale warehouse environments, motivating further investigation toward operational deployment.
