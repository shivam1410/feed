---
title: "ContinuityBench: A Benchmark and Systems Study of Stateful Failover in Multi-Provider LLM Routing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15899"
authors: ["Vishal Pandey, Gopal Singh"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.15899v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15899v1 Announce Type: new Abstract: In production large language model (LLM) deployments, high API availability guarantees do not equate to conversational continuity. When a primary provider experiences an outage or strict rate-limiting, naive stateless failover mechanisms successfully maintain uptime but silently discard conversation history, severely disrupting the user experience. To rigorously quantify and resolve this failure mode, we introduce two novel metrics: Continuity Preservation Rate (CPR) and Continuity Latency Overhead (CLO). We propose a stateful, multi-provider proxy architecture utilizing a History-Forwarding strategy to seamlessly reconstruct conversational state across heterogeneous LLM endpoints during failover events. Furthermore, we release continuity-bench, https://github.com/Vishal-sys-code/continuity-bench, an open evaluation harness designed to stress-test context preservation under high-concurrency provider failure conditions. Our empirical evaluation ($N=750$ failover events) demonstrates that our stateful proxy achieves a 99.20\% CPR [95\% CI: 98.27\%, 99.63\%], cleanly transferring deep conversational context to fallback providers, compared to a near-0\% preservation rate for standard stateless architectures. Finally, we characterize failover latency distributions, identifying the critical necessity of asynchronous exponential backoff with jitter to prevent cascading retry storms against strict-limit fallback APIs. Our results provide a principled foundation for building robust, state-preserving multi-model inference systems.
