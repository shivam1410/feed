---
title: "Deep Reinforcement Learning for Equity Trading: Benchmarking Actor-Critic Methods with Forward Retraining"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31870"
authors: ["Bicheng Wang, Xinyi Zhang"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.31870v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Consistently profitable trading is difficult because equity markets are noisy, non-stationary, and only partially predictable from historical data. We benchmark five deep reinforcement learning (DRL) actor-critic methods: A2C, PPO, DDPG, TD3, and SAC, that learn trading actions end-to-end from market states, and compare them with a supervised price-forecasting baseline. Using daily data for 20 large-capitalization S&P 500 stocks from 2000 to 2020, enriched with trend-following technical indicators and log min-max scaling, we train on 2000-2018 and backtest on 2019-2020. Each agent is evaluated both when trained once and under forward retraining, in which it is retrained on all data available before each successive test window. DDPG achieves the highest annual return (55.5%), Sharpe ratio (1.38), and alpha (0.22), but also the highest market beta (1.24). TD3 and SAC offer a better risk-return balance, with Sharpe ratios of 1.37 and 1.33 and maximum drawdowns of about 25%. Forward retraining improves A2C, PPO, and SAC, leaves TD3 essentially unchanged, and reduces DDPG's annual return from 55.5% to 29.8%, consistent with TD3's greater robustness to hyperparameters. The forecasting baseline has the smallest maximum drawdown (9.6%) and the lowest beta (0.31), underscoring a trade-off between the higher returns of end-to-end DRL and the lower risk of forecast-driven strategies.
