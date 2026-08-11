---
title: "A Hybrid Nested Harness for Decoupling Structure and Parameters in LLM-Driven Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.08156"
authors: ["V\\'ictor Gallego"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.08156v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.08156v1 Announce Type: new Abstract: In evolutionary algorithms powered by language models, the LLM acts as a single operator that simultaneously updates structural components (like control flow) and continuous parameters. While LLMs can be good at the first, they are not efficient at the second, wasting tokens taking discrete jumps inside a trial and error loop. We resolve this by formalizing a hybrid nested search, in which an outer loop has the LLM propose a structural sketch, with numeric gaps, and an inner numerical optimizer tunes the sketch. Both the outer and inner solvers are pluggable: any text-based optimizer can be combined with a zero-order optimizer (CMA-ES), gradient-based routines, or MCMC samplers. We validate our framework across three scientific domains: (i) meta-optimizers on closed-form test functions, (ii) code-based policies for systems research and social dilemmas; and (iii) approximate Bayesian inference tasks. Across all three, the hybrid optimizer is superior to both vanilla LLM-driven search and pure numerical optimization baselines. Code at: https://github.com/vicgalle/hybrid-nested-search
