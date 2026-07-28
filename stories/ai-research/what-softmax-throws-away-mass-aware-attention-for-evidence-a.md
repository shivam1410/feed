---
title: "What Softmax Throws Away: Mass-Aware Attention for Evidence Accumulation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22781"
authors: ["Minwoo Yu, Young-guk Ha"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 51
guid: "oai:arXiv.org:2607.22781v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22781v1 Announce Type: new Abstract: High task performance does not show whether a model retains prediction-relevant structural information in its internal representation. Temporal graph models, for example, can achieve high future-link AUC while basic graph statistics remain difficult to recover from the same representation. We identify one source of this gap in the weighted averaging used by standard attention: when an evidence pattern is repeated, the numerator and denominator grow at the same rate, so inputs with different amounts of accumulated evidence can produce the same aggregate. We propose Mass-Aware Attention (MAA), which generalizes standard L1 normalization to an Lp family. Under repetition, MAA makes the numerator and denominator scale at different rates, retaining the effective number of contributing inputs in the representation magnitude. It adds no supervision, parameters, hidden dimensions, or explicit count features, and recovers standard attention at p=1. Across four continuous-time dynamic graph models and three datasets, MAA improves future-link AUC in 11 of 12 model-dataset cells. Linear recovery from the same hidden representation increases by 4.49% on average, and preferential-attachment recovery improves in all 12 cells after family-wise correction. We also observe consistent evidence in marked temporal point processes, temporal knowledge graphs, retrieval-augmented generation, and spatio-temporal point processes. Information accessibility and task utility remain distinct: NLL improves in MTPP, ranking is largely preserved in TKG, additional information in RAG does not improve the diagnostic head, and downstream LayerNorm can erase the signal in STPP. These results position MAA as a general normalization principle for improving predictor-facing representation informativeness by controlling repetition invariance in standard attention.
