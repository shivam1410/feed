---
title: "Trains but Doesn't Learn: A Post-Training Delivery Benchmark for LLM Agents as Forward-Deployed Engineers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25237"
authors: ["Weihang Ding, Junfei Zhan"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.25237v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25237v1 Announce Type: new Abstract: Post-training is becoming a service (PTaaS): a customer hands an operator data and a goal, and a forward-deployed engineer (FDE) returns a fine-tuned, evaluated, and deployed model under a budget, a human-approval gate, and reproducibility requirements. Seating an LLM agent in the FDE seat raises a question existing benchmarks cannot answer: not whether an agent can raise a metric, but whether it can be trusted to deliver. We answer it on a governed delivery plane, where an agent drives ten stages and an oracle scores each stage from platform-recorded facts. The central silent failure is the run that trains but does not learn (TBDL): loss falls, every signal stays green, and the delivered model is no better than the base. An operator-run acceptance gate catches every such run before payment, and a detector calibrated on known-corrupted runs flags severe corruption mid-run. We ran four frontier agents (Claude Opus 5, GPT-5.6-luna, Gemini 3.7 Flash, DeepSeek V4-Pro) end to end on metered L40S, A100, and H200 GPUs across 8B to 70B open bases, certifying every scenario before scoring. We also ran a human FDE arm under the same oracle and compare every agent against it.
