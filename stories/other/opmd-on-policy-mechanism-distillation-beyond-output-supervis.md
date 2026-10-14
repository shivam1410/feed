---
title: "OPMD: On-Policy Mechanism Distillation Beyond Output Supervision"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14022"
authors: ["Yingdong Shi, Zhihong Li, Changming Li, Jingyi Yu, Quan Li, Kan Ren"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14022v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

On-policy distillation (OPD) improves language-model by supervising a student on prefixes sampled from its own policy, but its supervision remains confined to the output space. Consequently, OPD transfers what a teacher predicts without supervising the intermediate computation that produces those predictions. Simply distilling intermediate representations like representation matching is insufficient since teacher and student representations may differ geometrically, and even well-aligned hidden states need not be usable by the student's subsequent computation. We introduce On-Policy Mechanism Distillation (OPMD), which transfers teacher-derived intermediate computation while explicitly accounting for its compatibility with the student. OPMD first constructs a student-compatible teacher that transforms teacher representations into intermediate states usable by the student's downstream computation, then it internalizes these states from on-policy trajectories. OPMD achieves the highest average accuracy among the evaluated distillation baselines in all three teacher--student settings, and generalizes to multi-teacher distillation and cross-family supervised fine-tuning. Further analyses show that mechanism supervision yields more effective reasoning and meaningfully alters the student's intermediate computation and solution strategies, supporting that it transfers information beyond output supervision alone. Together, these results establish mechanism-level supervision as an effective way to move on-policy distillation beyond output supervision, enabling students to learn inner mechanisms they can use and internalize.
