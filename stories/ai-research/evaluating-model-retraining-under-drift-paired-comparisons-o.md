---
title: "Evaluating Model Retraining under Drift: Paired Comparisons of Cumulative Subgroup Disparity"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09788"
authors: ["Aaron Ceross"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.09788v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09788v1 Announce Type: new Abstract: Choosing when to retrain a deployed classifier requires assessing subgroup error rates across the sequence of models used, including periods between updates. We compare complete scheduled, loss-triggered, and subgroup-gap-triggered policies with retaining the initial model on the same observations and delayed labels. For true-positive and false-positive rates separately, the outcome is the paired difference in absolute subgroup gaps summed over deployment windows. Population evaluation in simulation, action records, and alternative schedules assess how measurement and retraining behaviour affect these comparisons. In a follow-up sample of 400 new trajectories per condition across two simulated drift regimes, all three policies had lower mean cumulative disparity, equivalent to reductions of 0.04 to 0.88 percentage points in the average gap per window. Evaluating the unchanged models against the known generating distributions preserved all mean directions, but finite-window and population comparisons agreed on whether updating increased, reduced or left cumulative disparity unchanged in 69 to 92 percent of trajectories. Under subgroup-specific drift, smaller true-positive-rate gaps accompanied lower sensitivity in both groups. In an exploratory American Community Survey replay, person weighting reversed all three race false-positive-rate mean comparisons without changing predictions or actions; all three weighted intervals included zero. Policy comparisons require group-specific rates, action distributions, and an explicit evaluation population alongside mean disparity. These analyses are non-confirmatory. Shared replay requires policy-independent observations and complete labels after the specified delay.
