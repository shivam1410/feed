---
title: "Right Knowledge, Wrong Answer: Test-Time Steering for Temporal Fact Conflicts in Open-Weight Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20959"
authors: ["Elias Hossain, Sourav Saha, Umesh Chandra Biswas, Sanjeda Sara Jennifer"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20959v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20959v1 Announce Type: new Abstract: Large language models can store both outdated facts and newer superseding facts in their parameters, but standard prompting may still elicit the outdated answer. We formalize this problem as Parametric Temporal Conflict (PTC) and introduce Temporal Attractor Steering (TAS), a three-stage test-time intervention that detects likely conflicts, identifies a conflict-critical layer, and steers hidden states toward newer-fact representations without retraining or external retrieval. We construct an 8,746-record verified benchmark across five Wikidata relations and evaluate four open-weight language models from three families: Qwen-2.5-1.5B/7B, Mistral-7B-v0.3, and Llama-3.1-8B. Single-layer activation patching achieves answer-flip rates of 0.72-0.85 across all models. End-to-end TAS resolves 29-57% of PTC cases while preserving 85-99% accuracy on non-conflict queries, outperforming a matched ITI baseline on three of four models. These results show that outdated parametric knowledge can be selectively overridden at inference time.
