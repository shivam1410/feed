---
title: "Estimating Rare Events in Language Models with Proper Evaluation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18454"
authors: ["Nikita Y. Parulekar, Anqi Liu"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18454v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18454v1 Announce Type: new Abstract: Quantifying the risk of rare failures in language models, such as those triggered by adversarial distribution shifts or very large-scale deployments, requires estimating probabilities far too small for random sampling. While recent work has formalized Low Probability Estimation, existing pipelines remain fragile in the rarest regimes: estimators can suffer zero-estimate collapse or systematic bias, and standard evaluation losses can become unstable or poorly matched to asymmetric safety costs. In this work, we introduce Gradient Activation Adaptive Multi-Level Splitting (GA-AMLS), which adapts rare-event Monte Carlo methods to the continuous activation space of language models. Specifically, GA-AMLS uses a gradient-based MCMC kernel to navigate activation space, eliminating the zero-estimate collapse of input-space search and replacing the independence assumptions of prior activation-space estimators with conditional sampling under an explicit, heavier-tailed activation prior. We also propose the Shifted-Power Bregman (SPB) Loss, a proper scoring rule that remains finite for zero-estimates and offers tunable asymmetry between underestimation and overestimation penalties. Experiments on small transformer models reveal a bias-variance tradeoff: GA-AMLS achieves the lowest loss under symmetric evaluation, reducing average log-space squared error relative to the strongest baseline across model sizes, while methods with overestimation bias prevail under asymmetric penalties. Our findings highlight that estimator choice should be matched to deployment context. More broadly, our work establishes activation space as a tractable domain for rare-event estimation in language models, circumventing the brittleness of discrete input-space search.
