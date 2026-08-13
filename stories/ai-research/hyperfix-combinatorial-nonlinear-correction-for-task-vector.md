---
title: "HyperFix: Combinatorial Nonlinear Correction for Task Vector Merging"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11499"
authors: ["Hyo Seo Kim, Ren Wang"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.11499v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11499v1 Announce Type: new Abstract: Task vectors enable model merging without joint retraining. In practice, the subset of task vectors to be merged may vary, but many existing methods use scalar tuning for a particular subset, requiring repeated tuning across subsets and restricting task vector merging to linear rescaling. We therefore formulate merging across varying task subsets as a combinatorial correction problem and introduce HyperFix, a lightweight hypernetwork that predicts subset-conditioned nonlinear corrections in weight space. Trained once on singleton, pair, and triple subsets from a task bank, HyperFix generalizes to larger subsets without per-subset optimization. Our local perturbation analysis bounds the residual correction beyond linear merging and motivates learning it from small task updates. Experiments across diverse benchmarks show that HyperFix outperforms existing task vector merging methods while reducing tuning cost.
