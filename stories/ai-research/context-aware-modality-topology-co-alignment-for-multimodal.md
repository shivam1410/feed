---
title: "Context-aware Modality-Topology Co-Alignment for Multimodal Attributed Graphs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14172"
authors: ["Sirui Zhang, Xu Wang, Zhengyu Wu, Xunkai Li, Hongchao Qin"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 54
guid: "oai:arXiv.org:2606.14172v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14172v1 Announce Type: new Abstract: Multimodal Attributed Graphs (MAGs) model real-world entities by coupling graph topology with heterogeneous attributes such as text and images. They support graph-centric tasks requiring structural and class-discriminative representations, and modality-centric tasks requiring fine-grained cross-modal correspondence. However, existing MAG methods often rely on fixed graph contexts or uniformly fused representations, causing task-agnostic propagation and over-compressed fusion that hinder diverse task requirements and modality-specific evidence preservation. To address this, we propose CoMAG, a unified MAG backbone that learns task-adaptive reliable contexts and modality-preserving alignment within them. CoMAG first conducts Reliable Context Learning by estimating edge reliability from multimodal semantic consistency, complementing raw topology with semantic neighbors, and selecting context components through a task-aware gate. It then performs Modality-preserving Hop-token Alignment by maintaining modality-specific multi-hop trajectories, matching modality-hop tokens across modalities, and decoupling shared and private representations. Thus, CoMAG produces graph and modality representations from one forward pass while retaining modality-specific cues. We further analyze stable propagation, over-smoothing mitigation, and modality-collapse control. Experiments on nine OpenMAG datasets compare CoMAG with feature-only, graph-only, multimodal, and unified MAG baselines across graph-level prediction, modality matching, and graph-conditioned generation. Results show that CoMAG achieves the best reported performance, demonstrating that task-adaptive reliable contexts and modality-preserving alignment improve structural prediction, cross-modal matching, and graph-conditioned generation while retaining sparse edge-linear complexity.
