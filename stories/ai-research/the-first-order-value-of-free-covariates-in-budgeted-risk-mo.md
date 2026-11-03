---
title: "The First-Order Value of Free Covariates in Budgeted Risk Monitoring"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00576"
authors: ["Yanze Cao"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.00576v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

A deployed model sees its inputs for free, but checking whether its risk has risen requires costly labels. We study how to spend a label budget so that a risk increase is detected quickly while false alarms stay controlled, including under input shifts that keep the risk below a safety threshold $\tau$. Let $A$ be the false-alarm control scale and $h(r)=\mathrm{kl}(r,\tau)$ the Bernoulli KL divergence between the changed risk $r$ and $\tau$. At label rate $b=c/\log A$, we prove that every rule that chooses requests from its own label history has worst-case (Lorden) delay at least $(1/h(r)+1/c)\log A$ to first order: besides collecting evidence, it must wait for its next label. The bound needs only a label budget on one finite stretch of safe source data and false-alarm control over an initial window; a bound on the average time to false alarm does not suffice. When a harmful change also shifts the inputs, a rule that lets the inputs trigger labeling attains delay $\log A/h(r)$ to first order on a fixed Gaussian model, so free covariates save at least $1/b$ rounds. A hybrid rule adds a label-history fallback for risk changes that leave the inputs unchanged. Synthetic experiments and two ACS tasks, with strengthened label-only baselines, show the predicted pattern. The covariate trigger has a cost: because its budget is calibrated on the source, a benign input shift can make it request nearly every label.
