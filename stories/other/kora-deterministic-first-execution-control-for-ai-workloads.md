---
title: "KORA: Deterministic-First Execution Control for AI Workloads"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.35869"
authors: ["Albert Heekwan Kim"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.35869v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

AI applications often invoke a model before they determine whether inference is necessary. That default is useful for ambiguous generative tasks, but it is poorly matched to work that is structured, deterministic, policy-bound, lookup-oriented, or directly verifiable. KORA introduces deterministic-first execution control: a pre-inference control layer that represents requests as task paths, attempts deterministic or structured routes first, validates route outcomes, records telemetry, and escalates to a model-candidate path only when deterministic handling is insufficient. This paper presents KORA as a deterministic-first execution-control architecture and reports bounded evidence from reproducible benchmark and validation workloads. In a reproducible 100-task deterministic-heavy benchmark, KORA-controlled execution avoided 80 of 100 simulated model invocations versus a naive direct baseline, with zero mismatches in the deterministic subset. The workload is intentionally deterministic-heavy: it includes categories such as FAQ lookup, policy/rule checking, schema or format validation, deterministic transformation, and a smaller set of model-needed ambiguous or generative tasks. A separate synthetic customer-support local/no-network validation workload demonstrates route measurement and avoided model-call accounting in an application-shaped setting. These results support bounded model-invocation reduction and validation visibility in documented workloads. They do not establish production behavior, real-provider outcomes, energy outcomes, API-cost reduction, or broad superiority.
