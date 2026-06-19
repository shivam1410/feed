---
title: "LOKI: Memory-Free Null-Space Constrained Lifelong Knowledge Editing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19679"
authors: ["Masih Eskandar, Miquel Sirera Perell\\'o, Stratis Ioannidis, Jennifer Dy"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.19679v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19679v1 Announce Type: new Abstract: Lifelong knowledge editing aims to efficiently and sequentially update language models over time, as new knowledge becomes available or when the model makes mistakes, while preserving acceptable performance on past knowledge. One unresolved challenge is that existing methods modify a fixed set of layers for all new knowledge samples, reducing flexibility and increasing catastrophic forgetting. Another is requiring access to previous knowledge and extensive pre-processing to obtain data statistics. To address these challenges, we introduce LOKI, a novel approach that uses dynamic layer selection based on the Hilbert-Schmidt Independence Criterion and projects gradient updates onto the null-space of the model weights, bypassing the requirement for previous knowledge access. We show that LOKI achieves superior performance to existing approaches across a wide variety of experiments, achieving up to a 14\% improvement in average accuracy.
