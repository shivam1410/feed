---
title: "BusemannFormer: Horospherical Self-Attention for Hyperbolic Graph Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27167"
authors: ["Youheng Yao, Ziyao Zeng, Wenbo Liao, Tianqi Wang"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.27167v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Hyperbolic neural networks excel on hierarchical graph data, yet existing hyperbolic Transformers largely adapt conventional attention without explicitly exploiting the ideal boundary, a geometric structure closely tied to tree hierarchy. We propose Horospherical Self-Attention (HSA): each query selects an ideal-boundary direction and scores keys by their Busemann depth along that direction, yielding a token-to-token hyperbolic attention kernel. We establish a flat-limit connection to dot-product attention, characterize score level sets as horospheres, and bound key-side gradients. HSA is integrated into BusemannFormer, a fully hyperbolic graph Transformer, with a log-depth variant that uses query depth to modulate attention concentration. We further introduce a finite-boundary-dictionary extension supporting linear-complexity global attention. Experiments on hierarchical and citation graphs show that BusemannFormer-LD outperforms the evaluated baselines on several node-classification benchmarks and achieves competitive performance across diverse graph structures.
