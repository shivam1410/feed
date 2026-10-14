---
title: "CoEvoke: Evoking Multi-Agent Collaboration for Trajectory Collection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14021"
authors: ["Lin Wu, Shu Yao, Yuheng Wang, Jingru Fan, Huatao Li, Yihan Li, Liu Yixuan, Cheng Liu, Jian Chang, Zeyu Zhao, Aohua Zhang, Huiying Zhao, Shuyuan Zhu, Chen Qian"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14021v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Training multi-agent collaboration requires trajectories of checking, feedback, and repair, yet task-solving rollouts may end in immediate approval or repeat unsuccessful attempts without useful correction. We introduce CoEvoke, a cross-domain framework that evokes these interactions during trajectory collection. Controlled perturbations create recoverable difficulties, while restricted reference-based guidance directs investigation. The resulting dataset contains 4,567 reconstructable trajectories over 4,130 software-engineering and reasoning tasks, linking public interactions to evidence, decisions, and task-native outcomes. Separate experiments over 2,287 same-task pairs show feedback increases of 47.72-100 percentage points across seven perturbation groups; guidance has smaller, model-dependent effects. With identical training tasks, decision-record counts, and updates, perturbation-enriched judge training improves ACPBench-Hard success from 35.38% to 42.12% (+6.73 points). SWE verifier training gains 7.60-9.40 points over interface-matched untrained references. Workflow and post-training evaluations preserve task-solving topology with unperturbed inputs and no private-reference guidance. These results support designing collection conditions to obtain corrective supervision that improves collaborative decisions with frozen solving agents.
