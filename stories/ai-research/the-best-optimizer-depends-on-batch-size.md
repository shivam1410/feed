---
title: "The Best Optimizer Depends on Batch Size"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08975"
authors: ["Xingyu Dang, Kaiyue Wen, Sadhika Malladi"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.08975v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

A plethora of new adaptive optimizers are designed to efficiently estimate and use minibatch gradient statistics to shape parameter updates, but they are typically benchmarked at a single batch size. Hyperparameter scaling rules promise to preserve performance as batch size and gradient noise change, suggesting that the best optimizer at one batch size should remain the best at another. We challenge this approach to developing and evaluating optimizers by showing: (1) no principled scaling rule for Muon works consistently across training settings, and (2) the best optimizer for language model pretraining changes with batch size even after extensive hyperparameter tuning.
