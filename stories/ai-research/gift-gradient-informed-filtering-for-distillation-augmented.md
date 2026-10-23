---
title: "GIFT: Gradient Informed Filtering for Distillation Augmented Reasoning RL"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30796"
authors: ["Shijie Li, Yilin Gao, Tieyuan Chen, Yun Luo, Weiyao Lin, Hang Yu"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.30796v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Training large language models for complex reasoning tasks relies on two complementary signals: sparse, outcome-grounded reinforcement learning (RL) for correctness, and dense, token-level distillation for guidance. However, complementarity in supervision does not guarantee compatibility in optimization; imitation-focused distillation can conflict with the outcome-driven RL objective, and existing hybrids lack a principled resolution. We propose \textbf{GIFT} (\textbf{G}radient-\textbf{I}nformed \textbf{F}il\textbf{T}ering for Distillation-Augmented Reasoning RL), a novel method that directly addresses the allocation problem of which teacher updates to apply. GIFT performs a token-level geometric analysis, decomposing the distillation gradient into a component \textbf{parallel} to the RL gradient, which measures first-order conflict and provides a \textbf{safety} filter, and a component \textbf{orthogonal} to it, which quantifies novel directional guidance and provides a measure of \textbf{value}. This decomposition yields a principled scoring rule to rank token-level guidance. We combine this with a progressive \textbf{coverage annealing} schedule that shrinks the budget of tokens receiving distillation, ensuring that the most conflicting updates are discarded first while the most complementary ones are retained at full strength. This facilitates a smooth transition from dense, geometrically-filtered guidance to a pure, outcome-grounded objective at convergence. Extensive experiments on mathematical and logical reasoning benchmarks show that GIFT consistently outperforms strong baselines across multiple model scales, achieving relative gains of up to 9.5\% on difficult mathematical reasoning tasks. Code: https://github.com/lilifree/GIFT
