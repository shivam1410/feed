---
title: "Optimal Multitask Representations Under a Rate Constraint: An Information Bottleneck Analysis"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30493"
authors: ["Nicholas Stiles, Gregory W. Wornell"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 20
guid: "oai:arXiv.org:2610.30493v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Which pretraining objective yields the best representation for downstream tasks under an information budget? We formalize this problem as a multitask information bottleneck, using a mutual information constraint to model incomplete information retention. For Gaussian inputs and tasks, we characterize optimal representations and show that a weakly task-aligned specialist can outperform a reconstruction generalist at low rates but lose at high rates. We also construct task families for which every fixed Gaussian prediction objective incurs arbitrarily large relative regret, driven by reversals in optimal allocation priorities. Conversely, the average task information matrix defines an objective with a uniform relative-regret bound controlled by maximum task SNR. CelebA and dSprites experiments illustrate that compression can change which pretraining objective performs best, and even task-aware training can reverse which downstream task is better preserved as rate increases.
