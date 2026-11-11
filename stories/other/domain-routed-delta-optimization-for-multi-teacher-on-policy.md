---
title: "Domain-Routed Delta Optimization for Multi-Teacher On-Policy Distillation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13249"
authors: ["Lin Yao"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13249v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Multi-teacher on-policy distillation assigns each sample a domain teacher but typically updates shared student parameters. We introduce Domain-Routed Delta Optimization (DRD-MOPD), which specifies which parameter components each domain's samples update. The student is the sum of a frozen base and trainable components initialized from expert-minus-base weights. All components participate in every forward pass; four update modes define the correspondence between sample domains and components, each with independent optimizer states. We analyze these update rules and measure retention of the original expert geometry through angles, projection coefficients, and energy. Prior work such as Open-MOPD distills directly from the base model; 97.02% of its released final checkpoint's increment energy lies outside the span of the original expert directions. In comparison, our Own checkpoint after 20 updates retains coefficients near one along each component's original direction and pairwise angles ranging from 88.04 to 92.41 degrees; its exported BF16 student's increment has 4.90% outside energy, versus 10.52% for the sum of saved FP32 components. The same checkpoint achieves a 32.72% macro score across six benchmarks, compared with 32.44% for its initial task-arithmetic merge. These measurements describe geometry and capability at the evaluated training stages and settings.
