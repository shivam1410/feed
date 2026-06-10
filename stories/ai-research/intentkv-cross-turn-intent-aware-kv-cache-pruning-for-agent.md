---
title: "IntentKV: Cross-Turn Intent-Aware KV Cache Pruning for Agent Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09916"
authors: ["Junjie Li, Jiong Lou, Jie Li"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.09916v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09916v1 Announce Type: new Abstract: Multi-turn LLM agents fan short queries into long trajectories of tool calls, search results, and intermediate reasoning. Both KV memory and KV read bandwidth grow by orders of magnitude across a single trajectory, making the key-value (KV) cache, not parameter compute, the dominant serving bottleneck for long-horizon agents. We introduce IntentKV, learned KV pruning that keeps the base LLM frozen. IntentKV maintains a session-level QueryMemory of cross-turn intent, scores live history tokens with a memory-attention rule, and adds a zero-initialized residual head with cross-attention over current-query K-vectors. To stay composable with prefix caches, eviction is a slot-map redirection: dropped positions route to a sentinel dead slot while surviving K/V rows, RoPE phases, and slot identities stay in place. IntentKV matches the no-pruning full-cache baseline with almost no accuracy drop under tight KV budgets: at an 8k KV budget, mean peak request tokens drop 23.9% on Qwen3-8B and 30.7% on Qwen2.5-14B. On the 100 longest BCP queries that all methods complete on Qwen2.5-14B, IntentKV-8k further cuts worst-case peak request tokens from 92.3k to 20.5k, a 77.8% reduction, and worst-case raw KV reads from 411M to 31M, a 92.6% reduction.
