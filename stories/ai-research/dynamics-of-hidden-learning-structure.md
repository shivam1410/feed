---
title: "Dynamics of Hidden Learning Structure"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.29054"
authors: ["Qinyou Wang"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 22
guid: "oai:arXiv.org:2610.29054v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

A learner's present predictions do not fully determine how it will learn next. We study the dynamics of hidden learning structure through two related operations. Fiber Regulation Theory (FRT) describes protected repair of existing function and the learning responses left available after repair. Fiber Acquisition Theory (FAT) describes the formation and renewal of trainable structure, distinguishing neutral installation, access to a learning signal, and additional functional directions. The two operations also constrain one another. A repair obligation can force a change in a learning channel, while acquired features can make new protected repairs feasible or reduce the minimum coefficient cost of existing ones. We characterize joint admissibility and response reachability, and give a finite supervised-learning construction in which the two operations together produce a favorable response absent from either operation alone. We implement protected head repair and fixed-capacity LoRA renewal in Qwen2.5-32B with AdamW, under replay and output distillation. Across two training trajectories differing in seed and within-task example order, the coordinated policy achieves higher teacher-forced Exact than either separate policy in all four comparisons. It also has the lowest macro NLL under both learning rules on the second trajectory. The implementations realize structure-conditioned self-regulation within specified information and action constraints: accessible state readouts and arrived evidence guide repairs and structural renewals, and ordinary learning continues from the modified state.
