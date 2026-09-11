---
title: "Estimating Inconsistency Response Surfaces under Uncertainty in Cyber-Physical System Development"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11331"
authors: ["Johannes M\\\"akelburg, Tim Schwabe, Maribel Acosta"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11331v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11331v1 Announce Type: new Abstract: Cyber-Physical Systems (CPS) are commonly represented through multiple interconnected models. During development, CPS consistency requires that shared model elements remain compatible across these models. Uncertainty, for example, due to sensor noise or model abstraction, changes the admissible values of model elements and can introduce inconsistencies, i.e., situations in which models can no longer be jointly satisfied. While existing approaches can determine consistency for a given uncertainty configuration, they provide limited support for systematically exploring, analyzing, and explaining inconsistency across large uncertainty spaces. We address this challenge by reformulating inconsistency as an intervention response modeling problem. Using Saltelli sampling and multi-fidelity Monte Carlo estimation, we generate intervention-response datasets and train a surrogate model that directly predicts inconsistency from the propagated uncertainty geometry. Experiments on 48 scenarios and 10 CPS domains show that the surrogate matches Monte Carlo estimates while reducing evaluation time from milliseconds to microseconds, enabling orders-of-magnitude more response-surface evaluations within fixed computational budgets. Building on the learned response surfaces, we perform sensitivity analysis to identify dominant uncertainty drivers and introduce a gradient-based consistency recourse method to determine minimal uncertainty interventions that restore consistency. The results show that inconsistency under uncertainty can be effectively learned, analyzed, and repaired through response-surface modeling, providing a scalable foundation for uncertainty-aware consistency management in CPS development.
