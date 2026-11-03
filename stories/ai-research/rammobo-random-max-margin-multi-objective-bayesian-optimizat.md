---
title: "RaMMOBO: Random Max-Margin Multi-Objective Bayesian Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00312"
authors: ["Thomas Wedenig, Paul Plantosar, Robert Peharz"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.00312v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Multi-objective Bayesian optimization (MOBO) maximizes $M$ expensive black-box objectives with the goal of approximating the Pareto set, whose objective vectors cannot be improved in one component without sacrificing another. A common quality measure is hypervolume, the volume in objective space dominated by these vectors relative to a reference point. Expected hypervolume improvement (EHVI) directly targets this metric and is one-step Bayes-optimal, but its standard computation scales exponentially with $M$, making it prohibitively expensive for many-objective problems. We introduce random max-margin multi-objective Bayesian optimization (RaMMOBO), whose acquisition function lower-bounds EHVI while requiring only linear cost in $M$ to evaluate. RaMMOBO measures the volume of a max-margin box contained in a candidate's hypervolume-improvement region and averages over random reweightings of the objective space, yielding a utility that is strictly Pareto-monotone on hypervolume-improving outcomes. It naturally handles noisy observations and different probabilistic surrogates and supports efficient gradient-based optimization. Across synthetic and real-world benchmarks, RaMMOBO matches or outperforms state-of-the-art methods, with largest gains at higher $M$, with acquisition optimization up to two orders of magnitude faster than qLogNEHVI. Our implementation is available at https://anonymous.4open.science/r/rammobo.
