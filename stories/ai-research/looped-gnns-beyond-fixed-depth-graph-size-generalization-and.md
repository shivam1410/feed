---
title: "Looped GNNs Beyond Fixed Depth: Graph Size Generalization and Parameter-Efficient Adaptation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24112"
authors: ["Zhiyang Wang, Zhishang Luo, Yusu Wang"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.24112v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Generalizing from small graphs to larger ones can require computation beyond the depth of a neural model used during training. We study target tasks that admit a common local iterative computation and whose effective dependency radius grows with graph size. The central idea is to learn a local update rule through GNN pretraining, then repeatedly apply the same learned processor beyond the training depth to extend information reach on larger graphs without retraining. Calling such parameter-shared architecture a \emph{looped GNN}, we categorize six schemes for looped GNNs to separate the effects of depth extension, fine-tuning, and freeze-and-steer adaptation. Our analysis establishes fixed-depth information limits and sufficient conditions under which accurate iterative reuse overcomes them. To improve beyond unadapted reuse, we introduce \emph{Loop-Freeze-Steer} (LFS), which freezes the pretrained processor and learns a small controller to steer its repeated application, using much fewer trainable parameters than full fine-tuning. Our finite-sample analysis gives sufficient conditions for adaptation to improve performance on larger graphs. Experiments on synthetic tasks and chip placement evaluate depth extension and adaptation, highlighting LFS's accuracy--trainable-parameter trade-off for size generalization.
