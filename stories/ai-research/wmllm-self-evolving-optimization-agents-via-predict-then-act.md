---
title: "WMLLM: Self-Evolving Optimization Agents via Predict-Then-Act World Modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01608"
authors: ["Zhongzheng Li, Qingsong Ran, Shikun Feng, Nian Ran, Wenhao Li, Xiaoyuan Zhang, Yue Wang, Xiaoguang Zhao"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.01608v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01608v1 Announce Type: new Abstract: Black-box optimization problems remain challenging because of large, weakly structured, and high-dimensional search spaces. Existing methods often suffer from poor sample efficiency because they rely on direct candidate generation or trial-and-error refinement. A natural way to improve search efficiency is to use world modeling, which can help identify promising optimization directions before costly evaluation. Large language models can predict the outcomes of these candidates with nontrivial accuracy because of their implicit knowledge. Motivated by this observation, we propose WMLLM, a self-evolving optimization-agent framework based on predict-then-act world modeling. The agent first predicts promising directions and then acts to generate candidates. Combined with agentic multi-turn refinement, population-based search, and reinforcement learning, WMLLM refines both its implicit world model and its optimization strategy during search. Experiments on black-box optimization tasks, especially multi-objective molecular optimization, show that WMLLM improves sample efficiency and final optimization performance. On the multi-objective molecular optimization benchmark, WMLLM achieves state-of-the-art results under a limited evaluation budget.
