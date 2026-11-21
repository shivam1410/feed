---
title: "Protein Functional Semantic Alignment via Representation Rectification"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25396"
authors: ["Chuyang Zhou, Bingxin Zhou, Andi Han, Chang Xu"]
date: "Sat, 21 Nov 2026 00:00:00 -0500"
score: 60
guid: "oai:arXiv.org:2611.25396v1"
image: ""
generated: "2026-11-21T19:04:16+05:30"
---

Protein language models (PLMs) are commonly pretrained with likelihood-based objectives such as masked language modeling or denoising. These objectives capture sequence-level regularities, but can produce representations in which functional signals are entangled with non-functional variation (e.g., sequence identity, compositional bias, and frequent local motifs), creating a readout bottleneck for downstream function prediction. We introduce Functional Semantic Alignment via Representation Rectification (SAVR), a contrastive post-training method using Pfam family co-membership as a homology-guided discrete semantic signal to reshape PLM representations. SAVR reduces directional dominance and redistributes variance across embedding dimensions, decreasing variance concentration, and increasing effective dimensionality of the embedding covariance spectrum. Without observing any task-specific labels during post-training, SAVR achieves state-of-the-art results on Enzyme Commission (EC) benchmarks and competitive results on Gene Ontology (GO) benchmarks under frozen-backbone evaluation. These results suggest that homology-guided contrastive post-training can rectify PLM representation geometry and improve sequence-based protein function prediction.
