---
title: "ROTE: Benchmarking Neural Memorization on Complexity-Controlled Symbolic Sequences"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31918"
authors: ["Xinye Chen, Stefan G\\\"uttel, Mohammad Mozaffari"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.31918v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

We introduce ROTE (RollOut Testing of Exact memorization), a benchmarking protocol for evaluating symbolic memorization of neural architectures. We study memorization and the extension of symbolic rules in neural sequence models by using sequences whose complexity is regulated by Lempel--Ziv--Welch (LZW) compression. Under ROTE, each architecture is trained as the same finite-context conditional predictor and is evaluated using teacher-forced one-step prediction as well as closed-loop rollout on the withheld symbols. Following a shared prediction-and-rollout evaluation routine, the benchmark evaluates gated recurrent, minimal recurrent, attention-based, and hybrid recurrent-attention models with their native computational characteristics preserved. Beyond standard predictive metrics, the benchmark reports normalized string distances, training time, memory usage, and parameter count across an LZW-complexity sweep. The study establishes a connection between the complexity of algorithmic sequences and the memorization capacity of neural architectures, revealing the trade-offs involving memorization quality, rollout stability, and computational expense. Our software and reproducible experimental code can be obtained from https://github.com/nla-group/rote.
