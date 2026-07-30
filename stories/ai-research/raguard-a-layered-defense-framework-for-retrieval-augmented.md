---
title: "RAGuard: A Layered Defense Framework for Retrieval-Augmented Generation Systems Against Data Poisoning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26339"
authors: ["Pushkal Kumar, Tucker Nielson, Tanish Kolhe, Shubham Zala, Vincent Li"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 77
guid: "oai:arXiv.org:2607.26339v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

RAGuard defends RAG systems against corpus poisoning attacks through two layers. The first adversarially fine-tunes the dense retriever on synthetic poisoned documents. The second, Zero-Knowledge Inference Patch (ZKIP), is a label-free black-box filter evaluating documents by semantic shift and output-entropy change when removed. ZKIP requires no poison labels, ground-truth answers, or model access. On poisoned Natural Questions at 5-30% poison ratios, ZKIP drives measured attack success rate to 0.000 in every defended configuration while keeping Recall@5 within 0.03 of clean-corpus baseline.
