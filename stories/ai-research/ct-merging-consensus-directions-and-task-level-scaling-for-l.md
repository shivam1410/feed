---
title: "CT-Merging: Consensus Directions and Task-Level Scaling for LoRA Adapter Merging"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20561"
authors: ["Keumseo Ryum, Joonhyuk Kang"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.20561v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20561v1 Announce Type: new Abstract: LoRA adapters provide an efficient way to specialize a pretrained model for many downstream tasks, but deploying one adapter per task requires adapter storage and task selection at inference time. Model merging addresses this issue by combining independently trained adapters into one multi-task adapter. Recent SVD-based LoRA merging methods mainly focus on constructing shared or task specific directions, while the coefficients assigned to the final directions are often directly from the original task SVD. On a fixed merged basis, inherited coefficients preserve component order with high rank correlation, yet their magnitudes differ substantially from the coefficients induced by the task updates. To address this mismatch, we propose CT-Merging, a LoRA-aware merging algorithm that estimates consensus directions from average task subspace projectors and assigns task-level RMS coefficient scales in the final update. CT-Merging uses repeated support across task SVD subspaces to construct the common basis, while reducing reliance on rank wise SVD magnitudes after direction construction. On the DC-Merge CLIP adapter benchmark, CT-Merging achieves superior average normalized accuracy compared to state-of-the-art merging methods and further improves over DC-Merge by 2.56 points on ViT-B/32 and 1.51 points on ViT-L/14 KnoTS-trained checkpoints.
