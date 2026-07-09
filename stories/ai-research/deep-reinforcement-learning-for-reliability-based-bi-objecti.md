---
title: "Deep Reinforcement Learning for Reliability Based Bi-Objective Portfolio Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06610"
authors: ["Sounaq Das, Tanmay Sen, Raghu Nandan Sengupta, Aditya Gupta"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.06610v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06610v1 Announce Type: new Abstract: Portfolio optimization under uncertainty is inherently a multi-objective decision problem involving complex interactions among return, risk, market dynamics, and practical investment constraints. Existing reliability based portfolio optimization approaches primarily rely on static optimization frameworks and often fail to capture sequential decision making, tail risk, and market frictions such as transaction costs. To address these limitations, we propose a deep reinforcement learning framework for multi-objective reliability based portfolio optimization (MORP-DRL). The proposed framework jointly optimizes expected return and downside risk using three complementary risk measures: variance, Conditional Value-at-Risk (CVaR), and Entropic Value-at-Risk (EVaR). To model uncertainty and heavy-tailed market behavior, asset returns are represented using GARCH(1,1), Extreme Value Theory, and a t-copula dependence structure, while realistic scenarios are generated through quasi-Monte Carlo simulation. A Proximal Policy Optimization (PPO) based strategy is developed under practical constraints including transaction costs and portfolio bounds, and is benchmarked against NSGA-II. Experiments on ten global equity indices across pre-COVID, COVID, and post-COVID market regimes demonstrate that MORP-DRL achieves competitive risk-return performance, reduced downside risk during periods of market stress, and scalability to high-dimensional portfolio settings.
