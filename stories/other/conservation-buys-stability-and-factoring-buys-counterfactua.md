---
title: "Conservation Buys Stability and Factoring Buys Counterfactuals in Physical World Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19674"
authors: ["Yufeng Wang, Parivesh Priye, Lu Wei, Haibin Ling"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19674v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19674v1 Announce Type: new Abstract: A learned simulator can reproduce its training conditions accurately yet fail in two distinct ways once those conditions change. Over long rollouts, small errors accumulate until the trajectory drifts away from physically plausible behavior; under an intervention on a physical parameter, the model may continue to follow the law seen during training rather than the intervened one. We show that these two failures require different structural remedies. Evolving a learned energy with a symplectic integrator preserves the geometry of the conservative dynamics and keeps rollouts bounded and physically meaningful for up to $100\times$ the training horizon, while equal-capacity predictors, an energy-regularized predictor, and a tuned neural ODE diverge. By contrast, encoding the physical coupling through an explicit linear factorization enables the model to follow a never-seen sign of that coupling, whereas an unrestricted parameterization remains locked to the training law. Crucially, the two mechanisms are separable: removing the structure responsible for long-horizon stability leaves counterfactual transfer intact, while removing the factorized coupling destroys counterfactual transfer without eliminating stability. This double dissociation, established with matched controls that remove or replace one structural component at a time, persists beyond the headline three-body system and remains visible when the physical state must be inferred from pixels rather than provided directly. The result is a concrete design principle for physical world models: long-horizon stability and changed-law generalization arise from distinct structural commitments, and each can be imposed deliberately without requiring the other.
