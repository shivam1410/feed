---
title: "Cost-Optimal LLM Routing with Limited User Feedback under User Satisfaction Guarantees"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19376"
authors: ["Herbert Woisetschl\\\"ager, Arastun Mammadli, Ryan Zhang, Shiqiang Wang"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.19376v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19376v1 Announce Type: new Abstract: Inference costs for large language model (LLM) applications are rapidly growing, driven by surging demand and rising infrastructure cost. Users expect high-quality responses, and in commercial settings this is formally codified in Service Level Agreements (SLAs), creating a fundamental tension between cost and quality. Recent progress on cost-aware LLM request routing has shown potential to resolve this tension, but existing approaches rely on complete feedback signals, offline training, extensive per-workload tuning, and most lack SLA guarantees or inference-time adaptivity. We introduce SLARouter, an online routing algorithm that learns a cost-optimal policy from the sparse, one-sided user feedback available in production systems. SLARouter provides theoretical guarantees for both cost optimality and strict SLA compliance. Experiments across a wide range of LLM benchmarks show that SLARouter satisfies SLA constraints without the need for per-benchmark tuning, reducing operating cost by up to 2.2x over existing baselines.
