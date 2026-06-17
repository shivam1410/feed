---
title: "Probing, Fusion, and Trustworthiness: A Systematic Evaluation of Foundation Model Representations for Multimodal Cancer Analysis"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17115"
authors: ["Jingyu Hu, Giuseppe Tripodi, Reed Naidoo, Sarah F. McGough, Tapabrata Chakraborti"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.17115v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17115v1 Announce Type: new Abstract: Foundation models (FMs) have emerged as powerful representation extractors for medical data, yet their generalizability to datasets under distribution shift remains underexplored. This work systematically evaluates FM-based representations on a suite of computational pathology tasks across two real-world commercial cohorts, IH-BC and IH-NSCLC, drawn from the licensed in-house (IH) oncology dataset. The analysis focuses on two modalities, whole-slide images and transcriptomic profiles, drawn from the IH multimodal data. We first benchmark unimodal probing performance across five FMs on eight downstream classification tasks, and find that image and omics representations carry complementary predictive signals. Then we investigate whether multimodal fusion can yield additional gains over unimodal baselines by comparing three image-omics fusion strategies built on paired representations. The trustworthiness of selected unimodal and multimodal pipelines is further assessed through conformal prediction. Our results show that FM representations achieve competitive performance on out-of-distribution data and that multimodal fusion helps mainly when no single modality dominates the signal. Conformal prediction reveals that in the majority of cases where a point prediction fails, the true diagnosis remains recoverable within the prediction set, reinforcing the value of uncertainty-aware inference for clinical support.
