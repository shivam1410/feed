---
title: "A Composable AI-Accelerated Iterative Solver for 3D-IC Thermal Modeling"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02461"
authors: ["Yixing Li, Jiahang Zhou, Zhiyu Zeng, Xin Ai"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.02461v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Accurate thermal analysis of heterogeneous 2.5D/3D-IC packages is essential yet computationally prohibitive. A single full-package FEM simulation can take hours, while AI-based surrogates treat the entire stack as a monolithic prediction target and must be retrained whenever the die count or topology changes. To address this limitation, this work proposes Domain-Decomposed AI-Accelerated Iterative Solver for Thermal Analysis (DAIST), a composable thermal solver that decomposes the global package simulation into block-level subdomain problems, replaces subdomain solvers with neural operators, and couples them through iterative exchanges of interfacial temperature and heat flux. This local-to-global architecture eliminates the topology lock-in of monolithic models: block-level neural operators can be directly reused in unseen package assemblies without retraining. The iterative coupling strategy further provides a controllable accuracy-runtime tradeoff, where the iteration budget can be adjusted to trade accuracy for runtime. Evaluated on a multi-chiplet system and an advanced packaging system, DAIST achieves up to $178\times$ speedup over traditional FEM solvers with mean temperature errors of 0.068% and 0.323%, respectively, while demonstrating cross-topology reuse of block-level models across structurally distinct package assemblies.
