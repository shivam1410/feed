---
title: "Selected-Risk Calibration for Feasibility at Returned Decisions"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10050"
authors: ["Raghav Thind, Youran Sun, Ling Liang, Haizhao Yang"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10050v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

When an optimization problem uses a surrogate constraint, a decision that is feasible for the surrogate need not be feasible for the true constraint. We propose Selected-Risk Calibration (SRC), a framework that calibrates a learned constraint against the optimizer's returned decisions for objectives drawn from a given distribution. SRC guarantees that, with probability at least $1-\delta$, every margin it certifies on held-out objectives has selected risk, the probability that the returned decision is infeasible, of at most $\gamma$. We also show that the random-input coverage guarantee of split conformal prediction does not bound the selected risk, and that likelihood-ratio reweighting for feedback covariate shift does not apply when the learned constraint is active at the returned decision. Our experiments show that a conformal margin covering about $90\%$ of random inputs covered as few as $17\%$ of the returned decisions, and every certified margin had a violation rate below its target on unseen objectives. Moreover, at equal cost, SRC's correction had fewer or equal infeasible solutions to the baselines in 57 of 62 comparisons. The SRC framework applies to any setting in which a surrogate model chooses a decision whose feasibility can be verified for a sample of instances.
