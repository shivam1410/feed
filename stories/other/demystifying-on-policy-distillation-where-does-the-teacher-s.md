---
title: "Demystifying On-Policy Distillation: Where Does the Teacher's Advantage Live?"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19145"
authors: ["Yiping Li, Fan Zhao, Zhibo Hou, Zhiyu An, Wan Du"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19145v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

On-policy distillation (OPD) is increasingly studied as a cheaper alternative to reinforcement learning, yet it remains a form of knowledge distillation (KD) that relies on teacher supervision. We revisit OPD from the KD perspective by asking where the teacher's advantage lies along student-generated trajectories. Controlled token flips at teacher-student disagreements directly measure the accuracy gained from teacher corrections. Single-token flips yield a modest average gain on selected failed trajectories, whereas repeated flips raise accuracy from 28.4% to 74.5%, close to the teacher's 76.9%. Gains continue to accumulate with more flips, but mass- and KL-based selection outperform random flips by 15-18 percentage points at counts of similar magnitude. Selective intervention remains useful after OPD, but greater argmax agreement does not consistently improve accuracy across model pairs. We advocate training schedules that learn more valuable teacher corrections while maintaining distributional stability. Controlled flips and fork-resolution analysis evaluate OPD beyond accuracy by measuring which teacher preferences the student acquires and what further correction can recover.
