---
title: "Remember, Don't Re-read: Stateful ReAct Agents for Token-Efficient Autonomous Experimentation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14945"
authors: ["Faramarz Jabbarvaziri"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.14945v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.14945v1 Announce Type: new Abstract: The autoresearch pattern enables autonomous experimentation by having a large language model (LLM) iteratively modify code to optimize a target metric. Its stateless design, however, reconstructs experimental context from scratch at every iteration, incurring $O(n)$ token cost per iteration and $O(n^{2})$ total. This work reformulates the pattern as a stateful ReAct agent using LangGraph, where typed persistent state carries experimental history across iterations via a tool-calling interface. Two benchmarks are evaluated: hyperparameter tuning (15 iterations, small per-iteration observations) and code performance optimization (40 iterations, large per-iteration observations containing full source code and benchmark results). On hyperparameter tuning, the stateful agent consumes 90\% fewer tokens (2{,}492 vs.\ 24{,}465). On code optimization, the stateful agent consumes 52\% fewer tokens (627K vs.\ 1{,}275K) while achieving comparable optimization quality on both tasks. The token reduction is structural: the stateless agent re-reads the full history at $O(n)$ cost per iteration, while the stateful agent operates within a fixed-size conversation window at $O(1)$ cost. This paper describes the architecture in sufficient detail for practitioners to implement a stateful autoresearch agent for their own workflows.
