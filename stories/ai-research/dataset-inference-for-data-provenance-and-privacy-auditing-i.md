---
title: "Dataset Inference for Data Provenance and Privacy Auditing in Tabular Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24278"
authors: ["Dariush Wahdany (CISPA Helmholtz Center for Information Security), Jesse Cresswell (Layer 6 AI), Naiqing Guan (Layer 6 AI), Atiyeh Ashari Ghomi (Layer 6 AI), Franziska Boenisch (CISPA Helmholtz Center for Information Security), Adam Dziedzic (CISPA Helmholtz Center for Information Security)"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 28
guid: "oai:arXiv.org:2610.24278v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Tabular foundation models (TFMs) are increasingly deployed through black-box APIs and trained on large collections of real-world tabular datasets. As this training paradigm becomes more widely adopted, private or proprietary datasets may be incorporated into pre-training corpora, yet there are currently no dedicated methods for determining whether a given tabular dataset was used to train a TFM. As a solution, we introduce the first dataset inference method for TFMs, aiming to infer whether a suspect dataset was part of a model's pre-training data. We systematically analyze a broad collection of candidate signals that can be observed from a black-box TFM via input manipulation and find that individual signals provide only weak evidence of training data membership. However, by combining multiple complementary signals, we can infer dataset membership for several state-of-the-art TFMs trained on real tabular data, achieving up to 0.99 ROCAUC dependent on the TFM. We then study factors that influence dataset identification, including pre-training data composition, model capacity, and the use of real vs. synthetic data. Our results show that our dataset inference method is a practical auditing tool for detecting privacy leakage and the use of proprietary datasets in TFMs.
