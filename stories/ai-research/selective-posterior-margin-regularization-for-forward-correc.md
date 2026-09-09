---
title: "Selective Posterior Margin Regularization for Forward-Corrected Classification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05859"
authors: ["Zexing Zhang, Jichao Li, Tianyang Lei, XiongYi Lu, Yang Kewei"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.05859v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05859v1 Announce Type: new Abstract: Learning with class-conditional label noise often relies on a transition model from latent clean classes to observed annotations. Forward correction embeds this transition in the likelihood, yet finite-sample networks may still memorize corrupted labels. The corrected likelihood also induces a reverse posterior over the clean classes that could explain each annotation. When its leading class differs from the annotation, the model and transition matrix provide evidence against that annotation, but the leading alternatives can remain nearly tied. We introduce Selective Posterior Margin Regularization (SPMR), which preserves the Forward objective and converts this disagreement into a graded update on the clean classifier. SPMR selects the leading reverse-posterior class, scales a detached pairwise margin by the separation between the two leading posterior classes, and assigns correspondingly little influence to diffuse conflicts. The gap factorizes into transition- adjusted pairwise separation and the posterior mass carried by the leading pair. The active margin follows the locally minimum-norm logit direction that enlarges the selected pairwise margin. Across five known-transition benchmarks, SPMR improves full-length Forward by 2.5-7.0 percentage points and remains 0.7-2.5 percentage points above Forward with Mixup and early stopping. Matched interventions support distinct gains from the posterior-space coefficient, transition-adjusted target, and pairwise action. The same design transfers to estimated transitions, human annotations, architectural changes, and stronger Forward recipes. The formulation uses latent-class evidence already available inside Forward correction without promoting every posterior conflict to a corrected label.
