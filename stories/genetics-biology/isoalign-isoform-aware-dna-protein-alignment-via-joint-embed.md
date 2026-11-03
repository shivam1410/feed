---
title: "IsoAlign: Isoform-Aware DNA-Protein Alignment via Joint-Embedding Predictive Architectures"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00241"
authors: ["Niousha Sadjadi, Arman Seyed-Ahmadi, Tony Tu, Micaela Elisa Consens, Kerr Ding, Alif Munim, Lila Kari, Zehui Li, Barry B. Rubin, Bo Wang, Vallijah Subasri"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 50
guid: "oai:arXiv.org:2611.00241v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Genomic foundation models (GFMs) have emerged as a powerful paradigm for learning DNA sequence representations, yet existing self-supervised pretraining strategies overlook alternative splicing and underperform compared to specialized models. To address this gap, we introduce IsoAlign, a multimodal framework that grounds genomic pretraining in isoform-aware DNA-protein alignment to learn biologically meaningful representations. IsoAlign aligns transcripts to their corresponding protein isoforms, capturing both coding sequences and broader regulatory contexts, using two Joint-Embedding Predictive Architectures (JEPA): DNA-Protein JEPA (DP-JEPA), which predicts protein representations from DNA using contrastive alignment, and Isoform-Masked JEPA (IM-JEPA), which models relationships among alternative isoforms of the same gene through masked protein prediction. We evaluate the learned DNA representations of these architectures across a multi-metric evaluation suite spanning tasks, including the prediction of pathogenicity, fitness, gene expression, and TF binding. Our results demonstrate that isoform-aware cross-modal alignment using JEPA significantly improves functional representations and downstream performance, establishing a promising direction for GFM pretraining.
