---
title: "Efficient Architecture Search under Leave-One-Subject-Out Evaluation"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21457"
authors: ["Heinke Hihn, Friedhelm Schwenker"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.21457v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21457v1 Announce Type: new Abstract: Deep neural architectures are widely used for signal processing in automated pain assessment systems. However, architecture design has remained largely a manual task despite the potential efficiency benefits of Neural Architecture Search (NAS). Embedding NAS in a Leave-One-Subject-Out (LOSO) evaluation is computationally demanding because a fully nested implementation requires $N$ independent architecture searches and, assuming approximately linear training cost, scales as $\mathcal{O}(N^2)$. We propose a block-based, leakage-controlled approach that shares NAS runs between subjects, reducing the number of searches from $N$ to $B$, where $B \ll N$, dubbed PainNAS. On the BioVid Heat Pain dataset, PainNAS yields comparable subject-level accuracy with substantially fewer parameters and FLOPs.
