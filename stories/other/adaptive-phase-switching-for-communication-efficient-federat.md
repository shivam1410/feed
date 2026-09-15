---
title: "Adaptive Phase-Switching for Communication-Efficient Federated LoRA Fine-Tuning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13512"
authors: ["Jerry Adams Franklin"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13512v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13512v1 Announce Type: new Abstract: Federated fine-tuning of large language models with low-rank adaptation reduces per-client trainable parameters, but client-to-server communication remains the dominant cost. Existing accounting for federated LoRA protocols omits the asymmetric transition round when a protocol changes aggregation mode, and reports savings that ignore grouped-query attention shapes. This paper measures per-round upload and download bytes for a bidirectional B-only federated LoRA protocol and places five methods, three from prior work, on a single communication-quality frontier. The frontier has a knee, which an adaptive phase-switching aggregator, ReverseAdaptive, locates by monitoring the relative improvement in global training loss against a dimensionless threshold rather than by fixing a phase boundary in advance. On TinyLlama-1.1B-Chat with Alpaca, ReverseAdaptive attains 40.5 percent measured round-trip savings over FLoRA at a held-out instruction-following loss cost of 0.0063. It outperforms FFA-LoRA, which freezes the first of the two LoRA factors at initialization, by 0.0182 in held-out loss, more than twenty times the largest per-method seed standard deviation on that metric, so learning that factor before freezing it produces better adapters. The same threshold transfers across model scales without retuning, and the quality cost of the transition is stable across the two datasets tested.
