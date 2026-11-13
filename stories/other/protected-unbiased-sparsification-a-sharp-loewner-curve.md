---
title: "Protected Unbiased Sparsification: A Sharp Loewner Curve"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15247"
authors: ["Ziyang Wang, Menghao Li"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15247v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Random sparsification replaces a probability vector by a random vector with few nonzero entries. We ask for unbiasedness, exact preservation of prescribed linear statistics, and a covariance guarantee for every downstream linear response. Let $p$ have $k$ positive coordinates, let $A$ specify the protected statistics, and let $d\le k-2$ be their effective rank. For every $d+1\le m\le k$, we construct an unbiased random probability vector $Q$ with at most $m$ nonzero coordinates, $AQ=Ap$ on every realization, and $\operatorname{Cov}(Q)\preceq h C_{p\mid A}$, where $h=(k-m)/((m-d)(k-d-1))$ and $C_{p\mid A}$ is the categorical covariance after optimal linear adjustment for the protected statistics. This coefficient is sharp uniformly over instances, even among biased estimators when error is measured by its second moment. A residual covariance bridge extends the concurrent unprotected curve to arbitrary pathwise linear protection. We also characterize instance-optimal constants for partitions with uniform weights within classes and derive bounds for peaked weights. For rational inputs, an exact Las Vegas sampler attains the curve within a factor $1+\epsilon$ in expected polynomial time. A separate fast block-pivotal sampler preserves block masses and is no worse in covariance order than independent sampling within blocks. Experiments illustrate the theory on synthetic weights and language-model attention. In Qwen2.5-7B-Instruct decoding, the fast sampler preserves block masses, while comparisons with VarOpt remain statistically inconclusive and top-$m$ truncation scores highest on RULER.
