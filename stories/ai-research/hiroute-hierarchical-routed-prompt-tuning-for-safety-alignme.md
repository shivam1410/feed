---
title: "HiRoute: Hierarchical Routed Prompt Tuning for Safety Alignment of Large Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.12821"
authors: ["Fangzhou Chen, Shiji Zhao, Mengyang Wang, Qihui Zhu, Ranjie Duan, Maoxun Yuan, Xingxing Wei"]
date: "Fri, 14 Aug 2026 00:00:00 -0400"
score: 76
guid: "oai:arXiv.org:2608.12821v1"
image: ""
generated: "2026-08-14T19:05:44+05:30"
---

HiRoute presents a parameter-efficient safety framework that adapts LLM responses based on detected risk categories rather than applying uniform safety constraints. The method trains a lightweight hierarchical router to detect harmful intent and assign multi-label risk scores, then uses preference optimization to learn shared coarse-grained and risk-specific fine-grained prompt experts. Testing across three instruction-tuned models shows the approach achieves high safety rates while reducing over-refusal of benign inputs and maintaining response helpfulness. Benign queries bypass safety processing entirely, while risky inputs receive targeted category-specific safeguards.
