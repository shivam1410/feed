---
title: "Explanations-Driven Active Feature Acquisition for Algorithmic Recourse"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12179"
authors: ["Vinura Galwaduge, Jagath Samarabandu"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12179v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12179v1 Announce Type: new Abstract: Algorithmic recourse methods typically assume that a predictive model has access to all features of an individual. In practice, decisions are often made with partial information, because features are costly to acquire. Active feature acquisition addresses cost-constrained prediction, but existing methods are explanation-agnostic: prior work provides explanations only after acquiring additional features, rather than using explanations to drive acquisition. This work flips that and treats algorithmic recourse and feature acquisition jointly. We use Markov Blanket theory to unify counterfactual, semifactual, and alterfactual explanations and to characterize how available recourse grows as features are acquired. Building on this framework, we propose an Explanation-Driven Feature Acquisition (EDFA) method that selects features by explanatory value per unit cost. The framework is further extended with distribution-free validity guarantees for recourse issued from partial information, which signal trustworthy, lower-cost recourse, along with a lower bound on the calibration data required to certify them. Experiments on 7 publicly available datasets with neural network-based predictive models show that EDFA acquires substantially fewer features than state-of-the-art AFA baselines while maintaining comparable accuracy and yielding more decision-relevant, actionable recourse. The implementation is available on GitHub.
