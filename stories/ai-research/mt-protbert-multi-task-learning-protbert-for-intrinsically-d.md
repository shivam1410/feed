---
title: "MT-ProtBERT: Multi-task Learning ProtBERT for Intrinsically Disordered Proteins Classification with Scarce Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25334"
authors: ["Jian Sun, Kingshuk Ghosh, Lilianna Houston, Mohammad H. Mahoor"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.25334v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25334v1 Announce Type: new Abstract: Intrinsically disordered proteins (IDPs) differ from folded proteins in that they are dynamic, lack a stable three-dimensional conformation, and have low sequence similarity between similar proteins. The conformational heterogeneity of IDPs - while beneficial for their diverse functions - limits the use of traditional experimental tools to determine their conformation. The experimental difficulty, along with low sequence similarity, results in data scarcity, and makes it difficult to classify/detect IDPs that are similar or dissimilar, a task relevant to understand biology and evolution. We address this challenge using Multi-task ProtBERT (MT-ProtBERT), a multi-task extension of ProtBERT tailored for low-data regimes. MT-ProtBERT integrates Dynamic Window Masking, a Multi-Scale 1D Convolutional classifier (MS-Conv1D), and auxiliary objectives that jointly optimize masked language modeling and biochemistry-informed tasks. We evaluate this framework on two tasks under limited data: (i) phosphorylation site prediction (S/T/Y) in short sequences and small datasets, and (ii) protein compaction prediction on two small datasets (684 and 530 sequences), including sequences comparable in length to typical disordered regions. MT-ProtBERT consistently outperforms PARROT, an RNN-based IDP-specific model, across all tasks. These results demonstrate that combining self-supervised and biochemistry-informed tasks, and multi-scale learning enables robust modeling of unstructured proteins under data scarcity.
