---
title: "TVP: TV is Almost All You Need for Speculative Decoding"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00588"
authors: ["Aaryam Sharma"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.00588v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Speculative decoding accelerates LLM inference with a drafter whose proposed tokens are verified by the target model in parallel. Under lossless speculative sampling, a draft token is accepted with probability one minus the total variation (TV) distance between the target and draft distributions, yet drafters are often trained with cross-entropy (CE) or KL. We first show that under matched and well-tuned training, TV matches or surpasses several published draft-training objectives when fine-tuning, and a fixed TV and KL mixture does the same when training from scratch. We identify two remaining problems, TV's vanishing gradients on undercovered tokens and the prefix products that starve later positions in acceptance-length objectives. To address both, we derive TVP, a loss family based on expected acceptance length, whose power parameter interpolates between coverage and acceptance oriented objectives. Annealing the power from zero to one gives the highest or tied-highest acceptance length across three drafter architectures and three target models, including longer drafts and block verification. TVP improves acceptance length over CE by 9.8% when fine-tuning, and over the public DFlash2 training recipes by 6.2 to 12.9%.
