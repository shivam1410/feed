---
title: "Understanding and Mitigating the Fragility of Self-Rewarding Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28582"
authors: ["Rongyi Zhu, Tanqiu Jiang, Fenglong Ma, Ting Wang"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.28582v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Self-rewarding optimization (SRO) promises to improve language models by enabling them to generate their own reward signals. Yet when and how SRO succeeds or fails remains poorly understood. We reveal that SRO is fundamentally fragile: even seemingly benign perturbations to training prompts can corrupt the self-generated preference signal and trigger iterative collapse. We demonstrate this through two prompt-level attacks that serve as controlled stress tests: a Re-Ranking attack that concentrates training on prompts where self-reward diverges from an oracle, and a Preamble attack that learns short prefixes inflating self-reward without any gain in oracle quality. To explain why these attacks succeed, we introduce self-reward fidelity (SRF), a metric quantifying on-policy agreement between self-evaluated and oracle rewards. We show that SRF can serve as a diagnostic signal of self-supervision reliability, and that controlled SRF perturbations induce a phase-transition region: SRO improves when SRF remains sufficiently high, but collapses once SRF drops below a model- and task-dependent threshold. This analysis motivates Projection Decoupling Defense, which suppresses SRO update components along directions to which the reward generator is locally sensitive, improving SRO robustness under adversarial conditions. This work sheds light on the fragility of SRO and charts promising directions toward making it more robust.
