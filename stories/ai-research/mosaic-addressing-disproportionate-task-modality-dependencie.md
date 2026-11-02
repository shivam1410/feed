---
title: "MOSAIC: Addressing Disproportionate Task-Modality Dependencies via Modality-Partitioned Gradient Routing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41004"
authors: ["Aryan Chowdhury, Yizheng Sun, Thomas Carroll, Riza Batista-Navarro"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2610.41004v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

In multi-task settings, combining multiple modalities allows task representations to draw on signals that a single modality alone would not capture. However, individual tasks may depend disproportionately on particular modalities, a structure that conventional fusion-based architectures do not model explicitly, instead enforcing a unified representation space. Consequently, a task's gradients can affect parameters tied to modalities it barely relies on, leaving features that compromise between competing demands. Although prior work has explored task-weighting and loss-balancing strategies, their effectiveness is limited by the absence of explicit modality separation, preventing models from optimising each modality according to its task-specific importance. To address these limitations, we propose MOSAIC (MOdality-Separated Architecture with Inter-modal Cross-attention), which preserves unimodal representations while enabling controlled interaction between them, and uses modality-specific losses to route gradients to their corresponding partitions. On the Corpus of Everyday Japanese Conversation (CEJC), MOSAIC improves average macro-F1 by 7.4 points across four tasks with a 72% reduction in backbone parameters relative to a fusion-based baseline. Our results demonstrate that modality partitioning yields consistent gains across tasks while requiring far fewer backbone parameters than a fusion-based design.
