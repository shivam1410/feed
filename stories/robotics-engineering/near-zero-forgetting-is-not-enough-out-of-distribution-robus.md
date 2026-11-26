---
title: "Near-Zero Forgetting Is Not Enough: Out-of-Distribution Robustness in Continual Learning of Pretrained VLAs"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31511"
authors: ["Adri\\`a Ruiz, Bart{\\l}omiej Twardowski, Tinne Tuytelaars, Sergi Masip"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.31511v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Recent work shows that pretrained Vision-Language-Action (VLA) models exhibit near-zero forgetting in specific continual learning settings with experience replay. However, robustness to domain shift of learned tasks remains unexplored. In this work, we study the robustness of Pi0 fine-tuned with experience replay under out-of-distribution (OOD) data using the LIBERO and LIBERO-Plus benchmarks. While the in-domain (ID) setup achieves near-zero catastrophic forgetting, OOD performance on previous tasks quickly collapses. Specifically, we show that during the continual learning process, the OOD capabilities of the model degrade, following a shared representational pattern across domain shifts, which is also visible behaviorally in the two simpler suites. Representational analysis shows that drift concentrates in the multimodal and action features. Linear probes indicate that OOD features still retain task-relevant information, but appear unreadable, consistent with representation misalignment. These findings suggest that even when ID stability remains intact, severe OOD forgetting can still occur, accompanied by representational drift during continual learning.
