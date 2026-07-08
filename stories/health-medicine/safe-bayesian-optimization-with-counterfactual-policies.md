---
title: "Safe Bayesian Optimization with Counterfactual Policies"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05620"
authors: ["Katherine Avery, Bruno Castro da Silva, David Jensen"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2607.05620v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05620v1 Announce Type: new Abstract: In many decision-making settings, new interventions are acceptable only if they do not reduce outcomes below some established threshold. For example, in clinical medicine, new treatments are often acceptable only if they do not worsen outcomes relative to an established standard of care. Safe Bayesian optimization maximizes an objective subject to safety constraints. In the setting that we consider here, safety is defined relative to a known baseline policy whose outcomes are counterfactual and therefore unobserved. Thus, the counterfactual outcomes of the baseline policy must be estimated and those (uncertain) estimates must be used to safely optimize the objective. We address this estimation problem by using conformal prediction to construct valid uncertainty intervals for counterfactual baseline outcomes, and we show how these intervals can be integrated into safe Bayesian optimization to ensure that constraint violations occur at or below a user-specified rate. We also show how to adapt these conformal estimates to different kinds of covariate shift. We provide a safety proof, experimental evidence, and a sensitivity analysis.
