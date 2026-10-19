---
title: "Coverage Cliffs in Off-Policy Quantile Certification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22565"
authors: ["Pauline Bourigault, Emmanuelle Bourigault"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.22565v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

We study when logged contextual-bandit data can certify an upper tail quantile for a policy selected from the same sample. We construct a PAC-Bayes Bernstein lower-confidence envelope for the target cumulative distribution function (CDF), simultaneous over a predeclared threshold grid and all data-dependent posteriors. The resulting procedure, TailCert, uses the envelope's first crossing of level p to return an atom-safe upper confidence bound on the selected posterior's pooled p-quantile (or inconclusive). It can also be used to select a policy under a certified tail constraint. The concentration ingredients are standard; the main theoretical contribution is a matched finite-class certification boundary comparing full logs with their joint weighted CDF indicators at a fixed threshold. On an explicit rare-action class, the required sample size grows linearly with the overlap factor W, logarithmically with policy-search and confidence complexity, and quadratically with the inverse CDF safety margin; the upper and lower bounds agree up to constants in the stated regime. On this class, the CDF reduction hides which actions exceeded the budget; retaining action counts restores the full-log rate. Simulations verify the predicted search-complexity shift, winner's-curse failure of naive reuse, and the power cost of splitting.
