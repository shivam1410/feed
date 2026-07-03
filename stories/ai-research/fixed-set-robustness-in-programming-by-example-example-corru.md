---
title: "Fixed-Set Robustness in Programming by Example: Example Corruption and Semantic Partition Recovery"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01280"
authors: ["Yuan Si, Jialu Zhang"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.01280v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01280v1 Announce Type: new Abstract: Programming-by-example systems infer programs from a small set of input-output examples. Robust PBE work usually models wrong examples as samples from a stochastic noise process and then minimizes an expected or empirical loss. This paper studies a different failure mode: an adversary who sees the synthesizer and chooses the examples whose corruption most damages the returned program. We formalize fixed-set worst-case corruption for finite PBE version spaces, implement exact-within-bounded-pool and heuristic corruption searches for a string-transformation DSL, and introduce version-space partition aggregation (VPA), a defense that synthesizes on disjoint example groups and votes by semantic signatures. The central claim is deliberately bounded and partly negative: low-margin PBE tasks have an adversarial robustness dimension that random-typo and noisy-PBE evaluations miss, while semantic partition aggregation helps only when the clean semantics keep a partition vote margin, which often fails on realistic tasks. Evidence from curated/generated DSL tasks, accepted public SyGuS PBE_SLIA slices, SYNTRA Playgol v2, and noisy-PBE objective baselines supports that boundary. One curated edit flips all 8 spike tasks while 200-trial typo, DSL-pool, and distance-matched random controls succeed on 10.3%, 11.0%, and 16.7%; generated margin-1 rows flip under budget 1 yet VPA recovers them; on public SyGuS the vote margin is near one, so an adaptive attacker drives VPA accuracy to zero; accepted public SyGuS slices move across exact-within-pool budget boundaries; and Playgol shows positive paired-bootstrap gaps against typo and same-pool random controls on the 141 accepted rows. A small exact-output prompt harness over 20 controlled margin-1 tasks shows the same qualitative clean-to-attacked pattern across local and API models, while it is treated as a scope check, not a broad LLM benchmark.
