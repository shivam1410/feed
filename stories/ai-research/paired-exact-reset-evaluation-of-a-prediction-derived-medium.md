---
title: "Paired Exact-Reset Evaluation of a Prediction-Derived Medium-to-Full World-Model Cascade"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14650"
authors: ["Malo de Pastor"]
date: "Wed, 19 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.14650v1"
image: ""
generated: "2026-08-19T19:06:05+05:30"
---

arXiv:2608.14650v1 Announce Type: new Abstract: Existing adaptive-inference and world-action-model systems use cheap-stage outputs or predicted futures to allocate additional computation. We study a narrower question: under paired exact-reset physical outcomes, can a Medium-derived interface predict when switching to a separately frozen Full predictor improves task-specific decision loss enough to justify sequential overhead? Our contribution is a paired evaluation and audit protocol, not a new generic routing rule: all candidate actions are executed from the same reset state, Medium and Full act on the same candidate set and task, and their paired physical-loss difference defines the routing target. On a fresh PushT bank (V106; 1,600 states, 39 tasks, three checkpoint pairs), a frozen prediction-interface router lowers overhead-inclusive decision cost relative to standalone Medium, standalone Full, and a latency-advantaged task-only router. We then prospectively seal a second 1,600-state PushT confirmation (V107) against a stronger current-state control using the task, a dimension-matched projection of current DINO features, and all five candidate actions, with no DINO encoder latency charged. The prediction interface lowers priced physical decision cost by 0.002549 (state-clustered 95% interval [-0.002867, -0.002238]; one-sided 95% upper bound -0.002286), with negative effects for all three checkpoint pairs. A controlled-PyBullet audit independently supports a composite task-prediction-regime router. The sequential router remains slower than fixed policies, and its advantage is restricted to low compute prices. The evidence supports incremental routing information in the tested prediction interface beyond one deliberately favoured current-DINO control, but not causal sufficiency, compute saving, closed-loop value, or cross-family generality.
