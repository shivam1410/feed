---
title: "Odds-Ratio Thompson Sampling: A Specification and Design Guide for Contrast-Based Multi-Armed Bandits"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19709"
authors: ["Sulgi Kim"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19709v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19709v1 Announce Type: new Abstract: Batched multi-armed bandits update on a service's own schedule, and the usual implementation carries each arm's absolute reward rate from one update to the next. When the shared level moves between batches, that memory goes stale even though the comparisons between arms may not have. Odds-Ratio Thompson Sampling (OR-TS) instead carries the joint posterior over log-odds contrasts and fits the common level afresh in every batch, marginalizing it out. This paper specifies that update, places it inside a Bayesian bandit agent with two controls, decay for how much past evidence survives an update and aggressiveness for how sharply belief becomes allocation, and evaluates it against absolute-rate memory. Across 86 public A/B series the level varies about twenty-five times more than the contrast. In prespecified synthetic environments a moving level costs absolute-rate memory five times the regret and leaves the best arm below a majority of traffic in 7 of 20 runs, against none for OR-TS. In a policy simulation built from 71 real experiments, where the contrasts are too small to resolve, expected-click differences stay within 0.1% for 58 of them, yet contrast memory still ends on the better arm more than twice as often. Where the contrasts themselves move, the bet fails, and that case is reported too.
