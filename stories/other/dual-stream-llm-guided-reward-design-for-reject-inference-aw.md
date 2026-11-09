---
title: "Dual-Stream LLM-Guided Reward Design for Reject-Inference-Aware Reinforcement Learning in E-Commerce Payment Fraud Detection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08706"
authors: ["Bo Qu, Zhurong Wang, Frank Zahradnik, Ming Ouyang"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08706v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Production fraud-detection models learn from a censored slice of their own traffic: transactions a legacy system blocked never receive fraud labels, so models train on a biased, approved-only distribution. We extend LLM-guided reward design, the framework of Qu et al. (2025) in which an LLM evolves the reward of a two-step REINFORCE fraud-blocking policy, to attack this reject-inference problem inside the reward. A single LLM designs a dual-stream reward: stream 1 applies the standard dollar-weighted precision objective to labeled transactions; stream 2 scores legacy-blocked, unlabeled transactions by contrasting the newest gradient-boosted risk signal against the legacy scores that drove the original block. Rather than prescribe which signals matter, we expose a superset of evidence and let the LLM decide for itself which to use, guided by evaluation feedback alone; because it writes the reward as code, that choice is directly auditable. On a held-out four-month out-of-time test, the dual-stream agent beats the prior labeled-only agent at every target recall, by +4.7, +2.4 and +3.0 points of dollar-weighted precision at 80%, 85% and 90% recall, and the production baseline by +6.8 points on average. The resulting policy is architecturally identical to that of Qu et al. (2025) and adds no inference cost.
