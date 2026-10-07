---
title: "SchemaFill: Efficient LLM Tool Calling via Slot-Parallel Speculative Decoding"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07086"
authors: ["Zhi-Kai Chen, Song-Yan Li, De-Chuan Zhan, Han-Jia Ye"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 80
guid: "oai:arXiv.org:2610.07086v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Parallel speculative decoding generates tool call arguments concurrently, then verifies against sequential model output, committing only verified tokens. Achieves 4.05x throughput improvement on benchmarks. Matters because agents call multiple tools with many arguments, and autoregressive token-by-token generation becomes slow; this exploits the explicit structure to parallelize safely.
