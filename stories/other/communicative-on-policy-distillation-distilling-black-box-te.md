---
title: "Communicative On-Policy Distillation: Distilling Black-Box Teacher Capabilities through Communication for Long-Horizon Tasks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23673"
authors: ["Lirui Luo, Kelong Mao, Xinwei Yang, Rongqing Li, Luyu Chen, Kieran Wong, Yudong Guo, Xinrui Wang, Jiayin Zhu, Gu Simiu, Sulong Xu, Cong Fang"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23673v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

On-policy distillation (OPD) is a powerful paradigm for improving language-model agents on long-horizon tasks, yet its conventional formulation relies on teacher logits that text-only black- box models do not expose. To address this limitation, we introduce Communicative On-Policy Distillation (COPD), which uses natural-language communication as a medium for distilling a stronger model's capabilities into a smaller student. During task execution, the student au- tonomously decides when to consult a black-box teacher and formulates open-ended natural- language requests without predefined question templates or intervention schedules. Successful student-teacher interactions are retained as privileged references to supervise fresh adviser-free student rollouts through on-policy self-distillation, jointly with task-reward reinforcement learning. On CAMG-II, COPD achieves 2.46 times the gain of the strongest black-box OPD baseline. The capabilities it learns through communication generalize to Terminal-Bench 2.1 and SWE-Bench Pro V2, improving task success without adviser access.
