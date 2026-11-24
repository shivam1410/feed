---
title: "Data-Dependent Probability Estimation via Sample Amplification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28399"
authors: ["Vitaly Feldman, Satyen Kale, Mahbod Majid, Kunal Talwar"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.28399v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Can we estimate the probability of an event chosen after seeing the data, without using any fresh samples? Its empirical probability can be arbitrarily misleading, while learning the entire distribution to constant accuracy requires $\Theta(d)$ samples on a domain of size $d$. We show that $\widetilde{O}(\sqrt{d})$ samples suffice for constant mean squared error, provided the rule choosing the event is known. More generally, our estimator handles arbitrary $[0,1]$-valued queries and runs in polynomial time given evaluation access to the rule. This sample complexity matches the known lower bound up to logarithmic factors and resolves the open question posed by Feldman, Kale, Raman, Talwar, and Tewari (arXiv:2610.41244). Our estimation framework relies on a new combination of sample amplification (arXiv:1904.12053 and arXiv:2201.04315) with distribution learning via online optimization. Our estimator achieves mean squared error $O(d^{3/4}/n)$ when $d\leq n$ and $\widetilde{O}(d^{1/4}/\sqrt{n})$ when $d>n$. We complement this with a lower bound of $\Omega(\min\{1,\sqrt{d}/n\})$ on the mean squared error. Using our framework, we also design an efficient estimator for data-dependent queries on Gaussian distributions with unknown mean and identity covariance. Finally, we show that a smoothed variant of the problem is much (exponentially) easier. For discrete distributions, if the sample size is chosen uniformly from $\{n,\ldots,2n-1\}$, then $n=O(\log d)$ suffices for constant mean squared error.
