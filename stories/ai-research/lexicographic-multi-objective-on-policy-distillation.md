---
title: "Lexicographic Multi-Objective On-Policy Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02359"
authors: ["Doseok Jang, Jon Ander Campos, Youran Qi"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.02359v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Reinforcement learning from verifiable rewards (RLVR) usually optimizes answer correctness, yet useful language-model behavior also requires high-quality reasoning and concise responses. Existing multi-reward post-training methods typically scalarize rewards or combine specialists without explicitly protecting a reward priority order. This is problematic when trade-offs are asymmetric: conciseness, for example, should not improve at the cost of correctness. We introduce Lexicographic Multi-Objective On-Policy Distillation (LMOPD), a multi-teacher method for integrating reward-specialized policies under explicit priorities. For each student rollout, LMOPD selects the specialist for the first objective whose gate detects a deficiency, then locally projects its centered log-policy correction to remove components that oppose higher-priority specialists. We evaluate 30B-A3B mixture-of-experts transformer models in two- and four-expert settings on three math benchmarks, measuring retained specialist gains. With two experts, LMOPD's point estimates fully retain the accuracy and reasoning-quality gains while acquiring $46.9\%$ of the conciseness gain. With four experts, it retains $\approx90\%$ of both the accuracy gain and reasoning-correctness gain, compared to only $\approx57\%$ by the next best evaluated baseline. Matched four-expertablations show that lexicographic routing outperforms random routing and that projection further strengthens both top-priority capabilities. Across both scales, LMOPD preserves the highest-priority capabilities more effectively than the existing baselines we evaluate, demonstrating the value of explicit priorities for specialist integration.
