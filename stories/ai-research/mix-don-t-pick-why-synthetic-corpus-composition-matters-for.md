---
title: "Mix, Don't Pick: Why Synthetic Corpus Composition Matters for Time Series Foundation Model Pretraining"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09912"
authors: ["Aaryan Nagpal, Debdeep Sanyal, Murari Mandal, Dhruv Kumar, Saurabh Deshpande"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.09912v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09912v1 Announce Type: new Abstract: Choosing the wrong synthetic generator for time-series foundation model pretraining is costly: under identical training budgets, the best and worst generators produce up to a $2\times$ gap in forecasting error, yet the field has no principled way to make this choice. The problem is compounded by the fact that generator rankings are not stable across architectures: across 11 generator families evaluated on Chronos-T5-Mini and Moirai-Small trained from scratch, we find that which generators are useful depends on the model architecture. Rather than solving the generator selection problem, we sidestep it: a simple equal-weight mixture of all generators matches or beats the best individual generator for both architectures, and composing this mixture with real data yields the strongest pretraining corpora overall. Synthetic pretraining is therefore a corpus composition problem, not a generator selection problem, and composition choices should be validated per model family rather than assumed to transfer.
