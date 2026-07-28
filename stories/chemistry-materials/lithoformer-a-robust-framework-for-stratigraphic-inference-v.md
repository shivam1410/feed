---
title: "LithoFormer: A Robust Framework for Stratigraphic Inference via Transformers"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22804"
authors: ["Shwetha Salimath, Francesca Bugiotti, Sylvain Wlodarczyk, Sohaib Ouzineb"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.22804v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22804v1 Announce Type: new Abstract: Accurate geological characterization of subsurface reservoirs from well log data is essential to support projects such as carbon capture and storage (CCS), geothermal development, and extraction of natural resources. Existing automated techniques for geological characterization primarily use sliding-window classification, which limits their ability to understand broader geological contexts, often leading to misaligned formation layers. To overcome these limitations, we introduce LithoFormer, a robust framework for stratigraphic inference using a Seq2Seq transformer model that ingests entire multivariate well logs in a single pass. The framework utilizes a channel-independent PatchTST backbone enhanced with rotary positional embeddings (RoPE) to capture long-range geological dependencies across entire multivariate well logs. A decoupled multi-task head is employed to jointly predict geological zonation and precise boundary probabilities, while a geology-informed loss function enforces physical constraints such as the Law of Superposition. Validated and deployed on three real-world datasets, LithoFormer demonstrates a 90% reduction in median boundary error and eliminates stratigraphic order violations compared to traditional sliding-window baselines. It also achieves a 80% reduction in manual expert labor and eliminates stratigraphic inconsistencies, providing a scalable and reliable solution for large-scale subsurface modeling.
