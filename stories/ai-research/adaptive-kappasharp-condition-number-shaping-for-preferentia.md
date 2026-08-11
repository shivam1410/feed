---
title: "Adaptive KappaSharp: Condition-Number Shaping for Preferential Bayesian Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.07859"
authors: ["Ketong Shao, Jialu Wang, Xuekai Pei, Ali Mesbah"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2608.07859v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.07859v1 Announce Type: new Abstract: Preferential Bayesian optimization (PBO) optimizes objectives accessible only through pairwise user comparisons. The standard approach fits a Gaussian process surrogate for observed pairwise comparisons (PairwiseGP) using the Laplace approximation and selects queries with the Expected Utility of Best Option (EUBO) acquisition function. EUBO queries new candidates at each step, producing pairs that share no candidates with previous queries. Each such pair forms an isolated component in the comparison graph, removing one degree of freedom from the likelihood Hessian and making it rank-deficient. This deficiency is structural and cannot be resolved by changing the surrogate modeling approach. Existing approaches to remedy this issue either waste query budget by forcing comparisons to stay connected, or apply uniform regularization that also perturbs directions already well-constrained by the observed comparisons. We propose KappaSharp that enables a diagonal correction to the Hessian to reduce its condition number, with larger corrections where the prior uncertainty is higher. The correction is only applied in the model fitting step, not query selection. An adaptive variant of KappaSharp is also presented that activates the correction only when the surrogate is confident about recent comparisons, avoiding unnecessary corrections when the problem is well-conditioned. On 11 benchmarks (5--20 dimensions), including a 16-dimensional controller tuning problem in plasma medicine, Adaptive KappaSharp outperforms the standard PBO baseline, with up to +10.9% ($p{=}0.003$).
