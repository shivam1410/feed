---
title: "CaLA: Causal Latent Adjustment for World Models under Adaptive Policies"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31431"
authors: ["Robert Ness, Sofiane Ennadir, Oleg Smirnov"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.31431v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

World models is answering ``imagine" answers to ``what-if'' questions via imagined rollouts. But rollouts collected by adaptive policies induce treatment-outcome confounding in imagined rollouts. We study this problem in Match-3 difficulty adjustment, where latent player skill influences both assigned difficulty and churn. We build a fully specified Match-3 SCM with sequential mechanics, adaptive assignment, and paired ground-truth interventions, on which unadjusted models fit to the logged trajectories select difficulty settings that raise churn. We then introduce Causal Latent Adjustment (CaLA), a DAG-constrained world model that infers a variational player representation from pretreatment history. Across our evaluations, CaLA provides the most reliable population-level intervention estimates and competitive individualized decisions, although rich handcrafted histories can remain advantageous for individual-level adjustment. We further find that residual correction can degrade causal decision quality despite improving predictive fit, highlighting the need to distinguish predictive accuracy, confounding adjustment and the behavior of downstream causal estimators.
