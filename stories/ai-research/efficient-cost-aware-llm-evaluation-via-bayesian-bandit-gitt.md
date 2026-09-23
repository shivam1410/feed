---
title: "Efficient Cost-Aware LLM Evaluation via Bayesian Bandit Gittins Indices"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25645"
authors: ["Qian Xie, Yueli He, Nairen Cao"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.25645v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25645v1 Announce Type: new Abstract: Exhaustively evaluating every candidate LLM configuration on every benchmark item to identify a high-performing one is costly. We formulate configuration selection as a cost-aware Bayesian bandit problem and propose GittinsEval, which draws on the Bayesian-optimal Gittins policy to determine which configuration to evaluate next and when to stop. We extend the policy with an anytime recommendation rule over both fully and partially evaluated configurations, using an LCB-style score to account for posterior uncertainty. GittinsEval is computationally efficient, requiring only lightweight online updates after offline precomputation. Across GSM8K, PIQA, AlpacaEval, and MMLU response matrices, GittinsEval is consistently competitive, with particularly strong gains over configuration-level Bayesian optimization on large-example benchmarks and over cost-unaware bandit baselines on large-candidate tasks. Crucially, GittinsEval often attains near-zero simple regret using only 1% to 2% of the exhaustive-evaluation cost; it also offers an adaptive stopping rule that typically triggers at 1% to 10%.
