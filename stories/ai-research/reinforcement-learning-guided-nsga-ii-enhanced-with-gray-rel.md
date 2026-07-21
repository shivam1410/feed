---
title: "Reinforcement Learning-Guided NSGA-II Enhanced with Gray Relational Coefficient for Multi-Objective Optimization: Application to NASDAQ Portfolio Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16194"
authors: ["Zhiyuan Wang, Qinxu Ding, Ding Ding, Siying Zhu, Jing Ren, Yue Wang, Chong Hui Tan"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.16194v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16194v1 Announce Type: new Abstract: In modern financial markets, decision-makers increasingly rely on quantitative methods to navigate complex trade-offs among multiple, often conflicting objectives. This paper addresses constrained multi-objective optimization (MOO) with an application to portfolio optimization for minimizing risk and maximizing return. To address existing gaps, we propose a novel reinforcement learning (RL)-guided non-dominated sorting genetic algorithm II (NSGA-II) enhanced with gray relational coefficients (GRC), termed RL-NSGA-II-GRC, which combines an RL agent controller and GRC-based selection to improve convergence and diversity of Pareto fronts. The agent adapts evolutionary parameters online using metrics of hypervolume, feasibility, and diversity, while the GRC tournament operator ranks parents via a unified score considering dominance rank, crowding distance, and proximity to ideal reference. We evaluate the framework on the Kursawe and CONSTR benchmarks and a NASDAQ portfolio application. On the benchmarks, RL-NSGA-II-GRC achieves convergence improvements of about 5.8% and 4.4% over NSGA-II, while preserving well-distributed non-dominated solutions. In the portfolio application, it produces a smooth, densely populated efficient frontier supporting identification of the maximum Sharpe ratio portfolio (annualized Sharpe =1.92) and utility-optimal portfolios for different risk-aversion levels. The main contributions are three-fold: 1) we propose an RL-NSGA-II-GRC method integrating an RL agent into the evolutionary framework to adaptively control parameters via generational feedback; 2) we design a GRC-enhanced binary tournament operator providing a comprehensive indicator to guide the search toward the Pareto front; 3) we demonstrate, on benchmark MOO and a NASDAQ case study, that the method delivers improved convergence and well-populated frontiers supporting actionable insights.
