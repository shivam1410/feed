---
title: "Scaling Novel Graph Generation via Lightweight Structure-Guided Autoregressive Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04287"
authors: ["Alessio Barboni, Massimiliano Lupo Pasini, Bishal Lakha, Edoardo Serra"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.04287v1"
image: ""
generated: "2026-06-05T02:55:12+05:30"
---

arXiv:2606.04287v1 Announce Type: new Abstract: Generating realistic and diverse graphs is a key problem in machine learning, with applications in molecular discovery, circuit design, cybersecurity, and beyond. However, current graph generative models remain limited by scalability and novelty. Diffusion-based methods often require costly full-adjacency operations and long denoising chains, while many autoregressive and hybrid models have at least quadratic complexity. In addition, these models often imitate training graphs rather than generalize beyond them. We propose a lightweight autoregressive framework to address these issues. It uses a structure-guided topological ordering to serialize graphs into regular edge sequences, enabling near log-linear generation, and a two-phase training strategy that combines exploration-oriented augmentation with iterative refinement to reduce overfitting and promote controlled novelty. Experiments on molecular and non-molecular benchmarks show that our approach improves novelty while preserving high validity and uniqueness. The framework also supports both LSTM and Mamba-style causal sequence backbones, with large-memory accelerators enabling longer graph-sequence experiments beyond typical GPU limits.
