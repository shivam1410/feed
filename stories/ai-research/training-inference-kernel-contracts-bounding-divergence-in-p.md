---
title: "Training-Inference Kernel Contracts: Bounding Divergence in Post-Training and Deployment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07581"
authors: ["Bruce Changlong Xu, Lan Wu"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2606.07581v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07581v1 Announce Type: new Abstract: A modern post-training pipeline often writes one symbol for its policy, pi_theta, while evaluating it through two different programs: a training kernel optimized for autograd and an inference kernel optimized for low-precision, fused, dynamically batched serving. In finite precision, these kernels can induce different distributions at identical weights, with the gap concentrated on slices that aggregate benchmarks under-represent. This paper proposes kernel contracts: a contract-first framework for specifying acceptable divergence between K_train and K_inf. A contract C = (N, S, R, O, Pi) combines numerical, statistical, runtime, and observability clauses with an escalation policy from violations to routing actions. We derive a chain of bounds from logit drift to total-variation distance to bounded reward drift, and specialize it to RL post-training, where per-token importance-ratio drift yields a bound on policy-gradient bias under explicit support and norm assumptions. We also describe a four-stage promotion pipeline, online routing loop, and minimal YAML DSL for contract artifacts. This is a framework and vocabulary paper; we do not report production-scale empirical validation.
