---
title: "ECOD: Experience-Calibrated On-Policy Distillation for Multi-Turn Agents"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18656"
authors: ["Jie Jin, Shengqin Wang, Yan Gao, Xin Tan, Yuan Xie"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18656v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Sparse and delayed rewards make reinforcement learning challenging for long-horizon language agents. On-policy distillation (OPD) complements environmental rewards with dense teacher feedback on student-generated contexts. Standard OPD can misalign supervision with relative teacher competence, student trajectory outcomes, and the temporal structure of task execution. Recent variants adjust guidance through divergence-based weighting and temporal schedules, while joint calibration from task-completion experience remains underexplored. We introduce Experience-Calibrated On-Policy Distillation (ECOD), which allocates teacher supervision at the task, trajectory, and turn levels. ECOD compares teacher and student success-rate posteriors under matched task conditions, restricts direct supervision to failed student trajectories, and derives a temporal prior from successful teacher lengths. The resulting weight applies to teacher losses or teacher-derived advantages. We evaluate ECOD on ALFWorld and WebShop with Qwen2.5-1.5B-Instruct and Qwen2.5-7B-Instruct. Under matched teacher settings, ECOD improves standard OPD by up to 4.06% in relative ALFWorld unseen success. Across both model scales, ECOD-assisted SOD, TCOD-F2B, and ATOD configurations yield average paired relative gains of 6.20% on ALFWorld unseen and 7.05% on WebShop, with WebShop gains ranging from 2.29% to 21.60%. These results support experience-calibrated supervision allocation as a reusable mechanism across distinct distillation objectives.
